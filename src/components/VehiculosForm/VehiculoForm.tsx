"use client"

import { z } from 'zod'
import { useForm } from "react-hook-form"
import { vehiculoFormSchema } from './VehiculosForm.form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const VehiculoForm = () => {
  const form = useForm<z.infer<typeof vehiculoFormSchema>>({
    resolver: zodResolver(vehiculoFormSchema),
    defaultValues: {
      placa: "",
      versionActual: 1,
    }
  })

  const onSubmit = async (data: z.infer<typeof vehiculoFormSchema>) => {
    try {
      const datosToSend = {
        ...data
      }

      await axios.post("/api/vehiculos", datosToSend)
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

          <Button className="cursor-pointer">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default VehiculoForm
