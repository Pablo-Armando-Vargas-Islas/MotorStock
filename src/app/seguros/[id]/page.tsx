'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { use, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { seguroFormSchema } from '@/components/SeguroForm/SeguroForm.form';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { useRouter } from 'next/navigation';

const company = [
  { label: "GM", value: "GM" },
  { label: "HM", value: "HM" },
  { label: "RC", value: "RC" }
] as const

export default function EditarSeguroPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(seguroFormSchema),
    defaultValues: {
      vehiculoId: "",
      compania: "",
      precio: 0,
      fechaInicio: new Date(),
      fechaVencimiento: new Date(),
      comentario: "",
    }
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`/api/seguro/${id}`)
        const seguro = await response.json()

        form.reset({
          ...seguro,
          fechaInicio: new Date(seguro.fechaInicio),
          fechaVencimiento: new Date(seguro.fechaVencimiento)
        })
      } catch (error) {
        console.error("Error cargando datos: ", error)
      }
    }

    loadData()
  }, [id, form])

  const onSubmit = async (data: typeof seguroFormSchema._type) => {
    try {
      const response = await fetch(`/api/seguro/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error('Error al actualizar');
      // Redirigir o mostrar mensaje de éxito
      router.push('/seguros')
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="">
        <h1 className="text-3xl font-bold">Editar seguro</h1>
      </div>

      <div className="w-4/5 h-3/4 mb-28">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* vehiculoId */}
            <FormField 
              control={form.control}
              name="vehiculoId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Vehiculo</FormLabel>
                  <FormControl>
                    <Input placeholder="Id vehiculo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              disabled
            />

            {/* Compañia */}
            <FormField
            control={form.control}
            name="compania"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Compañia</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[200px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? company.find(
                              (company) => company.value === field.value
                            )?.label
                          : "Seleccione compañia"}
                        <ChevronsUpDown className="opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Compañia..."
                        className="h-9"
                      />
                      <CommandList>
                        <CommandEmpty>No hay compañia</CommandEmpty>
                        <CommandGroup>
                          {company.map((company) => (
                            <CommandItem
                              value={company.label}
                              key={company.value}
                              onSelect={() => {
                                form.setValue("compania", company.value)
                              }}
                            >
                              {company.label}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  company.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Escoge el nombre de la compañia.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

            {/* precio */}
            <FormField 
              control={form.control}
              name="precio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Precio</FormLabel>
                  <FormControl>
                    <Input type="number" min={1} placeholder="Precio $1000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
    
            {/* fechaInicio */}   
            <FormField
              control={form.control}
              name="fechaInicio"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Fecha Inicio</FormLabel>
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
                        // disabled={(date) =>
                        //   date > new Date() || date < new Date("1900-01-01")
                        // }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
        
            {/* fechaVencimiento */}  
            <FormField
              control={form.control}
              name="fechaVencimiento"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Fecha Vencimiento</FormLabel>
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
                        // disabled={(date) =>
                        //   date > new Date() || date < new Date("1900-01-01")
                        // }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* comentario */}
            <FormField 
              control={form.control}
              name="comentario"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comentario</FormLabel>
                  <FormControl>
                    <Input placeholder="Comentario" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*  */}

            <Button className="cursor-pointer">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}