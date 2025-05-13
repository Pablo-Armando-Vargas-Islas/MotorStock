"use client";

import { ColumnDef } from "@tanstack/react-table";

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
    { accessorKey: "gastoId", header: "ID Gasto" },
    { accessorKey: "createdAt", header: "Creado" },
];
