"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

export type Vehiculo = {
  id: number
  placa: string
  versionActual: string
}

export const columns: ColumnDef<Vehiculo>[] = [
  {
    "accessorKey": "id",
    header: "Id"
  },
  {
    accessorKey: "placa",
    header: "Placa"
  },
  {
    accessorKey: "versionActual",
    header: "Version Actual"
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const vehiculo = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(vehiculo.id.toString())}
            >
              Copiar Id
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Editar vehiculo</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]