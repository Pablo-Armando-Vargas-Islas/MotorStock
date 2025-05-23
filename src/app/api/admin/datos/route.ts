import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const placa = searchParams.get("placa") || undefined;
  const page  = parseInt(searchParams.get("page")  || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "30", 10);

  const where = placa
    ? { placa: { contains: placa, mode: "insensitive" } }
    : {};

  // 1️⃣ contamos el total
  const total = await prisma.vehiculo.count({ where });

  // 2️⃣ paginamos
  const data = await prisma.vehiculo.findMany({
    where,
    skip: (page - 1) * limit,
    take: limit,
    include: {
      seguros: { orderBy: { fechaInicio: "desc" } },
      gastos: {
        orderBy: { fecha: "desc" },
        include: { facturas: { orderBy: { fechaEmision: "desc" } } },
      },
    },
  });

  return NextResponse.json({ data, total });
}
