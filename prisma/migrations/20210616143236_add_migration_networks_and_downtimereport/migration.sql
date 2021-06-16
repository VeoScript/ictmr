-- CreateTable
CREATE TABLE "Networks" (
    "id" SERIAL NOT NULL,
    "internet_main" TEXT NOT NULL,
    "internet_backup" TEXT NOT NULL,
    "internet_office" TEXT NOT NULL,
    "internet_staffhouse" TEXT NOT NULL,
    "ip_main" TEXT NOT NULL,
    "ip_backup" TEXT NOT NULL,
    "ip_office" TEXT NOT NULL,
    "ip_staffhouse" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DowntimeReport" (
    "id" SERIAL NOT NULL,
    "isp" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);
