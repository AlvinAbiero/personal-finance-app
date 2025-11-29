import { Controller, Get, Query } from '@nestjs/common';
import { GuestService } from './guest.service';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('guest')
export class GuestController {
  constructor(private guestService: GuestService) {}

  @Public()
  @Get('data')
  getGuestData(): any {
    return this.guestService.getGuestData();
  }

  @Public()
  @Get('balance')
  getGuestBalance() {
    return this.guestService.getGuestBalance();
  }

  @Public()
  @Get('transactions')
  getGuestTransactions(
    @Query('limit') limit: string = '10',
    @Query('page') page: string = '1',
  ) {
    return this.guestService.getGuestTransactions(
      parseInt(limit),
      parseInt(page),
    );
  }

  @Public()
  @Get('budgets')
  getGuestBudgets() {
    return this.guestService.getGuestBalance();
  }

  @Public()
  @Get('pots')
  getGuestPots() {
    return this.guestService.getGuestPots();
  }

  @Public()
  @Get('dashboard')
  getGuestDashboard() {
    return this.guestService.getGuestDashboard();
  }
}
