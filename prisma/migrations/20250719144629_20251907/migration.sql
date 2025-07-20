-- CreateTable
CREATE TABLE "shares" (
    "id" SERIAL NOT NULL,
    "fileId" INTEGER NOT NULL,
    "filename" TEXT NOT NULL,
    "shareUrl" TEXT NOT NULL,
    "expireAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accessCount" INTEGER NOT NULL,

    CONSTRAINT "shares_pkey" PRIMARY KEY ("id")
);
