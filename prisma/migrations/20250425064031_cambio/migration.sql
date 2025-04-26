/*
  Warnings:

  - The values [GASTOS] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `folio` on the `Factura` table. All the data in the column will be lost.
  - You are about to drop the column `vehiculoId` on the `Factura` table. All the data in the column will be lost.
  - You are about to drop the column `responsable` on the `Seguro` table. All the data in the column will be lost.
  - The primary key for the `Vehiculo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `color` on the `Vehiculo` table. All the data in the column will be lost.
  - You are about to drop the column `comentario` on the `Vehiculo` table. All the data in the column will be lost.
  - You are about to drop the column `marca` on the `Vehiculo` table. All the data in the column will be lost.
  - You are about to drop the column `modelo` on the `Vehiculo` table. All the data in the column will be lost.
  - You are about to drop the column `motor` on the `Vehiculo` table. All the data in the column will be lost.
  - You are about to drop the column `placaAnterior` on the `Vehiculo` table. All the data in the column will be lost.
  - You are about to drop the column `proyecto` on the `Vehiculo` table. All the data in the column will be lost.
  - You are about to drop the column `serie` on the `Vehiculo` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Vehiculo` table. All the data in the column will be lost.
  - You are about to drop the column `ubicacion` on the `Vehiculo` table. All the data in the column will be lost.
  - Changed the type of `compania` on the `Seguro` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `Vehiculo` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Compania" AS ENUM ('GM', 'HM', 'RC');

-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('REGISTRO_GASTOS', 'SEGUROS', 'CONSULTA', 'CONTADOR', 'ADMIN', 'AUDITOR');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'REGISTRO_GASTOS';
COMMIT;

-- DropForeignKey
ALTER TABLE "Factura" DROP CONSTRAINT "Factura_vehiculoId_fkey";

-- DropForeignKey
ALTER TABLE "Gasto" DROP CONSTRAINT "Gasto_vehiculoId_fkey";

-- DropForeignKey
ALTER TABLE "Seguro" DROP CONSTRAINT "Seguro_vehiculoId_fkey";

-- DropIndex
DROP INDEX "Factura_folio_idx";

-- DropIndex
DROP INDEX "Factura_uuid_key";

-- DropIndex
DROP INDEX "Gasto_folio_key";

-- DropIndex
DROP INDEX "Vehiculo_placa_idx";

-- DropIndex
DROP INDEX "Vehiculo_proyecto_idx";

-- DropIndex
DROP INDEX "Vehiculo_serie_idx";

-- DropIndex
DROP INDEX "Vehiculo_serie_key";

-- AlterTable
ALTER TABLE "Factura" DROP COLUMN "folio",
DROP COLUMN "vehiculoId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "estadoSAT" DROP DEFAULT,
ALTER COLUMN "tipoComprobante" DROP DEFAULT,
ALTER COLUMN "tipo" DROP DEFAULT,
ALTER COLUMN "tipoCambio" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Gasto" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "vehiculoId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Seguro" DROP COLUMN "responsable",
ADD COLUMN     "comentario" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "esActual" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "version" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "vehiculoId" SET DATA TYPE TEXT,
DROP COLUMN "compania",
ADD COLUMN     "compania" "Compania" NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "canEditFacturas" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "canEditGastos" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "canEditSeguros" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "canManageUsers" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "canViewFacturas" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "canViewGastos" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "canViewSeguros" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "role" SET DEFAULT 'REGISTRO_GASTOS';

-- AlterTable
ALTER TABLE "Vehiculo" DROP CONSTRAINT "Vehiculo_pkey",
DROP COLUMN "color",
DROP COLUMN "comentario",
DROP COLUMN "marca",
DROP COLUMN "modelo",
DROP COLUMN "motor",
DROP COLUMN "placaAnterior",
DROP COLUMN "proyecto",
DROP COLUMN "serie",
DROP COLUMN "tipo",
DROP COLUMN "ubicacion",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "versionActual" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Vehiculo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Vehiculo_id_seq";

-- DropEnum
DROP TYPE "CompaniaSeguro";

-- CreateTable
CREATE TABLE "VersionVehiculo" (
    "id" SERIAL NOT NULL,
    "vehiculoId" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "placaAnterior" TEXT,
    "marca" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "serie" TEXT NOT NULL,
    "motor" TEXT,
    "proyecto" TEXT,
    "ubicacion" TEXT,
    "version" INTEGER NOT NULL,
    "esActual" BOOLEAN NOT NULL DEFAULT false,
    "fechaCambio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "motivoCambio" TEXT,
    "usuarioCambio" TEXT,

    CONSTRAINT "VersionVehiculo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "VersionVehiculo_vehiculoId_idx" ON "VersionVehiculo"("vehiculoId");

-- CreateIndex
CREATE INDEX "VersionVehiculo_placa_idx" ON "VersionVehiculo"("placa");

-- CreateIndex
CREATE INDEX "VersionVehiculo_serie_idx" ON "VersionVehiculo"("serie");

-- CreateIndex
CREATE INDEX "Factura_gastoId_idx" ON "Factura"("gastoId");

-- CreateIndex
CREATE INDEX "Gasto_vehiculoId_idx" ON "Gasto"("vehiculoId");

-- CreateIndex
CREATE INDEX "Seguro_vehiculoId_idx" ON "Seguro"("vehiculoId");

-- AddForeignKey
ALTER TABLE "VersionVehiculo" ADD CONSTRAINT "VersionVehiculo_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "Vehiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seguro" ADD CONSTRAINT "Seguro_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "Vehiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gasto" ADD CONSTRAINT "Gasto_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "Vehiculo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
