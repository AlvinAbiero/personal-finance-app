import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from 'prisma/generated/prisma/client/client';
import { Prisma } from 'prisma/generated/prisma/client/client';

// Define the select/include type once
const transactionInclude = {
  category: true,
  sender: {
    select: {
      id: true,
      name: true,
      email: true,
      accountId: true,
    },
  },
  recipient: {
    select: {
      id: true,
      name: true,
      email: true,
      accountId: true,
    },
  },
  recurringBill: true,
} satisfies Prisma.TransactionInclude;

type TransactionWithRelations = Prisma.TransactionGetPayload<{
  include: typeof transactionInclude;
}>;

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async createTransaction(
    userId: string,
    createTransactionDto: CreateTransactionDto,
  ): Promise<TransactionWithRelations> {
    const transaction = await this.prisma.transaction.create({
      data: {
        userId,
        type: createTransactionDto.type,
        amount: createTransactionDto.amount,
        description: createTransactionDto.description,
        contactName: createTransactionDto.contactName,
        date: createTransactionDto.date
          ? new Date(createTransactionDto.date)
          : new Date(),
        isRecurring: createTransactionDto.isRecurring || false,
        frequency: createTransactionDto.frequency,
        avatar: createTransactionDto.avatar,
        categoryId: createTransactionDto.categoryId,
        senderId: createTransactionDto.senderId,
        recipientId: createTransactionDto.recipientId,
        recurringBillId: createTransactionDto.recurringBillId,
      },
      include: transactionInclude,
    });

    // If transaction is an expense, update budget spent
    if (transaction.type === 'EXPENSE' && transaction.categoryId) {
      await this.updateBudgetSpent(userId, transaction.categoryId);
    }

    return transaction;
  }
}
