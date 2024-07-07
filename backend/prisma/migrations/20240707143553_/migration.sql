-- CreateTable
CREATE TABLE `artigos` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(500) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `tipoartigoid` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `artigos_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipoartigos` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `sizesgrupoid` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tipoartigos_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stock` (
    `id` VARCHAR(191) NOT NULL,
    `artigoid` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `stock_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sizes` (
    `id` VARCHAR(191) NOT NULL,
    `size` VARCHAR(191) NOT NULL,
    `order` INTEGER NOT NULL,
    `sizesgrupoid` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `sizes_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sizesgrupo` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `sizesgrupo_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productimages` (
    `id` VARCHAR(191) NOT NULL,
    `artigoid` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `ismain` BOOLEAN NOT NULL,

    UNIQUE INDEX `productimages_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `artigos` ADD CONSTRAINT `artigos_tipoartigoid_fkey` FOREIGN KEY (`tipoartigoid`) REFERENCES `tipoartigos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tipoartigos` ADD CONSTRAINT `tipoartigos_sizesgrupoid_fkey` FOREIGN KEY (`sizesgrupoid`) REFERENCES `sizesgrupo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stock` ADD CONSTRAINT `stock_artigoid_fkey` FOREIGN KEY (`artigoid`) REFERENCES `artigos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sizes` ADD CONSTRAINT `sizes_sizesgrupoid_fkey` FOREIGN KEY (`sizesgrupoid`) REFERENCES `sizesgrupo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `productimages` ADD CONSTRAINT `productimages_artigoid_fkey` FOREIGN KEY (`artigoid`) REFERENCES `artigos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
