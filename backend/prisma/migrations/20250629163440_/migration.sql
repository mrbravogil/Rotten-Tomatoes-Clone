/*
  Warnings:

  - You are about to drop the `TVShow` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TVShowGenre` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `TVShowGenre` DROP FOREIGN KEY `TVShowGenre_genreId_fkey`;

-- DropForeignKey
ALTER TABLE `TVShowGenre` DROP FOREIGN KEY `TVShowGenre_tvShowId_fkey`;

-- DropTable
DROP TABLE `TVShow`;

-- DropTable
DROP TABLE `TVShowGenre`;

-- CreateTable
CREATE TABLE `TvShow` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `startYear` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `trailer` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `language` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TvShowGenre` (
    `id` VARCHAR(191) NOT NULL,
    `tvShowId` VARCHAR(191) NOT NULL,
    `genreId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TvShowGenre` ADD CONSTRAINT `TvShowGenre_tvShowId_fkey` FOREIGN KEY (`tvShowId`) REFERENCES `TvShow`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TvShowGenre` ADD CONSTRAINT `TvShowGenre_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
