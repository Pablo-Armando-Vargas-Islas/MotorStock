import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params } : { params: { id: string } }
) {
  try {
    const factura = await prisma.factura.findUnique({
      where: { id: Number(params.id)}
    })

    return NextResponse.json(factura)
  } catch {
    return NextResponse.json(
      { error: "Error al obtener el gasto" },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params } : { params: { id: string } }
) {
  try {
    const dataReq = await request.json()
    const data = {
      ...dataReq,
      fechaEmision: new Date(dataReq.fechaEmision),
      fechaPago: new Date(dataReq.fechaPago)
    }

    const updatedFactura = await prisma.factura.update({
      where: { id: Number(params.id)},
      data
    })

    return NextResponse.json(updatedFactura)
  } catch {
    return NextResponse.json(
      { error: 'Error al actualizar el gasto' },
      { status: 500 }
    )
  }
}