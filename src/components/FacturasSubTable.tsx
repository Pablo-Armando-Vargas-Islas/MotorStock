// src/components/FacturasSubTable.tsx
"use client";

import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

export function FacturasSubTable({ facturas }) {
  return (
    <div className="p-4">
      <h3 className="font-medium mb-2">Facturas</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>UUID</TableHead>
            <TableHead>Emisión</TableHead>
            <TableHead>Subtotal</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Moneda</TableHead>
            <TableHead>Forma Pago</TableHead>
            {/*… puedes añadir más columnas de Factura aquí…*/}
          </TableRow>
        </TableHeader>
        <TableBody>
          {facturas.map((f) => (
            <TableRow key={f.id}>
              <TableCell>{f.uuid}</TableCell>
              <TableCell>{new Date(f.fechaEmision).toLocaleDateString()}</TableCell>
              <TableCell>{f.subTotal}</TableCell>
              <TableCell>{f.total}</TableCell>
              <TableCell>{f.moneda}</TableCell>
              <TableCell>{f.formaPago}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
