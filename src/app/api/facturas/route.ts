import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod"

const FacturaSchema = z.object({
  uuid: z.string().optional(),
  estadoSAT: z.string().optional(),
  tipoComprobante: z.string().optional(),
  tipo: z.string().optional(),
  fechaEmision: z.string().datetime(),
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
  fechaPago: z.string().datetime(),
  bancoPago: z.string().optional(),
  folioPago: z.string().optional()
})

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req })

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()

    const validation = FacturaSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Datos inválidos",
          details: validation.error.flatten()
        },
        { status: 400 }
      )
    }

    const result = await prisma.factura.create({
      data: {
        uuid: validation.data.uuid,
        estadoSAT: validation.data.estadoSAT,
        tipoComprobante: validation.data.tipoComprobante,
        tipo: validation.data.tipo,
        fechaEmision: validation.data.fechaEmision,
        serie: validation.data.serie,
        rfcEmisor: validation.data.rfcEmisor,
        nombreEmisor: validation.data.nombreEmisor,
        rfcReceptor: validation.data.rfcReceptor,
        nombreReceptor: validation.data.nombreReceptor,
        usoCFDI: validation.data.usoCFDI,
        subTotal: validation.data.subTotal,
        descuento: validation.data.descuento,
        totalIEPS: validation.data.totalIEPS,
        iva16: validation.data.iva16,
        retenidoIVA: validation.data.retenidoIVA,
        retenidoISR: validation.data.retenidoISR,
        ish: validation.data.ish,
        total: validation.data.total,
        moneda: validation.data.moneda,
        tipoCambio: validation.data.tipoCambio,
        formaPago: validation.data.formaPago,
        metodoPago: validation.data.metodoPago,
        conceptos: validation.data.conceptos,
        regimenFiscalReceptor: validation.data.regimenFiscalReceptor,
        domicilioFiscalReceptor: validation.data.domicilioFiscalReceptor,
        fechaPago: validation.data.fechaPago,
        bancoPago: validation.data.bancoPago,
        folioPago: validation.data.folioPago
      }
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error in POST /api/factura: ", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}


export async function GET() {
  const facturas = await prisma.factura.findMany()

  return NextResponse.json(facturas)
}