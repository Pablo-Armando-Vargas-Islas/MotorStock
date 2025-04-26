import { getServerSession } from "next-auth/next";
import { authOptions }       from "@/lib/auth";
import { redirect }          from "next/navigation";
import DashboardLayout       from "@/app/(dashboard)/layout"; // ajusta import
import RegistroGastos        from "@/app/(dashboard)/components/RegistroGastos/RegistroGastos";

export default async function RootPage() {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/login");

  return (
    <DashboardLayout>
      <RegistroGastos />
    </DashboardLayout>
  );
}
