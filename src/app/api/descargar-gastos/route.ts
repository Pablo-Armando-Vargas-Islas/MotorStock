import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    const gastos = await prisma.gasto.findMany({
      include: {
        vehiculo: true,
      },
    });

    // Convertimos los datos a formato plano para Excel
    const data = gastos.map((gasto) => ({
      Id: gasto.id,
      Folio: gasto.folio,
      Fecha: gasto.fecha.toLocaleDateString(),
      Id_Vehiculo: gasto.vehiculoId,
      Razon_Social: gasto.razonSocial,
      Banco: gasto.banco,
      TDC: gasto.tdc,
      Proveedor: gasto.proveedor,
      Concepto: gasto.concepto,
      Referencia: gasto.referencia,
      Documento: gasto.documento,
      Proyecto: gasto.proyecto,
      Responsable: gasto.responsable,
      Transferencia: gasto.transferencia,
      Entrada: gasto.entrada,
      Salida: gasto.salida,
      Saldo: gasto.saldo
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Gastos");

    // Convertir a buffer
    const buffer = XLSX.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    });

    return new NextResponse(buffer, {
      headers: {
        "Content-Disposition": "attachment; filename=gastos.xlsx",
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  } catch (error) {
    console.error("Error al generar Excel:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
