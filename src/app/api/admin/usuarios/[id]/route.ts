import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { hash } from "bcryptjs";

// Schema de validación para actualización
const updateUserSchema = z.object({
  user: z.string().min(1, "El usuario es requerido").optional(),
  password: z
    .preprocess(
      (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
      z.string().min(6, "La contraseña debe tener al menos 6 caracteres").optional()
    ),
  confirmPassword: z
    .preprocess(
      (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
      z.string().min(6, "Confirma la contraseña").optional()
    ),
  role: z
    .enum([
      "REGISTRO_GASTOS",
      "SEGUROS",
      "CONSULTA",
      "CONTADOR",
      "ADMIN",
      "AUDITOR",
    ])
    .optional(),
  canViewSeguros: z.boolean().optional(),
  canViewGastos: z.boolean().optional(),
  canViewFacturas: z.boolean().optional(),
  canEditSeguros: z.boolean().optional(),
  canEditGastos: z.boolean().optional(),
  canEditFacturas: z.boolean().optional(),
  canManageUsers: z.boolean().optional(),
  allowedCompanies: z.array(z.enum(["HM", "GM", "RC"])).optional(),
})
.refine(
  (data) =>
    !data.password ||
    (data.password &&
      data.confirmPassword &&
      data.password === data.confirmPassword),
  {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  }
);

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const user = await prisma.user.findUnique({
    where: { id },
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
  if (!user) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const data = updateUserSchema.parse(body);

    // Si envían password, validar y hashear
    let hashedPassword: string | undefined;
    if (data.password) {
      hashedPassword = await hash(data.password, 10);
    }

    // Construye el objeto updateData sólo con los campos presentes
    const updateData: Record<string, any> = {
      ...(data.user && { user: data.user }),
      ...(hashedPassword && { password: hashedPassword }),
      ...(data.role && { role: data.role }),
      ...(data.canViewSeguros !== undefined && { canViewSeguros: data.canViewSeguros }),
      ...(data.canViewGastos !== undefined && { canViewGastos: data.canViewGastos }),
      ...(data.canViewFacturas !== undefined && { canViewFacturas: data.canViewFacturas }),
      ...(data.canEditSeguros !== undefined && { canEditSeguros: data.canEditSeguros }),
      ...(data.canEditGastos !== undefined && { canEditGastos: data.canEditGastos }),
      ...(data.canEditFacturas !== undefined && { canEditFacturas: data.canEditFacturas }),
      ...(data.canManageUsers !== undefined && { canManageUsers: data.canManageUsers }),
      ...(data.allowedCompanies && { allowedCompanies: data.allowedCompanies }),
    };

    const updated = await prisma.user.update({
      where: { id },
      data: updateData,
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

    return NextResponse.json(updated);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ errors: err.errors }, { status: 422 });
    }
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  await prisma.user.delete({ where: { id } });
  return NextResponse.json({ message: "Usuario eliminado" });
}
