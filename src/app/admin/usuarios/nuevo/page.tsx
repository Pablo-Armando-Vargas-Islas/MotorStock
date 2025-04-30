"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Schema de validación cliente (coincide con el API)
const createUserSchema = z
  .object({
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
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

type CreateUserForm = z.infer<typeof createUserSchema>;

export default function NuevoUsuarioPage() {
  const router = useRouter();
  const form = useForm<CreateUserForm>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      user: "",
      password: "",
      confirmPassword: "",
      role: "REGISTRO_GASTOS",
      canViewSeguros: false,
      canViewGastos: false,
      canViewFacturas: false,
      canEditSeguros: false,
      canEditGastos: false,
      canEditFacturas: false,
      canManageUsers: false,
      allowedCompanies: [],
    },
  });

  const onSubmit = async (values: CreateUserForm) => {
    const res = await fetch("/api/admin/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      router.push("/admin/usuarios");
    } else {
      const err = await res.json();
      alert(err.error || "Error al crear el usuario");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Crear Nuevo Usuario</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Usuario */}
          <FormField
            control={form.control}
            name="user"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuario</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre de usuario" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Contraseña */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirmar contraseña */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Rol */}
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rol</FormLabel>
                <FormControl>
                  <select {...field} className="border rounded px-2 py-1 w-full">
                    {[
                      "REGISTRO_GASTOS",
                      "SEGUROS",
                      "CONSULTA",
                      "CONTADOR",
                      "ADMIN",
                      "AUDITOR",
                    ].map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Booleanos de permisos */}
          <div className="grid grid-cols-2 gap-4">
            {( [
              { name: "canViewSeguros", label: "Ver Seguros" },
              { name: "canViewGastos", label: "Ver Gastos" },
              { name: "canViewFacturas", label: "Ver Facturas" },
              { name: "canEditSeguros", label: "Editar Seguros" },
              { name: "canEditGastos", label: "Editar Gastos" },
              { name: "canEditFacturas", label: "Editar Facturas" },
              { name: "canManageUsers", label: "Gestionar Usuarios" },
            ] as const).map(({ name, label }) => (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        className="h-4 w-4"
                      />
                    </FormControl>
                    <FormLabel>{label}</FormLabel>
                  </FormItem>
                )}
              />
            ))}
          </div>

          {/* Empreas permitidas */}
          <div>
            <h2 className="font-medium mb-2">Empresas permitidas</h2>
            <div className="grid grid-cols-3 gap-2">
              {["HM", "GM", "RC"].map((c) => (
                <FormField
                  key={c}
                  control={form.control}
                  name="allowedCompanies"
                  render={({ field }) => {
                    // Asegurarnos de que siempre sea array
                    const selected: string[] = Array.isArray(field.value)
                      ? field.value
                      : [];

                    const isChecked = selected.includes(c);

                    const toggle = () => {
                      const next = isChecked
                        ? selected.filter((x) => x !== c)
                        : [...selected, c];
                      field.onChange(next);
                    };

                    return (
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={toggle}
                          className="h-4 w-4"
                        />
                        <span>{c}</span>
                      </label>
                    );
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </div>

          <div className="flex space-x-2">
            <Button type="submit">Crear Usuario</Button>
            <Button variant="outline" onClick={() => router.back()}>
              Cancelar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
