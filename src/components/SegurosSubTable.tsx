// src/components/SegurosSubTable.tsx
"use client";

import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

interface Seguro {
  id: string | number;
  compania: string;
  precio: number;
  fechaInicio: string | Date;
  fechaVencimiento: string | Date;
  comentario?: string;
}

interface SegurosSubTableProps {
  seguros: Seguro[];
}

export function SegurosSubTable({ seguros }: SegurosSubTableProps) {
  return (
    <div className="p-4">
      <h2 className="font-semibold mb-2">Seguros</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Compañía</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Inicio</TableHead>
            <TableHead>Vencimiento</TableHead>
            <TableHead>Comentario</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {seguros.map((s) => (
            <TableRow key={s.id}>
              <TableCell>{s.compania}</TableCell>
              <TableCell>{s.precio}</TableCell>
              <TableCell>{new Date(s.fechaInicio).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(s.fechaVencimiento).toLocaleDateString()}</TableCell>
              <TableCell>{s.comentario ?? "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
