// src/components/VehiclesTable.tsx
"use client";

import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SegurosSubTable } from "@/components/SegurosSubTable";
import { GastosSubTable } from "@/components/GastosSubTable";

export type VehicleRaw = {
  id: string;
  placa: string;
  marca: string;
  tipo: string;
  modelo: number;
  serie: string;
  motor?: string;
  ubicacion?: string;
  proyecto?: string;
  versionActual: number;
  seguros: Array<{
    id: number;
    compania: string;
    precio: number;
    fechaInicio: string;
    fechaVencimiento: string;
    comentario?: string;
  }>;
  gastos: Array<{
    id: number;
    folio: string;
    fecha: string;
    proveedor: string;
    concepto: string;
    responsable: string;
    entrada?: number;
    salida?: number;
    saldo?: number;
    facturas: Array<{
      id: number;
      uuid?: string;
      fechaEmision: string;
      subTotal: number;
      total: number;
      moneda: string;
      formaPago: string;
    }>;
  }>;
};


interface VehiclesTableProps {
  vehicles?: VehicleRaw[];
  canViewSeguros: boolean;
  canViewGastos: boolean;
  canViewFacturas: boolean;
}

export default function VehiclesTable({
  vehicles = [],
  canViewSeguros,
  canViewGastos,
  canViewFacturas,
}: VehiclesTableProps) {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const toggleRow = (idx: number) =>
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));

  const columns: ColumnDef<VehicleRaw>[] = [
    {
      id: "expander",
      header: "",
      cell: ({ row }) => {
        const hasSeguros = canViewSeguros && row.original.seguros.length > 0;
        const hasGastos = canViewGastos && row.original.gastos.length > 0;
        // Si no hay nada que expandir, no mostramos botón
        if (!hasSeguros && !hasGastos) return null;
        return (
          <button onClick={() => toggleRow(row.index)}>
            {expanded[row.index] ? <ChevronUp /> : <ChevronDown />}
          </button>
        );
      },
    },
    { accessorKey: "placa", header: "Placa" },
    { accessorKey: "marca", header: "Marca" },
    { accessorKey: "tipo", header: "Tipo" },
    { accessorKey: "modelo", header: "Modelo" },
    { accessorKey: "serie", header: "Serie" },
    { accessorKey: "motor", header: "Motor" },
    { accessorKey: "ubicacion", header: "Ubicación" },
    { accessorKey: "proyecto", header: "Proyecto" },
    { accessorKey: "versionActual", header: "Versión Actual" },
  ];

  const table = useReactTable({
    data: vehicles,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const rows = table.getRowModel().rows;

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id}>
              {hg.headers.map((h) => (
                <TableHead key={h.id}>
                  {!h.isPlaceholder && flexRender(h.column.columnDef.header, h.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <React.Fragment key={row.id}>
                <TableRow>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>

                {expanded[row.index] && (
                  <TableRow>
                    <TableCell colSpan={columns.length}>
                      {canViewSeguros && (
                        <SegurosSubTable seguros={row.original.seguros} />
                      )}
                      {canViewGastos && (
                        <GastosSubTable
                          gastos={row.original.gastos}
                          canViewFacturas={canViewFacturas}
                        />
                      )}
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="p-4 text-center">
                No hay registros.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
