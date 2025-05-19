"use client"

import SeguroForm from "@/components/SeguroForm/SeguroForm"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DataTable } from "./SegurosTable/data-table"
import { Seguro, columns } from "./SegurosTable/columns"
import axios from "axios"
import { useEffect, useState } from "react"

async function getData(): Promise<Seguro[]> {
  const baseURL = process.env.NEXT_BASE_URL || 'http://localhost:3000'

  try {
    const resultado = await axios.get(`${baseURL}/api/seguro`)
    return resultado.data
  } catch {
    return []
  }
}

const SeguroPage = () => {
  const [open, setOpen] = useState(false)

  const handleSuccess = () => {
    setOpen(false)
  }

  const [data, setData] = useState<Seguro[]>([])

  useEffect(() => {
    getData().then(setData)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-5 dark:bg-neutral-800">
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Registro de seguros</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant='outline' className="cursor-pointer bg-neutral-950 text-white">Registrar</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-4">Registra un nuevo seguro</DialogTitle>
              <SeguroForm onSuccess={handleSuccess}/>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default SeguroPage
