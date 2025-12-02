/*
  Warnings:

  - You are about to drop the `BudgetAlert` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PasswordRecovery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecurringAlert` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BudgetAlert" DROP CONSTRAINT "BudgetAlert_userId_fkey";

-- DropForeignKey
ALTER TABLE "PasswordRecovery" DROP CONSTRAINT "PasswordRecovery_userId_fkey";

-- DropForeignKey
ALTER TABLE "RecurringAlert" DROP CONSTRAINT "RecurringAlert_userId_fkey";

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'EXPENSE',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "BudgetAlert";

-- DropTable
DROP TABLE "PasswordRecovery";

-- DropTable
DROP TABLE "RecurringAlert";

-- DropTable
DROP TABLE "VerificationToken";

-- CreateTable
CREATE TABLE "password_recoveries" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "password_recoveries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "verification_tokens_pkey" PRIMARY KEY ("identifier","token")
);

-- CreateTable
CREATE TABLE "recurring_alerts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "recurringBillId" TEXT,
    "transactionId" TEXT,
    "pattern" TEXT NOT NULL,
    "lastDetectedDate" TIMESTAMP(3) NOT NULL,
    "alertSent" BOOLEAN NOT NULL DEFAULT false,
    "alertSentAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recurring_alerts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "budget_alerts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "budgetCategory" TEXT NOT NULL,
    "thresholdPercentage" INTEGER NOT NULL,
    "alertSent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "budget_alerts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "password_recoveries_token_key" ON "password_recoveries"("token");

-- CreateIndex
CREATE INDEX "password_recoveries_userId_idx" ON "password_recoveries"("userId");

-- CreateIndex
CREATE INDEX "password_recoveries_token_idx" ON "password_recoveries"("token");

-- CreateIndex
CREATE INDEX "recurring_alerts_userId_idx" ON "recurring_alerts"("userId");

-- CreateIndex
CREATE INDEX "recurring_alerts_recurringBillId_idx" ON "recurring_alerts"("recurringBillId");

-- CreateIndex
CREATE INDEX "budget_alerts_userId_idx" ON "budget_alerts"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "budget_alerts_userId_budgetCategory_thresholdPercentage_key" ON "budget_alerts"("userId", "budgetCategory", "thresholdPercentage");

-- CreateIndex
CREATE INDEX "budgets_isActive_idx" ON "budgets"("isActive");

-- CreateIndex
CREATE INDEX "notifications_isRead_idx" ON "notifications"("isRead");

-- CreateIndex
CREATE INDEX "notifications_createdAt_idx" ON "notifications"("createdAt");

-- CreateIndex
CREATE INDEX "pot_transactions_createdAt_idx" ON "pot_transactions"("createdAt");

-- CreateIndex
CREATE INDEX "recurring_bills_isActive_idx" ON "recurring_bills"("isActive");

-- CreateIndex
CREATE INDEX "transactions_type_idx" ON "transactions"("type");

-- CreateIndex
CREATE INDEX "transactions_date_idx" ON "transactions"("date");

-- AddForeignKey
ALTER TABLE "password_recoveries" ADD CONSTRAINT "password_recoveries_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recurring_alerts" ADD CONSTRAINT "recurring_alerts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "budget_alerts" ADD CONSTRAINT "budget_alerts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
