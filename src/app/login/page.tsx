"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace('/login'); 
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="flex items-center justify-center min-h-screen">Cargando...</div>;
  }

  return (
    <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-card border">
      <h1 className="text-2xl font-semibold mb-6 text-center">Iniciar sesión</h1>
      <LoginForm />
    </div>
  );
}
