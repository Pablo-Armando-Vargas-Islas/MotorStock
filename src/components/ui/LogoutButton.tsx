"use client";

import { signOut } from "next-auth/react";

export function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="w-full text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
    >
      Cerrar sesión
    </button>
  );
}
