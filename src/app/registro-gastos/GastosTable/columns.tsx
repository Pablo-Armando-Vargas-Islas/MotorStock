"use client"

import { ColumnDef } from "@tanstack/react-table"

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
  }
]