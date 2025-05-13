import { z } from "zod";

export const facturaFormSchema = z
  .object({
    uuid: z.string().optional(),
    estadoSAT: z.string().optional(),
    tipoComprobante: z.string().optional(),
    tipo: z.string().optional(),
    fechaEmision: z.date({
      required_error: "La fecha de emisión es requerida",
    }),
    serie: z.string().optional(),
    rfcEmisor: z.string().min(1, "El RFC del emisor es requerido"),
    nombreEmisor: z.string().min(1, "El nombre del emisor es requerido"),
    rfcReceptor: z.string().min(1, "El RFC del receptor es requerido"),
    nombreReceptor: z.string().min(
      1,
      "El nombre del receptor es requerido"
    ),
    usoCFDI: z.string().min(1, "El uso CFDI es requerido"),
    subTotal: z.coerce
      .number({ invalid_type_error: "El subtotal debe ser un número" })
      .min(0, "El subtotal no puede ser negativo"),
    descuento: z.coerce.number().min(0).optional().default(0),
    totalIEPS: z.coerce.number().min(0).optional().default(0),
    iva16: z.coerce.number().min(0).optional().default(0),
    retenidoIVA: z.coerce.number().min(0).optional().default(0),
    retenidoISR: z.coerce.number().min(0).optional().default(0),
    ish: z.coerce.number().min(0).optional().default(0),
    total: z.coerce
      .number({ invalid_type_error: "El total debe ser un número" })
      .min(0, "El total no puede ser negativo"),
    moneda: z.string().optional().default("MXN"),
    tipoCambio: z.coerce.number().min(0).optional().default(0),
    formaPago: z.string().min(1, "La forma de pago es requerida"),
    metodoPago: z.string().min(1, "El método de pago es requerido"),
    conceptos: z.string().min(1, "El campo conceptos es requerido"),
    regimenFiscalReceptor: z.string().optional(),
    domicilioFiscalReceptor: z.string().optional(),
    fechaPago: z.date().optional(),
    bancoPago: z.string().optional(),
    folioPago: z.string().optional(),
    gastoId: z.coerce.number().optional(),
  });

export type FacturaFormValues = z.infer<typeof facturaFormSchema>;
