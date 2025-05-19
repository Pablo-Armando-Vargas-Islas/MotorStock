"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { seguroFormSchema } from "./SeguroForm.form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover"
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react"
import { format } from "date-fns"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form, FormDescription } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import axios from "axios"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

type SeguroFormProps = {
  onSuccess: () => void
}

const company = [
  { label: "GM", value: "GM" },
  { label: "HM", value: "HM" },
  { label: "RC", value: "RC" }
] as const

const SeguroForm = ({ onSuccess } :  SeguroFormProps) => {
  const router = useRouter()
  const form = useForm<z.infer<typeof seguroFormSchema>>({
    resolver: zodResolver(seguroFormSchema),
    defaultValues: {
      vehiculoId: "",
      compania: "",
      precio: 0,
      fechaInicio: new Date(),
      fechaVencimiento: new Date(),
      comentario: "",
      esActual: true,
      version: 1
    }
  })

  const onSubmit = async (data: z.infer<typeof seguroFormSchema>) => {
    try {
      const datosToSend = {
        ...data,
        fechaInicio: data.fechaInicio.toISOString(),
        fechaVencimiento: data.fechaVencimiento.toISOString()
      }

      await axios.post("/api/seguro", datosToSend)

      router.refresh()
      toast.success("Gasto creado correctamente")
      onSuccess?.()
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error al registrar el seguro: ", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status
        })
      } else {
        console.error("Error inesperado: ", error)
      }
    }
  }

  return (
    <div className="max-h-[80vh] overflow-y-auto px-4">
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
                      selected={field.value}
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
                      selected={field.value}
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
  )
}

export default SeguroForm
