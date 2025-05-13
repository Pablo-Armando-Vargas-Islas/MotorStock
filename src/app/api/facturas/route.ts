import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const FacturaSchema = z.object({
  uuid: z.string().optional(),
  estadoSAT: z.string().optional(),
  tipoComprobante: z.string().optional(),
  tipo: z.string().optional(),
  fechaEmision: z.string().datetime(),
  serie: z.string().optional(),
  rfcEmisor: z.string().min(1),
  nombreEmisor: z.string().min(1),
  rfcReceptor: z.string().min(1),
  nombreReceptor: z.string().min(1),
  usoCFDI: z.string().min(1),
  subTotal: z.number().nonnegative(),
  descuento: z.number().nonnegative().optional().default(0),
  totalIEPS: z.number().nonnegative().optional().default(0),
  iva16: z.number().nonnegative().optional().default(0),
  retenidoIVA: z.number().nonnegative().optional().default(0),
  retenidoISR: z.number().nonnegative().optional().default(0),
  ish: z.number().nonnegative().optional().default(0),
  total: z.number().nonnegative(),
  moneda: z.string().optional().default("MXN"),
  tipoCambio: z.number().nonnegative().optional().default(0),
  formaPago: z.string().min(1),
  metodoPago: z.string().min(1),
  conceptos: z.string().min(1),
  regimenFiscalReceptor: z.string().optional(),
  domicilioFiscalReceptor: z.string().optional(),
  fechaPago: z.string().datetime().optional(),
  bancoPago: z.string().optional(),
  folioPago: z.string().optional(),
  gastoId: z.number().optional(),
});

export async function POST(req: NextRequest) {
  const token = await getToken({ req });
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const parse = FacturaSchema.safeParse(body);
  if (!parse.success) {
    return NextResponse.json(
      { error: "Datos inválidos", details: parse.error.flatten() },
      { status: 400 }
    );
  }

  const data = parse.data;
  try {
    const factura = await prisma.factura.create({
      data: {
        uuid: data.uuid,
        estadoSAT: data.estadoSAT,
        tipoComprobante: data.tipoComprobante,
        tipo: data.tipo,
        fechaEmision: new Date(data.fechaEmision),
        serie: data.serie,
        rfcEmisor: data.rfcEmisor,
        nombreEmisor: data.nombreEmisor,
        rfcReceptor: data.rfcReceptor,
        nombreReceptor: data.nombreReceptor,
        usoCFDI: data.usoCFDI,
        subTotal: data.subTotal,
        descuento: data.descuento,
        totalIEPS: data.totalIEPS,
        iva16: data.iva16,
        retenidoIVA: data.retenidoIVA,
        retenidoISR: data.retenidoISR,
        ish: data.ish,
        total: data.total,
        moneda: data.moneda,
        tipoCambio: data.tipoCambio,
        formaPago: data.formaPago,
        metodoPago: data.metodoPago,
        conceptos: data.conceptos,
        regimenFiscalReceptor: data.regimenFiscalReceptor,
        domicilioFiscalReceptor: data.domicilioFiscalReceptor,
        fechaPago: data.fechaPago ? new Date(data.fechaPago) : null,
        bancoPago: data.bancoPago,
        folioPago: data.folioPago,
        gastoId: data.gastoId,
      },
    });
    return NextResponse.json(factura, { status: 201 });
  } catch (error: any) {
    console.error("Error en POST /api/facturas:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  const facturas = await prisma.factura.findMany({
    orderBy: { fechaEmision: "asc" },
  });
  return NextResponse.json(facturas);
}
