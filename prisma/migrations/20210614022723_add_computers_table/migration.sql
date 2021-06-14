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
