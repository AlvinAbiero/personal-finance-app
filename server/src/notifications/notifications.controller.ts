import {
  Controller,
  Get,
  Patch,
  Delete,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';

import { NotificationsService } from './notifications.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';

@Controller('notifications')
@UseGuards(JwtAuthGuard)
export class NotificationsController {
  constructor(private notificationsService: NotificationsService) {}

  @Get()
  async getNotifications(
    @CurrentUser('id') userId: string,
    @Query('limit') limit: string = '20',
  ) {
    return this.notificationsService.getUserNotifications(
      userId,
      parseInt(limit),
    );
  }
}
