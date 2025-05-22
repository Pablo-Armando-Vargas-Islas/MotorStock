import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const SeguroSchema = z.object({
  vehiculoId: z.string().min(1),
  compania: z.enum(["GM", "HM", "RC"]),
  precio: z.number().positive(),
  fechaInicio: z.string().datetime(),
  fechaVencimiento: z.string().datetime(),
  comentario: z.string().optional(),
  esActual: z.boolean().optional().default(true),
  version: z.number().optional().default(1)
});

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req })

    if (!token) {
      return NextResponse.json({ error: "Unauthorized " }, { status: 401 })
    }

    const body = await req.json()

    const validation = SeguroSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Datos inválidos",
          details: validation.error.flatten()
        },
        { status: 400 }
      )
    }

    console.log("[VALIDATION]: ", validation.data)

    const result = await prisma.seguro.create({
      data: {
        vehiculoId: validation.data.vehiculoId,
        compania: validation.data.compania,
        precio: validation.data.precio,
        fechaInicio: validation.data.fechaInicio,
        fechaVencimiento: validation.data.fechaVencimiento,
        comentario: validation.data.comentario,
      }
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error in POST /api/seguro: ", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  const seguros = await prisma.seguro.findMany()

  return NextResponse.json(seguros)
}