import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET /api/versiones-vehiculo/[id]
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const historial = await prisma.versionVehiculo.findMany({
      where: {
        vehiculoId: id, // ✅ Buscar por el campo correcto
      },
      orderBy: {
        version: "desc", // opcional, si quieres la versión más reciente primero
      },
    });

    return NextResponse.json(historial);
  } catch (error) {
    console.error("Error al obtener historial:", error);
    return NextResponse.json(
      { error: "Error al obtener el historial del vehículo" },
      { status: 500 }
    );
  }
}
