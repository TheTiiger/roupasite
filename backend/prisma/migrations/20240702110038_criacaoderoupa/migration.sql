-- CreateTable
CREATE TABLE `artigos` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `tipoartigoid` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `artigos_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipoartigos` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tipoartigos_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `artigos` ADD CONSTRAINT `artigos_tipoartigoid_fkey` FOREIGN KEY (`tipoartigoid`) REFERENCES `tipoartigos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
