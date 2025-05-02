/*
import { NextRequest, NextResponse } from "next/server";
import {getToken} from "next-auth/jwt";
import {prisma} from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const token = getToken({ req })

    const data = await req.json()

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const result = await prisma.gasto.create({
      data
    })

    if (!result) {
      return NextResponse.json({ error: "Internal Server Error" });
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error("Error in POST /api/gastos:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}*/

import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req }); // Añade await aquí

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const response = await req.json();

    const { cantidadRegistros, ...data} = response

    const gastosData = Array(Number(cantidadRegistros)).fill(data);

    // Validación básica de datos
    if (!gastosData || typeof gastosData !== "object") {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    const result = await prisma.gasto.createMany({
      data: gastosData
    });

    return NextResponse.json(result); // Devuelve el resultado de la creación
  } catch (error) {
    console.error("Error in POST /api/gastos:", error);
    return NextResponse.json({
      error: "Internal Server Error",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}
