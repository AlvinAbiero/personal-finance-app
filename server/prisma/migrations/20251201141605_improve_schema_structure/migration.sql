/*
  Warnings:

  - Added the required column `updatedAt` to the `budgets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `pots` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `recurring_bills` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_recipientId_fkey";

-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_senderId_fkey";

-- AlterTable
ALTER TABLE "RecurringAlert" ADD COLUMN     "alertSentAt" TIMESTAMP(3),
ADD COLUMN     "recurringBillId" TEXT;

-- AlterTable
ALTER TABLE "budgets" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "period" TEXT NOT NULL DEFAULT 'MONTHLY',
ADD COLUMN     "spent" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "pots" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "targetDate" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "recurring_bills" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "nextDueDate" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "contactName" TEXT,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "frequency" TEXT,
ADD COLUMN     "recurringBillId" TEXT;

-- CreateTable
CREATE TABLE "pot_transactions" (
    "id" TEXT NOT NULL,
    "potId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pot_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "pot_transactions_potId_idx" ON "pot_transactions"("potId");

-- CreateIndex
CREATE INDEX "RecurringAlert_recurringBillId_idx" ON "RecurringAlert"("recurringBillId");

-- CreateIndex
CREATE INDEX "budgets_startDate_endDate_idx" ON "budgets"("startDate", "endDate");

-- CreateIndex
CREATE INDEX "recurring_bills_nextDueDate_idx" ON "recurring_bills"("nextDueDate");

-- CreateIndex
CREATE INDEX "transactions_recurringBillId_idx" ON "transactions"("recurringBillId");

-- CreateIndex
CREATE INDEX "transactions_deletedAt_idx" ON "transactions"("deletedAt");

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_recurringBillId_fkey" FOREIGN KEY ("recurringBillId") REFERENCES "recurring_bills"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pot_transactions" ADD CONSTRAINT "pot_transactions_potId_fkey" FOREIGN KEY ("potId") REFERENCES "pots"("id") ON DELETE CASCADE ON UPDATE CASCADE;
