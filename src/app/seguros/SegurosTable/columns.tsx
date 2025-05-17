"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"

export type Seguro = {
  id: number
  vehiculoId: string
  compania: string
  precio: number
  fechaInicio: string
  fechaVencimiento: string
  comentario: string
}

export const columns: ColumnDef<Seguro>[] = [
  {
    accessorKey: "id",
    header: "ID"
  },
  {
    accessorKey: "vehiculoId",
    header: "Id vehiculo"
  },
  {
    accessorKey: "compania",
    header: "Compañía"
  },
  {
    accessorKey: "precio",
    header: "Precio"
  },
  {
    accessorKey: "fechaInicio",
    header: "Fecha inicio"
  },
  {
    accessorKey: "fechaVencimiento",
    header: "Fecha vencimiento"
  },
  {
    accessorKey: "comentario",
    header: "Comentario"
  },
  {
    id: "action",
    enableHiding: false,
    cell: ({ row }) => {
      const seguro = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open enu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(seguro.id.toString())}
            >
              Copiar Id
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/seguros/${seguro.id}`}>
                Editar seguro
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]