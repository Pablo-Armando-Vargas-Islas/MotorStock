import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params } : { params : { id: string } }
) {
  try {
    const vehiculo = await prisma.vehiculo.findUnique({
      where: { id: params.id}
    })

    return NextResponse.json(vehiculo)
  } catch {
    return NextResponse.json(
      { error: 'Error al obtener el gasto' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params } : { params: { id: string } }
) {
  try {
    const { versiones, seguros, gastos, ...rest} = await request.json()

    // obtener vehiculo actual
    const vehiculoActual = await prisma.vehiculo.findUnique({
      where: { id: params.id}
    })

    if (!vehiculoActual) {
      return NextResponse.json(
        { error: "Vehículo no encontrado" },
        { status: 404 }
      )
    }

    // guardar una copia 
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
      }
    })

    const updatedVehiculo = await prisma.vehiculo.update({
      where: { id: params.id },
      data: rest
    })

    return NextResponse.json(updatedVehiculo)
  } catch {
    return NextResponse.json(
      { error: 'Error al actualizar el vehiculo' },
      { status: 500 }
    )
  }
}