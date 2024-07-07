/*
  Warnings:

  - Added the required column `sizesid` to the `stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `stock` ADD COLUMN `sizesid` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `stock` ADD CONSTRAINT `stock_sizesid_fkey` FOREIGN KEY (`sizesid`) REFERENCES `sizes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
