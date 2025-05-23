"use client"

import GastosForm from "@/components/GastosForm/GastosForm"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Gasto, columns } from "@/app/registro-gastos/GastosTable/columns";
import { DataTable} from "@/app/registro-gastos/GastosTable/data-table";
import axios from "axios";
import { useEffect, useState } from "react";

async function getData(): Promise<Gasto[]> {
  const baseURL = process.env.NEXT_BASE_URL || 'http://localhost:3000'
  try {
    const resultado = await axios.get(`${baseURL}/api/gastos`)
    return resultado.data
  } catch {
    return []
  }
}

const RegistroGastosPage = () => {
  const [open, setOpen] = useState(false)

  const handleSuccess = () => {
    setOpen(false)
  }

  const [data, setData] = useState<Gasto[]>([])

  useEffect(() => {
    getData().then(setData)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-5 dark:bg-neutral-800 p-4">
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Registro de gastos</h1>

        <a href="/api/descargar-gastos" target="_blank" rel="noopener noreferrer">
          <Button variant='outline' className="cursor-pointer bg-neutral-950 text-white">Descargar gastos</Button>
        </a>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <div className="flex space-between gap-4">
              <Button variant='outline' className="cursor-pointer bg-neutral-950 text-white">Registrar</Button>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-4">Registra un nuevo gasto</DialogTitle>
              <GastosForm onSuccess={handleSuccess} />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default RegistroGastosPage
