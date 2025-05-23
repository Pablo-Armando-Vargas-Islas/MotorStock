'use client'

import FacturaForm from "@/components/FacturaForm/FacturaForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { columns, Factura } from "./FacturasTable/columns";
import { DataTable } from "@/app/registro-gastos/GastosTable/data-table";
import axios from "axios";
import { useEffect, useState } from "react";

async function getFacturas(): Promise<Factura[]> {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
  try {
    const res = await axios.get<Factura[]>(`${base}/api/facturas`);
    return res.data;
  } catch {
    return [];
  }
}

const FacturasPage =  () => {
  const [open, setOpen] = useState(false)

  const handleSuccess = () => {
    setOpen(false)
  }

  const [data, setData] = useState<Factura[]>([])

  useEffect(() => {
    getFacturas().then(setData)
  }, [])


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-5 dark:bg-neutral-800">
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Registro de facturas</h1>

        <a href="/api/descargar-facturas" target="_blank" rel="noopener noreferrer">
          <Button variant='outline' className="cursor-pointer bg-neutral-950 text-white">Descargar facturas</Button>
        </a>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <div className="flex space-between gap-4">
              <Button variant='outline' className="cursor-pointer bg-neutral-950 text-white">Registrar</Button>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-4">Registra una nueva factura</DialogTitle>
              <FacturaForm onSuccess={handleSuccess} />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default FacturasPage;
