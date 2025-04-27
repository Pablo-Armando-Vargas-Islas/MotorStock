import GastosForm from "@/components/GastosForm/GastosForm"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const RegistroGastosPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-5 dark:bg-neutral-800">
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Registro de gastos</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant='outline' className="cursor-pointer">Registrar</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-4">Registra un nuevo gasto</DialogTitle>
              <GastosForm />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default RegistroGastosPage
