'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { gastosFormSchema } from '@/components/GastosForm/GastosForm.form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { use, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function EditarGastoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(gastosFormSchema),
    defaultValues: {
      folio: "",
      vehiculoId: "",
      fecha: new Date(),
      razonSocial: "",
      banco: "",
      tdc: "",
      proveedor: "",
      concepto: "",
      referencia: "",
      documento: "",
      proyecto: "",
      responsable: "",
      transferencia: "",
      entrada: 0,
      salida: 0,
      saldo: 0
    }
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`/api/gastos/${id}`)
        const gasto = await response.json()

        
        form.reset({
          ...gasto,
          fecha: new Date(gasto.fecha)
        })
      } catch (error) {
        console.error("Error cargando datos: ", error)
      }
    }

    loadData()
  }, [id, form])

  const onSubmit = async (data: typeof gastosFormSchema._type) => {
    try {
      const response = await fetch(`/api/gastos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error('Error al actualizar');
      // Redirigir o mostrar mensaje de éxito
      router.push('/registro-gastos')
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="">
        <h1 className="text-3xl font-bold">Editar gasto</h1>
      </div>

      <div className="w-4/5 h-3/4 mb-28">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Folio */}
            <FormField 
              control={form.control}
              name="folio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Folio</FormLabel>
                  <FormControl>
                    <Input placeholder="Folio" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              disabled
            />

            {/* vehiculoID */}
            <FormField 
              control={form.control}
              name="vehiculoId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Vehiculo</FormLabel>
                  <FormControl>
                    <Input placeholder="ID Vehiculo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              disabled            
            />

            {/* Fecha */}
            <FormField
              control={form.control}
              name="fecha"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Fecha</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        className="bg-white dark:bg-background rounded-md border shadow"
                        mode="single"
                        selected={field.value instanceof Date ? field.value : undefined}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Razon Social */}
            <FormField 
              control={form.control}
              name="razonSocial"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Razon Social</FormLabel>
                  <FormControl>
                    <Input placeholder="Razon social" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Banco */}
            <FormField 
              control={form.control}
              name="banco"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Banco</FormLabel>
                  <FormControl>
                    <Input placeholder="Banco" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* tdc */}
            <FormField 
              control={form.control}
              name="tdc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tarjeta de crédito</FormLabel>
                  <FormControl>
                    <Input placeholder="Tarjeta de crédito" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Proveedor */}
            <FormField 
              control={form.control}
              name="proveedor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Proveedor</FormLabel>
                  <FormControl>
                    <Input placeholder="Proveedor" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Concepto */}
            <FormField 
              control={form.control}
              name="concepto"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Concepto</FormLabel>
                  <FormControl>
                    <Input placeholder="Concepto" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Referencia */}
            <FormField 
              control={form.control}
              name="referencia"

              render={({ field }) => (
                <FormItem>
                  <FormLabel>Referencia</FormLabel>
                  <FormControl>
                    <Input placeholder="Referencia" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Documento */}
            <FormField 
              control={form.control}
              name="documento"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Documento</FormLabel>
                  <FormControl>
                    <Input placeholder="Documento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Proyecto */}
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

            {/* Responsable */}
            <FormField 
              control={form.control}
              name="responsable"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Responsable</FormLabel>
                  <FormControl>
                    <Input placeholder="Responsable" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Transferencia */}
            <FormField 
              control={form.control}
              name="transferencia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transferencia</FormLabel>
                  <FormControl>
                    <Input placeholder="Transferencia" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Entrada */}
            <FormField 
              control={form.control}
              name="entrada"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Entrada</FormLabel>
                  <FormControl>
                    <Input type="number" min={0} placeholder="Entrada" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Salida */}
            <FormField 
              control={form.control}
              name="salida"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Salida</FormLabel>
                  <FormControl>
                    <Input type="number" min={0} placeholder="Salida" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Saldo */}
            <FormField 
              control={form.control}
              name="saldo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Saldo</FormLabel>
                  <FormControl>
                    <Input type="number" min={0} placeholder="Saldo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Guardar cambios</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}