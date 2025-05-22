"use client"

import { zodResolver } from "@hookform/resolvers/zod"
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
import { facturaFormSchema } from "./FacturaForm.form"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { useEffect, useState } from "react"
import { Gasto } from "@/generated/prisma"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command"

type FacturaFormProps = {
  onSuccess: () => void
}

const FacturaForm = ({ onSuccess } : FacturaFormProps) => {
  const [gastos, setGastos] = useState<Gasto[]>([])
  const router = useRouter()
  const form = useForm<z.infer<typeof facturaFormSchema>>({
    resolver: zodResolver(facturaFormSchema),
    defaultValues: {
      gastoId: 0,
      uuid: "",
      estadoSAT: "",
      tipoComprobante: "",
      tipo: "",
      fechaEmision: new Date(),
      serie: "",
      rfcEmisor: "",
      nombreEmisor: "",
      rfcReceptor: "",
      nombreReceptor: "",
      usoCFDI: "",
      subTotal: 0,
      descuento: 0,
      totalIEPS: 0,
      iva16: 0,
      retenidoIVA: 0,
      retenidoISR: 0,
      ish: 0,
      total: 0,
      moneda: "",
      tipoCambio: 0,
      formaPago: "",
      metodoPago: "",
      conceptos: "",
      regimenFiscalReceptor: "",
      domicilioFiscalReceptor: "",
      fechaPago: new Date(),
      bancoPago: "",
      folioPago: ""
    }
  })

  const onSubmit = async (data: z.infer<typeof facturaFormSchema>) => {
    try {
      const datosToSend = {
        ...data,
        fechaEmision: data.fechaEmision.toISOString(),
        fechaPago: data.fechaPago?.toISOString()
      }

      await axios.post("/api/facturas", datosToSend)
      router.refresh()
      toast.success("Factura creada correctamente")
      onSuccess?.()
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error al registrar la factura: ", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status
        })
      } else {
        console.error("Error inesperado: ", error)
      }
    }
  }

  useEffect(() => {
    const fetchGastos = async () => {
      try {
        const res = await fetch("/api/gastos")
        const data = await res.json()
        setGastos(data)
      } catch (error) {
        console.error("Error al obtener los gastos:", error)
      }
    }

    fetchGastos()
  }, [])

  return (
    <div className="max-h-[80vh] overflow-y-auto px-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="gastoId"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Gasto id {'(folio del gasto)'}</FormLabel>
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
                          ? gastos.find(
                              (gasto) => gasto.id === field.value
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
                          {gastos.map((gastos) => (
                            <CommandItem
                              value={gastos.folio}
                              key={gastos.id}
                              onSelect={() => {
                                form.setValue("gastoId", gastos.id)
                              }}
                            >
                              {gastos.folio}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  gastos.id === field.value
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

          {/* uuid */}
          <FormField 
            control={form.control}
            name="uuid"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UUID</FormLabel>
                <FormControl>
                  <Input placeholder="UUID" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* estado SAT */}
          <FormField 
            control={form.control}
            name="estadoSAT"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estado SAT</FormLabel>
                <FormControl>
                  <Input placeholder="Estado SAT" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* tipoComprobante */}
          <FormField 
            control={form.control}
            name="tipoComprobante"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo comprobante</FormLabel>
                <FormControl>
                  <Input placeholder="Tipo comprobante" {...field} />
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

          {/* fechaEmision */}
          <FormField
            control={form.control}
            name="fechaEmision"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha Emision</FormLabel>
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
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
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

          {/* rfcEmisor */}
          <FormField 
            control={form.control}
            name="rfcEmisor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RFC Emisor</FormLabel>
                <FormControl>
                  <Input placeholder="RFC Emisor" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* nombreEmisor */}
          <FormField 
            control={form.control}
            name="nombreEmisor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre emisor</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre emisor" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* rfcReceptor */}
          <FormField 
            control={form.control}
            name="rfcReceptor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RFC Receptor</FormLabel>
                <FormControl>
                  <Input placeholder="RFC Receptor" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* nombreReceptor */}
          <FormField 
            control={form.control}
            name="nombreReceptor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre receptor</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre receptor" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* usoCFDI */}
          <FormField 
            control={form.control}
            name="usoCFDI"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Uso CFDI</FormLabel>
                <FormControl>
                  <Input placeholder="Uso CFDI" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* subTotal */}
          <FormField 
            control={form.control}
            name="subTotal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sub total</FormLabel>
                <FormControl>
                  <Input type="number" min={0} placeholder="Sub total $" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* descuento */}
          <FormField 
            control={form.control}
            name="descuento"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descuento</FormLabel>
                <FormControl>
                  <Input type="number" min={0} placeholder="Descuento" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* totalIEPS */}
          <FormField 
            control={form.control}
            name="totalIEPS"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total IEPS</FormLabel>
                <FormControl>
                  <Input type="number" min={0} placeholder="Total IEPS" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* iva16 */}
          <FormField 
            control={form.control}
            name="iva16"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IVA 16</FormLabel>
                <FormControl>
                  <Input type="number" min={0} placeholder="IVA 16" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* retenidoIVA */}
          <FormField 
            control={form.control}
            name="retenidoIVA"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Retenido IVA</FormLabel>
                <FormControl>
                  <Input type="number" min={0} placeholder="Retenido IVA" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* retenidoISR */}
          <FormField 
            control={form.control}
            name="retenidoISR"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rertenido ISR</FormLabel>
                <FormControl>
                  <Input type="number" min={0} placeholder="Retenido ISR" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ish */}
          <FormField 
            control={form.control}
            name="ish"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ISH</FormLabel>
                <FormControl>
                  <Input type="number" min={0} placeholder="ISH" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* total */}
          <FormField 
            control={form.control}
            name="total"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total</FormLabel>
                <FormControl>
                  <Input type="number" min={0} placeholder="Total $" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* moneda */}
          <FormField 
            control={form.control}
            name="moneda"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Moneda</FormLabel>
                <FormControl>
                  <Input placeholder="Moneda: MXN" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* tipoCambio */}
          <FormField 
            control={form.control}
            name="tipoCambio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo Cambio</FormLabel>
                <FormControl>
                  <Input type="number" min={0} placeholder="Tipo cambio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* formaPago */}
          <FormField 
            control={form.control}
            name="formaPago"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Forma pago</FormLabel>
                <FormControl>
                  <Input placeholder="Forma pago" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* metodoPago */}
          <FormField 
            control={form.control}
            name="metodoPago"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Método Pago</FormLabel>
                <FormControl>
                  <Input placeholder="Método pago" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* conceptos */}
          <FormField 
            control={form.control}
            name="conceptos"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Conceptos</FormLabel>
                <FormControl>
                  <Input placeholder="Conceptos" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* regimenFiscalReceptor */}
          <FormField 
            control={form.control}
            name="regimenFiscalReceptor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Regimen fiscal receptor</FormLabel>
                <FormControl>
                  <Input placeholder="Regimen fiscal receptor" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* domicilioFiscalReceptor */}
          <FormField 
            control={form.control}
            name="domicilioFiscalReceptor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Domicilio Fiscal Receptor</FormLabel>
                <FormControl>
                  <Input placeholder="Domicilio fiscal receptor" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* fechaPago */}
          <FormField
            control={form.control}
            name="fechaPago"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha pago</FormLabel>
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
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* bancoPago */}
          <FormField 
            control={form.control}
            name="bancoPago"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Banco Pago</FormLabel>
                <FormControl>
                  <Input placeholder="Banco pago" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* folioPago */}

          <FormField 
            control={form.control}
            name="folioPago"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Folio Pago</FormLabel>
                <FormControl>
                  <Input placeholder="Folio Pago" {...field} />
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

export default FacturaForm