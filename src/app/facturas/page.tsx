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

async function getFacturas(): Promise<Factura[]> {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
  try {
    const res = await axios.get<Factura[]>(`${base}/api/facturas`);
    return res.data;
  } catch {
    return [];
  }
}

const FacturasPage = async () => {
  const data = await getFacturas();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-5 dark:bg-neutral-800">
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Registro de facturas</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant='outline' className="cursor-pointer bg-neutral-950 text-white">Registrar</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-4">Registra una nueva factura</DialogTitle>
              <FacturaForm />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default FacturasPage;
