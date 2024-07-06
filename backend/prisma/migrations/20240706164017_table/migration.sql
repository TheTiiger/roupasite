-- CreateTable
CREATE TABLE `stock` (
    `id` VARCHAR(191) NOT NULL,
    `artigoid` VARCHAR(191) NOT NULL,
    `sizeid` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `stock_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sizes` (
    `id` VARCHAR(191) NOT NULL,
    `size` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `sizes_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `stock` ADD CONSTRAINT `stock_artigoid_fkey` FOREIGN KEY (`artigoid`) REFERENCES `artigos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stock` ADD CONSTRAINT `stock_sizeid_fkey` FOREIGN KEY (`sizeid`) REFERENCES `sizes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
