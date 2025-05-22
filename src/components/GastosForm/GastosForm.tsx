"use client"

import { useForm } from "react-hook-form"
import { gastosFormSchema } from "./GastosForm.form"
import { zodResolver  } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { Calendar } from "../ui/calendar"
import { cn } from "@/lib/utils"
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover"
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react"
import { format } from "date-fns"
import axios from "axios"
import { toast } from "sonner"
import { useEffect, useState } from "react"
import { Vehiculo } from "@/app/vehiculos/VehiculosTable/columns"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command"

type GastoFormProps = {
  onSuccess: () => void
}

const GastosForm = ({ onSuccess } : GastoFormProps) => {
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([])

  const form = useForm<z.infer<typeof gastosFormSchema>>({
    resolver: zodResolver(gastosFormSchema),
    defaultValues: {
      cantidadRegistros: 1,
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
      transferencia: 0,
      entrada: 0,
      salida: 0,
      saldo: 0,
      versionActual: 1,
    }
  })

  const onSubmit = async (values: z.infer<typeof gastosFormSchema>) => {
    try {
      const datosToSend = {
        ...values,
        fecha: values.fecha.toISOString()
      };

      await axios.post("/api/gastos", datosToSend);

      window.location.reload()
      toast.success("Gasto creado correctamente")
      onSuccess?.()
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error al crear el gasto:", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status
        });
      } else {
        console.error("Error inesperado:", error);
      }
      // Puedes añadir un toast de error aquí
    }
  }

  useEffect(() => {
    const fetchVehiculos = async () => {
      try {
        const res = await fetch("/api/vehiculos")
        const data = await res.json()
        setVehiculos(data)
      } catch (error) {
        console.error("Error al obtener los vehículos:", error)
      }
    }

    fetchVehiculos()
  }, [])

  return (
    <div className="max-h-[80vh] overflow-y-auto px-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Cantidad */}
          <FormField 
            control={form.control}
            name="cantidadRegistros"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cantidad Registros</FormLabel>
                <FormControl>
                  <Input type="number" min={1} placeholder="N° registros a crear" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          />

          <FormField
          control={form.control}
          name="vehiculoId"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Placa {'(id del vehiculo)'}</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? vehiculos.find(
                            (vehiculo) => String(vehiculo.id) === field.value
                          )?.id
                        : "Select vehiculo"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandList>
                      <CommandEmpty>No vehiculo found.</CommandEmpty>
                      <CommandGroup>
                        {vehiculos.map((vehiculos) => (
                          <CommandItem
                            value={String(vehiculos.placa)}
                            key={vehiculos.id}
                            onSelect={() => {
                              form.setValue("vehiculoId", String(vehiculos.id))
                            }}
                          >
                            {vehiculos.placa}
                            <Check
                              className={cn(
                                "ml-auto",
                                String(vehiculos.id) === field.value
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
                Placa del vehiculo
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

          {/* vehiculoID
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
          /> */}

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
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
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
                  <Input type="number" placeholder="Transferencia" {...field} />
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

          <Button>Submit</Button>7
        </form>
      </Form>
    </div>
  )
}

export default GastosForm
