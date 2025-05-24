import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET /api/seguros/[id]
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const seguro = await prisma.seguro.findUnique({
      where: { id: Number(id) },
    });
    return NextResponse.json(seguro);
  } catch {
    return NextResponse.json(
      { error: "Error al obtener el gasto" },
      { status: 500 }
    );
  }
}

// PUT /api/seguros/[id]
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const dataReq = await request.json();
    const data = {
      ...dataReq,
      fechaInicio: new Date(dataReq.fechaInicio),
      fechaVencimiento: new Date(dataReq.fechaVencimiento),
    };

    const updatedSeguro = await prisma.seguro.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json(updatedSeguro);
  } catch {
    return NextResponse.json(
      { error: "Error al actualizar el gasto" },
      { status: 500 }
    );
  }
}
