import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: Transporter;
  private readonly logger = new Logger(EmailService.name);

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: this.configService.get<number>('MAIL_PORT'),
      secure: true,
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASSWORD'),
      },
    }) as Transporter;
  }

  async sendPasswordRecoveryEmail(
    email: string,
    recoveryLink: string,
    userName: string,
  ): Promise<void> {
    try {
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Password Recovery</h2>
          <p>Hello ${userName},</p>
          <p>We received a request to reset your password. Click the link below to proceed:</p>
          <p>
            <a href="${recoveryLink}" style="background-color: #277C78; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Reset Your Password
            </a>
          </p>
          <p>This link will expire in 1 hour.</p>
          <p>If you didn't request this, please ignore this email.</p>
          <hr />
          <p style="font-size: 12px; color: #666;">Personal Finance App</p>
        </div>
      `;

      await this.transporter.sendMail({
        from: this.configService.get<string>('MAIL_FROM'),
        to: email,
        subject: 'Password Recovery Request',
        html: htmlContent,
      });

      this.logger.log(`Password recovery email sent to ${email}`);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';
      this.logger.error(
        `Failed to send password recovery email: ${errorMessage}`,
      );
      throw error;
    }
  }

  async sendBudgetAlertEmail(
    email: string,
    userName: string,
    category: string,
    percentage: number,
    spent: number,
    limit: number,
    currency: string,
  ): Promise<void> {
    const alertType = percentage >= 100 ? 'EXCEEDED' : 'APPROACHING';
    const message =
      percentage >= 100
        ? `Your ${category} budget has been EXCEEDED!`
        : `Your ${category} budget is at ${percentage}%`;

    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #E60000;">Budget Alert</h2>
          <p>Hello ${userName},</p>
          <p>${message}</p>
          <div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Spent:</strong> ${currency} ${spent.toFixed(2)}</p>
            <p><strong>Budget Limit:</strong> ${currency} ${limit.toFixed(2)}</p>
            <p><strong>Percentage:</strong> ${percentage}%</p>
          </div>
          <p>Log in to your account to review your spending.</p>
          <hr />
          <p style="font-size: 12px; color: #666;">Personal Finance App</p>
        </div>
      `;

    await this.transporter.sendMail({
      from: this.configService.get<string>('MAIL_FROM'),
      to: email,
      subject: `Budget Alert: ${category} - ${alertType}`,
      html: htmlContent,
    });

    this.logger.log(`Budget alert email sent to ${email} for ${category}`);
  }
  catch(error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    this.logger.error(`Failed to send budget alert email: ${errorMessage}`);
    throw error;
  }

  async sendRecurringTransactionDetectedEmail(
    email: string,
    userName: string,
    transactionName: string,
    amount: number,
    frequency: string,
    currency: string,
  ): Promise<void> {
    try {
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Recurring Transaction Detected</h2>
          <p>Hello ${userName},</p>
          <p>We've detected a recurring transaction pattern in your account:</p>
          <div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Transaction:</strong> ${transactionName}</p>
            <p><strong>Amount:</strong> ${currency} ${amount.toFixed(2)}</p>
            <p><strong>Frequency:</strong> ${frequency}</p>
          </div>
          <p>You can manage this transaction in your account settings.</p>
          <hr />
          <p style="font-size: 12px; color: #666;">Personal Finance App</p>
        </div>
      `;

      await this.transporter.sendMail({
        from: this.configService.get<string>('MAIL_FROM'),
        to: email,
        subject: 'Recurring Transaction Detected',
        html: htmlContent,
      });

      this.logger.log(`Recurring transaction email sent to ${email}`);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';
      this.logger.error(
        `Failed to send recurring transaction email: ${errorMessage}`,
      );
      throw error;
    }
  }

  async sendBillReminderEmail(
    email: string,
    userName: string,
    billName: string,
    amount: number,
    dueDate: Date,
    currency: string,
  ): Promise<void> {
    try {
      const formattedDate = dueDate.toLocaleDateString();

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Bill Reminder</h2>
          <p>Hello ${userName},</p>
          <p>You have an upcoming bill payment:</p>
          <div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Bill:</strong> ${billName}</p>
            <p><strong>Amount:</strong> ${currency} ${amount.toFixed(2)}</p>
            <p><strong>Due Date:</strong> ${formattedDate}</p>
          </div>
          <p>Log in to your account to manage your bills.</p>
          <hr />
          <p style="font-size: 12px; color: #666;">Personal Finance App</p>
        </div>
      `;

      await this.transporter.sendMail({
        from: this.configService.get<string>('MAIL_FROM'),
        to: email,
        subject: `Bill Reminder: ${billName}`,
        html: htmlContent,
      });

      this.logger.log(`Bill reminder email sent to ${email}`);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';
      this.logger.error(`Failed to send bill reminder email: ${errorMessage}`);
      throw error;
    }
  }
}
