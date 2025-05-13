"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  facturaFormSchema,
  FacturaFormValues,
} from "./FacturaForm.form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import axios from "axios";

export default function FacturaForm() {
  const form = useForm<FacturaFormValues>({
    resolver: zodResolver(facturaFormSchema),
    defaultValues: {
      fechaEmision: new Date(),
      subTotal: 0,
      total: 0,
      descuento: 0,
      totalIEPS: 0,
      iva16: 0,
      retenidoIVA: 0,
      retenidoISR: 0,
      ish: 0,
      tipoCambio: 0,
    },
  });

  const onSubmit = async (values: FacturaFormValues) => {
    try {
      const payload = {
        ...values,
        fechaEmision: values.fechaEmision.toISOString(),
        fechaPago: values.fechaPago?.toISOString(),
      };
      await axios.post("/api/facturas", payload);
      // aquí podrías cerrar el dialog o refrescar la lista
    } catch (err) {
      console.error("Error al crear factura:", err);
    }
  };

  return (
    <div className="max-h-[80vh] overflow-y-auto px-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* UUID */}
          <FormField
            control={form.control}
            name="uuid"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UUID</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="UUID (opcional)" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Estado SAT */}
          <FormField
            control={form.control}
            name="estadoSAT"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estado SAT</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Estado SAT (opcional)" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Tipo Comprobante */}
          <FormField
            control={form.control}
            name="tipoComprobante"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo Comprobante</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Tipo Comprobante" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Tipo */}
          <FormField
            control={form.control}
            name="tipo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Tipo (opcional)" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Fecha Emisión */}
          <FormField
            control={form.control}
            name="fechaEmision"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha Emisión</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-[240px] pl-3 text-left",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? format(field.value, "PPP") : "Selecciona"}
                        <CalendarIcon className="ml-auto h-4 w-4" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Serie */}
          <FormField
            control={form.control}
            name="serie"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Serie</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Serie (opcional)" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* RFC Emisor */}
          <FormField
            control={form.control}
            name="rfcEmisor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RFC Emisor</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nombre Emisor */}
          <FormField
            control={form.control}
            name="nombreEmisor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre Emisor</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* RFC Receptor */}
          <FormField
            control={form.control}
            name="rfcReceptor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RFC Receptor</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nombre Receptor */}
          <FormField
            control={form.control}
            name="nombreReceptor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre Receptor</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Uso CFDI */}
          <FormField
            control={form.control}
            name="usoCFDI"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Uso CFDI</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subtotal */}
          <FormField
            control={form.control}
            name="subTotal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subtotal</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Descuento */}
          <FormField
            control={form.control}
            name="descuento"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descuento</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Total IEPS */}
          <FormField
            control={form.control}
            name="totalIEPS"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total IEPS</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* IVA16 */}
          <FormField
            control={form.control}
            name="iva16"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IVA 16%</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Retenido IVA */}
          <FormField
            control={form.control}
            name="retenidoIVA"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Retenido IVA</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Retenido ISR */}
          <FormField
            control={form.control}
            name="retenidoISR"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Retenido ISR</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ISH */}
          <FormField
            control={form.control}
            name="ish"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ISH</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Total */}
          <FormField
            control={form.control}
            name="total"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Moneda */}
          <FormField
            control={form.control}
            name="moneda"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Moneda</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="MXN" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Tipo Cambio */}
          <FormField
            control={form.control}
            name="tipoCambio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo Cambio</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Forma Pago */}
          <FormField
            control={form.control}
            name="formaPago"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Forma de Pago</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Método Pago */}
          <FormField
            control={form.control}
            name="metodoPago"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Método de Pago</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Conceptos */}
          <FormField
            control={form.control}
            name="conceptos"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Conceptos</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Régimen Fiscal Receptor */}
          <FormField
            control={form.control}
            name="regimenFiscalReceptor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Régimen Fiscal Receptor</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Domicilio Fiscal Receptor */}
          <FormField
            control={form.control}
            name="domicilioFiscalReceptor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Domicilio Fiscal Receptor</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Fecha Pago */}
          <FormField
            control={form.control}
            name="fechaPago"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha de Pago</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-[240px] pl-3 text-left",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? format(field.value, "PPP") : "Opcional"}
                        <CalendarIcon className="ml-auto h-4 w-4" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Banco Pago */}
          <FormField
            control={form.control}
            name="bancoPago"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Banco Pago</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Folio Pago */}
          <FormField
            control={form.control}
            name="folioPago"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Folio Pago</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Vínculo a Gasto */}
          <FormField
            control={form.control}
            name="gastoId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID de Gasto (opcional)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Registrar Factura</Button>
        </form>
      </Form>
    </div>
  );
}
