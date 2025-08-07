/*
  Warnings:

  - The primary key for the `files` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `mimeType` on the `files` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `files` table. All the data in the column will be lost.
  - You are about to alter the column `filename` on the `files` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to drop the `shares` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[minioKey]` on the table `files` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fileSize` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filetype` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minioKey` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `files` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `files` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "FileUploadStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- AlterTable
ALTER TABLE "files" DROP CONSTRAINT "files_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "mimeType",
DROP COLUMN "size",
ADD COLUMN     "fileSize" BIGINT NOT NULL,
ADD COLUMN     "filetype" VARCHAR(100) NOT NULL,
ADD COLUMN     "minioKey" VARCHAR(500) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(6) NOT NULL,
ADD COLUMN     "uploadStatus" "FileUploadStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "uploadedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ALTER COLUMN "filename" SET DATA TYPE VARCHAR(255),
ADD CONSTRAINT "files_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "shares";

-- CreateTable
CREATE TABLE "roles" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "file_role_permissions" (
    "fileId" UUID NOT NULL,
    "roleName" VARCHAR(50) NOT NULL,
    "grantedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "grantedBy" VARCHAR(100) NOT NULL,

    CONSTRAINT "file_role_permissions_pkey" PRIMARY KEY ("fileId","roleName")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE INDEX "roles_name_idx" ON "roles"("name");

-- CreateIndex
CREATE INDEX "file_role_permissions_roleName_idx" ON "file_role_permissions"("roleName");

-- CreateIndex
CREATE INDEX "file_role_permissions_grantedAt_idx" ON "file_role_permissions"("grantedAt");

-- CreateIndex
CREATE INDEX "file_role_permissions_grantedBy_idx" ON "file_role_permissions"("grantedBy");

-- CreateIndex
CREATE UNIQUE INDEX "files_minioKey_key" ON "files"("minioKey");

-- CreateIndex
CREATE INDEX "files_filename_idx" ON "files"("filename");

-- CreateIndex
CREATE INDEX "files_uploadedAt_idx" ON "files"("uploadedAt");

-- CreateIndex
CREATE INDEX "files_uploadStatus_idx" ON "files"("uploadStatus");

-- AddForeignKey
ALTER TABLE "file_role_permissions" ADD CONSTRAINT "file_role_permissions_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "files"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file_role_permissions" ADD CONSTRAINT "file_role_permissions_roleName_fkey" FOREIGN KEY ("roleName") REFERENCES "roles"("name") ON DELETE CASCADE ON UPDATE CASCADE;
