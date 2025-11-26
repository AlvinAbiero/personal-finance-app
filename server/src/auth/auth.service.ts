import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../email/email.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { PasswordRecoveryDto } from './dto/password-recovery.dto';
import { ResetPasswordDto } from './dto/password-recovery.dto';
import { HelperUtils } from '../utils/helpers';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private emailService: EmailService,
  ) {}

  async register(registerDto: RegisterDto): Promise<void> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email is already in use');
    }

    const hashedPassword = await HelperUtils.hashPassword(registerDto.password);

    const user = await this.prisma.user.create({
      data: {
        email: registerDto.email,
        password: hashedPassword,
        name: registerDto.name,
        currency: registerDto.currency,
        language: registerDto.language,
      },
    });

    const tokens = this.generateTokens(user.id, user.email);

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        currency: user.currency,
        language: user.language,
      },
      tokens,
    };
  }

  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: loginDto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await HelperUtils.comparePasswords(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const tokens = this.generateTokens(user.id, user.email);

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        currency: user.currency,
        language: user.language,
      },
      ...tokens,
    };
  }

  refreshToken(userId: string, email: string) {
    const tokens = this.generateTokens(userId, email);
    return tokens;
  }

  async requestPasswordRecovery(passwordRecoveryDto: PasswordRecoveryDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: passwordRecoveryDto.email },
    });

    if (!user) {
      return { message: 'If email exists, recovery link has been sent' };
    }

    // Invalidate previous recovery tokens
    await this.prisma.passwordRecovery.updateMany({
      where: { userId: user.id },
      data: { used: true },
    });

    // Generate recovery token
    const token = HelperUtils.generateRandomToken();
    const tokenExpiration = this.configService.get<string>(
      'PASSWORD_RECOVERY_TOKEN_EXPIRATION',
      '3600',
    );
    const expiresAt = new Date(Date.now() + parseInt(tokenExpiration) * 1000);

    await this.prisma.passwordRecovery.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    // Send recovery email
    const recoveryLink = `${this.configService.get('FRONTEND_URL')}/reset-password?token=${token}`;
    await this.emailService.sendPasswordRecoveryEmail(
      user.email,
      recoveryLink,
      user.name,
    );

    return { message: 'If email exists, recovery link has been sent' };
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    const recovery = await this.prisma.passwordRecovery.findUnique({
      where: { token: resetPasswordDto.token },
      include: { user: true },
    });

    if (!recovery || recovery.used || recovery.expiresAt < new Date()) {
      throw new BadRequestException('Invalid or expired recovery token');
    }

    const hashedPassword = await HelperUtils.hashPassword(
      resetPasswordDto.newPassword,
    );

    // Update password
    await this.prisma.user.update({
      where: { id: recovery.userId },
      data: { password: hashedPassword },
    });

    // Mark token as used
    await this.prisma.passwordRecovery.update({
      where: { token: resetPasswordDto.token },
      data: { used: true },
    });

    return { message: 'Password reset successfully' };
  }

  logout() {
    return { message: 'Logged out successfully' };
  }

  async getProfile(
    userId: string,
  ): Promise<{ id: string; email: string; name: string; currency: string }> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        currency: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  private generateTokens(userId: string, email: string) {
    const accessToken = this.jwtService.sign(
      { sub: userId, email },
      {
        secret: this.configService.get('JWT_SECRET'),
        expiresIn: this.configService.get('JWT_EXPIRATION'),
      },
    );

    const refreshToken = this.jwtService.sign(
      { sub: userId, email },
      {
        secret: this.configService.get('REFRESH_TOKEN_SECRET'),
        expiresIn: this.configService.get('REFRESH_TOKEN_EXPIRATION'),
      },
    );

    return { accessToken, refreshToken };
  }
}
