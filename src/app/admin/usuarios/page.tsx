"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type User = {
  id: string;
  user: string;
  role: string;
  canViewSeguros: boolean;
  canViewGastos: boolean;
  canViewFacturas: boolean;
  canEditSeguros: boolean;
  canEditGastos: boolean;
  canEditFacturas: boolean;
  canManageUsers: boolean;
  allowedCompanies: string[];
};

export default function UsuariosPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  // Traer listado de usuarios
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/usuarios");
      if (!res.ok) throw new Error("Error al obtener usuarios");
      const data = (await res.json()) as User[];
      setUsers(data);
    } catch (error) {
      console.error(error);
      alert("No se pudo cargar la lista de usuarios.");
    } finally {
      setLoading(false);
    }
  };

  // Eliminar usuario
  const handleDelete = async (id: string) => {
    if (!confirm("¿Estás seguro de eliminar este usuario?")) return;
    try {
      const res = await fetch(`/api/admin/usuarios/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error al eliminar");
      fetchUsers();
    } catch (error) {
      console.error(error);
      alert("No se pudo eliminar al usuario.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Administrar Usuarios</h1>
        <Link href="/admin/usuarios/nuevo">
          <Button>Nuevo Usuario</Button>
        </Link>
      </div>

      {loading ? (
        <p>Cargando usuarios...</p>
      ) : (
        <div className="overflow-auto">
          <table className="min-w-full table-auto border divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 border text-left text-gray-900 dark:text-gray-100">
                  Usuario
                </th>
                <th className="px-4 py-2 border text-gray-900 dark:text-gray-100">
                  Rol
                </th>
                <th className="px-4 py-2 border text-center text-gray-900 dark:text-gray-100">
                  Ver Seg.
                </th>
                <th className="px-4 py-2 border text-center text-gray-900 dark:text-gray-100">
                  Ver Gas.
                </th>
                <th className="px-4 py-2 border text-center text-gray-900 dark:text-gray-100">
                  Ver Fac.
                </th>
                <th className="px-4 py-2 border text-center text-gray-900 dark:text-gray-100">
                  Edit Seg.
                </th>
                <th className="px-4 py-2 border text-center text-gray-900 dark:text-gray-100">
                  Edit Gas.
                </th>
                <th className="px-4 py-2 border text-center text-gray-900 dark:text-gray-100">
                  Edit Fac.
                </th>
                <th className="px-4 py-2 border text-center text-gray-900 dark:text-gray-100">
                  Gestión Us.
                </th>
                <th className="px-4 py-2 border text-center text-gray-900 dark:text-gray-100">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900">
              {users.map((u) => (
                <tr
                  key={u.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-2 border text-gray-900 dark:text-gray-100">
                    {u.user}
                  </td>
                  <td className="px-4 py-2 border text-gray-900 dark:text-gray-100">
                    {u.role}
                  </td>
                  <td className="px-4 py-2 border text-center text-gray-900 dark:text-gray-100">
                    {u.canViewSeguros ? "Sí" : "No"}
                  </td>
                  <td className="px-4 py-2 border text-center text-gray-900 dark:text-gray-100">
                    {u.canViewGastos ? "Sí" : "No"}
                  </td>
                  <td className="px-4 py-2 border text-center text-gray-900 dark:text-gray-100">
                    {u.canViewFacturas ? "Sí" : "No"}
                  </td>
                  <td className="px-4 py-2 border text-center text-gray-900 dark:text-gray-100">
                    {u.canEditSeguros ? "Sí" : "No"}
                  </td>
                  <td className="px-4 py-2 border text-center text-gray-900 dark:text-gray-100">
                    {u.canEditGastos ? "Sí" : "No"}
                  </td>
                  <td className="px-4 py-2 border text-center text-gray-900 dark:text-gray-100">
                    {u.canEditFacturas ? "Sí" : "No"}
                  </td>
                  <td className="px-4 py-2 border text-center text-gray-900 dark:text-gray-100">
                    {u.canManageUsers ? "Sí" : "No"}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    <div className="flex justify-center space-x-2">
                      <Link href={`/admin/usuarios/${u.id}/editar`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="min-w-[80px] justify-center"
                        >
                          Editar
                        </Button>
                      </Link>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="min-w-[80px] justify-center"
                        onClick={() => handleDelete(u.id)}
                      >
                        Eliminar
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
