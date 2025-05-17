import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params } : { params: { id: string } }
) {
  try {
    const seguro = await prisma.seguro.findUnique({
      where: { id: Number(params.id) }
    })
    return NextResponse.json(seguro)
  } catch {
    return NextResponse.json(
      { error: 'Error al obtener el gasto'},
      { status: 500}
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
      fechaInicio: new Date(dataReq.fechaInicio),
      fechaVencimiento: new Date(dataReq.fechaVencimiento)
    }
    const updatedSeguro = await prisma.seguro.update({
      where: { id: Number(params.id) },
      data,
    })

    return NextResponse.json(updatedSeguro)
  } catch {
    return NextResponse.json(
      { error: 'Error al actualizar el gasto' },
      { status: 500 }
    )
  }
}