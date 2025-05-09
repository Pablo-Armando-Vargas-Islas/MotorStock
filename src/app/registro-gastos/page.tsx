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

async function getData(): Promise<Gasto[]> {
  const baseURL = process.env.NEXT_BASE_URL || 'http://localhost:3000'
  try {
    const resultado = await axios.get(`${baseURL}/api/gastos`)
    return resultado.data
  } catch {
    return []
  }
}

const RegistroGastosPage = async () => {
  const data = await getData()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-5 dark:bg-neutral-800 p-4">
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Registro de gastos</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant='outline' className="cursor-pointer bg-neutral-950 text-white">Registrar</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-4">Registra un nuevo gasto</DialogTitle>
              <GastosForm />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default RegistroGastosPage
