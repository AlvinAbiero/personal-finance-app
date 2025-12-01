import { Injectable } from '@nestjs/common';
import { CategoryDetector } from './helpers/category-detector';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  private categoryDetector: CategoryDetector;

  constructor(private prisma: PrismaService) {
    this.categoryDetector = new CategoryDetector();
  }

  async createTransaction(
    userId: string,
    createTransactionDto: CreateTransactionDto,
  ) {
    let category = createTransactionDto.category;
    if (!category && createTransactionDto.contactName) {
      category = this.categoryDetector.detectCategory(
        createTransactionDto.contactName,
      );
    }

    const transaction = await this.prisma.transaction.create({
      data: {
        userId,
        amount: createTransactionDto.amount,
        category: category || 'General',
        description: createTransactionDto.description,
        contactName: createTransactionDto.contactName,
        date: new Date(createTransactionDto.date),
        isRecurring: createTransactionDto.isRecurring || false,
        frequency: createTransactionDto.frequency,
        avatar: createTransactionDto.avatar,
      },
    });

    return transaction;
  }
}
