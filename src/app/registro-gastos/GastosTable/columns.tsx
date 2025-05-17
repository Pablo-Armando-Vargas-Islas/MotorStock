"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"

export type Gasto = {
  id:  number
  folio: string
  vehiculoId: string
  fecha: string
  razonSocial: string
  banco: string
  tdc: string
  proveedor: string
  concepto: string
  referencia: string
  documento: string
  proyecto: string
  responsable: string
  transferencia: string
  entrada: string
  salida: string
  saldo: string
}

export const columns: ColumnDef<Gasto>[] = [
  {
    "accessorKey": "id",
    header: "Id"
  },
  {
    accessorKey: "folio",
    header: "Folio"
  },
  {
    accessorKey: "fecha",
    header: "Fecha"
  },
  {
    accessorKey: "vehiculoId",
    header: "Id Vehiculo"
  },
  {
    accessorKey: "razonSocial",
    header: "Razón Social"
  },
  {
    accessorKey: "banco",
    header: "Banco"
  },
  {
    accessorKey: "tdc",
    header: "TDC"
  },
  {
    accessorKey: "proveedor",
    header: "Proveedor"
  },
  {
    accessorKey: "concepto",
    header: "Concepto"
  },
  {
    accessorKey: "referencia",
    header: "Referencia"
  },
  {
    accessorKey: "documento",
    header: "Documento"
  },
  {
    accessorKey: "proyecto",
    header: "Proyecto"
  },
  {
    accessorKey: "responsable",
    header: "Responsable"
  },
  {
    accessorKey: "transferencia",
    header: "Transferencia"
  },
  {
    accessorKey: "entrada",
    header: "Entrada"
  },
  {
    accessorKey: "salida",
    header: "Salida"
  },
  {
    accessorKey: "saldo",
    header: "Saldo"
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const gasto = row.original

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
              onClick={() => navigator.clipboard.writeText(gasto.folio.toString())}
            >
              Copiar Folio
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/registro-gastos/${gasto.id}`}>
                Editar gasto
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]