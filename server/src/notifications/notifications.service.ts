import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(private prisma: PrismaService) {}

  async createNotification(
    userId: string,
    title: string,
    message: string,
    type: 'BUDEGET_ALERT' | 'BILL_REMINDER' | 'RECURRING_DETECTED',
    link?: string,
  ) {
    try {
      const notification = await this.prisma.notification.create({
        data: {
          userId,
          title,
          message,
          type,
          link,
        },
      });

      this.logger.log(`Notification created for user ${userId} : ${type}`);
      return notification;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';
      this.logger.error(
        `Failed to create notification for user ${userId} : ${errorMessage}`,
      );
      throw error;
    }
  }

  async getUserNotifications(userId: string, limit: number = 20) {
    const notifications = await this.prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });

    return notifications;
  }

  async getUnreadNotifications(userId: string) {
    const notifications = await this.prisma.notification.findMany({
      where: { userId, isRead: false },
      orderBy: { createdAt: 'desc' },
    });

    return notifications;
  }

  async markAsRead(userId: string, notificationId: string) {
    const notification = await this.prisma.notification.update({
      where: { id: notificationId },
      data: { isRead: true },
    });

    return notification;
  }

  async markAllAsRead(userId: string) {
    const result = await this.prisma.notification.updateMany({
      where: { userId, isRead: false },
      data: { isRead: true },
    });

    this.logger.log(
      `Marked ${result.count} notifications as read for user ${userId}`,
    );

    return result;
  }

  async deleteNotification(userId: string, notificationId: string) {
    await this.prisma.notification.delete({
      where: { id: notificationId },
    });

    return { message: 'Notification deleted successfully' };
  }

  async clearOldnotifications(userId: string, daysOld: number = 30) {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysOld);

    const result = await this.prisma.notification.deleteMany({
      where: {
        userId,
        createdAt: { lt: cutoffDate },
      },
    });

    this.logger.log(
      `Deleted ${result.count} old notifications for user ${userId}`,
    );
    return result;
  }
}
