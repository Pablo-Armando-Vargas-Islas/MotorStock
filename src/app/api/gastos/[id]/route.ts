import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET /api/gastos/[id]
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const gasto = await prisma.gasto.findUnique({
      where: { id: Number(id) },
    });
    return NextResponse.json(gasto);
  } catch {
    return NextResponse.json(
      { error: 'Error al obtener el gasto' },
      { status: 500 }
    );
  }
}

// PUT /api/gastos/[id]
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const dataReq = await request.json();
    const data = {
      ...dataReq,
      fecha: new Date(dataReq.fecha),
    };
    const updatedGasto = await prisma.gasto.update({
      where: { id: Number(id) },
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
