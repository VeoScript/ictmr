-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "avatar" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,

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

-- AddForeignKey
ALTER TABLE "MonthAlbum" ADD FOREIGN KEY ("albumYear") REFERENCES "YearAlbum"("year") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reports" ADD FOREIGN KEY ("albumYear", "albumMonth") REFERENCES "MonthAlbum"("albumYear", "month") ON DELETE CASCADE ON UPDATE CASCADE;
