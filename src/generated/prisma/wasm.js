
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  user: 'user',
  password: 'password',
  role: 'role',
  canViewSeguros: 'canViewSeguros',
  canViewGastos: 'canViewGastos',
  canViewFacturas: 'canViewFacturas',
  canEditSeguros: 'canEditSeguros',
  canEditGastos: 'canEditGastos',
  canEditFacturas: 'canEditFacturas',
  canManageUsers: 'canManageUsers',
  allowedCompanies: 'allowedCompanies'
};

exports.Prisma.VehiculoScalarFieldEnum = {
  id: 'id',
  placa: 'placa',
  versionActual: 'versionActual',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VersionVehiculoScalarFieldEnum = {
  id: 'id',
  vehiculoId: 'vehiculoId',
  placa: 'placa',
  placaAnterior: 'placaAnterior',
  marca: 'marca',
  tipo: 'tipo',
  modelo: 'modelo',
  color: 'color',
  serie: 'serie',
  motor: 'motor',
  proyecto: 'proyecto',
  ubicacion: 'ubicacion',
  version: 'version',
  esActual: 'esActual',
  fechaCambio: 'fechaCambio',
  motivoCambio: 'motivoCambio',
  usuarioCambio: 'usuarioCambio'
};

exports.Prisma.SeguroScalarFieldEnum = {
  id: 'id',
  vehiculoId: 'vehiculoId',
  compania: 'compania',
  precio: 'precio',
  fechaInicio: 'fechaInicio',
  fechaVencimiento: 'fechaVencimiento',
  comentario: 'comentario',
  esActual: 'esActual',
  version: 'version',
  createdAt: 'createdAt'
};

exports.Prisma.GastoScalarFieldEnum = {
  id: 'id',
  folio: 'folio',
  vehiculoId: 'vehiculoId',
  fecha: 'fecha',
  razonSocial: 'razonSocial',
  banco: 'banco',
  tdc: 'tdc',
  proveedor: 'proveedor',
  concepto: 'concepto',
  referencia: 'referencia',
  documento: 'documento',
  proyecto: 'proyecto',
  responsable: 'responsable',
  transferencia: 'transferencia',
  entrada: 'entrada',
  salida: 'salida',
  saldo: 'saldo',
  createdAt: 'createdAt'
};

exports.Prisma.FacturaScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  estadoSAT: 'estadoSAT',
  tipoComprobante: 'tipoComprobante',
  tipo: 'tipo',
  fechaEmision: 'fechaEmision',
  serie: 'serie',
  rfcEmisor: 'rfcEmisor',
  nombreEmisor: 'nombreEmisor',
  rfcReceptor: 'rfcReceptor',
  nombreReceptor: 'nombreReceptor',
  usoCFDI: 'usoCFDI',
  subTotal: 'subTotal',
  descuento: 'descuento',
  totalIEPS: 'totalIEPS',
  iva16: 'iva16',
  retenidoIVA: 'retenidoIVA',
  retenidoISR: 'retenidoISR',
  ish: 'ish',
  total: 'total',
  moneda: 'moneda',
  tipoCambio: 'tipoCambio',
  formaPago: 'formaPago',
  metodoPago: 'metodoPago',
  conceptos: 'conceptos',
  regimenFiscalReceptor: 'regimenFiscalReceptor',
  domicilioFiscalReceptor: 'domicilioFiscalReceptor',
  fechaPago: 'fechaPago',
  bancoPago: 'bancoPago',
  folioPago: 'folioPago',
  gastoId: 'gastoId',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  REGISTRO_GASTOS: 'REGISTRO_GASTOS',
  SEGUROS: 'SEGUROS',
  CONSULTA: 'CONSULTA',
  CONTADOR: 'CONTADOR',
  ADMIN: 'ADMIN',
  AUDITOR: 'AUDITOR'
};

exports.Compania = exports.$Enums.Compania = {
  GM: 'GM',
  HM: 'HM',
  RC: 'RC'
};

exports.Prisma.ModelName = {
  User: 'User',
  Vehiculo: 'Vehiculo',
  VersionVehiculo: 'VersionVehiculo',
  Seguro: 'Seguro',
  Gasto: 'Gasto',
  Factura: 'Factura'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
