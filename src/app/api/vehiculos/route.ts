import { vehiculoFormSchema } from "@/components/VehiculosForm/VehiculosForm.form";
import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req })

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()

    const validation = vehiculoFormSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Datos inválidos",
          details: validation.error.flatten()
        },
        { status: 400 }
      )
    }

    const result = await prisma.vehiculo.create({
      data: {
        placa: validation.data.placa
      }
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error in POST /api/vehiculos", error)
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  const gastos = await prisma.vehiculo.findMany()

  return NextResponse.json(gastos);
}