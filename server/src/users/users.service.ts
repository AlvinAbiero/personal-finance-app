import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UpdatePreferencesDto } from './dto/update-preference.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUserProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        currency: true,
        language: true,
        notificationsEnabled: true,
        alertThreshold: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async updateProfile(userId: string, updateProfileDto: UpdateProfileDto) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: updateProfileDto,
      select: {
        id: true,
        email: true,
        name: true,
        currency: true,
        language: true,
        notificationsEnabled: true,
        alertThreshold: true,
      },
    });

    return user;
  }

  async updatePreferences(
    userId: string,
    updatePreferencesDto: UpdatePreferencesDto,
  ) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: updatePreferencesDto,
      select: {
        id: true,
        notificationsEnabled: true,
        alertThreshold: true,
      },
    });

    return user;
  }

  async deleteAccount(userId: string) {
    // Soft delete - could be enhanced to anonymize data
    await this.prisma.user.delete({
      where: { id: userId },
    });

    return { message: 'Account deleted successfully' };
  }

  async getUserStats(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Get total transactions
    const totalTransactions = await this.prisma.transaction.count({
      where: { userId },
    });

    //  Get total income
    const incomeData = await this.prisma.transaction.aggregate({
      where: { userId, amount: { gt: 0 } },
      _sum: { amount: true },
    });

    // Get total expenses
    const expenseData = await this.prisma.transaction.aggregate({
      where: { userId, amount: { lt: 0 } },
      _sum: { amount: true },
    });

    // Get budgets count
    const budgetsCount = await this.prisma.budget.count({
      where: { userId },
    });

    // Get pots count
    const billsCount = await this.prisma.bill.count({
      where: { userId },
    });

    //  Get bills count
    const billsCount = await this.prisma.bill.count({
      where: { userId },
    });

    return {
      totalTransactions,
      totalIncome: incomeData._sum.amount || 0,
      totalExpenses: Math.abs(expenseData._sum.amount || 0),
      balance: (incomeData._sum.amount || 0) + (expenseData._sum.amount || 0),
      budgetsCount,
      potsCount,
      billsCount,
    };
  }
}
