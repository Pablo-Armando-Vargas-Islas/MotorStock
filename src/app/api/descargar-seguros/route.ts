import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    const seguros = await prisma.seguro.findMany({
      include: {
        vehiculo: true,
      },
    });

    // Convertimos los datos a formato plano para Excel
    const data = seguros.map((seguro) => ({
      ID_Seguro: seguro.id,
      Vehiculo_ID: seguro.vehiculoId,
      Placa: seguro.vehiculo?.placa || "",
      RZ: seguro.compania,
      Precio: seguro.precio,
      Fecha_Inicio: new Date(seguro.fechaInicio).toLocaleDateString(),
      Fecha_Vencimiento: new Date(seguro.fechaVencimiento).toLocaleDateString(),
      Comentario: seguro.comentario ?? "",
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Seguros");

    // Convertir a buffer
    const buffer = XLSX.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    });

    return new NextResponse(buffer, {
      headers: {
        "Content-Disposition": "attachment; filename=seguros.xlsx",
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  } catch (error) {
    console.error("Error al generar Excel:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
