import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { hash } from "bcryptjs";

// Schema de validación para creación de usuario
const createUserSchema = z.object({
  user: z.string().min(1, "El usuario es requerido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: z.string().min(6, "Confirma la contraseña"),
  role: z.enum([
    "REGISTRO_GASTOS",
    "SEGUROS",
    "CONSULTA",
    "CONTADOR",
    "ADMIN",
    "AUDITOR",
  ]),
  canViewSeguros: z.boolean().optional(),
  canViewGastos: z.boolean().optional(),
  canViewFacturas: z.boolean().optional(),
  canEditSeguros: z.boolean().optional(),
  canEditGastos: z.boolean().optional(),
  canEditFacturas: z.boolean().optional(),
  canManageUsers: z.boolean().optional(),
  allowedCompanies: z
    .array(z.enum(["HM", "GM", "RC"]))
    .optional(),
});

export async function GET() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      user: true,
      role: true,
      canViewSeguros: true,
      canViewGastos: true,
      canViewFacturas: true,
      canEditSeguros: true,
      canEditGastos: true,
      canEditFacturas: true,
      canManageUsers: true,
      allowedCompanies: true,
    },
  });
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = createUserSchema.parse(body);

    if (data.password !== data.confirmPassword) {
      return NextResponse.json(
        { error: "Las contraseñas no coinciden" },
        { status: 400 }
      );
    }

    const hashed = await hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        user: data.user,
        password: hashed,
        role: data.role,
        canViewSeguros: data.canViewSeguros ?? false,
        canViewGastos: data.canViewGastos ?? false,
        canViewFacturas: data.canViewFacturas ?? false,
        canEditSeguros: data.canEditSeguros ?? false,
        canEditGastos: data.canEditGastos ?? false,
        canEditFacturas: data.canEditFacturas ?? false,
        canManageUsers: data.canManageUsers ?? false,
        allowedCompanies: data.allowedCompanies ?? [],
      },
      select: {
        id: true,
        user: true,
        role: true,
        canViewSeguros: true,
        canViewGastos: true,
        canViewFacturas: true,
        canEditSeguros: true,
        canEditGastos: true,
        canEditFacturas: true,
        canManageUsers: true,
        allowedCompanies: true,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ errors: err.errors }, { status: 422 });
    }
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
