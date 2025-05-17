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
      { error: 'Error al botener el gasto'},
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params } : { params: { id: string } }
) {
  try {
    const data = await request.json()

    console.log("[DATA]: ", JSON.stringify(data))

    const updatedVehiculo = await prisma.vehiculo.update({
      where: { id: params.id },
      data
    })

    return NextResponse.json(updatedVehiculo)
  } catch {
    return NextResponse.json(
      { error: 'Error al actualizar el vehiculo' },
      { status: 500 }
    )
  }
}