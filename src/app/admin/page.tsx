
import { redirect } from "next/navigation";

export default function AdminIndexPage() {
  // Al entrar a /admin, vamos al listado
  redirect("/admin/usuarios");
}