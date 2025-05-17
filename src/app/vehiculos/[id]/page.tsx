'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { use, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { vehiculoFormSchema } from '@/components/VehiculosForm/VehiculosForm.form';


export default function EditarVehiculopage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(vehiculoFormSchema),
    defaultValues: {
      placa: "",
      versionActual: 1
    }
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`/api/vehiculos/${id}`)
        const vehiculo = await response.json()

        form.reset(vehiculo)
      } catch (error) {
        console.error("Error cargando datos: ", error)
      }
    }

    loadData()
  }, [id, form])

  const onSubmit = async (data: typeof vehiculoFormSchema._type) => {
    const dataToSend = {
      ...data,
      versionActual: data.versionActual + 1
    }
    try {
      const response = await fetch(`/api/vehiculos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      
      if (!response.ok) throw new Error('Error al actualizar');
      // Redirigir o mostrar mensaje de éxito
      router.push('/vehiculos')
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="">
        <h1 className="text-3xl font-bold">Editar vehiculo</h1>
      </div>

      <div className="w-4/5 h-3/4 mb-28">
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
    </div>
  );
}