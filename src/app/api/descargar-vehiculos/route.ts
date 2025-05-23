import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    const vehiculos = await prisma.vehiculo.findMany();

    // Convertimos los datos a formato plano para Excel
    const data = vehiculos.map((vehiculo) => ({
      ID: vehiculo.id,
      Placa: vehiculo.placa,
      Marca: vehiculo.marca,
      Modelo: vehiculo.modelo,
      Tipo: vehiculo.tipo,
      Serie: vehiculo.serie,
      Motor: vehiculo.motor,
      Ubicacion: vehiculo.ubicacion,
      Proyecto: vehiculo.proyecto,
      VersionActual: vehiculo.versionActual,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Vehiculos");

    // Convertir a buffer
    const buffer = XLSX.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    });

    return new NextResponse(buffer, {
      headers: {
        "Content-Disposition": "attachment; filename=vehiculos.xlsx",
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  } catch (error) {
    console.error("Error al generar Excel:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
