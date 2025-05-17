import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const gasto = await prisma.gasto.findUnique({
      where: { id: Number(params.id) },
    });
    return NextResponse.json(gasto);
  } catch {
    return NextResponse.json(
      { error: 'Error al obtener el gasto' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const dataReq = await request.json();
    const data = {
      ...dataReq,
      fecha: new Date(dataReq.fecha)
    }
    const updatedGasto = await prisma.gasto.update({
      where: { id: Number(params.id) },
      data,
    });
    return NextResponse.json(updatedGasto);
  } catch {
    return NextResponse.json(
      { error: 'Error al actualizar el gasto' },
      { status: 500 }
    );
  }
}