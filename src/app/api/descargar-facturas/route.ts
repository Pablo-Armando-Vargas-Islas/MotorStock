import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    const facturas = await prisma.factura.findMany();

    // Convertimos los datos a formato plano para Excel
    const data = facturas.map((factura) => ({
      Id: factura.id,
      UUID: factura.uuid,
      Estado_SAT: factura.estadoSAT,
      Tipo_Comprobante: factura.tipoComprobante,
      Tipo: factura.tipo,
      Fecha_Emision: factura.fechaEmision.toLocaleDateString(),
      Serie: factura.serie,
      RFC_Emisor: factura.rfcEmisor,
      Nombre_Emisor: factura.nombreEmisor,
      RFC_Receptor: factura.rfcReceptor,
      Nombre_Receptor: factura.nombreReceptor,
      Uso_CFDI: factura.usoCFDI,
      Sub_Total: factura.subTotal,
      Descuento: factura.descuento,
      Total_IEPS: factura.totalIEPS,
      Iva16: factura.iva16,
      Retenido_IVA: factura.retenidoIVA,
      Retenido_ISR: factura.retenidoISR,
      ISH: factura.ish,
      Total: factura.total,
      Moneda: factura.moneda,
      Tipo_Cambio: factura.tipoCambio,
      Forma_Pago: factura.formaPago,
      Metodo_Pago: factura.metodoPago,
      Conceptos: factura.conceptos,
      Regimen_Fiscal_Receptor: factura.regimenFiscalReceptor,
      Domicilio_Fiscal_Receptor: factura.domicilioFiscalReceptor,
      Fecha_Pago: factura.fechaPago?.toLocaleDateString(),
      Banco_Pago: factura.bancoPago,
      Folio_Pago: factura.folioPago
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Facturas");

    // Convertir a buffer
    const buffer = XLSX.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    });

    return new NextResponse(buffer, {
      headers: {
        "Content-Disposition": "attachment; filename=facturas.xlsx",
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  } catch (error) {
    console.error("Error al generar Excel:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
