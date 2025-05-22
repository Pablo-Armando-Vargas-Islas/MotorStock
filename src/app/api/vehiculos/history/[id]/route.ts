// import { prisma } from "@/lib/prisma";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(
//   request: NextRequest,
//   { params } : { params : { id: string } }
// ) {
//   try {
//     const vehiculo = await prisma.versionVehiculo.findMany({
//       where: { id: Number(params.id) }
//     })

//     return NextResponse.json(vehiculo)
//   } catch {
//     return NextResponse.json(
//       { error: 'Error al obtener el gasto' },
//       { status: 500 }
//     )
//   }
// }
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const historial = await prisma.versionVehiculo.findMany({
      where: {
        vehiculoId: params.id, // ✅ Buscar por el campo correcto
      },
      orderBy: {
        version: "desc", // opcional, si quieres la versión más reciente primero
      },
    });

    return NextResponse.json(historial);
  } catch (error) {
    console.error("Error al obtener historial:", error);
    return NextResponse.json(
      { error: "Error al obtener el historial del vehículo" },
      { status: 500 }
    );
  }
}
