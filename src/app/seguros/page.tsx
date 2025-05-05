import SeguroForm from "@/components/SeguroForm/SeguroForm"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-5 dark:bg-neutral-800">
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Registro de seguros</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant='outline' className="cursor-pointer bg-neutral-950 text-white">Registrar</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-4">Registra un nuevo seguro</DialogTitle>
              <SeguroForm />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default page
