/*
  Warnings:

  - A unique constraint covering the columns `[ticket_code]` on the table `attendees` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ticket_code` to the `attendees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "attendees" ADD COLUMN     "ticket_code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "attendees_ticket_code_key" ON "attendees"("ticket_code");
