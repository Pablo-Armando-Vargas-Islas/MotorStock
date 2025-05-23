import { z } from "zod"
 
export const gastosFormSchema = z.object({
  cantidadRegistros: z.coerce.number().min(1, "El número de registros es requerido").optional(),
  folio: z.string().min(1, "El folio es requerido").max(50),
  vehiculoId: z.string().min(1, { message: "El id del vehiculo es requerido"}),
  fecha: z.date({
    required_error: "La fecha es requerida",
  }),
  razonSocial: z.string().min(1, "La razón social es requerida"),
  banco: z.string().optional(),
  tdc: z.string().optional(),
  proveedor: z.string().min(1, "El proveedor es requerido"),
  concepto: z.string().min(1, "El concepto es requerido"),
  referencia: z.string().optional(),
  documento: z.string().optional(),
  proyecto: z.string().optional(),
  responsable: z.string().min(1, "El responsable es requerido"),
  transferencia: z.coerce.number().min(0.01).optional(),
  entrada: z.coerce.number().min(0.01, "El valor debe ser positivo").optional(),
  salida: z.coerce.number().min(0.01, "El valor debe ser positivo").optional(),
  saldo: z.coerce.number().min(0.01).optional(),
  versionActual: z.number().optional(),
})

export type GastoFormValues = z.infer<typeof gastosFormSchema>