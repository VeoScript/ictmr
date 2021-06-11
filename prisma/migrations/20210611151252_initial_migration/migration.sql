-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "avatar" TEXT,
    "name" TEXT,
    "position" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reports" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "avatar" TEXT,
    "year" TEXT,
    "date" TEXT,

    PRIMARY KEY ("id")
);
