import { z } from 'zod'

export const facturaFormSchema = z.object({
  uuid: z.string().optional(),
  estadoSAT: z.string().optional(),
  tipoComprobante: z.string().optional(),
  tipo: z.string().optional(),
  fechaEmision: z.date({
    required_error: "La fecha de emision es requerida"
  }),
  serie: z.string().optional(),
  rfcEmisor: z.string({
    required_error: "El rfc del emisor es requerido"
  }),
  nombreEmisor: z.string({
    required_error: "El nombre del emisor es requerido"
  }),
  rfcReceptor: z.string({
    required_error: "El rfc del receptor es requerido"
  }),
  nombreReceptor: z.string({
    required_error: "El nombre del receptor es requerido"
  }),
  usoCFDI: z.string({
    required_error: "El uso CFDI es requerido"
  }),
  subTotal: z.coerce.number({
    required_error: "El sub total es requerido"
  }),
  descuento: z.coerce.number().optional(),
  totalIEPS: z.coerce.number().optional(),
  iva16: z.coerce.number().optional(),
  retenidoIVA: z.coerce.number().optional(),
  retenidoISR: z.coerce.number().optional(),
  ish: z.coerce.number().optional(),
  total: z.coerce.number({
    required_error: "El total es requerido"
  }),
  moneda: z.string().optional(),
  tipoCambio: z.coerce.number({
    required_error: "El tipo de cambio es requerido"
  }),
  formaPago: z.string({
    required_error: "La forma de pago es requerida"
  }),
  metodoPago: z.string({
    required_error: "El método de pago es requerido"
  }),
  conceptos: z.string({
    required_error: "Los conceptos son requeridos"
  }),
  regimenFiscalReceptor: z.string().optional(),
  domicilioFiscalReceptor: z.string().optional(),
  fechaPago: z.date().optional(),
  bancoPago: z.string().optional(),
  folioPago: z.string().optional()
})

export type FacturaFormValues = z.infer<typeof facturaFormSchema>