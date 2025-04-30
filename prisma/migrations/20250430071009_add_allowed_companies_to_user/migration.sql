/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'REGISTRO_GASTOS',
    "canViewSeguros" BOOLEAN NOT NULL DEFAULT false,
    "canViewGastos" BOOLEAN NOT NULL DEFAULT true,
    "canViewFacturas" BOOLEAN NOT NULL DEFAULT false,
    "canEditSeguros" BOOLEAN NOT NULL DEFAULT false,
    "canEditGastos" BOOLEAN NOT NULL DEFAULT false,
    "canEditFacturas" BOOLEAN NOT NULL DEFAULT false,
    "canManageUsers" BOOLEAN NOT NULL DEFAULT false,
    "allowedCompanies" "Compania"[] DEFAULT ARRAY[]::"Compania"[],

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_key" ON "users"("user");
