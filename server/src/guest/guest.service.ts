import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

interface MockData {
  balance: {
    current: number;
    income: number;
    expenses: number;
  };
  transactions: Array<{
    avatar: string;
    name: string;
    category: string;
    date: string;
    amount: number;
    isRecurring: boolean;
  }>;
  budgets: Array<{
    category: string;
    maximum: number;
    theme: string;
  }>;
  pots: Array<{
    name: string;
    target: number;
    total: number;
    theme: string;
  }>;
}

@Injectable()
export class GuestService {
  private readonly logger = new Logger(GuestService.name);
  private mockData: MockData;

  constructor() {
    this.loadMockData();
  }

  private loadMockData() {
    try {
      const mockDataPath = path.join(
        __dirname,
        '../guest/fixtures/mock-data.json',
      );

      const rawData = fs.readFileSync(mockDataPath, 'utf-8');
      this.mockData = JSON.parse(rawData) as MockData;
      this.logger.log('Mock data loaded successfully');
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';
      this.logger.error(`Failed to load mock data: ${errorMessage}`);

      // Fallback to minimal data if file not found
      this.mockData = {
        balance: { current: 4836.0, income: 3814.25, expenses: 1700.5 },
        transactions: [],
        budgets: [],
        pots: [],
      };
    }
  }

  getGuestData(): MockData {
    return this.mockData;
  }

  getGuestBalance() {
    return this.mockData.balance;
  }

  getGuestTransactions(limit: number = 10, page: number = 1) {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex * limit;

    return {
      data: this.mockData.transactions.slice(startIndex, endIndex),
      total: this.mockData.transactions.length,
      page,
      limit,
      pages: Math.ceil(this.mockData.transactions.length / limit),
    };
  }

  getGuestBudgets() {
    return this.mockData.budgets;
  }

  getGuestPots() {
    return this.mockData.pots;
  }

  getGuestDashboard() {
    return {
      balance: this.mockData.balance,
      transactions: this.mockData.transactions.slice(0, 3),
      budgets: this.mockData.budgets,
      pots: this.mockData.pots,
    };
  }
}
