import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDetector } from './helpers/category-detector';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { FilterTransactionsDto } from './dto/filter-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Prisma } from 'prisma/generated/prisma/client/client';
import { Transaction, Category } from 'prisma/generated/prisma/client/client';

@Injectable()
export class TransactionsService {
  private readonly categoryDetector: CategoryDetector;

  constructor(private readonly prisma: PrismaService) {
    this.categoryDetector = new CategoryDetector();
  }

  // ---------------- CREATE TRANSACTION ----------------
  async createTransaction(
    userId: string,
    createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    let categoryName: string | undefined = createTransactionDto.category;

    // Auto-detect category from contactName if missing
    if (!categoryName && createTransactionDto.contactName) {
      categoryName = this.categoryDetector.detectCategory(
        createTransactionDto.contactName,
      );
    }

    // Default fallback
    if (!categoryName) categoryName = 'General';

    // Look up category by name
    let category: Category | null = await this.prisma.category.findUnique({
      where: { name: categoryName },
    });

    // Auto-create category if missing
    if (!category) {
      category = await this.prisma.category.create({
        data: { name: categoryName },
      });
    }

    // Create transaction with correct Prisma relation type
    const transaction = await this.prisma.transaction.create({
      data: {
        userId,
        amount: createTransactionDto.amount,
        description: createTransactionDto.description,
        contactName: createTransactionDto.contactName,
        date: new Date(createTransactionDto.date),
        isRecurring: createTransactionDto.isRecurring ?? false,
        frequency: createTransactionDto.frequency,
        avatar: createTransactionDto.avatar,
        category: { connect: { id: category.id } },
      },
    });

    return transaction;
  }

  // ---------------- GET MULTIPLE TRANSACTIONS ----------------
  async getTransactions(
    userId: string,
    filterDto: FilterTransactionsDto,
  ): Promise<{
    data: Transaction[];
    pagination: { page: number; limit: number; total: number; pages: number };
  }> {
    const {
      dateFrom,
      dateTo,
      category,
      minAmount,
      maxAmount,
      searchTerm,
      page = 1,
      limit = 10,
      sortBy = 'date',
      sortOrder = 'desc',
    } = filterDto;

    const where: Prisma.TransactionWhereInput = { userId };

    // Date filtering
    if (dateFrom || dateTo) {
      where.date = {};
      if (dateFrom) where.date.gte = new Date(dateFrom);
      if (dateTo) {
        const endDate = new Date(dateTo);
        endDate.setHours(23, 59, 59, 999);
        where.date.lte = endDate;
      }
    }

    // Category filtering
    if (category) {
      where.category = { name: category };
    }

    // Amount filtering
    if (minAmount !== undefined || maxAmount !== undefined) {
      where.amount = {};
      if (minAmount !== undefined) where.amount.gte = minAmount;
      if (maxAmount !== undefined) where.amount.lte = maxAmount;
    }

    // Search term
    if (searchTerm) {
      where.OR = [
        { contactName: { contains: searchTerm, mode: 'insensitive' } },
        { description: { contains: searchTerm, mode: 'insensitive' } },
      ];
    }

    const skip = (page - 1) * limit;

    const total = await this.prisma.transaction.count({ where });

    const transactions = await this.prisma.transaction.findMany({
      where,
      orderBy: { [sortBy]: sortOrder },
      skip,
      take: limit,
    });

    return {
      data: transactions,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  }

  // ---------------- GET SINGLE TRANSACTION ----------------
  async getTransactionById(
    userId: string,
    transactionId: string,
  ): Promise<Transaction> {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id: transactionId },
    });

    if (!transaction || transaction.userId !== userId) {
      throw new NotFoundException('Transaction not found');
    }

    return transaction;
  }

  // ---------------- UPDATE TRANSACTION ----------------
  async updateTransaction(
    userId: string,
    transactionId: string,
    updateTransactionDto: UpdateTransactionDto,
  ): Promise<Transaction> {
    const transaction = await this.getTransactionById(userId, transactionId);

    const data: Prisma.TransactionUpdateInput = {
      ...updateTransactionDto,
      date: updateTransactionDto.date
        ? new Date(updateTransactionDto.date)
        : transaction.date,
    };

    const updated = await this.prisma.transaction.update({
      where: { id: transactionId },
      data,
    });

    return updated;
  }

  // ---------------- DELETE TRANSACTION ----------------
  async deleteTransaction(userId: string, transactionId: string) {
    await this.getTransactionById(userId, transactionId);

    await this.prisma.transaction.delete({
      where: { id: transactionId },
    });

    return { message: 'Transaction deleted successfully' };
  }

  // ---------------- TRANSACTION STATS ----------------
  async getTransactionStats(userId: string, dateFrom?: Date, dateTo?: Date) {
    const where: Prisma.TransactionWhereInput = { userId };

    if (dateFrom || dateTo) {
      where.date = {};
      if (dateFrom) where.date.gte = dateFrom;
      if (dateTo) where.date.lte = dateTo;
    }

    const incomeData = await this.prisma.transaction.aggregate({
      where: { ...where, amount: { gt: 0 } },
      _sum: { amount: true },
      _count: true,
    });

    const expenseData = await this.prisma.transaction.aggregate({
      where: { ...where, amount: { lt: 0 } },
      _sum: { amount: true },
      _count: true,
    });

    const byCategory = await this.prisma.transaction.groupBy({
      by: ['categoryId'],
      where,
      _sum: { amount: true },
      _count: true,
    });

    return {
      totalIncome: incomeData._sum.amount ?? 0,
      totalExpenses: Math.abs(expenseData._sum.amount ?? 0),
      incomeTransactions: incomeData._count ?? 0,
      expenseTransactions: expenseData._count ?? 0,
      byCategory: byCategory.map((cat) => ({
        categoryId: cat.categoryId,
        total: cat._sum.amount ?? 0,
        count: cat._count ?? 0,
      })),
    };
  }

  // ---------------- LAST TRANSACTIONS ----------------
  async getLastTransactions(userId: string, limit = 5): Promise<Transaction[]> {
    return this.prisma.transaction.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
      take: limit,
    });
  }
}
