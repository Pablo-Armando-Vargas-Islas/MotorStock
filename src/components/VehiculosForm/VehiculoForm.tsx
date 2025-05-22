"use client"

import { z } from 'zod'
import { useForm } from "react-hook-form"
import { vehiculoFormSchema } from './VehiculosForm.form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { toast } from 'sonner'

type VehiculoFormProps = {
  onSuccess: () => void
}

const VehiculoForm = ({ onSuccess } : VehiculoFormProps) => {

  const form = useForm<z.infer<typeof vehiculoFormSchema>>({
    resolver: zodResolver(vehiculoFormSchema),
    defaultValues: {
      placa: "",
      marca: "",
      tipo: "",
      modelo: 0,
      serie: "",
      motor: "",
      ubicacion: "",
      proyecto: "",
      versionActual: 1,
      versiones: [],
      seguros: [],
      gastos: [],
    }
  })

  const onSubmit = async (data: z.infer<typeof vehiculoFormSchema>) => {
    try {
      const datosToSend = {
        ...data,
      }

      await axios.post("/api/vehiculos", datosToSend)

      window.location.reload()
      toast.success("Vehiculo registrado correctamente")
      onSuccess?.()
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error al regsitrar el seguro: ", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status
        })
      } else {
        console.error("Erro inesperado: ", error)
      }
    }
  }

  return (
    <div className='max-h-[80vh] overflow-y-auto px-4'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          {/* placa */}
          <FormField
            control={form.control}
            name="placa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Placa</FormLabel>
                <FormControl>
                  <Input placeholder="Placa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* marca */}
          <FormField
            control={form.control}
            name="marca"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marca</FormLabel>
                <FormControl>
                  <Input placeholder="Marca" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* tipo */}

          <FormField
            control={form.control}
            name="tipo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo</FormLabel>
                <FormControl>
                  <Input placeholder="Tipo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* modelo */}
          <FormField
            control={form.control}
            name="modelo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Año</FormLabel>
                <FormControl>
                  <Input type='number' min={1900} max={new Date().getFullYear() + 1}placeholder="Año" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* serie */}
          <FormField
            control={form.control}
            name="serie"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Serie</FormLabel>
                <FormControl>
                  <Input placeholder="Serie" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* motor */}
          <FormField
            control={form.control}
            name="motor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Motor</FormLabel>
                <FormControl>
                  <Input placeholder="Motor" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ubicacion */}
          <FormField
            control={form.control}
            name="ubicacion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ubicación</FormLabel>
                <FormControl>
                  <Input placeholder="Ubicación" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* proyecto */}
          <FormField
            control={form.control}
            name="proyecto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Proyecto</FormLabel>
                <FormControl>
                  <Input placeholder="Proyecto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className="cursor-pointer my-2">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default VehiculoForm
