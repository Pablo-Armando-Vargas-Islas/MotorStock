/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Vehiculo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `año` on the `Vehiculo` table. All the data in the column will be lost.
  - You are about to drop the column `fechaIngreso` on the `Vehiculo` table. All the data in the column will be lost.
  - You are about to drop the column `placas` on the `Vehiculo` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Vehiculo` table. All the data in the column will be lost.
  - The `id` column on the `Vehiculo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[placa]` on the table `Vehiculo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[serie]` on the table `Vehiculo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `color` to the `Vehiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `placa` to the `Vehiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serie` to the `Vehiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Vehiculo` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `modelo` on the `Vehiculo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SEGUROS', 'GASTOS', 'CONTADOR');

-- CreateEnum
CREATE TYPE "CompaniaSeguro" AS ENUM ('GM', 'RF', 'HM');

-- DropForeignKey
ALTER TABLE "Vehiculo" DROP CONSTRAINT "Vehiculo_userId_fkey";

-- DropIndex
DROP INDEX "Vehiculo_placas_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'SEGUROS';

-- AlterTable
ALTER TABLE "Vehiculo" DROP CONSTRAINT "Vehiculo_pkey",
DROP COLUMN "año",
DROP COLUMN "fechaIngreso",
DROP COLUMN "placas",
DROP COLUMN "userId",
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "comentario" TEXT,
ADD COLUMN     "motor" TEXT,
ADD COLUMN     "placa" TEXT NOT NULL,
ADD COLUMN     "placaAnterior" TEXT,
ADD COLUMN     "proyecto" TEXT,
ADD COLUMN     "serie" TEXT NOT NULL,
ADD COLUMN     "tipo" TEXT NOT NULL,
ADD COLUMN     "ubicacion" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "modelo",
ADD COLUMN     "modelo" INTEGER NOT NULL,
ADD CONSTRAINT "Vehiculo_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Seguro" (
    "id" SERIAL NOT NULL,
    "vehiculoId" INTEGER NOT NULL,
    "compania" "CompaniaSeguro" NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaVencimiento" TIMESTAMP(3) NOT NULL,
    "responsable" TEXT,

    CONSTRAINT "Seguro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gasto" (
    "id" SERIAL NOT NULL,
    "folio" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "razonSocial" TEXT NOT NULL,
    "banco" TEXT,
    "tdc" TEXT,
    "proveedor" TEXT NOT NULL,
    "concepto" TEXT NOT NULL,
    "referencia" TEXT,
    "documento" TEXT,
    "proyecto" TEXT,
    "responsable" TEXT NOT NULL,
    "transferencia" TEXT,
    "entrada" DOUBLE PRECISION,
    "salida" DOUBLE PRECISION,
    "saldo" DOUBLE PRECISION,
    "vehiculoId" INTEGER,

    CONSTRAINT "Gasto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Factura" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT,
    "estadoSAT" TEXT DEFAULT 'Vigente',
    "tipoComprobante" TEXT DEFAULT 'I',
    "tipo" TEXT DEFAULT 'Factura',
    "fechaEmision" TIMESTAMP(3) NOT NULL,
    "serie" TEXT,
    "folio" TEXT,
    "rfcEmisor" TEXT NOT NULL,
    "nombreEmisor" TEXT NOT NULL,
    "rfcReceptor" TEXT NOT NULL,
    "nombreReceptor" TEXT NOT NULL,
    "usoCFDI" TEXT NOT NULL,
    "subTotal" DOUBLE PRECISION NOT NULL,
    "descuento" DOUBLE PRECISION DEFAULT 0,
    "totalIEPS" DOUBLE PRECISION DEFAULT 0,
    "iva16" DOUBLE PRECISION DEFAULT 0,
    "retenidoIVA" DOUBLE PRECISION DEFAULT 0,
    "retenidoISR" DOUBLE PRECISION DEFAULT 0,
    "ish" DOUBLE PRECISION DEFAULT 0,
    "total" DOUBLE PRECISION NOT NULL,
    "moneda" TEXT DEFAULT 'MXN',
    "tipoCambio" DOUBLE PRECISION DEFAULT 1,
    "formaPago" TEXT NOT NULL,
    "metodoPago" TEXT NOT NULL,
    "conceptos" TEXT NOT NULL,
    "regimenFiscalReceptor" TEXT,
    "domicilioFiscalReceptor" TEXT,
    "fechaPago" TIMESTAMP(3),
    "bancoPago" TEXT,
    "folioPago" TEXT,
    "gastoId" INTEGER,
    "vehiculoId" INTEGER,

    CONSTRAINT "Factura_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gasto_folio_key" ON "Gasto"("folio");

-- CreateIndex
CREATE INDEX "Gasto_folio_idx" ON "Gasto"("folio");

-- CreateIndex
CREATE INDEX "Gasto_proveedor_idx" ON "Gasto"("proveedor");

-- CreateIndex
CREATE INDEX "Gasto_responsable_idx" ON "Gasto"("responsable");

-- CreateIndex
CREATE UNIQUE INDEX "Factura_uuid_key" ON "Factura"("uuid");

-- CreateIndex
CREATE INDEX "Factura_folio_idx" ON "Factura"("folio");

-- CreateIndex
CREATE INDEX "Factura_rfcEmisor_idx" ON "Factura"("rfcEmisor");

-- CreateIndex
CREATE INDEX "Factura_nombreEmisor_idx" ON "Factura"("nombreEmisor");

-- CreateIndex
CREATE INDEX "Factura_fechaEmision_idx" ON "Factura"("fechaEmision");

-- CreateIndex
CREATE UNIQUE INDEX "Vehiculo_placa_key" ON "Vehiculo"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "Vehiculo_serie_key" ON "Vehiculo"("serie");

-- CreateIndex
CREATE INDEX "Vehiculo_placa_idx" ON "Vehiculo"("placa");

-- CreateIndex
CREATE INDEX "Vehiculo_serie_idx" ON "Vehiculo"("serie");

-- CreateIndex
CREATE INDEX "Vehiculo_proyecto_idx" ON "Vehiculo"("proyecto");

-- AddForeignKey
ALTER TABLE "Seguro" ADD CONSTRAINT "Seguro_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "Vehiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gasto" ADD CONSTRAINT "Gasto_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "Vehiculo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_gastoId_fkey" FOREIGN KEY ("gastoId") REFERENCES "Gasto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "Vehiculo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
