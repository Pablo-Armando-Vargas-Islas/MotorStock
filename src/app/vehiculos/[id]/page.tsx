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
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`/api/vehiculos/${id}`)
        const vehiculo = await response.json()

        form.reset({
          versiones: [],
          seguros: [],
          gastos: [],
          ...vehiculo,
        })
      } catch (error) {
        console.error("Error cargando datos: ", error)
      }
    }

    loadData()
  }, [id, form])

  const onSubmit = async (data: typeof vehiculoFormSchema._type) => {
    const dataToSend = {
      ...data,
      versionActual: (data.versionActual ?? 0) + 1,
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

          <Button className="cursor-pointer">Submit</Button>

          {Object.keys(form.formState.errors).length > 0 && (
  <pre className="text-red-500">{JSON.stringify(form.formState.errors, null, 2)}</pre>
)}
        </form>
      </Form>
      </div>
    </div>
  );
}