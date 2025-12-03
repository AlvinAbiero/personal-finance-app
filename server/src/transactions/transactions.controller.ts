import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { FilterTransactionsDto } from './dto/filter-transaction.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { HelperUtils } from 'src/utils/helpers';

@Controller('transactions')
@UseGuards(JwtAuthGuard)
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Post()
  async(
    @CurrentUser() userId: string,
    @Body() createTransactionDto: CreateTransactionDto,
  ) {
    return this.transactionsService.createTransaction(
      userId,
      createTransactionDto,
    );
  }

  @Get()
  async getTransactions(
    @CurrentUser() userId: string,
    @Query() filterDto: FilterTransactionsDto,
  ) {
    return this.transactionsService.getTransactions(userId, filterDto);
  }

  @Get('stats')
  async getStats(@CurrentUser() userId: string) {
    const monthStart = HelperUtils.getMonthStart();
    const monthEnd = HelperUtils.getMonthEnd();
    return this.transactionsService.getTransactionStats(
      userId,
      monthStart,
      monthEnd,
    );
  }

  @Get('last')
  async getLastTransaction(
    @CurrentUser() userId: string,
    @Query('limit') limit: string = '5',
  ) {
    return this.transactionsService.getLastTransactions(
      userId,
      parseInt(limit),
    );
  }

  @Get(':id')
  getTransaction(
    @CurrentUser() userId: string,
    @Param('id') transactionId: string,
  ) {
    return this.transactionsService.getTransactionById(userId, transactionId);
  }

  @Put(':id')
  updateTransaction(
    @CurrentUser() userId: string,
    @Param('id') transactionId: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionsService.updateTransaction(
      userId,
      transactionId,
      updateTransactionDto,
    );
  }

  @Delete(':id')
  async deleteTransaction(
    @CurrentUser() userId: string,
    @Param('id') transactionId: string,
  ) {
    return this.transactionsService.deleteTransaction(userId, transactionId);
  }
}
