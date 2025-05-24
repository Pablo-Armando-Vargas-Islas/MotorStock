import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET /api/vehiculos/[id]
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const vehiculo = await prisma.vehiculo.findUnique({
      where: { id },
    });

    return NextResponse.json(vehiculo);
  } catch {
    return NextResponse.json(
      { error: "Error al obtener el vehículo" },
      { status: 500 }
    );
  }
}

// PUT /api/vehiculos/[id]
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const { versiones, seguros, gastos, ...rest } = await request.json();

    // Obtener vehículo actual
    const vehiculoActual = await prisma.vehiculo.findUnique({
      where: { id },
    });

    if (!vehiculoActual) {
      return NextResponse.json(
        { error: "Vehículo no encontrado" },
        { status: 404 }
      );
    }

    // Guardar una copia
    await prisma.versionVehiculo.create({
      data: {
        vehiculoId: vehiculoActual.id,
        placa: vehiculoActual.placa,
        marca: vehiculoActual.marca,
        modelo: vehiculoActual.modelo,
        tipo: vehiculoActual.tipo,
        serie: vehiculoActual.serie,
        motor: vehiculoActual.motor,
        ubicacion: vehiculoActual.ubicacion,
        proyecto: vehiculoActual.proyecto,
        version: vehiculoActual.versionActual,
      },
    });

    const updatedVehiculo = await prisma.vehiculo.update({
      where: { id },
      data: rest,
    });

    return NextResponse.json(updatedVehiculo);
  } catch {
    return NextResponse.json(
      { error: "Error al actualizar el vehículo" },
      { status: 500 }
    );
  }
}
