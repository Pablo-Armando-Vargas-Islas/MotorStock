"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface AuthContextType {
  user: {
    id: string;
    name: string;
    role: string;
    canViewSeguros: boolean;
    canViewGastos: boolean;
    canViewFacturas: boolean;
    canEditSeguros: boolean;
    canEditGastos: boolean;
    canEditFacturas: boolean;
    canManageUsers: boolean;
  } | null;
  status: "loading" | "authenticated" | "unauthenticated";
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  status: "loading",
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<AuthContextType["user"]>(null);

  useEffect(() => {
    if (session?.user) {
      setUser({
        id: (session.user as any).id,
        name: (session.user as any).name,
        role: (session.user as any).role,
        canViewSeguros: (session.user as any).canViewSeguros,
        canViewGastos: (session.user as any).canViewGastos,
        canViewFacturas: (session.user as any).canViewFacturas,
        canEditSeguros: (session.user as any).canEditSeguros,
        canEditGastos: (session.user as any).canEditGastos,
        canEditFacturas: (session.user as any).canEditFacturas,
        canManageUsers: (session.user as any).canManageUsers,
      });
    } else {
      setUser(null);
    }
  }, [session]);

  return (
    <AuthContext.Provider value={{ user, status }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
