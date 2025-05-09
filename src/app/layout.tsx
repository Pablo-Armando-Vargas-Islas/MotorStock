import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/AppProviders";
import { AdminSidebar } from "@/components/AdminSidebar/AdminSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MotorStock",
  description: "Sistema de Gestión",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background min-h-screen`}>
        <AppProviders>
          <SidebarProvider>
            <AdminSidebar />
              <main className="w-full min-h-screen bg-background">
                <div className="px-3">
                  <SidebarTrigger />
                </div>
                {children}
              </main>
          </SidebarProvider>
        </AppProviders>
      </body>
    </html>
  );
}
