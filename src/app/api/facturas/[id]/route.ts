import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET /api/facturas/[id]
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const factura = await prisma.factura.findUnique({
      where: { id: Number(id) },
    });

    return NextResponse.json(factura);
  } catch {
    return NextResponse.json(
      { error: "Error al obtener el gasto" },
      { status: 500 }
    );
  }
}

// PUT /api/facturas/[id]
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const dataReq = await request.json();

    const data = {
      ...dataReq,
      fechaEmision: new Date(dataReq.fechaEmision),
      fechaPago: new Date(dataReq.fechaPago),
    };

    const updatedFactura = await prisma.factura.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json(updatedFactura);
  } catch {
    return NextResponse.json(
      { error: "Error al actualizar el gasto" },
      { status: 500 }
    );
  }
}
