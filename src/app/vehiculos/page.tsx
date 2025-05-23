"use client"

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import VehiculoForm from '@/components/VehiculosForm/VehiculoForm'
import React, { useEffect, useState } from 'react'
import { DataTable } from './VehiculosTable/data-table'
import { columns, Vehiculo } from './VehiculosTable/columns'
import axios from 'axios'

async function getData(): Promise<Vehiculo[]> {
  const baseURL = process.env.NEXT_BASE_URL || 'http://localhost:3000'

  try {
    const resultado = await axios.get(`${baseURL}/api/vehiculos`)
    return resultado.data
  } catch {
    return []
  }
}

const VehiculosPage = () => {
  const [open, setOpen] = useState(false)

  const handleSuccess = () => {
    setOpen(false)
  }
  const [data, setData] = useState<Vehiculo[]>([])

  useEffect(() => {
    getData().then(setData)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-5 dark:bg-neutral-800">
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Registro de vehiculos</h1>

        <a href="/api/descargar-vehiculos" target="_blank" rel="noopener noreferrer">
          <Button variant='outline' className="cursor-pointer bg-neutral-950 text-white">Descargar vehiculos</Button>
        </a>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant='outline' className="cursor-pointer bg-neutral-950 text-white">Registrar</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-4">Registra un nuevo vehiculo</DialogTitle>
              <VehiculoForm onSuccess={handleSuccess} />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default VehiculosPage
