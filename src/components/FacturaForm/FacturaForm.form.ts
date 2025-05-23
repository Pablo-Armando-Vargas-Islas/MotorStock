import { z } from 'zod'

export const facturaFormSchema = z.object({
  gastoId: z.coerce.number(),
  uuid: z.string().optional(),
  estadoSAT: z.string().optional(),
  tipoComprobante: z.string().optional(),
  tipo: z.string().optional(),
  fechaEmision: z.date(),

  serie: z.string().optional(),

  rfcEmisor: z.string().min(1, { message: "El rfc del emisor es requerido" }),
  nombreEmisor: z.string().min(1, { message: "El nombre del emisor es requerido" }),

  rfcReceptor: z.string().min(1, { message: "El rfc del receptor es requerido" }),
  nombreReceptor: z.string().min(1, { message: "El nombre del receptor es requerido" }),

  usoCFDI: z.string().min(1, { message: "El uso CFDI es requerido" }),

  subTotal: z.coerce.number().min(0.01).refine(val => !isNaN(val), { message: "El sub total es requerido" }),

  descuento: z.coerce.number().min(0.01).optional(),
  totalIEPS: z.coerce.number().min(0.01).optional(),
  iva16: z.coerce.number().min(0.01).optional(),
  retenidoIVA: z.coerce.number().min(0.01).optional(),
  retenidoISR: z.coerce.number().min(0.01).optional(),
  ish: z.coerce.number().min(0.01).optional(),

  total: z.coerce.number().min(0.01).refine(val => !isNaN(val), { message: "El total es requerido" }),

  moneda: z.string().optional(),

  tipoCambio: z.coerce.number().refine(val => !isNaN(val), { message: "El tipo de cambio es requerido" }),

  formaPago: z.string().min(1, { message: "La forma de pago es requerida" }),
  metodoPago: z.string().min(1, { message: "El método de pago es requerido" }),
  conceptos: z.string().min(1, { message: "Los conceptos son requeridos" }),

  regimenFiscalReceptor: z.string().optional(),
  domicilioFiscalReceptor: z.string().optional(),

  fechaPago: z.date(),
  bancoPago: z.string().optional(),
  folioPago: z.string().optional()
})

export type FacturaFormValues = z.infer<typeof facturaFormSchema>