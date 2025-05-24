// src/components/AdminSidebar/AdminSidebar.tsx
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
import { LogoutButton } from "@/components/ui/LogoutButton";
import { useAuth } from "@/context/AuthContext";
import {
  User2,
  Search,
  File,
  LockKeyholeOpen,
  FileText,
  CarFront,
} from "lucide-react";

export function AdminSidebar() {
  const { user, status } = useAuth();
  if (status === "loading" || !user) return null;

  const menuItems: { title: string; url: string; icon: React.ComponentType<{ className?: string }> }[] = [];

  // — Datos Generales: si puede ver alguno
  if (
    user.canViewGastos ||
    user.canViewSeguros ||
    user.canViewFacturas
  ) {
    menuItems.push({
      title: "Datos Generales",
      url: "/admin/datos",
      icon: Search,
    });
  }

  // — Registro de Gastos
  if (user.canEditGastos) {
    menuItems.push({
      title: "Registro de Gastos",
      url: "/registro-gastos",
      icon: File,
    });
  }

  // — Registro de Seguros + Vehículos
  if (user.canEditSeguros) {
    menuItems.push(
      {
        title: "Registro de Seguros",
        url: "/seguros",
        icon: LockKeyholeOpen,
      },
      {
        title: "Vehículos",
        url: "/vehiculos",
        icon: CarFront,
      }
    );
  }

  // — Registro de Facturas
  if (user.canEditFacturas) {
    menuItems.push({
      title: "Registro de Facturas",
      url: "/facturas",
      icon: FileText,
    });
  }

  // — Gestión de Usuarios
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
                <SidebarMenuButton className="flex items-center gap-2">
                  <User2 className="size-4" />
                  <span>{user.name}</span>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top">
                <DropdownMenuItem>
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
