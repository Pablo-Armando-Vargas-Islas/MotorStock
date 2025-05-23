"use client";

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FacturasSubTable } from "@/components/FacturasSubTable";

interface Factura {
  id: number;
  uuid?: string;
  fechaEmision: string;
  subTotal: number;
  total: number;
  moneda: string;
  formaPago: string;
}

interface Gasto {
  id: number;
  folio: string;
  fecha: string;
  razonSocial: string;
  banco?: string;
  tdc?: string;
  proveedor: string;
  concepto: string;
  referencia?: string;
  documento?: string;
  proyecto?: string;
  responsable: string;
  transferencia?: number;
  entrada?: number;
  salida?: number;
  saldo?: number;
  versionActual: number;
  createdAt: string;
  facturas: Factura[];
}

interface GastosSubTableProps {
  gastos: Gasto[];
  canViewFacturas: boolean;
}

export function GastosSubTable({ gastos, canViewFacturas }: GastosSubTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const toggle = (idx: number) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  return (
    <div className="p-4">
      <h2 className="font-semibold mb-2">Gastos</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead />
            <TableHead>Folio</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Concepto</TableHead>
            <TableHead>Proveedor</TableHead>
            <TableHead>Responsable</TableHead>
            <TableHead>Entrada</TableHead>
            <TableHead>Salida</TableHead>
            <TableHead>Saldo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gastos.map((g, i) => (
            <React.Fragment key={g.id}>
              <TableRow>
                <TableCell>
                  {canViewFacturas && (
                    <button onClick={() => toggle(i)}>
                      {expandedRows.has(i) ? <ChevronUp /> : <ChevronDown />}
                    </button>
                  )}
                </TableCell>
                <TableCell>{g.folio}</TableCell>
                <TableCell>{new Date(g.fecha).toLocaleDateString()}</TableCell>
                <TableCell>{g.concepto}</TableCell>
                <TableCell>{g.proveedor}</TableCell>
                <TableCell>{g.responsable}</TableCell>
                <TableCell>{g.entrada ?? "-"}</TableCell>
                <TableCell>{g.salida ?? "-"}</TableCell>
                <TableCell>{g.saldo ?? "-"}</TableCell>
              </TableRow>

              {expandedRows.has(i) && (
                <TableRow>
                  <TableCell colSpan={9}>
                    <FacturasSubTable facturas={g.facturas} />
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
