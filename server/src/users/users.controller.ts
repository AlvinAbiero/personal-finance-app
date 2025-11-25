import { Controller, Get, Put, Delete, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UpdatePreferencesDto } from './dto/update-preferences.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guards';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('profile')
  async getProfile(@CurrentUser() user: any) {
    return this.usersService.getUserProfile(user.userId);
  }

  @Get('stats')
  async getStats(@CurrentUser() user: any) {
    return this.usersService.getUserStats(user.userId);
  }

  @Put('profile')
  async updateProfile(
    @CurrentUser() user: any,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.usersService.updateProfile(user.userId, updateProfileDto);
  }

  @Put('preferences')
  async updatePreferences(
    @CurrentUser() user: any,
    @Body() updatePreferencesDto: UpdatePreferencesDto,
  ) {
    return this.usersService.updatePreferences(
      user.userId,
      updatePreferencesDto,
    );
  }

  @Delete('account')
  async deletAccount(@CurrentUser() user: any) {
    return this.usersService.deleteAccount(user.userId);
  }

  @Get('health')
  health() {
    return { status: 'User service is healthy' };
  }
}
