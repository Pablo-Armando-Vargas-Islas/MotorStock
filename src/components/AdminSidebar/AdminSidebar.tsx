"use client";

import React from "react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "../mode-toggle";
import { useAuth } from "@/context/AuthContext";
import { LogoutButton } from "@/components/ui/LogoutButton";
import {
  User2,
  ChevronUp,
  File,
  LockKeyholeOpen,
  FileText,
  Search,
  TruckElectric,
} from "lucide-react";

export function AdminSidebar() {
  const { user, status } = useAuth();
  if (status === "loading" || !user) return null;

  // Construir menú dinámico según permisos
  const menuItems: { title: string; url: string; icon: React.FC }[] = [];

  if (user.canEditGastos) {
    menuItems.push({
      title: "Registro de Gastos",
      url: "/registro-gastos",
      icon: File,
    });
  }
  if (user.canEditSeguros) {
    menuItems.push({
      title: "Registro de Seguros",
      url: "/seguros",
      icon: LockKeyholeOpen,
    });
  }
  if (user.canEditFacturas) {
    menuItems.push({
      title: "Registro de Facturas",
      url: "/facturas",
      icon: FileText,
    });
  }
  if (user.canViewGastos || user.canViewSeguros || user.canViewFacturas) {
    menuItems.push({
      title: "Datos Generales",
      url: "/admin/datos",
      icon: Search,
    });
  }
  if (user.canManageUsers) {
    menuItems.push({
      title: "Usuarios",
      url: "/admin/usuarios",
      icon: User2,
    });
  }

  return (
    <Sidebar collapsible="icon" variant="sidebar" className="h-full">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <div className="p-1">
            <TruckElectric className="h-5 w-5" />
          </div>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map(({ title, url, icon: Icon }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton asChild>
                    <Link href={url} className="flex items-center gap-2">
                      <Icon className="size-4" />
                      <span>{title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <SidebarMenu className="mt-4">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <ModeToggle />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 className="size-4" />
                  <span>{user.name}</span>
                  <ChevronUp className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <LogoutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
