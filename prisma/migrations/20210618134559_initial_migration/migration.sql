-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "avatar" TEXT NOT NULL DEFAULT E'https://i0.wp.com/i.pinimg.com/originals/e9/46/4b/e9464b65069040fbc455a509dbce373d.jpg',
    "name" TEXT NOT NULL DEFAULT E'Default User',
    "position" TEXT NOT NULL DEFAULT E'Web Developer',
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "tiktok" TEXT NOT NULL,
    "youtube" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YearAlbum" (
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    PRIMARY KEY ("year")
);

-- CreateTable
CREATE TABLE "MonthAlbum" (
    "albumYear" TEXT NOT NULL,
    "month" TEXT NOT NULL,

    PRIMARY KEY ("albumYear","month")
);

-- CreateTable
CREATE TABLE "Reports" (
    "id" SERIAL NOT NULL,
    "albumYear" TEXT NOT NULL,
    "albumMonth" TEXT NOT NULL,
    "requesting_person" TEXT NOT NULL,
    "reported_issue" TEXT NOT NULL,
    "resolution_made" TEXT NOT NULL,
    "date_reported" TEXT NOT NULL,
    "date_resolved" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Computers" (
    "id" SERIAL NOT NULL,
    "computer_name" TEXT NOT NULL,
    "computer_owner" TEXT NOT NULL,
    "computer_ip" TEXT NOT NULL,
    "computer_description" TEXT NOT NULL,
    "office_assign" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Networks" (
    "id" SERIAL NOT NULL,
    "company_name" TEXT NOT NULL DEFAULT E'SPMI',
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
    "create_at" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notes" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MonthAlbum" ADD FOREIGN KEY ("albumYear") REFERENCES "YearAlbum"("year") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reports" ADD FOREIGN KEY ("albumYear", "albumMonth") REFERENCES "MonthAlbum"("albumYear", "month") ON DELETE CASCADE ON UPDATE CASCADE;
