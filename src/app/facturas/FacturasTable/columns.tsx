"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

export type Factura = {
    id: number;
    uuid: string | null;
    estadoSAT: string | null;
    tipoComprobante: string | null;
    tipo: string | null;
    fechaEmision: string;
    serie: string | null;
    rfcEmisor: string;
    nombreEmisor: string;
    rfcReceptor: string;
    nombreReceptor: string;
    usoCFDI: string;
    subTotal: number;
    descuento: number;
    totalIEPS: number;
    iva16: number;
    retenidoIVA: number;
    retenidoISR: number;
    ish: number;
    total: number;
    moneda: string;
    tipoCambio: number;
    formaPago: string;
    metodoPago: string;
    conceptos: string;
    regimenFiscalReceptor: string | null;
    domicilioFiscalReceptor: string | null;
    fechaPago: string | null;
    bancoPago: string | null;
    folioPago: string | null;
    gastoId: number | null;
    createdAt: string;
};

export const columns: ColumnDef<Factura>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "uuid", header: "UUID" },
    { accessorKey: "estadoSAT", header: "Estado SAT" },
    { accessorKey: "tipoComprobante", header: "Tipo Comprob." },
    { accessorKey: "tipo", header: "Tipo" },
    { accessorKey: "fechaEmision", header: "Fecha Emisión" },
    { accessorKey: "serie", header: "Serie" },
    { accessorKey: "rfcEmisor", header: "RFC Emisor" },
    { accessorKey: "nombreEmisor", header: "Nombre Emisor" },
    { accessorKey: "rfcReceptor", header: "RFC Receptor" },
    { accessorKey: "nombreReceptor", header: "Nombre Receptor" },
    { accessorKey: "usoCFDI", header: "Uso CFDI" },
    { accessorKey: "subTotal", header: "Subtotal" },
    { accessorKey: "descuento", header: "Descuento" },
    { accessorKey: "totalIEPS", header: "Total IEPS" },
    { accessorKey: "iva16", header: "IVA 16%" },
    { accessorKey: "retenidoIVA", header: "Ret. IVA" },
    { accessorKey: "retenidoISR", header: "Ret. ISR" },
    { accessorKey: "ish", header: "ISH" },
    { accessorKey: "total", header: "Total" },
    { accessorKey: "moneda", header: "Moneda" },
    { accessorKey: "tipoCambio", header: "Tipo Cambio" },
    { accessorKey: "formaPago", header: "Forma Pago" },
    { accessorKey: "metodoPago", header: "Método Pago" },
    { accessorKey: "conceptos", header: "Conceptos" },
    { accessorKey: "regimenFiscalReceptor", header: "Rég. Fiscal Receptor" },
    { accessorKey: "domicilioFiscalReceptor", header: "Dom. Fiscal Receptor" },
    { accessorKey: "fechaPago", header: "Fecha Pago" },
    { accessorKey: "bancoPago", header: "Banco Pago" },
    { accessorKey: "folioPago", header: "Folio Pago" },
    {
    id: "action",
    enableHiding: false,
    cell: ({ row }) => {
      const factura = row.original

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
              onClick={() => navigator.clipboard.writeText(factura.uuid ? factura.uuid.toString() : "")}
            >
              Copiar UUID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/facturas/${factura.id}`}>
                Editar factura
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
];
