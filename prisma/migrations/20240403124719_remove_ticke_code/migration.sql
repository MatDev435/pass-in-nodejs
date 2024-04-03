/*
  Warnings:

  - You are about to drop the column `ticket_code` on the `attendees` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "attendees_ticket_code_key";

-- AlterTable
ALTER TABLE "attendees" DROP COLUMN "ticket_code";
