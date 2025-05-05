import { getServerSession } from "next-auth/next";
import { authOptions }       from "@/lib/auth";
import { redirect }          from "next/navigation";
import RegistroGastos        from "@/app/(dashboard)/components/RegistroGastos/RegistroGastos";

export default async function RootPage() {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/login");

  return (
    <RegistroGastos />
  );
}
