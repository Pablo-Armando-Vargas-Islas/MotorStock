import { z } from "zod";

export const seguroFormSchema = z.object({
  vehiculoId: z.string().min(1, "El vehículo es requerido"),
  compania: z.string().min(1, "La compañía es requerida"),
  precio: z.coerce.number().min(0, "El precio es requerido"),
  fechaInicio: z.date({
    required_error: "La fecha de inicio es requerida",
  }),
  fechaVencimiento: z.date({
    required_error: "La fecha de vencimiento es requerida",
  
  }),
  comentario: z.string().optional(),
  esActual: z.boolean(),
  version: z.coerce.number({ required_error: "La versión es requerida" }).optional(),
})

export type SeguroFormValues = z.infer<typeof seguroFormSchema>