import { AdminSidebar } from "@/components/AdminSidebar/AdminSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: {
children: React.ReactNode}) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="w-full bg-[#F3F3F1">
        <div className="px-3">
          <SidebarTrigger />
        </div>
        {children}
      </main>
    </SidebarProvider>
  )
}