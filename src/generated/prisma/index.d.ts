
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vehiculo
 * 
 */
export type Vehiculo = $Result.DefaultSelection<Prisma.$VehiculoPayload>
/**
 * Model Seguro
 * 
 */
export type Seguro = $Result.DefaultSelection<Prisma.$SeguroPayload>
/**
 * Model Gasto
 * 
 */
export type Gasto = $Result.DefaultSelection<Prisma.$GastoPayload>
/**
 * Model Factura
 * 
 */
export type Factura = $Result.DefaultSelection<Prisma.$FacturaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SEGUROS: 'SEGUROS',
  GASTOS: 'GASTOS',
  CONTADOR: 'CONTADOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CompaniaSeguro: {
  GM: 'GM',
  RF: 'RF',
  HM: 'HM'
};

export type CompaniaSeguro = (typeof CompaniaSeguro)[keyof typeof CompaniaSeguro]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CompaniaSeguro = $Enums.CompaniaSeguro

export const CompaniaSeguro: typeof $Enums.CompaniaSeguro

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehiculo`: Exposes CRUD operations for the **Vehiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehiculos
    * const vehiculos = await prisma.vehiculo.findMany()
    * ```
    */
  get vehiculo(): Prisma.VehiculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seguro`: Exposes CRUD operations for the **Seguro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seguros
    * const seguros = await prisma.seguro.findMany()
    * ```
    */
  get seguro(): Prisma.SeguroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gasto`: Exposes CRUD operations for the **Gasto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gastos
    * const gastos = await prisma.gasto.findMany()
    * ```
    */
  get gasto(): Prisma.GastoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.factura`: Exposes CRUD operations for the **Factura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facturas
    * const facturas = await prisma.factura.findMany()
    * ```
    */
  get factura(): Prisma.FacturaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Vehiculo: 'Vehiculo',
    Seguro: 'Seguro',
    Gasto: 'Gasto',
    Factura: 'Factura'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vehiculo" | "seguro" | "gasto" | "factura"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vehiculo: {
        payload: Prisma.$VehiculoPayload<ExtArgs>
        fields: Prisma.VehiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          findFirst: {
            args: Prisma.VehiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          findMany: {
            args: Prisma.VehiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>[]
          }
          create: {
            args: Prisma.VehiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          createMany: {
            args: Prisma.VehiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehiculoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>[]
          }
          delete: {
            args: Prisma.VehiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          update: {
            args: Prisma.VehiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          deleteMany: {
            args: Prisma.VehiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehiculoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>[]
          }
          upsert: {
            args: Prisma.VehiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          aggregate: {
            args: Prisma.VehiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehiculo>
          }
          groupBy: {
            args: Prisma.VehiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehiculoCountArgs<ExtArgs>
            result: $Utils.Optional<VehiculoCountAggregateOutputType> | number
          }
        }
      }
      Seguro: {
        payload: Prisma.$SeguroPayload<ExtArgs>
        fields: Prisma.SeguroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeguroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeguroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguroPayload>
          }
          findFirst: {
            args: Prisma.SeguroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeguroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguroPayload>
          }
          findMany: {
            args: Prisma.SeguroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguroPayload>[]
          }
          create: {
            args: Prisma.SeguroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguroPayload>
          }
          createMany: {
            args: Prisma.SeguroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeguroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguroPayload>[]
          }
          delete: {
            args: Prisma.SeguroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguroPayload>
          }
          update: {
            args: Prisma.SeguroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguroPayload>
          }
          deleteMany: {
            args: Prisma.SeguroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeguroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeguroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguroPayload>[]
          }
          upsert: {
            args: Prisma.SeguroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguroPayload>
          }
          aggregate: {
            args: Prisma.SeguroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeguro>
          }
          groupBy: {
            args: Prisma.SeguroGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeguroGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeguroCountArgs<ExtArgs>
            result: $Utils.Optional<SeguroCountAggregateOutputType> | number
          }
        }
      }
      Gasto: {
        payload: Prisma.$GastoPayload<ExtArgs>
        fields: Prisma.GastoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GastoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GastoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          findFirst: {
            args: Prisma.GastoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GastoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          findMany: {
            args: Prisma.GastoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>[]
          }
          create: {
            args: Prisma.GastoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          createMany: {
            args: Prisma.GastoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GastoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>[]
          }
          delete: {
            args: Prisma.GastoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          update: {
            args: Prisma.GastoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          deleteMany: {
            args: Prisma.GastoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GastoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GastoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>[]
          }
          upsert: {
            args: Prisma.GastoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastoPayload>
          }
          aggregate: {
            args: Prisma.GastoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGasto>
          }
          groupBy: {
            args: Prisma.GastoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GastoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GastoCountArgs<ExtArgs>
            result: $Utils.Optional<GastoCountAggregateOutputType> | number
          }
        }
      }
      Factura: {
        payload: Prisma.$FacturaPayload<ExtArgs>
        fields: Prisma.FacturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          findFirst: {
            args: Prisma.FacturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          findMany: {
            args: Prisma.FacturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          create: {
            args: Prisma.FacturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          createMany: {
            args: Prisma.FacturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          delete: {
            args: Prisma.FacturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          update: {
            args: Prisma.FacturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          deleteMany: {
            args: Prisma.FacturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          upsert: {
            args: Prisma.FacturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          aggregate: {
            args: Prisma.FacturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFactura>
          }
          groupBy: {
            args: Prisma.FacturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacturaCountArgs<ExtArgs>
            result: $Utils.Optional<FacturaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    vehiculo?: VehiculoOmit
    seguro?: SeguroOmit
    gasto?: GastoOmit
    factura?: FacturaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VehiculoCountOutputType
   */

  export type VehiculoCountOutputType = {
    seguros: number
    gastos: number
    facturas: number
  }

  export type VehiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seguros?: boolean | VehiculoCountOutputTypeCountSegurosArgs
    gastos?: boolean | VehiculoCountOutputTypeCountGastosArgs
    facturas?: boolean | VehiculoCountOutputTypeCountFacturasArgs
  }

  // Custom InputTypes
  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculoCountOutputType
     */
    select?: VehiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeCountSegurosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeguroWhereInput
  }

  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeCountGastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastoWhereInput
  }

  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeCountFacturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
  }


  /**
   * Count Type GastoCountOutputType
   */

  export type GastoCountOutputType = {
    facturas: number
  }

  export type GastoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturas?: boolean | GastoCountOutputTypeCountFacturasArgs
  }

  // Custom InputTypes
  /**
   * GastoCountOutputType without action
   */
  export type GastoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastoCountOutputType
     */
    select?: GastoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GastoCountOutputType without action
   */
  export type GastoCountOutputTypeCountFacturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    user: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    user: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    user: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    user?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    user?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    user?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    user: string
    password: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    user?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user" | "password" | "role", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly user: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Vehiculo
   */

  export type AggregateVehiculo = {
    _count: VehiculoCountAggregateOutputType | null
    _avg: VehiculoAvgAggregateOutputType | null
    _sum: VehiculoSumAggregateOutputType | null
    _min: VehiculoMinAggregateOutputType | null
    _max: VehiculoMaxAggregateOutputType | null
  }

  export type VehiculoAvgAggregateOutputType = {
    id: number | null
    modelo: number | null
  }

  export type VehiculoSumAggregateOutputType = {
    id: number | null
    modelo: number | null
  }

  export type VehiculoMinAggregateOutputType = {
    id: number | null
    placa: string | null
    marca: string | null
    tipo: string | null
    color: string | null
    modelo: number | null
    serie: string | null
    motor: string | null
    proyecto: string | null
    ubicacion: string | null
    placaAnterior: string | null
    comentario: string | null
  }

  export type VehiculoMaxAggregateOutputType = {
    id: number | null
    placa: string | null
    marca: string | null
    tipo: string | null
    color: string | null
    modelo: number | null
    serie: string | null
    motor: string | null
    proyecto: string | null
    ubicacion: string | null
    placaAnterior: string | null
    comentario: string | null
  }

  export type VehiculoCountAggregateOutputType = {
    id: number
    placa: number
    marca: number
    tipo: number
    color: number
    modelo: number
    serie: number
    motor: number
    proyecto: number
    ubicacion: number
    placaAnterior: number
    comentario: number
    _all: number
  }


  export type VehiculoAvgAggregateInputType = {
    id?: true
    modelo?: true
  }

  export type VehiculoSumAggregateInputType = {
    id?: true
    modelo?: true
  }

  export type VehiculoMinAggregateInputType = {
    id?: true
    placa?: true
    marca?: true
    tipo?: true
    color?: true
    modelo?: true
    serie?: true
    motor?: true
    proyecto?: true
    ubicacion?: true
    placaAnterior?: true
    comentario?: true
  }

  export type VehiculoMaxAggregateInputType = {
    id?: true
    placa?: true
    marca?: true
    tipo?: true
    color?: true
    modelo?: true
    serie?: true
    motor?: true
    proyecto?: true
    ubicacion?: true
    placaAnterior?: true
    comentario?: true
  }

  export type VehiculoCountAggregateInputType = {
    id?: true
    placa?: true
    marca?: true
    tipo?: true
    color?: true
    modelo?: true
    serie?: true
    motor?: true
    proyecto?: true
    ubicacion?: true
    placaAnterior?: true
    comentario?: true
    _all?: true
  }

  export type VehiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehiculo to aggregate.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehiculos
    **/
    _count?: true | VehiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehiculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiculoMaxAggregateInputType
  }

  export type GetVehiculoAggregateType<T extends VehiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVehiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehiculo[P]>
      : GetScalarType<T[P], AggregateVehiculo[P]>
  }




  export type VehiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculoWhereInput
    orderBy?: VehiculoOrderByWithAggregationInput | VehiculoOrderByWithAggregationInput[]
    by: VehiculoScalarFieldEnum[] | VehiculoScalarFieldEnum
    having?: VehiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiculoCountAggregateInputType | true
    _avg?: VehiculoAvgAggregateInputType
    _sum?: VehiculoSumAggregateInputType
    _min?: VehiculoMinAggregateInputType
    _max?: VehiculoMaxAggregateInputType
  }

  export type VehiculoGroupByOutputType = {
    id: number
    placa: string
    marca: string
    tipo: string
    color: string
    modelo: number
    serie: string
    motor: string | null
    proyecto: string | null
    ubicacion: string | null
    placaAnterior: string | null
    comentario: string | null
    _count: VehiculoCountAggregateOutputType | null
    _avg: VehiculoAvgAggregateOutputType | null
    _sum: VehiculoSumAggregateOutputType | null
    _min: VehiculoMinAggregateOutputType | null
    _max: VehiculoMaxAggregateOutputType | null
  }

  type GetVehiculoGroupByPayload<T extends VehiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiculoGroupByOutputType[P]>
            : GetScalarType<T[P], VehiculoGroupByOutputType[P]>
        }
      >
    >


  export type VehiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placa?: boolean
    marca?: boolean
    tipo?: boolean
    color?: boolean
    modelo?: boolean
    serie?: boolean
    motor?: boolean
    proyecto?: boolean
    ubicacion?: boolean
    placaAnterior?: boolean
    comentario?: boolean
    seguros?: boolean | Vehiculo$segurosArgs<ExtArgs>
    gastos?: boolean | Vehiculo$gastosArgs<ExtArgs>
    facturas?: boolean | Vehiculo$facturasArgs<ExtArgs>
    _count?: boolean | VehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehiculo"]>

  export type VehiculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placa?: boolean
    marca?: boolean
    tipo?: boolean
    color?: boolean
    modelo?: boolean
    serie?: boolean
    motor?: boolean
    proyecto?: boolean
    ubicacion?: boolean
    placaAnterior?: boolean
    comentario?: boolean
  }, ExtArgs["result"]["vehiculo"]>

  export type VehiculoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placa?: boolean
    marca?: boolean
    tipo?: boolean
    color?: boolean
    modelo?: boolean
    serie?: boolean
    motor?: boolean
    proyecto?: boolean
    ubicacion?: boolean
    placaAnterior?: boolean
    comentario?: boolean
  }, ExtArgs["result"]["vehiculo"]>

  export type VehiculoSelectScalar = {
    id?: boolean
    placa?: boolean
    marca?: boolean
    tipo?: boolean
    color?: boolean
    modelo?: boolean
    serie?: boolean
    motor?: boolean
    proyecto?: boolean
    ubicacion?: boolean
    placaAnterior?: boolean
    comentario?: boolean
  }

  export type VehiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "placa" | "marca" | "tipo" | "color" | "modelo" | "serie" | "motor" | "proyecto" | "ubicacion" | "placaAnterior" | "comentario", ExtArgs["result"]["vehiculo"]>
  export type VehiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seguros?: boolean | Vehiculo$segurosArgs<ExtArgs>
    gastos?: boolean | Vehiculo$gastosArgs<ExtArgs>
    facturas?: boolean | Vehiculo$facturasArgs<ExtArgs>
    _count?: boolean | VehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehiculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehiculoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehiculo"
    objects: {
      seguros: Prisma.$SeguroPayload<ExtArgs>[]
      gastos: Prisma.$GastoPayload<ExtArgs>[]
      facturas: Prisma.$FacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      placa: string
      marca: string
      tipo: string
      color: string
      modelo: number
      serie: string
      motor: string | null
      proyecto: string | null
      ubicacion: string | null
      placaAnterior: string | null
      comentario: string | null
    }, ExtArgs["result"]["vehiculo"]>
    composites: {}
  }

  type VehiculoGetPayload<S extends boolean | null | undefined | VehiculoDefaultArgs> = $Result.GetResult<Prisma.$VehiculoPayload, S>

  type VehiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiculoCountAggregateInputType | true
    }

  export interface VehiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehiculo'], meta: { name: 'Vehiculo' } }
    /**
     * Find zero or one Vehiculo that matches the filter.
     * @param {VehiculoFindUniqueArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehiculoFindUniqueArgs>(args: SelectSubset<T, VehiculoFindUniqueArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehiculoFindUniqueOrThrowArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, VehiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindFirstArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehiculoFindFirstArgs>(args?: SelectSubset<T, VehiculoFindFirstArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindFirstOrThrowArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, VehiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehiculos
     * const vehiculos = await prisma.vehiculo.findMany()
     * 
     * // Get first 10 Vehiculos
     * const vehiculos = await prisma.vehiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehiculoWithIdOnly = await prisma.vehiculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehiculoFindManyArgs>(args?: SelectSubset<T, VehiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehiculo.
     * @param {VehiculoCreateArgs} args - Arguments to create a Vehiculo.
     * @example
     * // Create one Vehiculo
     * const Vehiculo = await prisma.vehiculo.create({
     *   data: {
     *     // ... data to create a Vehiculo
     *   }
     * })
     * 
     */
    create<T extends VehiculoCreateArgs>(args: SelectSubset<T, VehiculoCreateArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehiculos.
     * @param {VehiculoCreateManyArgs} args - Arguments to create many Vehiculos.
     * @example
     * // Create many Vehiculos
     * const vehiculo = await prisma.vehiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehiculoCreateManyArgs>(args?: SelectSubset<T, VehiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehiculos and returns the data saved in the database.
     * @param {VehiculoCreateManyAndReturnArgs} args - Arguments to create many Vehiculos.
     * @example
     * // Create many Vehiculos
     * const vehiculo = await prisma.vehiculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehiculos and only return the `id`
     * const vehiculoWithIdOnly = await prisma.vehiculo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehiculoCreateManyAndReturnArgs>(args?: SelectSubset<T, VehiculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehiculo.
     * @param {VehiculoDeleteArgs} args - Arguments to delete one Vehiculo.
     * @example
     * // Delete one Vehiculo
     * const Vehiculo = await prisma.vehiculo.delete({
     *   where: {
     *     // ... filter to delete one Vehiculo
     *   }
     * })
     * 
     */
    delete<T extends VehiculoDeleteArgs>(args: SelectSubset<T, VehiculoDeleteArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehiculo.
     * @param {VehiculoUpdateArgs} args - Arguments to update one Vehiculo.
     * @example
     * // Update one Vehiculo
     * const vehiculo = await prisma.vehiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehiculoUpdateArgs>(args: SelectSubset<T, VehiculoUpdateArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehiculos.
     * @param {VehiculoDeleteManyArgs} args - Arguments to filter Vehiculos to delete.
     * @example
     * // Delete a few Vehiculos
     * const { count } = await prisma.vehiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehiculoDeleteManyArgs>(args?: SelectSubset<T, VehiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehiculos
     * const vehiculo = await prisma.vehiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehiculoUpdateManyArgs>(args: SelectSubset<T, VehiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehiculos and returns the data updated in the database.
     * @param {VehiculoUpdateManyAndReturnArgs} args - Arguments to update many Vehiculos.
     * @example
     * // Update many Vehiculos
     * const vehiculo = await prisma.vehiculo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehiculos and only return the `id`
     * const vehiculoWithIdOnly = await prisma.vehiculo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehiculoUpdateManyAndReturnArgs>(args: SelectSubset<T, VehiculoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehiculo.
     * @param {VehiculoUpsertArgs} args - Arguments to update or create a Vehiculo.
     * @example
     * // Update or create a Vehiculo
     * const vehiculo = await prisma.vehiculo.upsert({
     *   create: {
     *     // ... data to create a Vehiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehiculo we want to update
     *   }
     * })
     */
    upsert<T extends VehiculoUpsertArgs>(args: SelectSubset<T, VehiculoUpsertArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoCountArgs} args - Arguments to filter Vehiculos to count.
     * @example
     * // Count the number of Vehiculos
     * const count = await prisma.vehiculo.count({
     *   where: {
     *     // ... the filter for the Vehiculos we want to count
     *   }
     * })
    **/
    count<T extends VehiculoCountArgs>(
      args?: Subset<T, VehiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehiculoAggregateArgs>(args: Subset<T, VehiculoAggregateArgs>): Prisma.PrismaPromise<GetVehiculoAggregateType<T>>

    /**
     * Group by Vehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehiculoGroupByArgs['orderBy'] }
        : { orderBy?: VehiculoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehiculo model
   */
  readonly fields: VehiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seguros<T extends Vehiculo$segurosArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$segurosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gastos<T extends Vehiculo$gastosArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$gastosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    facturas<T extends Vehiculo$facturasArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$facturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehiculo model
   */
  interface VehiculoFieldRefs {
    readonly id: FieldRef<"Vehiculo", 'Int'>
    readonly placa: FieldRef<"Vehiculo", 'String'>
    readonly marca: FieldRef<"Vehiculo", 'String'>
    readonly tipo: FieldRef<"Vehiculo", 'String'>
    readonly color: FieldRef<"Vehiculo", 'String'>
    readonly modelo: FieldRef<"Vehiculo", 'Int'>
    readonly serie: FieldRef<"Vehiculo", 'String'>
    readonly motor: FieldRef<"Vehiculo", 'String'>
    readonly proyecto: FieldRef<"Vehiculo", 'String'>
    readonly ubicacion: FieldRef<"Vehiculo", 'String'>
    readonly placaAnterior: FieldRef<"Vehiculo", 'String'>
    readonly comentario: FieldRef<"Vehiculo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vehiculo findUnique
   */
  export type VehiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo findUniqueOrThrow
   */
  export type VehiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo findFirst
   */
  export type VehiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo findFirstOrThrow
   */
  export type VehiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo findMany
   */
  export type VehiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculos to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo create
   */
  export type VehiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehiculo.
     */
    data: XOR<VehiculoCreateInput, VehiculoUncheckedCreateInput>
  }

  /**
   * Vehiculo createMany
   */
  export type VehiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehiculos.
     */
    data: VehiculoCreateManyInput | VehiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehiculo createManyAndReturn
   */
  export type VehiculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * The data used to create many Vehiculos.
     */
    data: VehiculoCreateManyInput | VehiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehiculo update
   */
  export type VehiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehiculo.
     */
    data: XOR<VehiculoUpdateInput, VehiculoUncheckedUpdateInput>
    /**
     * Choose, which Vehiculo to update.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo updateMany
   */
  export type VehiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehiculos.
     */
    data: XOR<VehiculoUpdateManyMutationInput, VehiculoUncheckedUpdateManyInput>
    /**
     * Filter which Vehiculos to update
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to update.
     */
    limit?: number
  }

  /**
   * Vehiculo updateManyAndReturn
   */
  export type VehiculoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * The data used to update Vehiculos.
     */
    data: XOR<VehiculoUpdateManyMutationInput, VehiculoUncheckedUpdateManyInput>
    /**
     * Filter which Vehiculos to update
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to update.
     */
    limit?: number
  }

  /**
   * Vehiculo upsert
   */
  export type VehiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehiculo to update in case it exists.
     */
    where: VehiculoWhereUniqueInput
    /**
     * In case the Vehiculo found by the `where` argument doesn't exist, create a new Vehiculo with this data.
     */
    create: XOR<VehiculoCreateInput, VehiculoUncheckedCreateInput>
    /**
     * In case the Vehiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehiculoUpdateInput, VehiculoUncheckedUpdateInput>
  }

  /**
   * Vehiculo delete
   */
  export type VehiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter which Vehiculo to delete.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo deleteMany
   */
  export type VehiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehiculos to delete
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to delete.
     */
    limit?: number
  }

  /**
   * Vehiculo.seguros
   */
  export type Vehiculo$segurosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguro
     */
    select?: SeguroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguro
     */
    omit?: SeguroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguroInclude<ExtArgs> | null
    where?: SeguroWhereInput
    orderBy?: SeguroOrderByWithRelationInput | SeguroOrderByWithRelationInput[]
    cursor?: SeguroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeguroScalarFieldEnum | SeguroScalarFieldEnum[]
  }

  /**
   * Vehiculo.gastos
   */
  export type Vehiculo$gastosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    where?: GastoWhereInput
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    cursor?: GastoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Vehiculo.facturas
   */
  export type Vehiculo$facturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    cursor?: FacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Vehiculo without action
   */
  export type VehiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
  }


  /**
   * Model Seguro
   */

  export type AggregateSeguro = {
    _count: SeguroCountAggregateOutputType | null
    _avg: SeguroAvgAggregateOutputType | null
    _sum: SeguroSumAggregateOutputType | null
    _min: SeguroMinAggregateOutputType | null
    _max: SeguroMaxAggregateOutputType | null
  }

  export type SeguroAvgAggregateOutputType = {
    id: number | null
    vehiculoId: number | null
    precio: number | null
  }

  export type SeguroSumAggregateOutputType = {
    id: number | null
    vehiculoId: number | null
    precio: number | null
  }

  export type SeguroMinAggregateOutputType = {
    id: number | null
    vehiculoId: number | null
    compania: $Enums.CompaniaSeguro | null
    precio: number | null
    fechaInicio: Date | null
    fechaVencimiento: Date | null
    responsable: string | null
  }

  export type SeguroMaxAggregateOutputType = {
    id: number | null
    vehiculoId: number | null
    compania: $Enums.CompaniaSeguro | null
    precio: number | null
    fechaInicio: Date | null
    fechaVencimiento: Date | null
    responsable: string | null
  }

  export type SeguroCountAggregateOutputType = {
    id: number
    vehiculoId: number
    compania: number
    precio: number
    fechaInicio: number
    fechaVencimiento: number
    responsable: number
    _all: number
  }


  export type SeguroAvgAggregateInputType = {
    id?: true
    vehiculoId?: true
    precio?: true
  }

  export type SeguroSumAggregateInputType = {
    id?: true
    vehiculoId?: true
    precio?: true
  }

  export type SeguroMinAggregateInputType = {
    id?: true
    vehiculoId?: true
    compania?: true
    precio?: true
    fechaInicio?: true
    fechaVencimiento?: true
    responsable?: true
  }

  export type SeguroMaxAggregateInputType = {
    id?: true
    vehiculoId?: true
    compania?: true
    precio?: true
    fechaInicio?: true
    fechaVencimiento?: true
    responsable?: true
  }

  export type SeguroCountAggregateInputType = {
    id?: true
    vehiculoId?: true
    compania?: true
    precio?: true
    fechaInicio?: true
    fechaVencimiento?: true
    responsable?: true
    _all?: true
  }

  export type SeguroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seguro to aggregate.
     */
    where?: SeguroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seguros to fetch.
     */
    orderBy?: SeguroOrderByWithRelationInput | SeguroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeguroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seguros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seguros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seguros
    **/
    _count?: true | SeguroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeguroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeguroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeguroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeguroMaxAggregateInputType
  }

  export type GetSeguroAggregateType<T extends SeguroAggregateArgs> = {
        [P in keyof T & keyof AggregateSeguro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeguro[P]>
      : GetScalarType<T[P], AggregateSeguro[P]>
  }




  export type SeguroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeguroWhereInput
    orderBy?: SeguroOrderByWithAggregationInput | SeguroOrderByWithAggregationInput[]
    by: SeguroScalarFieldEnum[] | SeguroScalarFieldEnum
    having?: SeguroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeguroCountAggregateInputType | true
    _avg?: SeguroAvgAggregateInputType
    _sum?: SeguroSumAggregateInputType
    _min?: SeguroMinAggregateInputType
    _max?: SeguroMaxAggregateInputType
  }

  export type SeguroGroupByOutputType = {
    id: number
    vehiculoId: number
    compania: $Enums.CompaniaSeguro
    precio: number
    fechaInicio: Date
    fechaVencimiento: Date
    responsable: string | null
    _count: SeguroCountAggregateOutputType | null
    _avg: SeguroAvgAggregateOutputType | null
    _sum: SeguroSumAggregateOutputType | null
    _min: SeguroMinAggregateOutputType | null
    _max: SeguroMaxAggregateOutputType | null
  }

  type GetSeguroGroupByPayload<T extends SeguroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeguroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeguroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeguroGroupByOutputType[P]>
            : GetScalarType<T[P], SeguroGroupByOutputType[P]>
        }
      >
    >


  export type SeguroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehiculoId?: boolean
    compania?: boolean
    precio?: boolean
    fechaInicio?: boolean
    fechaVencimiento?: boolean
    responsable?: boolean
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seguro"]>

  export type SeguroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehiculoId?: boolean
    compania?: boolean
    precio?: boolean
    fechaInicio?: boolean
    fechaVencimiento?: boolean
    responsable?: boolean
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seguro"]>

  export type SeguroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehiculoId?: boolean
    compania?: boolean
    precio?: boolean
    fechaInicio?: boolean
    fechaVencimiento?: boolean
    responsable?: boolean
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seguro"]>

  export type SeguroSelectScalar = {
    id?: boolean
    vehiculoId?: boolean
    compania?: boolean
    precio?: boolean
    fechaInicio?: boolean
    fechaVencimiento?: boolean
    responsable?: boolean
  }

  export type SeguroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehiculoId" | "compania" | "precio" | "fechaInicio" | "fechaVencimiento" | "responsable", ExtArgs["result"]["seguro"]>
  export type SeguroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }
  export type SeguroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }
  export type SeguroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }

  export type $SeguroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seguro"
    objects: {
      vehiculo: Prisma.$VehiculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vehiculoId: number
      compania: $Enums.CompaniaSeguro
      precio: number
      fechaInicio: Date
      fechaVencimiento: Date
      responsable: string | null
    }, ExtArgs["result"]["seguro"]>
    composites: {}
  }

  type SeguroGetPayload<S extends boolean | null | undefined | SeguroDefaultArgs> = $Result.GetResult<Prisma.$SeguroPayload, S>

  type SeguroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeguroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeguroCountAggregateInputType | true
    }

  export interface SeguroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seguro'], meta: { name: 'Seguro' } }
    /**
     * Find zero or one Seguro that matches the filter.
     * @param {SeguroFindUniqueArgs} args - Arguments to find a Seguro
     * @example
     * // Get one Seguro
     * const seguro = await prisma.seguro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeguroFindUniqueArgs>(args: SelectSubset<T, SeguroFindUniqueArgs<ExtArgs>>): Prisma__SeguroClient<$Result.GetResult<Prisma.$SeguroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seguro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeguroFindUniqueOrThrowArgs} args - Arguments to find a Seguro
     * @example
     * // Get one Seguro
     * const seguro = await prisma.seguro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeguroFindUniqueOrThrowArgs>(args: SelectSubset<T, SeguroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeguroClient<$Result.GetResult<Prisma.$SeguroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seguro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguroFindFirstArgs} args - Arguments to find a Seguro
     * @example
     * // Get one Seguro
     * const seguro = await prisma.seguro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeguroFindFirstArgs>(args?: SelectSubset<T, SeguroFindFirstArgs<ExtArgs>>): Prisma__SeguroClient<$Result.GetResult<Prisma.$SeguroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seguro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguroFindFirstOrThrowArgs} args - Arguments to find a Seguro
     * @example
     * // Get one Seguro
     * const seguro = await prisma.seguro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeguroFindFirstOrThrowArgs>(args?: SelectSubset<T, SeguroFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeguroClient<$Result.GetResult<Prisma.$SeguroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seguros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seguros
     * const seguros = await prisma.seguro.findMany()
     * 
     * // Get first 10 Seguros
     * const seguros = await prisma.seguro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seguroWithIdOnly = await prisma.seguro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeguroFindManyArgs>(args?: SelectSubset<T, SeguroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seguro.
     * @param {SeguroCreateArgs} args - Arguments to create a Seguro.
     * @example
     * // Create one Seguro
     * const Seguro = await prisma.seguro.create({
     *   data: {
     *     // ... data to create a Seguro
     *   }
     * })
     * 
     */
    create<T extends SeguroCreateArgs>(args: SelectSubset<T, SeguroCreateArgs<ExtArgs>>): Prisma__SeguroClient<$Result.GetResult<Prisma.$SeguroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seguros.
     * @param {SeguroCreateManyArgs} args - Arguments to create many Seguros.
     * @example
     * // Create many Seguros
     * const seguro = await prisma.seguro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeguroCreateManyArgs>(args?: SelectSubset<T, SeguroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seguros and returns the data saved in the database.
     * @param {SeguroCreateManyAndReturnArgs} args - Arguments to create many Seguros.
     * @example
     * // Create many Seguros
     * const seguro = await prisma.seguro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seguros and only return the `id`
     * const seguroWithIdOnly = await prisma.seguro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeguroCreateManyAndReturnArgs>(args?: SelectSubset<T, SeguroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seguro.
     * @param {SeguroDeleteArgs} args - Arguments to delete one Seguro.
     * @example
     * // Delete one Seguro
     * const Seguro = await prisma.seguro.delete({
     *   where: {
     *     // ... filter to delete one Seguro
     *   }
     * })
     * 
     */
    delete<T extends SeguroDeleteArgs>(args: SelectSubset<T, SeguroDeleteArgs<ExtArgs>>): Prisma__SeguroClient<$Result.GetResult<Prisma.$SeguroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seguro.
     * @param {SeguroUpdateArgs} args - Arguments to update one Seguro.
     * @example
     * // Update one Seguro
     * const seguro = await prisma.seguro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeguroUpdateArgs>(args: SelectSubset<T, SeguroUpdateArgs<ExtArgs>>): Prisma__SeguroClient<$Result.GetResult<Prisma.$SeguroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seguros.
     * @param {SeguroDeleteManyArgs} args - Arguments to filter Seguros to delete.
     * @example
     * // Delete a few Seguros
     * const { count } = await prisma.seguro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeguroDeleteManyArgs>(args?: SelectSubset<T, SeguroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seguros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seguros
     * const seguro = await prisma.seguro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeguroUpdateManyArgs>(args: SelectSubset<T, SeguroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seguros and returns the data updated in the database.
     * @param {SeguroUpdateManyAndReturnArgs} args - Arguments to update many Seguros.
     * @example
     * // Update many Seguros
     * const seguro = await prisma.seguro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seguros and only return the `id`
     * const seguroWithIdOnly = await prisma.seguro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeguroUpdateManyAndReturnArgs>(args: SelectSubset<T, SeguroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seguro.
     * @param {SeguroUpsertArgs} args - Arguments to update or create a Seguro.
     * @example
     * // Update or create a Seguro
     * const seguro = await prisma.seguro.upsert({
     *   create: {
     *     // ... data to create a Seguro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seguro we want to update
     *   }
     * })
     */
    upsert<T extends SeguroUpsertArgs>(args: SelectSubset<T, SeguroUpsertArgs<ExtArgs>>): Prisma__SeguroClient<$Result.GetResult<Prisma.$SeguroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seguros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguroCountArgs} args - Arguments to filter Seguros to count.
     * @example
     * // Count the number of Seguros
     * const count = await prisma.seguro.count({
     *   where: {
     *     // ... the filter for the Seguros we want to count
     *   }
     * })
    **/
    count<T extends SeguroCountArgs>(
      args?: Subset<T, SeguroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeguroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seguro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeguroAggregateArgs>(args: Subset<T, SeguroAggregateArgs>): Prisma.PrismaPromise<GetSeguroAggregateType<T>>

    /**
     * Group by Seguro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeguroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeguroGroupByArgs['orderBy'] }
        : { orderBy?: SeguroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeguroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeguroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seguro model
   */
  readonly fields: SeguroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seguro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeguroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehiculo<T extends VehiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiculoDefaultArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Seguro model
   */
  interface SeguroFieldRefs {
    readonly id: FieldRef<"Seguro", 'Int'>
    readonly vehiculoId: FieldRef<"Seguro", 'Int'>
    readonly compania: FieldRef<"Seguro", 'CompaniaSeguro'>
    readonly precio: FieldRef<"Seguro", 'Float'>
    readonly fechaInicio: FieldRef<"Seguro", 'DateTime'>
    readonly fechaVencimiento: FieldRef<"Seguro", 'DateTime'>
    readonly responsable: FieldRef<"Seguro", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Seguro findUnique
   */
  export type SeguroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguro
     */
    select?: SeguroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguro
     */
    omit?: SeguroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguroInclude<ExtArgs> | null
    /**
     * Filter, which Seguro to fetch.
     */
    where: SeguroWhereUniqueInput
  }

  /**
   * Seguro findUniqueOrThrow
   */
  export type SeguroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguro
     */
    select?: SeguroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguro
     */
    omit?: SeguroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguroInclude<ExtArgs> | null
    /**
     * Filter, which Seguro to fetch.
     */
    where: SeguroWhereUniqueInput
  }

  /**
   * Seguro findFirst
   */
  export type SeguroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguro
     */
    select?: SeguroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguro
     */
    omit?: SeguroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguroInclude<ExtArgs> | null
    /**
     * Filter, which Seguro to fetch.
     */
    where?: SeguroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seguros to fetch.
     */
    orderBy?: SeguroOrderByWithRelationInput | SeguroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seguros.
     */
    cursor?: SeguroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seguros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seguros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seguros.
     */
    distinct?: SeguroScalarFieldEnum | SeguroScalarFieldEnum[]
  }

  /**
   * Seguro findFirstOrThrow
   */
  export type SeguroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguro
     */
    select?: SeguroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguro
     */
    omit?: SeguroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguroInclude<ExtArgs> | null
    /**
     * Filter, which Seguro to fetch.
     */
    where?: SeguroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seguros to fetch.
     */
    orderBy?: SeguroOrderByWithRelationInput | SeguroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seguros.
     */
    cursor?: SeguroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seguros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seguros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seguros.
     */
    distinct?: SeguroScalarFieldEnum | SeguroScalarFieldEnum[]
  }

  /**
   * Seguro findMany
   */
  export type SeguroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguro
     */
    select?: SeguroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguro
     */
    omit?: SeguroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguroInclude<ExtArgs> | null
    /**
     * Filter, which Seguros to fetch.
     */
    where?: SeguroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seguros to fetch.
     */
    orderBy?: SeguroOrderByWithRelationInput | SeguroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seguros.
     */
    cursor?: SeguroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seguros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seguros.
     */
    skip?: number
    distinct?: SeguroScalarFieldEnum | SeguroScalarFieldEnum[]
  }

  /**
   * Seguro create
   */
  export type SeguroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguro
     */
    select?: SeguroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguro
     */
    omit?: SeguroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguroInclude<ExtArgs> | null
    /**
     * The data needed to create a Seguro.
     */
    data: XOR<SeguroCreateInput, SeguroUncheckedCreateInput>
  }

  /**
   * Seguro createMany
   */
  export type SeguroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seguros.
     */
    data: SeguroCreateManyInput | SeguroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seguro createManyAndReturn
   */
  export type SeguroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguro
     */
    select?: SeguroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seguro
     */
    omit?: SeguroOmit<ExtArgs> | null
    /**
     * The data used to create many Seguros.
     */
    data: SeguroCreateManyInput | SeguroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seguro update
   */
  export type SeguroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguro
     */
    select?: SeguroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguro
     */
    omit?: SeguroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguroInclude<ExtArgs> | null
    /**
     * The data needed to update a Seguro.
     */
    data: XOR<SeguroUpdateInput, SeguroUncheckedUpdateInput>
    /**
     * Choose, which Seguro to update.
     */
    where: SeguroWhereUniqueInput
  }

  /**
   * Seguro updateMany
   */
  export type SeguroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seguros.
     */
    data: XOR<SeguroUpdateManyMutationInput, SeguroUncheckedUpdateManyInput>
    /**
     * Filter which Seguros to update
     */
    where?: SeguroWhereInput
    /**
     * Limit how many Seguros to update.
     */
    limit?: number
  }

  /**
   * Seguro updateManyAndReturn
   */
  export type SeguroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguro
     */
    select?: SeguroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seguro
     */
    omit?: SeguroOmit<ExtArgs> | null
    /**
     * The data used to update Seguros.
     */
    data: XOR<SeguroUpdateManyMutationInput, SeguroUncheckedUpdateManyInput>
    /**
     * Filter which Seguros to update
     */
    where?: SeguroWhereInput
    /**
     * Limit how many Seguros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seguro upsert
   */
  export type SeguroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguro
     */
    select?: SeguroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguro
     */
    omit?: SeguroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguroInclude<ExtArgs> | null
    /**
     * The filter to search for the Seguro to update in case it exists.
     */
    where: SeguroWhereUniqueInput
    /**
     * In case the Seguro found by the `where` argument doesn't exist, create a new Seguro with this data.
     */
    create: XOR<SeguroCreateInput, SeguroUncheckedCreateInput>
    /**
     * In case the Seguro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeguroUpdateInput, SeguroUncheckedUpdateInput>
  }

  /**
   * Seguro delete
   */
  export type SeguroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguro
     */
    select?: SeguroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguro
     */
    omit?: SeguroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguroInclude<ExtArgs> | null
    /**
     * Filter which Seguro to delete.
     */
    where: SeguroWhereUniqueInput
  }

  /**
   * Seguro deleteMany
   */
  export type SeguroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seguros to delete
     */
    where?: SeguroWhereInput
    /**
     * Limit how many Seguros to delete.
     */
    limit?: number
  }

  /**
   * Seguro without action
   */
  export type SeguroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguro
     */
    select?: SeguroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguro
     */
    omit?: SeguroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguroInclude<ExtArgs> | null
  }


  /**
   * Model Gasto
   */

  export type AggregateGasto = {
    _count: GastoCountAggregateOutputType | null
    _avg: GastoAvgAggregateOutputType | null
    _sum: GastoSumAggregateOutputType | null
    _min: GastoMinAggregateOutputType | null
    _max: GastoMaxAggregateOutputType | null
  }

  export type GastoAvgAggregateOutputType = {
    id: number | null
    entrada: number | null
    salida: number | null
    saldo: number | null
    vehiculoId: number | null
  }

  export type GastoSumAggregateOutputType = {
    id: number | null
    entrada: number | null
    salida: number | null
    saldo: number | null
    vehiculoId: number | null
  }

  export type GastoMinAggregateOutputType = {
    id: number | null
    folio: string | null
    fecha: Date | null
    razonSocial: string | null
    banco: string | null
    tdc: string | null
    proveedor: string | null
    concepto: string | null
    referencia: string | null
    documento: string | null
    proyecto: string | null
    responsable: string | null
    transferencia: string | null
    entrada: number | null
    salida: number | null
    saldo: number | null
    vehiculoId: number | null
  }

  export type GastoMaxAggregateOutputType = {
    id: number | null
    folio: string | null
    fecha: Date | null
    razonSocial: string | null
    banco: string | null
    tdc: string | null
    proveedor: string | null
    concepto: string | null
    referencia: string | null
    documento: string | null
    proyecto: string | null
    responsable: string | null
    transferencia: string | null
    entrada: number | null
    salida: number | null
    saldo: number | null
    vehiculoId: number | null
  }

  export type GastoCountAggregateOutputType = {
    id: number
    folio: number
    fecha: number
    razonSocial: number
    banco: number
    tdc: number
    proveedor: number
    concepto: number
    referencia: number
    documento: number
    proyecto: number
    responsable: number
    transferencia: number
    entrada: number
    salida: number
    saldo: number
    vehiculoId: number
    _all: number
  }


  export type GastoAvgAggregateInputType = {
    id?: true
    entrada?: true
    salida?: true
    saldo?: true
    vehiculoId?: true
  }

  export type GastoSumAggregateInputType = {
    id?: true
    entrada?: true
    salida?: true
    saldo?: true
    vehiculoId?: true
  }

  export type GastoMinAggregateInputType = {
    id?: true
    folio?: true
    fecha?: true
    razonSocial?: true
    banco?: true
    tdc?: true
    proveedor?: true
    concepto?: true
    referencia?: true
    documento?: true
    proyecto?: true
    responsable?: true
    transferencia?: true
    entrada?: true
    salida?: true
    saldo?: true
    vehiculoId?: true
  }

  export type GastoMaxAggregateInputType = {
    id?: true
    folio?: true
    fecha?: true
    razonSocial?: true
    banco?: true
    tdc?: true
    proveedor?: true
    concepto?: true
    referencia?: true
    documento?: true
    proyecto?: true
    responsable?: true
    transferencia?: true
    entrada?: true
    salida?: true
    saldo?: true
    vehiculoId?: true
  }

  export type GastoCountAggregateInputType = {
    id?: true
    folio?: true
    fecha?: true
    razonSocial?: true
    banco?: true
    tdc?: true
    proveedor?: true
    concepto?: true
    referencia?: true
    documento?: true
    proyecto?: true
    responsable?: true
    transferencia?: true
    entrada?: true
    salida?: true
    saldo?: true
    vehiculoId?: true
    _all?: true
  }

  export type GastoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gasto to aggregate.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gastos
    **/
    _count?: true | GastoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GastoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GastoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GastoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GastoMaxAggregateInputType
  }

  export type GetGastoAggregateType<T extends GastoAggregateArgs> = {
        [P in keyof T & keyof AggregateGasto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGasto[P]>
      : GetScalarType<T[P], AggregateGasto[P]>
  }




  export type GastoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastoWhereInput
    orderBy?: GastoOrderByWithAggregationInput | GastoOrderByWithAggregationInput[]
    by: GastoScalarFieldEnum[] | GastoScalarFieldEnum
    having?: GastoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GastoCountAggregateInputType | true
    _avg?: GastoAvgAggregateInputType
    _sum?: GastoSumAggregateInputType
    _min?: GastoMinAggregateInputType
    _max?: GastoMaxAggregateInputType
  }

  export type GastoGroupByOutputType = {
    id: number
    folio: string
    fecha: Date
    razonSocial: string
    banco: string | null
    tdc: string | null
    proveedor: string
    concepto: string
    referencia: string | null
    documento: string | null
    proyecto: string | null
    responsable: string
    transferencia: string | null
    entrada: number | null
    salida: number | null
    saldo: number | null
    vehiculoId: number | null
    _count: GastoCountAggregateOutputType | null
    _avg: GastoAvgAggregateOutputType | null
    _sum: GastoSumAggregateOutputType | null
    _min: GastoMinAggregateOutputType | null
    _max: GastoMaxAggregateOutputType | null
  }

  type GetGastoGroupByPayload<T extends GastoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GastoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GastoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GastoGroupByOutputType[P]>
            : GetScalarType<T[P], GastoGroupByOutputType[P]>
        }
      >
    >


  export type GastoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    folio?: boolean
    fecha?: boolean
    razonSocial?: boolean
    banco?: boolean
    tdc?: boolean
    proveedor?: boolean
    concepto?: boolean
    referencia?: boolean
    documento?: boolean
    proyecto?: boolean
    responsable?: boolean
    transferencia?: boolean
    entrada?: boolean
    salida?: boolean
    saldo?: boolean
    vehiculoId?: boolean
    vehiculo?: boolean | Gasto$vehiculoArgs<ExtArgs>
    facturas?: boolean | Gasto$facturasArgs<ExtArgs>
    _count?: boolean | GastoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gasto"]>

  export type GastoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    folio?: boolean
    fecha?: boolean
    razonSocial?: boolean
    banco?: boolean
    tdc?: boolean
    proveedor?: boolean
    concepto?: boolean
    referencia?: boolean
    documento?: boolean
    proyecto?: boolean
    responsable?: boolean
    transferencia?: boolean
    entrada?: boolean
    salida?: boolean
    saldo?: boolean
    vehiculoId?: boolean
    vehiculo?: boolean | Gasto$vehiculoArgs<ExtArgs>
  }, ExtArgs["result"]["gasto"]>

  export type GastoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    folio?: boolean
    fecha?: boolean
    razonSocial?: boolean
    banco?: boolean
    tdc?: boolean
    proveedor?: boolean
    concepto?: boolean
    referencia?: boolean
    documento?: boolean
    proyecto?: boolean
    responsable?: boolean
    transferencia?: boolean
    entrada?: boolean
    salida?: boolean
    saldo?: boolean
    vehiculoId?: boolean
    vehiculo?: boolean | Gasto$vehiculoArgs<ExtArgs>
  }, ExtArgs["result"]["gasto"]>

  export type GastoSelectScalar = {
    id?: boolean
    folio?: boolean
    fecha?: boolean
    razonSocial?: boolean
    banco?: boolean
    tdc?: boolean
    proveedor?: boolean
    concepto?: boolean
    referencia?: boolean
    documento?: boolean
    proyecto?: boolean
    responsable?: boolean
    transferencia?: boolean
    entrada?: boolean
    salida?: boolean
    saldo?: boolean
    vehiculoId?: boolean
  }

  export type GastoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "folio" | "fecha" | "razonSocial" | "banco" | "tdc" | "proveedor" | "concepto" | "referencia" | "documento" | "proyecto" | "responsable" | "transferencia" | "entrada" | "salida" | "saldo" | "vehiculoId", ExtArgs["result"]["gasto"]>
  export type GastoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | Gasto$vehiculoArgs<ExtArgs>
    facturas?: boolean | Gasto$facturasArgs<ExtArgs>
    _count?: boolean | GastoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GastoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | Gasto$vehiculoArgs<ExtArgs>
  }
  export type GastoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | Gasto$vehiculoArgs<ExtArgs>
  }

  export type $GastoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gasto"
    objects: {
      vehiculo: Prisma.$VehiculoPayload<ExtArgs> | null
      facturas: Prisma.$FacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      folio: string
      fecha: Date
      razonSocial: string
      banco: string | null
      tdc: string | null
      proveedor: string
      concepto: string
      referencia: string | null
      documento: string | null
      proyecto: string | null
      responsable: string
      transferencia: string | null
      entrada: number | null
      salida: number | null
      saldo: number | null
      vehiculoId: number | null
    }, ExtArgs["result"]["gasto"]>
    composites: {}
  }

  type GastoGetPayload<S extends boolean | null | undefined | GastoDefaultArgs> = $Result.GetResult<Prisma.$GastoPayload, S>

  type GastoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GastoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GastoCountAggregateInputType | true
    }

  export interface GastoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gasto'], meta: { name: 'Gasto' } }
    /**
     * Find zero or one Gasto that matches the filter.
     * @param {GastoFindUniqueArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GastoFindUniqueArgs>(args: SelectSubset<T, GastoFindUniqueArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gasto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GastoFindUniqueOrThrowArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GastoFindUniqueOrThrowArgs>(args: SelectSubset<T, GastoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gasto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindFirstArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GastoFindFirstArgs>(args?: SelectSubset<T, GastoFindFirstArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gasto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindFirstOrThrowArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GastoFindFirstOrThrowArgs>(args?: SelectSubset<T, GastoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gastos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gastos
     * const gastos = await prisma.gasto.findMany()
     * 
     * // Get first 10 Gastos
     * const gastos = await prisma.gasto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gastoWithIdOnly = await prisma.gasto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GastoFindManyArgs>(args?: SelectSubset<T, GastoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gasto.
     * @param {GastoCreateArgs} args - Arguments to create a Gasto.
     * @example
     * // Create one Gasto
     * const Gasto = await prisma.gasto.create({
     *   data: {
     *     // ... data to create a Gasto
     *   }
     * })
     * 
     */
    create<T extends GastoCreateArgs>(args: SelectSubset<T, GastoCreateArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gastos.
     * @param {GastoCreateManyArgs} args - Arguments to create many Gastos.
     * @example
     * // Create many Gastos
     * const gasto = await prisma.gasto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GastoCreateManyArgs>(args?: SelectSubset<T, GastoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gastos and returns the data saved in the database.
     * @param {GastoCreateManyAndReturnArgs} args - Arguments to create many Gastos.
     * @example
     * // Create many Gastos
     * const gasto = await prisma.gasto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gastos and only return the `id`
     * const gastoWithIdOnly = await prisma.gasto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GastoCreateManyAndReturnArgs>(args?: SelectSubset<T, GastoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gasto.
     * @param {GastoDeleteArgs} args - Arguments to delete one Gasto.
     * @example
     * // Delete one Gasto
     * const Gasto = await prisma.gasto.delete({
     *   where: {
     *     // ... filter to delete one Gasto
     *   }
     * })
     * 
     */
    delete<T extends GastoDeleteArgs>(args: SelectSubset<T, GastoDeleteArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gasto.
     * @param {GastoUpdateArgs} args - Arguments to update one Gasto.
     * @example
     * // Update one Gasto
     * const gasto = await prisma.gasto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GastoUpdateArgs>(args: SelectSubset<T, GastoUpdateArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gastos.
     * @param {GastoDeleteManyArgs} args - Arguments to filter Gastos to delete.
     * @example
     * // Delete a few Gastos
     * const { count } = await prisma.gasto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GastoDeleteManyArgs>(args?: SelectSubset<T, GastoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gastos
     * const gasto = await prisma.gasto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GastoUpdateManyArgs>(args: SelectSubset<T, GastoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gastos and returns the data updated in the database.
     * @param {GastoUpdateManyAndReturnArgs} args - Arguments to update many Gastos.
     * @example
     * // Update many Gastos
     * const gasto = await prisma.gasto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gastos and only return the `id`
     * const gastoWithIdOnly = await prisma.gasto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GastoUpdateManyAndReturnArgs>(args: SelectSubset<T, GastoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gasto.
     * @param {GastoUpsertArgs} args - Arguments to update or create a Gasto.
     * @example
     * // Update or create a Gasto
     * const gasto = await prisma.gasto.upsert({
     *   create: {
     *     // ... data to create a Gasto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gasto we want to update
     *   }
     * })
     */
    upsert<T extends GastoUpsertArgs>(args: SelectSubset<T, GastoUpsertArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoCountArgs} args - Arguments to filter Gastos to count.
     * @example
     * // Count the number of Gastos
     * const count = await prisma.gasto.count({
     *   where: {
     *     // ... the filter for the Gastos we want to count
     *   }
     * })
    **/
    count<T extends GastoCountArgs>(
      args?: Subset<T, GastoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GastoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GastoAggregateArgs>(args: Subset<T, GastoAggregateArgs>): Prisma.PrismaPromise<GetGastoAggregateType<T>>

    /**
     * Group by Gasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GastoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GastoGroupByArgs['orderBy'] }
        : { orderBy?: GastoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GastoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGastoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gasto model
   */
  readonly fields: GastoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gasto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GastoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehiculo<T extends Gasto$vehiculoArgs<ExtArgs> = {}>(args?: Subset<T, Gasto$vehiculoArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    facturas<T extends Gasto$facturasArgs<ExtArgs> = {}>(args?: Subset<T, Gasto$facturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gasto model
   */
  interface GastoFieldRefs {
    readonly id: FieldRef<"Gasto", 'Int'>
    readonly folio: FieldRef<"Gasto", 'String'>
    readonly fecha: FieldRef<"Gasto", 'DateTime'>
    readonly razonSocial: FieldRef<"Gasto", 'String'>
    readonly banco: FieldRef<"Gasto", 'String'>
    readonly tdc: FieldRef<"Gasto", 'String'>
    readonly proveedor: FieldRef<"Gasto", 'String'>
    readonly concepto: FieldRef<"Gasto", 'String'>
    readonly referencia: FieldRef<"Gasto", 'String'>
    readonly documento: FieldRef<"Gasto", 'String'>
    readonly proyecto: FieldRef<"Gasto", 'String'>
    readonly responsable: FieldRef<"Gasto", 'String'>
    readonly transferencia: FieldRef<"Gasto", 'String'>
    readonly entrada: FieldRef<"Gasto", 'Float'>
    readonly salida: FieldRef<"Gasto", 'Float'>
    readonly saldo: FieldRef<"Gasto", 'Float'>
    readonly vehiculoId: FieldRef<"Gasto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Gasto findUnique
   */
  export type GastoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where: GastoWhereUniqueInput
  }

  /**
   * Gasto findUniqueOrThrow
   */
  export type GastoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where: GastoWhereUniqueInput
  }

  /**
   * Gasto findFirst
   */
  export type GastoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gastos.
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gastos.
     */
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Gasto findFirstOrThrow
   */
  export type GastoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gasto to fetch.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gastos.
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gastos.
     */
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Gasto findMany
   */
  export type GastoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter, which Gastos to fetch.
     */
    where?: GastoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gastos to fetch.
     */
    orderBy?: GastoOrderByWithRelationInput | GastoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gastos.
     */
    cursor?: GastoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gastos.
     */
    skip?: number
    distinct?: GastoScalarFieldEnum | GastoScalarFieldEnum[]
  }

  /**
   * Gasto create
   */
  export type GastoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * The data needed to create a Gasto.
     */
    data: XOR<GastoCreateInput, GastoUncheckedCreateInput>
  }

  /**
   * Gasto createMany
   */
  export type GastoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gastos.
     */
    data: GastoCreateManyInput | GastoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gasto createManyAndReturn
   */
  export type GastoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * The data used to create many Gastos.
     */
    data: GastoCreateManyInput | GastoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gasto update
   */
  export type GastoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * The data needed to update a Gasto.
     */
    data: XOR<GastoUpdateInput, GastoUncheckedUpdateInput>
    /**
     * Choose, which Gasto to update.
     */
    where: GastoWhereUniqueInput
  }

  /**
   * Gasto updateMany
   */
  export type GastoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gastos.
     */
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyInput>
    /**
     * Filter which Gastos to update
     */
    where?: GastoWhereInput
    /**
     * Limit how many Gastos to update.
     */
    limit?: number
  }

  /**
   * Gasto updateManyAndReturn
   */
  export type GastoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * The data used to update Gastos.
     */
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyInput>
    /**
     * Filter which Gastos to update
     */
    where?: GastoWhereInput
    /**
     * Limit how many Gastos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gasto upsert
   */
  export type GastoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * The filter to search for the Gasto to update in case it exists.
     */
    where: GastoWhereUniqueInput
    /**
     * In case the Gasto found by the `where` argument doesn't exist, create a new Gasto with this data.
     */
    create: XOR<GastoCreateInput, GastoUncheckedCreateInput>
    /**
     * In case the Gasto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GastoUpdateInput, GastoUncheckedUpdateInput>
  }

  /**
   * Gasto delete
   */
  export type GastoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    /**
     * Filter which Gasto to delete.
     */
    where: GastoWhereUniqueInput
  }

  /**
   * Gasto deleteMany
   */
  export type GastoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gastos to delete
     */
    where?: GastoWhereInput
    /**
     * Limit how many Gastos to delete.
     */
    limit?: number
  }

  /**
   * Gasto.vehiculo
   */
  export type Gasto$vehiculoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    where?: VehiculoWhereInput
  }

  /**
   * Gasto.facturas
   */
  export type Gasto$facturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    cursor?: FacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Gasto without action
   */
  export type GastoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
  }


  /**
   * Model Factura
   */

  export type AggregateFactura = {
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  export type FacturaAvgAggregateOutputType = {
    id: number | null
    subTotal: number | null
    descuento: number | null
    totalIEPS: number | null
    iva16: number | null
    retenidoIVA: number | null
    retenidoISR: number | null
    ish: number | null
    total: number | null
    tipoCambio: number | null
    gastoId: number | null
    vehiculoId: number | null
  }

  export type FacturaSumAggregateOutputType = {
    id: number | null
    subTotal: number | null
    descuento: number | null
    totalIEPS: number | null
    iva16: number | null
    retenidoIVA: number | null
    retenidoISR: number | null
    ish: number | null
    total: number | null
    tipoCambio: number | null
    gastoId: number | null
    vehiculoId: number | null
  }

  export type FacturaMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    estadoSAT: string | null
    tipoComprobante: string | null
    tipo: string | null
    fechaEmision: Date | null
    serie: string | null
    folio: string | null
    rfcEmisor: string | null
    nombreEmisor: string | null
    rfcReceptor: string | null
    nombreReceptor: string | null
    usoCFDI: string | null
    subTotal: number | null
    descuento: number | null
    totalIEPS: number | null
    iva16: number | null
    retenidoIVA: number | null
    retenidoISR: number | null
    ish: number | null
    total: number | null
    moneda: string | null
    tipoCambio: number | null
    formaPago: string | null
    metodoPago: string | null
    conceptos: string | null
    regimenFiscalReceptor: string | null
    domicilioFiscalReceptor: string | null
    fechaPago: Date | null
    bancoPago: string | null
    folioPago: string | null
    gastoId: number | null
    vehiculoId: number | null
  }

  export type FacturaMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    estadoSAT: string | null
    tipoComprobante: string | null
    tipo: string | null
    fechaEmision: Date | null
    serie: string | null
    folio: string | null
    rfcEmisor: string | null
    nombreEmisor: string | null
    rfcReceptor: string | null
    nombreReceptor: string | null
    usoCFDI: string | null
    subTotal: number | null
    descuento: number | null
    totalIEPS: number | null
    iva16: number | null
    retenidoIVA: number | null
    retenidoISR: number | null
    ish: number | null
    total: number | null
    moneda: string | null
    tipoCambio: number | null
    formaPago: string | null
    metodoPago: string | null
    conceptos: string | null
    regimenFiscalReceptor: string | null
    domicilioFiscalReceptor: string | null
    fechaPago: Date | null
    bancoPago: string | null
    folioPago: string | null
    gastoId: number | null
    vehiculoId: number | null
  }

  export type FacturaCountAggregateOutputType = {
    id: number
    uuid: number
    estadoSAT: number
    tipoComprobante: number
    tipo: number
    fechaEmision: number
    serie: number
    folio: number
    rfcEmisor: number
    nombreEmisor: number
    rfcReceptor: number
    nombreReceptor: number
    usoCFDI: number
    subTotal: number
    descuento: number
    totalIEPS: number
    iva16: number
    retenidoIVA: number
    retenidoISR: number
    ish: number
    total: number
    moneda: number
    tipoCambio: number
    formaPago: number
    metodoPago: number
    conceptos: number
    regimenFiscalReceptor: number
    domicilioFiscalReceptor: number
    fechaPago: number
    bancoPago: number
    folioPago: number
    gastoId: number
    vehiculoId: number
    _all: number
  }


  export type FacturaAvgAggregateInputType = {
    id?: true
    subTotal?: true
    descuento?: true
    totalIEPS?: true
    iva16?: true
    retenidoIVA?: true
    retenidoISR?: true
    ish?: true
    total?: true
    tipoCambio?: true
    gastoId?: true
    vehiculoId?: true
  }

  export type FacturaSumAggregateInputType = {
    id?: true
    subTotal?: true
    descuento?: true
    totalIEPS?: true
    iva16?: true
    retenidoIVA?: true
    retenidoISR?: true
    ish?: true
    total?: true
    tipoCambio?: true
    gastoId?: true
    vehiculoId?: true
  }

  export type FacturaMinAggregateInputType = {
    id?: true
    uuid?: true
    estadoSAT?: true
    tipoComprobante?: true
    tipo?: true
    fechaEmision?: true
    serie?: true
    folio?: true
    rfcEmisor?: true
    nombreEmisor?: true
    rfcReceptor?: true
    nombreReceptor?: true
    usoCFDI?: true
    subTotal?: true
    descuento?: true
    totalIEPS?: true
    iva16?: true
    retenidoIVA?: true
    retenidoISR?: true
    ish?: true
    total?: true
    moneda?: true
    tipoCambio?: true
    formaPago?: true
    metodoPago?: true
    conceptos?: true
    regimenFiscalReceptor?: true
    domicilioFiscalReceptor?: true
    fechaPago?: true
    bancoPago?: true
    folioPago?: true
    gastoId?: true
    vehiculoId?: true
  }

  export type FacturaMaxAggregateInputType = {
    id?: true
    uuid?: true
    estadoSAT?: true
    tipoComprobante?: true
    tipo?: true
    fechaEmision?: true
    serie?: true
    folio?: true
    rfcEmisor?: true
    nombreEmisor?: true
    rfcReceptor?: true
    nombreReceptor?: true
    usoCFDI?: true
    subTotal?: true
    descuento?: true
    totalIEPS?: true
    iva16?: true
    retenidoIVA?: true
    retenidoISR?: true
    ish?: true
    total?: true
    moneda?: true
    tipoCambio?: true
    formaPago?: true
    metodoPago?: true
    conceptos?: true
    regimenFiscalReceptor?: true
    domicilioFiscalReceptor?: true
    fechaPago?: true
    bancoPago?: true
    folioPago?: true
    gastoId?: true
    vehiculoId?: true
  }

  export type FacturaCountAggregateInputType = {
    id?: true
    uuid?: true
    estadoSAT?: true
    tipoComprobante?: true
    tipo?: true
    fechaEmision?: true
    serie?: true
    folio?: true
    rfcEmisor?: true
    nombreEmisor?: true
    rfcReceptor?: true
    nombreReceptor?: true
    usoCFDI?: true
    subTotal?: true
    descuento?: true
    totalIEPS?: true
    iva16?: true
    retenidoIVA?: true
    retenidoISR?: true
    ish?: true
    total?: true
    moneda?: true
    tipoCambio?: true
    formaPago?: true
    metodoPago?: true
    conceptos?: true
    regimenFiscalReceptor?: true
    domicilioFiscalReceptor?: true
    fechaPago?: true
    bancoPago?: true
    folioPago?: true
    gastoId?: true
    vehiculoId?: true
    _all?: true
  }

  export type FacturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Factura to aggregate.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facturas
    **/
    _count?: true | FacturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacturaMaxAggregateInputType
  }

  export type GetFacturaAggregateType<T extends FacturaAggregateArgs> = {
        [P in keyof T & keyof AggregateFactura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFactura[P]>
      : GetScalarType<T[P], AggregateFactura[P]>
  }




  export type FacturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithAggregationInput | FacturaOrderByWithAggregationInput[]
    by: FacturaScalarFieldEnum[] | FacturaScalarFieldEnum
    having?: FacturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacturaCountAggregateInputType | true
    _avg?: FacturaAvgAggregateInputType
    _sum?: FacturaSumAggregateInputType
    _min?: FacturaMinAggregateInputType
    _max?: FacturaMaxAggregateInputType
  }

  export type FacturaGroupByOutputType = {
    id: number
    uuid: string | null
    estadoSAT: string | null
    tipoComprobante: string | null
    tipo: string | null
    fechaEmision: Date
    serie: string | null
    folio: string | null
    rfcEmisor: string
    nombreEmisor: string
    rfcReceptor: string
    nombreReceptor: string
    usoCFDI: string
    subTotal: number
    descuento: number | null
    totalIEPS: number | null
    iva16: number | null
    retenidoIVA: number | null
    retenidoISR: number | null
    ish: number | null
    total: number
    moneda: string | null
    tipoCambio: number | null
    formaPago: string
    metodoPago: string
    conceptos: string
    regimenFiscalReceptor: string | null
    domicilioFiscalReceptor: string | null
    fechaPago: Date | null
    bancoPago: string | null
    folioPago: string | null
    gastoId: number | null
    vehiculoId: number | null
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  type GetFacturaGroupByPayload<T extends FacturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacturaGroupByOutputType[P]>
            : GetScalarType<T[P], FacturaGroupByOutputType[P]>
        }
      >
    >


  export type FacturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    estadoSAT?: boolean
    tipoComprobante?: boolean
    tipo?: boolean
    fechaEmision?: boolean
    serie?: boolean
    folio?: boolean
    rfcEmisor?: boolean
    nombreEmisor?: boolean
    rfcReceptor?: boolean
    nombreReceptor?: boolean
    usoCFDI?: boolean
    subTotal?: boolean
    descuento?: boolean
    totalIEPS?: boolean
    iva16?: boolean
    retenidoIVA?: boolean
    retenidoISR?: boolean
    ish?: boolean
    total?: boolean
    moneda?: boolean
    tipoCambio?: boolean
    formaPago?: boolean
    metodoPago?: boolean
    conceptos?: boolean
    regimenFiscalReceptor?: boolean
    domicilioFiscalReceptor?: boolean
    fechaPago?: boolean
    bancoPago?: boolean
    folioPago?: boolean
    gastoId?: boolean
    vehiculoId?: boolean
    gasto?: boolean | Factura$gastoArgs<ExtArgs>
    vehiculo?: boolean | Factura$vehiculoArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    estadoSAT?: boolean
    tipoComprobante?: boolean
    tipo?: boolean
    fechaEmision?: boolean
    serie?: boolean
    folio?: boolean
    rfcEmisor?: boolean
    nombreEmisor?: boolean
    rfcReceptor?: boolean
    nombreReceptor?: boolean
    usoCFDI?: boolean
    subTotal?: boolean
    descuento?: boolean
    totalIEPS?: boolean
    iva16?: boolean
    retenidoIVA?: boolean
    retenidoISR?: boolean
    ish?: boolean
    total?: boolean
    moneda?: boolean
    tipoCambio?: boolean
    formaPago?: boolean
    metodoPago?: boolean
    conceptos?: boolean
    regimenFiscalReceptor?: boolean
    domicilioFiscalReceptor?: boolean
    fechaPago?: boolean
    bancoPago?: boolean
    folioPago?: boolean
    gastoId?: boolean
    vehiculoId?: boolean
    gasto?: boolean | Factura$gastoArgs<ExtArgs>
    vehiculo?: boolean | Factura$vehiculoArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    estadoSAT?: boolean
    tipoComprobante?: boolean
    tipo?: boolean
    fechaEmision?: boolean
    serie?: boolean
    folio?: boolean
    rfcEmisor?: boolean
    nombreEmisor?: boolean
    rfcReceptor?: boolean
    nombreReceptor?: boolean
    usoCFDI?: boolean
    subTotal?: boolean
    descuento?: boolean
    totalIEPS?: boolean
    iva16?: boolean
    retenidoIVA?: boolean
    retenidoISR?: boolean
    ish?: boolean
    total?: boolean
    moneda?: boolean
    tipoCambio?: boolean
    formaPago?: boolean
    metodoPago?: boolean
    conceptos?: boolean
    regimenFiscalReceptor?: boolean
    domicilioFiscalReceptor?: boolean
    fechaPago?: boolean
    bancoPago?: boolean
    folioPago?: boolean
    gastoId?: boolean
    vehiculoId?: boolean
    gasto?: boolean | Factura$gastoArgs<ExtArgs>
    vehiculo?: boolean | Factura$vehiculoArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectScalar = {
    id?: boolean
    uuid?: boolean
    estadoSAT?: boolean
    tipoComprobante?: boolean
    tipo?: boolean
    fechaEmision?: boolean
    serie?: boolean
    folio?: boolean
    rfcEmisor?: boolean
    nombreEmisor?: boolean
    rfcReceptor?: boolean
    nombreReceptor?: boolean
    usoCFDI?: boolean
    subTotal?: boolean
    descuento?: boolean
    totalIEPS?: boolean
    iva16?: boolean
    retenidoIVA?: boolean
    retenidoISR?: boolean
    ish?: boolean
    total?: boolean
    moneda?: boolean
    tipoCambio?: boolean
    formaPago?: boolean
    metodoPago?: boolean
    conceptos?: boolean
    regimenFiscalReceptor?: boolean
    domicilioFiscalReceptor?: boolean
    fechaPago?: boolean
    bancoPago?: boolean
    folioPago?: boolean
    gastoId?: boolean
    vehiculoId?: boolean
  }

  export type FacturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "estadoSAT" | "tipoComprobante" | "tipo" | "fechaEmision" | "serie" | "folio" | "rfcEmisor" | "nombreEmisor" | "rfcReceptor" | "nombreReceptor" | "usoCFDI" | "subTotal" | "descuento" | "totalIEPS" | "iva16" | "retenidoIVA" | "retenidoISR" | "ish" | "total" | "moneda" | "tipoCambio" | "formaPago" | "metodoPago" | "conceptos" | "regimenFiscalReceptor" | "domicilioFiscalReceptor" | "fechaPago" | "bancoPago" | "folioPago" | "gastoId" | "vehiculoId", ExtArgs["result"]["factura"]>
  export type FacturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gasto?: boolean | Factura$gastoArgs<ExtArgs>
    vehiculo?: boolean | Factura$vehiculoArgs<ExtArgs>
  }
  export type FacturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gasto?: boolean | Factura$gastoArgs<ExtArgs>
    vehiculo?: boolean | Factura$vehiculoArgs<ExtArgs>
  }
  export type FacturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gasto?: boolean | Factura$gastoArgs<ExtArgs>
    vehiculo?: boolean | Factura$vehiculoArgs<ExtArgs>
  }

  export type $FacturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Factura"
    objects: {
      gasto: Prisma.$GastoPayload<ExtArgs> | null
      vehiculo: Prisma.$VehiculoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string | null
      estadoSAT: string | null
      tipoComprobante: string | null
      tipo: string | null
      fechaEmision: Date
      serie: string | null
      folio: string | null
      rfcEmisor: string
      nombreEmisor: string
      rfcReceptor: string
      nombreReceptor: string
      usoCFDI: string
      subTotal: number
      descuento: number | null
      totalIEPS: number | null
      iva16: number | null
      retenidoIVA: number | null
      retenidoISR: number | null
      ish: number | null
      total: number
      moneda: string | null
      tipoCambio: number | null
      formaPago: string
      metodoPago: string
      conceptos: string
      regimenFiscalReceptor: string | null
      domicilioFiscalReceptor: string | null
      fechaPago: Date | null
      bancoPago: string | null
      folioPago: string | null
      gastoId: number | null
      vehiculoId: number | null
    }, ExtArgs["result"]["factura"]>
    composites: {}
  }

  type FacturaGetPayload<S extends boolean | null | undefined | FacturaDefaultArgs> = $Result.GetResult<Prisma.$FacturaPayload, S>

  type FacturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacturaCountAggregateInputType | true
    }

  export interface FacturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Factura'], meta: { name: 'Factura' } }
    /**
     * Find zero or one Factura that matches the filter.
     * @param {FacturaFindUniqueArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacturaFindUniqueArgs>(args: SelectSubset<T, FacturaFindUniqueArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Factura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacturaFindUniqueOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacturaFindUniqueOrThrowArgs>(args: SelectSubset<T, FacturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindFirstArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacturaFindFirstArgs>(args?: SelectSubset<T, FacturaFindFirstArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindFirstOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacturaFindFirstOrThrowArgs>(args?: SelectSubset<T, FacturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facturas
     * const facturas = await prisma.factura.findMany()
     * 
     * // Get first 10 Facturas
     * const facturas = await prisma.factura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facturaWithIdOnly = await prisma.factura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacturaFindManyArgs>(args?: SelectSubset<T, FacturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Factura.
     * @param {FacturaCreateArgs} args - Arguments to create a Factura.
     * @example
     * // Create one Factura
     * const Factura = await prisma.factura.create({
     *   data: {
     *     // ... data to create a Factura
     *   }
     * })
     * 
     */
    create<T extends FacturaCreateArgs>(args: SelectSubset<T, FacturaCreateArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facturas.
     * @param {FacturaCreateManyArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const factura = await prisma.factura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacturaCreateManyArgs>(args?: SelectSubset<T, FacturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facturas and returns the data saved in the database.
     * @param {FacturaCreateManyAndReturnArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const factura = await prisma.factura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facturas and only return the `id`
     * const facturaWithIdOnly = await prisma.factura.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacturaCreateManyAndReturnArgs>(args?: SelectSubset<T, FacturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Factura.
     * @param {FacturaDeleteArgs} args - Arguments to delete one Factura.
     * @example
     * // Delete one Factura
     * const Factura = await prisma.factura.delete({
     *   where: {
     *     // ... filter to delete one Factura
     *   }
     * })
     * 
     */
    delete<T extends FacturaDeleteArgs>(args: SelectSubset<T, FacturaDeleteArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Factura.
     * @param {FacturaUpdateArgs} args - Arguments to update one Factura.
     * @example
     * // Update one Factura
     * const factura = await prisma.factura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacturaUpdateArgs>(args: SelectSubset<T, FacturaUpdateArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facturas.
     * @param {FacturaDeleteManyArgs} args - Arguments to filter Facturas to delete.
     * @example
     * // Delete a few Facturas
     * const { count } = await prisma.factura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacturaDeleteManyArgs>(args?: SelectSubset<T, FacturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facturas
     * const factura = await prisma.factura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacturaUpdateManyArgs>(args: SelectSubset<T, FacturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas and returns the data updated in the database.
     * @param {FacturaUpdateManyAndReturnArgs} args - Arguments to update many Facturas.
     * @example
     * // Update many Facturas
     * const factura = await prisma.factura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facturas and only return the `id`
     * const facturaWithIdOnly = await prisma.factura.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacturaUpdateManyAndReturnArgs>(args: SelectSubset<T, FacturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Factura.
     * @param {FacturaUpsertArgs} args - Arguments to update or create a Factura.
     * @example
     * // Update or create a Factura
     * const factura = await prisma.factura.upsert({
     *   create: {
     *     // ... data to create a Factura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Factura we want to update
     *   }
     * })
     */
    upsert<T extends FacturaUpsertArgs>(args: SelectSubset<T, FacturaUpsertArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaCountArgs} args - Arguments to filter Facturas to count.
     * @example
     * // Count the number of Facturas
     * const count = await prisma.factura.count({
     *   where: {
     *     // ... the filter for the Facturas we want to count
     *   }
     * })
    **/
    count<T extends FacturaCountArgs>(
      args?: Subset<T, FacturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacturaAggregateArgs>(args: Subset<T, FacturaAggregateArgs>): Prisma.PrismaPromise<GetFacturaAggregateType<T>>

    /**
     * Group by Factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacturaGroupByArgs['orderBy'] }
        : { orderBy?: FacturaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Factura model
   */
  readonly fields: FacturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Factura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gasto<T extends Factura$gastoArgs<ExtArgs> = {}>(args?: Subset<T, Factura$gastoArgs<ExtArgs>>): Prisma__GastoClient<$Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vehiculo<T extends Factura$vehiculoArgs<ExtArgs> = {}>(args?: Subset<T, Factura$vehiculoArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Factura model
   */
  interface FacturaFieldRefs {
    readonly id: FieldRef<"Factura", 'Int'>
    readonly uuid: FieldRef<"Factura", 'String'>
    readonly estadoSAT: FieldRef<"Factura", 'String'>
    readonly tipoComprobante: FieldRef<"Factura", 'String'>
    readonly tipo: FieldRef<"Factura", 'String'>
    readonly fechaEmision: FieldRef<"Factura", 'DateTime'>
    readonly serie: FieldRef<"Factura", 'String'>
    readonly folio: FieldRef<"Factura", 'String'>
    readonly rfcEmisor: FieldRef<"Factura", 'String'>
    readonly nombreEmisor: FieldRef<"Factura", 'String'>
    readonly rfcReceptor: FieldRef<"Factura", 'String'>
    readonly nombreReceptor: FieldRef<"Factura", 'String'>
    readonly usoCFDI: FieldRef<"Factura", 'String'>
    readonly subTotal: FieldRef<"Factura", 'Float'>
    readonly descuento: FieldRef<"Factura", 'Float'>
    readonly totalIEPS: FieldRef<"Factura", 'Float'>
    readonly iva16: FieldRef<"Factura", 'Float'>
    readonly retenidoIVA: FieldRef<"Factura", 'Float'>
    readonly retenidoISR: FieldRef<"Factura", 'Float'>
    readonly ish: FieldRef<"Factura", 'Float'>
    readonly total: FieldRef<"Factura", 'Float'>
    readonly moneda: FieldRef<"Factura", 'String'>
    readonly tipoCambio: FieldRef<"Factura", 'Float'>
    readonly formaPago: FieldRef<"Factura", 'String'>
    readonly metodoPago: FieldRef<"Factura", 'String'>
    readonly conceptos: FieldRef<"Factura", 'String'>
    readonly regimenFiscalReceptor: FieldRef<"Factura", 'String'>
    readonly domicilioFiscalReceptor: FieldRef<"Factura", 'String'>
    readonly fechaPago: FieldRef<"Factura", 'DateTime'>
    readonly bancoPago: FieldRef<"Factura", 'String'>
    readonly folioPago: FieldRef<"Factura", 'String'>
    readonly gastoId: FieldRef<"Factura", 'Int'>
    readonly vehiculoId: FieldRef<"Factura", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Factura findUnique
   */
  export type FacturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura findUniqueOrThrow
   */
  export type FacturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura findFirst
   */
  export type FacturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura findFirstOrThrow
   */
  export type FacturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura findMany
   */
  export type FacturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Facturas to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura create
   */
  export type FacturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The data needed to create a Factura.
     */
    data: XOR<FacturaCreateInput, FacturaUncheckedCreateInput>
  }

  /**
   * Factura createMany
   */
  export type FacturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facturas.
     */
    data: FacturaCreateManyInput | FacturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Factura createManyAndReturn
   */
  export type FacturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * The data used to create many Facturas.
     */
    data: FacturaCreateManyInput | FacturaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Factura update
   */
  export type FacturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The data needed to update a Factura.
     */
    data: XOR<FacturaUpdateInput, FacturaUncheckedUpdateInput>
    /**
     * Choose, which Factura to update.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura updateMany
   */
  export type FacturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facturas.
     */
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyInput>
    /**
     * Filter which Facturas to update
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to update.
     */
    limit?: number
  }

  /**
   * Factura updateManyAndReturn
   */
  export type FacturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * The data used to update Facturas.
     */
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyInput>
    /**
     * Filter which Facturas to update
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Factura upsert
   */
  export type FacturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The filter to search for the Factura to update in case it exists.
     */
    where: FacturaWhereUniqueInput
    /**
     * In case the Factura found by the `where` argument doesn't exist, create a new Factura with this data.
     */
    create: XOR<FacturaCreateInput, FacturaUncheckedCreateInput>
    /**
     * In case the Factura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacturaUpdateInput, FacturaUncheckedUpdateInput>
  }

  /**
   * Factura delete
   */
  export type FacturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter which Factura to delete.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura deleteMany
   */
  export type FacturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facturas to delete
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to delete.
     */
    limit?: number
  }

  /**
   * Factura.gasto
   */
  export type Factura$gastoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: GastoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gasto
     */
    omit?: GastoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastoInclude<ExtArgs> | null
    where?: GastoWhereInput
  }

  /**
   * Factura.vehiculo
   */
  export type Factura$vehiculoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    where?: VehiculoWhereInput
  }

  /**
   * Factura without action
   */
  export type FacturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    user: 'user',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehiculoScalarFieldEnum: {
    id: 'id',
    placa: 'placa',
    marca: 'marca',
    tipo: 'tipo',
    color: 'color',
    modelo: 'modelo',
    serie: 'serie',
    motor: 'motor',
    proyecto: 'proyecto',
    ubicacion: 'ubicacion',
    placaAnterior: 'placaAnterior',
    comentario: 'comentario'
  };

  export type VehiculoScalarFieldEnum = (typeof VehiculoScalarFieldEnum)[keyof typeof VehiculoScalarFieldEnum]


  export const SeguroScalarFieldEnum: {
    id: 'id',
    vehiculoId: 'vehiculoId',
    compania: 'compania',
    precio: 'precio',
    fechaInicio: 'fechaInicio',
    fechaVencimiento: 'fechaVencimiento',
    responsable: 'responsable'
  };

  export type SeguroScalarFieldEnum = (typeof SeguroScalarFieldEnum)[keyof typeof SeguroScalarFieldEnum]


  export const GastoScalarFieldEnum: {
    id: 'id',
    folio: 'folio',
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
    vehiculoId: 'vehiculoId'
  };

  export type GastoScalarFieldEnum = (typeof GastoScalarFieldEnum)[keyof typeof GastoScalarFieldEnum]


  export const FacturaScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    estadoSAT: 'estadoSAT',
    tipoComprobante: 'tipoComprobante',
    tipo: 'tipo',
    fechaEmision: 'fechaEmision',
    serie: 'serie',
    folio: 'folio',
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
    vehiculoId: 'vehiculoId'
  };

  export type FacturaScalarFieldEnum = (typeof FacturaScalarFieldEnum)[keyof typeof FacturaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CompaniaSeguro'
   */
  export type EnumCompaniaSeguroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompaniaSeguro'>
    


  /**
   * Reference to a field of type 'CompaniaSeguro[]'
   */
  export type ListEnumCompaniaSeguroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompaniaSeguro[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    user?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    user?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }, "id" | "user">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    user?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    user?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type VehiculoWhereInput = {
    AND?: VehiculoWhereInput | VehiculoWhereInput[]
    OR?: VehiculoWhereInput[]
    NOT?: VehiculoWhereInput | VehiculoWhereInput[]
    id?: IntFilter<"Vehiculo"> | number
    placa?: StringFilter<"Vehiculo"> | string
    marca?: StringFilter<"Vehiculo"> | string
    tipo?: StringFilter<"Vehiculo"> | string
    color?: StringFilter<"Vehiculo"> | string
    modelo?: IntFilter<"Vehiculo"> | number
    serie?: StringFilter<"Vehiculo"> | string
    motor?: StringNullableFilter<"Vehiculo"> | string | null
    proyecto?: StringNullableFilter<"Vehiculo"> | string | null
    ubicacion?: StringNullableFilter<"Vehiculo"> | string | null
    placaAnterior?: StringNullableFilter<"Vehiculo"> | string | null
    comentario?: StringNullableFilter<"Vehiculo"> | string | null
    seguros?: SeguroListRelationFilter
    gastos?: GastoListRelationFilter
    facturas?: FacturaListRelationFilter
  }

  export type VehiculoOrderByWithRelationInput = {
    id?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    color?: SortOrder
    modelo?: SortOrder
    serie?: SortOrder
    motor?: SortOrderInput | SortOrder
    proyecto?: SortOrderInput | SortOrder
    ubicacion?: SortOrderInput | SortOrder
    placaAnterior?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    seguros?: SeguroOrderByRelationAggregateInput
    gastos?: GastoOrderByRelationAggregateInput
    facturas?: FacturaOrderByRelationAggregateInput
  }

  export type VehiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    placa?: string
    serie?: string
    AND?: VehiculoWhereInput | VehiculoWhereInput[]
    OR?: VehiculoWhereInput[]
    NOT?: VehiculoWhereInput | VehiculoWhereInput[]
    marca?: StringFilter<"Vehiculo"> | string
    tipo?: StringFilter<"Vehiculo"> | string
    color?: StringFilter<"Vehiculo"> | string
    modelo?: IntFilter<"Vehiculo"> | number
    motor?: StringNullableFilter<"Vehiculo"> | string | null
    proyecto?: StringNullableFilter<"Vehiculo"> | string | null
    ubicacion?: StringNullableFilter<"Vehiculo"> | string | null
    placaAnterior?: StringNullableFilter<"Vehiculo"> | string | null
    comentario?: StringNullableFilter<"Vehiculo"> | string | null
    seguros?: SeguroListRelationFilter
    gastos?: GastoListRelationFilter
    facturas?: FacturaListRelationFilter
  }, "id" | "placa" | "serie">

  export type VehiculoOrderByWithAggregationInput = {
    id?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    color?: SortOrder
    modelo?: SortOrder
    serie?: SortOrder
    motor?: SortOrderInput | SortOrder
    proyecto?: SortOrderInput | SortOrder
    ubicacion?: SortOrderInput | SortOrder
    placaAnterior?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    _count?: VehiculoCountOrderByAggregateInput
    _avg?: VehiculoAvgOrderByAggregateInput
    _max?: VehiculoMaxOrderByAggregateInput
    _min?: VehiculoMinOrderByAggregateInput
    _sum?: VehiculoSumOrderByAggregateInput
  }

  export type VehiculoScalarWhereWithAggregatesInput = {
    AND?: VehiculoScalarWhereWithAggregatesInput | VehiculoScalarWhereWithAggregatesInput[]
    OR?: VehiculoScalarWhereWithAggregatesInput[]
    NOT?: VehiculoScalarWhereWithAggregatesInput | VehiculoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vehiculo"> | number
    placa?: StringWithAggregatesFilter<"Vehiculo"> | string
    marca?: StringWithAggregatesFilter<"Vehiculo"> | string
    tipo?: StringWithAggregatesFilter<"Vehiculo"> | string
    color?: StringWithAggregatesFilter<"Vehiculo"> | string
    modelo?: IntWithAggregatesFilter<"Vehiculo"> | number
    serie?: StringWithAggregatesFilter<"Vehiculo"> | string
    motor?: StringNullableWithAggregatesFilter<"Vehiculo"> | string | null
    proyecto?: StringNullableWithAggregatesFilter<"Vehiculo"> | string | null
    ubicacion?: StringNullableWithAggregatesFilter<"Vehiculo"> | string | null
    placaAnterior?: StringNullableWithAggregatesFilter<"Vehiculo"> | string | null
    comentario?: StringNullableWithAggregatesFilter<"Vehiculo"> | string | null
  }

  export type SeguroWhereInput = {
    AND?: SeguroWhereInput | SeguroWhereInput[]
    OR?: SeguroWhereInput[]
    NOT?: SeguroWhereInput | SeguroWhereInput[]
    id?: IntFilter<"Seguro"> | number
    vehiculoId?: IntFilter<"Seguro"> | number
    compania?: EnumCompaniaSeguroFilter<"Seguro"> | $Enums.CompaniaSeguro
    precio?: FloatFilter<"Seguro"> | number
    fechaInicio?: DateTimeFilter<"Seguro"> | Date | string
    fechaVencimiento?: DateTimeFilter<"Seguro"> | Date | string
    responsable?: StringNullableFilter<"Seguro"> | string | null
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
  }

  export type SeguroOrderByWithRelationInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    compania?: SortOrder
    precio?: SortOrder
    fechaInicio?: SortOrder
    fechaVencimiento?: SortOrder
    responsable?: SortOrderInput | SortOrder
    vehiculo?: VehiculoOrderByWithRelationInput
  }

  export type SeguroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SeguroWhereInput | SeguroWhereInput[]
    OR?: SeguroWhereInput[]
    NOT?: SeguroWhereInput | SeguroWhereInput[]
    vehiculoId?: IntFilter<"Seguro"> | number
    compania?: EnumCompaniaSeguroFilter<"Seguro"> | $Enums.CompaniaSeguro
    precio?: FloatFilter<"Seguro"> | number
    fechaInicio?: DateTimeFilter<"Seguro"> | Date | string
    fechaVencimiento?: DateTimeFilter<"Seguro"> | Date | string
    responsable?: StringNullableFilter<"Seguro"> | string | null
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
  }, "id">

  export type SeguroOrderByWithAggregationInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    compania?: SortOrder
    precio?: SortOrder
    fechaInicio?: SortOrder
    fechaVencimiento?: SortOrder
    responsable?: SortOrderInput | SortOrder
    _count?: SeguroCountOrderByAggregateInput
    _avg?: SeguroAvgOrderByAggregateInput
    _max?: SeguroMaxOrderByAggregateInput
    _min?: SeguroMinOrderByAggregateInput
    _sum?: SeguroSumOrderByAggregateInput
  }

  export type SeguroScalarWhereWithAggregatesInput = {
    AND?: SeguroScalarWhereWithAggregatesInput | SeguroScalarWhereWithAggregatesInput[]
    OR?: SeguroScalarWhereWithAggregatesInput[]
    NOT?: SeguroScalarWhereWithAggregatesInput | SeguroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Seguro"> | number
    vehiculoId?: IntWithAggregatesFilter<"Seguro"> | number
    compania?: EnumCompaniaSeguroWithAggregatesFilter<"Seguro"> | $Enums.CompaniaSeguro
    precio?: FloatWithAggregatesFilter<"Seguro"> | number
    fechaInicio?: DateTimeWithAggregatesFilter<"Seguro"> | Date | string
    fechaVencimiento?: DateTimeWithAggregatesFilter<"Seguro"> | Date | string
    responsable?: StringNullableWithAggregatesFilter<"Seguro"> | string | null
  }

  export type GastoWhereInput = {
    AND?: GastoWhereInput | GastoWhereInput[]
    OR?: GastoWhereInput[]
    NOT?: GastoWhereInput | GastoWhereInput[]
    id?: IntFilter<"Gasto"> | number
    folio?: StringFilter<"Gasto"> | string
    fecha?: DateTimeFilter<"Gasto"> | Date | string
    razonSocial?: StringFilter<"Gasto"> | string
    banco?: StringNullableFilter<"Gasto"> | string | null
    tdc?: StringNullableFilter<"Gasto"> | string | null
    proveedor?: StringFilter<"Gasto"> | string
    concepto?: StringFilter<"Gasto"> | string
    referencia?: StringNullableFilter<"Gasto"> | string | null
    documento?: StringNullableFilter<"Gasto"> | string | null
    proyecto?: StringNullableFilter<"Gasto"> | string | null
    responsable?: StringFilter<"Gasto"> | string
    transferencia?: StringNullableFilter<"Gasto"> | string | null
    entrada?: FloatNullableFilter<"Gasto"> | number | null
    salida?: FloatNullableFilter<"Gasto"> | number | null
    saldo?: FloatNullableFilter<"Gasto"> | number | null
    vehiculoId?: IntNullableFilter<"Gasto"> | number | null
    vehiculo?: XOR<VehiculoNullableScalarRelationFilter, VehiculoWhereInput> | null
    facturas?: FacturaListRelationFilter
  }

  export type GastoOrderByWithRelationInput = {
    id?: SortOrder
    folio?: SortOrder
    fecha?: SortOrder
    razonSocial?: SortOrder
    banco?: SortOrderInput | SortOrder
    tdc?: SortOrderInput | SortOrder
    proveedor?: SortOrder
    concepto?: SortOrder
    referencia?: SortOrderInput | SortOrder
    documento?: SortOrderInput | SortOrder
    proyecto?: SortOrderInput | SortOrder
    responsable?: SortOrder
    transferencia?: SortOrderInput | SortOrder
    entrada?: SortOrderInput | SortOrder
    salida?: SortOrderInput | SortOrder
    saldo?: SortOrderInput | SortOrder
    vehiculoId?: SortOrderInput | SortOrder
    vehiculo?: VehiculoOrderByWithRelationInput
    facturas?: FacturaOrderByRelationAggregateInput
  }

  export type GastoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    folio?: string
    AND?: GastoWhereInput | GastoWhereInput[]
    OR?: GastoWhereInput[]
    NOT?: GastoWhereInput | GastoWhereInput[]
    fecha?: DateTimeFilter<"Gasto"> | Date | string
    razonSocial?: StringFilter<"Gasto"> | string
    banco?: StringNullableFilter<"Gasto"> | string | null
    tdc?: StringNullableFilter<"Gasto"> | string | null
    proveedor?: StringFilter<"Gasto"> | string
    concepto?: StringFilter<"Gasto"> | string
    referencia?: StringNullableFilter<"Gasto"> | string | null
    documento?: StringNullableFilter<"Gasto"> | string | null
    proyecto?: StringNullableFilter<"Gasto"> | string | null
    responsable?: StringFilter<"Gasto"> | string
    transferencia?: StringNullableFilter<"Gasto"> | string | null
    entrada?: FloatNullableFilter<"Gasto"> | number | null
    salida?: FloatNullableFilter<"Gasto"> | number | null
    saldo?: FloatNullableFilter<"Gasto"> | number | null
    vehiculoId?: IntNullableFilter<"Gasto"> | number | null
    vehiculo?: XOR<VehiculoNullableScalarRelationFilter, VehiculoWhereInput> | null
    facturas?: FacturaListRelationFilter
  }, "id" | "folio">

  export type GastoOrderByWithAggregationInput = {
    id?: SortOrder
    folio?: SortOrder
    fecha?: SortOrder
    razonSocial?: SortOrder
    banco?: SortOrderInput | SortOrder
    tdc?: SortOrderInput | SortOrder
    proveedor?: SortOrder
    concepto?: SortOrder
    referencia?: SortOrderInput | SortOrder
    documento?: SortOrderInput | SortOrder
    proyecto?: SortOrderInput | SortOrder
    responsable?: SortOrder
    transferencia?: SortOrderInput | SortOrder
    entrada?: SortOrderInput | SortOrder
    salida?: SortOrderInput | SortOrder
    saldo?: SortOrderInput | SortOrder
    vehiculoId?: SortOrderInput | SortOrder
    _count?: GastoCountOrderByAggregateInput
    _avg?: GastoAvgOrderByAggregateInput
    _max?: GastoMaxOrderByAggregateInput
    _min?: GastoMinOrderByAggregateInput
    _sum?: GastoSumOrderByAggregateInput
  }

  export type GastoScalarWhereWithAggregatesInput = {
    AND?: GastoScalarWhereWithAggregatesInput | GastoScalarWhereWithAggregatesInput[]
    OR?: GastoScalarWhereWithAggregatesInput[]
    NOT?: GastoScalarWhereWithAggregatesInput | GastoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gasto"> | number
    folio?: StringWithAggregatesFilter<"Gasto"> | string
    fecha?: DateTimeWithAggregatesFilter<"Gasto"> | Date | string
    razonSocial?: StringWithAggregatesFilter<"Gasto"> | string
    banco?: StringNullableWithAggregatesFilter<"Gasto"> | string | null
    tdc?: StringNullableWithAggregatesFilter<"Gasto"> | string | null
    proveedor?: StringWithAggregatesFilter<"Gasto"> | string
    concepto?: StringWithAggregatesFilter<"Gasto"> | string
    referencia?: StringNullableWithAggregatesFilter<"Gasto"> | string | null
    documento?: StringNullableWithAggregatesFilter<"Gasto"> | string | null
    proyecto?: StringNullableWithAggregatesFilter<"Gasto"> | string | null
    responsable?: StringWithAggregatesFilter<"Gasto"> | string
    transferencia?: StringNullableWithAggregatesFilter<"Gasto"> | string | null
    entrada?: FloatNullableWithAggregatesFilter<"Gasto"> | number | null
    salida?: FloatNullableWithAggregatesFilter<"Gasto"> | number | null
    saldo?: FloatNullableWithAggregatesFilter<"Gasto"> | number | null
    vehiculoId?: IntNullableWithAggregatesFilter<"Gasto"> | number | null
  }

  export type FacturaWhereInput = {
    AND?: FacturaWhereInput | FacturaWhereInput[]
    OR?: FacturaWhereInput[]
    NOT?: FacturaWhereInput | FacturaWhereInput[]
    id?: IntFilter<"Factura"> | number
    uuid?: StringNullableFilter<"Factura"> | string | null
    estadoSAT?: StringNullableFilter<"Factura"> | string | null
    tipoComprobante?: StringNullableFilter<"Factura"> | string | null
    tipo?: StringNullableFilter<"Factura"> | string | null
    fechaEmision?: DateTimeFilter<"Factura"> | Date | string
    serie?: StringNullableFilter<"Factura"> | string | null
    folio?: StringNullableFilter<"Factura"> | string | null
    rfcEmisor?: StringFilter<"Factura"> | string
    nombreEmisor?: StringFilter<"Factura"> | string
    rfcReceptor?: StringFilter<"Factura"> | string
    nombreReceptor?: StringFilter<"Factura"> | string
    usoCFDI?: StringFilter<"Factura"> | string
    subTotal?: FloatFilter<"Factura"> | number
    descuento?: FloatNullableFilter<"Factura"> | number | null
    totalIEPS?: FloatNullableFilter<"Factura"> | number | null
    iva16?: FloatNullableFilter<"Factura"> | number | null
    retenidoIVA?: FloatNullableFilter<"Factura"> | number | null
    retenidoISR?: FloatNullableFilter<"Factura"> | number | null
    ish?: FloatNullableFilter<"Factura"> | number | null
    total?: FloatFilter<"Factura"> | number
    moneda?: StringNullableFilter<"Factura"> | string | null
    tipoCambio?: FloatNullableFilter<"Factura"> | number | null
    formaPago?: StringFilter<"Factura"> | string
    metodoPago?: StringFilter<"Factura"> | string
    conceptos?: StringFilter<"Factura"> | string
    regimenFiscalReceptor?: StringNullableFilter<"Factura"> | string | null
    domicilioFiscalReceptor?: StringNullableFilter<"Factura"> | string | null
    fechaPago?: DateTimeNullableFilter<"Factura"> | Date | string | null
    bancoPago?: StringNullableFilter<"Factura"> | string | null
    folioPago?: StringNullableFilter<"Factura"> | string | null
    gastoId?: IntNullableFilter<"Factura"> | number | null
    vehiculoId?: IntNullableFilter<"Factura"> | number | null
    gasto?: XOR<GastoNullableScalarRelationFilter, GastoWhereInput> | null
    vehiculo?: XOR<VehiculoNullableScalarRelationFilter, VehiculoWhereInput> | null
  }

  export type FacturaOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrderInput | SortOrder
    estadoSAT?: SortOrderInput | SortOrder
    tipoComprobante?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    fechaEmision?: SortOrder
    serie?: SortOrderInput | SortOrder
    folio?: SortOrderInput | SortOrder
    rfcEmisor?: SortOrder
    nombreEmisor?: SortOrder
    rfcReceptor?: SortOrder
    nombreReceptor?: SortOrder
    usoCFDI?: SortOrder
    subTotal?: SortOrder
    descuento?: SortOrderInput | SortOrder
    totalIEPS?: SortOrderInput | SortOrder
    iva16?: SortOrderInput | SortOrder
    retenidoIVA?: SortOrderInput | SortOrder
    retenidoISR?: SortOrderInput | SortOrder
    ish?: SortOrderInput | SortOrder
    total?: SortOrder
    moneda?: SortOrderInput | SortOrder
    tipoCambio?: SortOrderInput | SortOrder
    formaPago?: SortOrder
    metodoPago?: SortOrder
    conceptos?: SortOrder
    regimenFiscalReceptor?: SortOrderInput | SortOrder
    domicilioFiscalReceptor?: SortOrderInput | SortOrder
    fechaPago?: SortOrderInput | SortOrder
    bancoPago?: SortOrderInput | SortOrder
    folioPago?: SortOrderInput | SortOrder
    gastoId?: SortOrderInput | SortOrder
    vehiculoId?: SortOrderInput | SortOrder
    gasto?: GastoOrderByWithRelationInput
    vehiculo?: VehiculoOrderByWithRelationInput
  }

  export type FacturaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: FacturaWhereInput | FacturaWhereInput[]
    OR?: FacturaWhereInput[]
    NOT?: FacturaWhereInput | FacturaWhereInput[]
    estadoSAT?: StringNullableFilter<"Factura"> | string | null
    tipoComprobante?: StringNullableFilter<"Factura"> | string | null
    tipo?: StringNullableFilter<"Factura"> | string | null
    fechaEmision?: DateTimeFilter<"Factura"> | Date | string
    serie?: StringNullableFilter<"Factura"> | string | null
    folio?: StringNullableFilter<"Factura"> | string | null
    rfcEmisor?: StringFilter<"Factura"> | string
    nombreEmisor?: StringFilter<"Factura"> | string
    rfcReceptor?: StringFilter<"Factura"> | string
    nombreReceptor?: StringFilter<"Factura"> | string
    usoCFDI?: StringFilter<"Factura"> | string
    subTotal?: FloatFilter<"Factura"> | number
    descuento?: FloatNullableFilter<"Factura"> | number | null
    totalIEPS?: FloatNullableFilter<"Factura"> | number | null
    iva16?: FloatNullableFilter<"Factura"> | number | null
    retenidoIVA?: FloatNullableFilter<"Factura"> | number | null
    retenidoISR?: FloatNullableFilter<"Factura"> | number | null
    ish?: FloatNullableFilter<"Factura"> | number | null
    total?: FloatFilter<"Factura"> | number
    moneda?: StringNullableFilter<"Factura"> | string | null
    tipoCambio?: FloatNullableFilter<"Factura"> | number | null
    formaPago?: StringFilter<"Factura"> | string
    metodoPago?: StringFilter<"Factura"> | string
    conceptos?: StringFilter<"Factura"> | string
    regimenFiscalReceptor?: StringNullableFilter<"Factura"> | string | null
    domicilioFiscalReceptor?: StringNullableFilter<"Factura"> | string | null
    fechaPago?: DateTimeNullableFilter<"Factura"> | Date | string | null
    bancoPago?: StringNullableFilter<"Factura"> | string | null
    folioPago?: StringNullableFilter<"Factura"> | string | null
    gastoId?: IntNullableFilter<"Factura"> | number | null
    vehiculoId?: IntNullableFilter<"Factura"> | number | null
    gasto?: XOR<GastoNullableScalarRelationFilter, GastoWhereInput> | null
    vehiculo?: XOR<VehiculoNullableScalarRelationFilter, VehiculoWhereInput> | null
  }, "id" | "uuid">

  export type FacturaOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrderInput | SortOrder
    estadoSAT?: SortOrderInput | SortOrder
    tipoComprobante?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    fechaEmision?: SortOrder
    serie?: SortOrderInput | SortOrder
    folio?: SortOrderInput | SortOrder
    rfcEmisor?: SortOrder
    nombreEmisor?: SortOrder
    rfcReceptor?: SortOrder
    nombreReceptor?: SortOrder
    usoCFDI?: SortOrder
    subTotal?: SortOrder
    descuento?: SortOrderInput | SortOrder
    totalIEPS?: SortOrderInput | SortOrder
    iva16?: SortOrderInput | SortOrder
    retenidoIVA?: SortOrderInput | SortOrder
    retenidoISR?: SortOrderInput | SortOrder
    ish?: SortOrderInput | SortOrder
    total?: SortOrder
    moneda?: SortOrderInput | SortOrder
    tipoCambio?: SortOrderInput | SortOrder
    formaPago?: SortOrder
    metodoPago?: SortOrder
    conceptos?: SortOrder
    regimenFiscalReceptor?: SortOrderInput | SortOrder
    domicilioFiscalReceptor?: SortOrderInput | SortOrder
    fechaPago?: SortOrderInput | SortOrder
    bancoPago?: SortOrderInput | SortOrder
    folioPago?: SortOrderInput | SortOrder
    gastoId?: SortOrderInput | SortOrder
    vehiculoId?: SortOrderInput | SortOrder
    _count?: FacturaCountOrderByAggregateInput
    _avg?: FacturaAvgOrderByAggregateInput
    _max?: FacturaMaxOrderByAggregateInput
    _min?: FacturaMinOrderByAggregateInput
    _sum?: FacturaSumOrderByAggregateInput
  }

  export type FacturaScalarWhereWithAggregatesInput = {
    AND?: FacturaScalarWhereWithAggregatesInput | FacturaScalarWhereWithAggregatesInput[]
    OR?: FacturaScalarWhereWithAggregatesInput[]
    NOT?: FacturaScalarWhereWithAggregatesInput | FacturaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Factura"> | number
    uuid?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    estadoSAT?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    tipoComprobante?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    tipo?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    fechaEmision?: DateTimeWithAggregatesFilter<"Factura"> | Date | string
    serie?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    folio?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    rfcEmisor?: StringWithAggregatesFilter<"Factura"> | string
    nombreEmisor?: StringWithAggregatesFilter<"Factura"> | string
    rfcReceptor?: StringWithAggregatesFilter<"Factura"> | string
    nombreReceptor?: StringWithAggregatesFilter<"Factura"> | string
    usoCFDI?: StringWithAggregatesFilter<"Factura"> | string
    subTotal?: FloatWithAggregatesFilter<"Factura"> | number
    descuento?: FloatNullableWithAggregatesFilter<"Factura"> | number | null
    totalIEPS?: FloatNullableWithAggregatesFilter<"Factura"> | number | null
    iva16?: FloatNullableWithAggregatesFilter<"Factura"> | number | null
    retenidoIVA?: FloatNullableWithAggregatesFilter<"Factura"> | number | null
    retenidoISR?: FloatNullableWithAggregatesFilter<"Factura"> | number | null
    ish?: FloatNullableWithAggregatesFilter<"Factura"> | number | null
    total?: FloatWithAggregatesFilter<"Factura"> | number
    moneda?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    tipoCambio?: FloatNullableWithAggregatesFilter<"Factura"> | number | null
    formaPago?: StringWithAggregatesFilter<"Factura"> | string
    metodoPago?: StringWithAggregatesFilter<"Factura"> | string
    conceptos?: StringWithAggregatesFilter<"Factura"> | string
    regimenFiscalReceptor?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    domicilioFiscalReceptor?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    fechaPago?: DateTimeNullableWithAggregatesFilter<"Factura"> | Date | string | null
    bancoPago?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    folioPago?: StringNullableWithAggregatesFilter<"Factura"> | string | null
    gastoId?: IntNullableWithAggregatesFilter<"Factura"> | number | null
    vehiculoId?: IntNullableWithAggregatesFilter<"Factura"> | number | null
  }

  export type UserCreateInput = {
    id?: string
    user: string
    password: string
    role?: $Enums.Role
  }

  export type UserUncheckedCreateInput = {
    id?: string
    user: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserCreateManyInput = {
    id?: string
    user: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type VehiculoCreateInput = {
    placa: string
    marca: string
    tipo: string
    color: string
    modelo: number
    serie: string
    motor?: string | null
    proyecto?: string | null
    ubicacion?: string | null
    placaAnterior?: string | null
    comentario?: string | null
    seguros?: SeguroCreateNestedManyWithoutVehiculoInput
    gastos?: GastoCreateNestedManyWithoutVehiculoInput
    facturas?: FacturaCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateInput = {
    id?: number
    placa: string
    marca: string
    tipo: string
    color: string
    modelo: number
    serie: string
    motor?: string | null
    proyecto?: string | null
    ubicacion?: string | null
    placaAnterior?: string | null
    comentario?: string | null
    seguros?: SeguroUncheckedCreateNestedManyWithoutVehiculoInput
    gastos?: GastoUncheckedCreateNestedManyWithoutVehiculoInput
    facturas?: FacturaUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUpdateInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    modelo?: IntFieldUpdateOperationsInput | number
    serie?: StringFieldUpdateOperationsInput | string
    motor?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    placaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    seguros?: SeguroUpdateManyWithoutVehiculoNestedInput
    gastos?: GastoUpdateManyWithoutVehiculoNestedInput
    facturas?: FacturaUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    modelo?: IntFieldUpdateOperationsInput | number
    serie?: StringFieldUpdateOperationsInput | string
    motor?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    placaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    seguros?: SeguroUncheckedUpdateManyWithoutVehiculoNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutVehiculoNestedInput
    facturas?: FacturaUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoCreateManyInput = {
    id?: number
    placa: string
    marca: string
    tipo: string
    color: string
    modelo: number
    serie: string
    motor?: string | null
    proyecto?: string | null
    ubicacion?: string | null
    placaAnterior?: string | null
    comentario?: string | null
  }

  export type VehiculoUpdateManyMutationInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    modelo?: IntFieldUpdateOperationsInput | number
    serie?: StringFieldUpdateOperationsInput | string
    motor?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    placaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehiculoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    modelo?: IntFieldUpdateOperationsInput | number
    serie?: StringFieldUpdateOperationsInput | string
    motor?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    placaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeguroCreateInput = {
    compania: $Enums.CompaniaSeguro
    precio: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    responsable?: string | null
    vehiculo: VehiculoCreateNestedOneWithoutSegurosInput
  }

  export type SeguroUncheckedCreateInput = {
    id?: number
    vehiculoId: number
    compania: $Enums.CompaniaSeguro
    precio: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    responsable?: string | null
  }

  export type SeguroUpdateInput = {
    compania?: EnumCompaniaSeguroFieldUpdateOperationsInput | $Enums.CompaniaSeguro
    precio?: FloatFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculo?: VehiculoUpdateOneRequiredWithoutSegurosNestedInput
  }

  export type SeguroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehiculoId?: IntFieldUpdateOperationsInput | number
    compania?: EnumCompaniaSeguroFieldUpdateOperationsInput | $Enums.CompaniaSeguro
    precio?: FloatFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeguroCreateManyInput = {
    id?: number
    vehiculoId: number
    compania: $Enums.CompaniaSeguro
    precio: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    responsable?: string | null
  }

  export type SeguroUpdateManyMutationInput = {
    compania?: EnumCompaniaSeguroFieldUpdateOperationsInput | $Enums.CompaniaSeguro
    precio?: FloatFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeguroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehiculoId?: IntFieldUpdateOperationsInput | number
    compania?: EnumCompaniaSeguroFieldUpdateOperationsInput | $Enums.CompaniaSeguro
    precio?: FloatFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GastoCreateInput = {
    folio: string
    fecha: Date | string
    razonSocial: string
    banco?: string | null
    tdc?: string | null
    proveedor: string
    concepto: string
    referencia?: string | null
    documento?: string | null
    proyecto?: string | null
    responsable: string
    transferencia?: string | null
    entrada?: number | null
    salida?: number | null
    saldo?: number | null
    vehiculo?: VehiculoCreateNestedOneWithoutGastosInput
    facturas?: FacturaCreateNestedManyWithoutGastoInput
  }

  export type GastoUncheckedCreateInput = {
    id?: number
    folio: string
    fecha: Date | string
    razonSocial: string
    banco?: string | null
    tdc?: string | null
    proveedor: string
    concepto: string
    referencia?: string | null
    documento?: string | null
    proyecto?: string | null
    responsable: string
    transferencia?: string | null
    entrada?: number | null
    salida?: number | null
    saldo?: number | null
    vehiculoId?: number | null
    facturas?: FacturaUncheckedCreateNestedManyWithoutGastoInput
  }

  export type GastoUpdateInput = {
    folio?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    razonSocial?: StringFieldUpdateOperationsInput | string
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    tdc?: NullableStringFieldUpdateOperationsInput | string | null
    proveedor?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    responsable?: StringFieldUpdateOperationsInput | string
    transferencia?: NullableStringFieldUpdateOperationsInput | string | null
    entrada?: NullableFloatFieldUpdateOperationsInput | number | null
    salida?: NullableFloatFieldUpdateOperationsInput | number | null
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    vehiculo?: VehiculoUpdateOneWithoutGastosNestedInput
    facturas?: FacturaUpdateManyWithoutGastoNestedInput
  }

  export type GastoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    folio?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    razonSocial?: StringFieldUpdateOperationsInput | string
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    tdc?: NullableStringFieldUpdateOperationsInput | string | null
    proveedor?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    responsable?: StringFieldUpdateOperationsInput | string
    transferencia?: NullableStringFieldUpdateOperationsInput | string | null
    entrada?: NullableFloatFieldUpdateOperationsInput | number | null
    salida?: NullableFloatFieldUpdateOperationsInput | number | null
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    vehiculoId?: NullableIntFieldUpdateOperationsInput | number | null
    facturas?: FacturaUncheckedUpdateManyWithoutGastoNestedInput
  }

  export type GastoCreateManyInput = {
    id?: number
    folio: string
    fecha: Date | string
    razonSocial: string
    banco?: string | null
    tdc?: string | null
    proveedor: string
    concepto: string
    referencia?: string | null
    documento?: string | null
    proyecto?: string | null
    responsable: string
    transferencia?: string | null
    entrada?: number | null
    salida?: number | null
    saldo?: number | null
    vehiculoId?: number | null
  }

  export type GastoUpdateManyMutationInput = {
    folio?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    razonSocial?: StringFieldUpdateOperationsInput | string
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    tdc?: NullableStringFieldUpdateOperationsInput | string | null
    proveedor?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    responsable?: StringFieldUpdateOperationsInput | string
    transferencia?: NullableStringFieldUpdateOperationsInput | string | null
    entrada?: NullableFloatFieldUpdateOperationsInput | number | null
    salida?: NullableFloatFieldUpdateOperationsInput | number | null
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type GastoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    folio?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    razonSocial?: StringFieldUpdateOperationsInput | string
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    tdc?: NullableStringFieldUpdateOperationsInput | string | null
    proveedor?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    responsable?: StringFieldUpdateOperationsInput | string
    transferencia?: NullableStringFieldUpdateOperationsInput | string | null
    entrada?: NullableFloatFieldUpdateOperationsInput | number | null
    salida?: NullableFloatFieldUpdateOperationsInput | number | null
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    vehiculoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FacturaCreateInput = {
    uuid?: string | null
    estadoSAT?: string | null
    tipoComprobante?: string | null
    tipo?: string | null
    fechaEmision: Date | string
    serie?: string | null
    folio?: string | null
    rfcEmisor: string
    nombreEmisor: string
    rfcReceptor: string
    nombreReceptor: string
    usoCFDI: string
    subTotal: number
    descuento?: number | null
    totalIEPS?: number | null
    iva16?: number | null
    retenidoIVA?: number | null
    retenidoISR?: number | null
    ish?: number | null
    total: number
    moneda?: string | null
    tipoCambio?: number | null
    formaPago: string
    metodoPago: string
    conceptos: string
    regimenFiscalReceptor?: string | null
    domicilioFiscalReceptor?: string | null
    fechaPago?: Date | string | null
    bancoPago?: string | null
    folioPago?: string | null
    gasto?: GastoCreateNestedOneWithoutFacturasInput
    vehiculo?: VehiculoCreateNestedOneWithoutFacturasInput
  }

  export type FacturaUncheckedCreateInput = {
    id?: number
    uuid?: string | null
    estadoSAT?: string | null
    tipoComprobante?: string | null
    tipo?: string | null
    fechaEmision: Date | string
    serie?: string | null
    folio?: string | null
    rfcEmisor: string
    nombreEmisor: string
    rfcReceptor: string
    nombreReceptor: string
    usoCFDI: string
    subTotal: number
    descuento?: number | null
    totalIEPS?: number | null
    iva16?: number | null
    retenidoIVA?: number | null
    retenidoISR?: number | null
    ish?: number | null
    total: number
    moneda?: string | null
    tipoCambio?: number | null
    formaPago: string
    metodoPago: string
    conceptos: string
    regimenFiscalReceptor?: string | null
    domicilioFiscalReceptor?: string | null
    fechaPago?: Date | string | null
    bancoPago?: string | null
    folioPago?: string | null
    gastoId?: number | null
    vehiculoId?: number | null
  }

  export type FacturaUpdateInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    estadoSAT?: NullableStringFieldUpdateOperationsInput | string | null
    tipoComprobante?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    rfcEmisor?: StringFieldUpdateOperationsInput | string
    nombreEmisor?: StringFieldUpdateOperationsInput | string
    rfcReceptor?: StringFieldUpdateOperationsInput | string
    nombreReceptor?: StringFieldUpdateOperationsInput | string
    usoCFDI?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    totalIEPS?: NullableFloatFieldUpdateOperationsInput | number | null
    iva16?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoIVA?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoISR?: NullableFloatFieldUpdateOperationsInput | number | null
    ish?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCambio?: NullableFloatFieldUpdateOperationsInput | number | null
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    conceptos?: StringFieldUpdateOperationsInput | string
    regimenFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    domicilioFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bancoPago?: NullableStringFieldUpdateOperationsInput | string | null
    folioPago?: NullableStringFieldUpdateOperationsInput | string | null
    gasto?: GastoUpdateOneWithoutFacturasNestedInput
    vehiculo?: VehiculoUpdateOneWithoutFacturasNestedInput
  }

  export type FacturaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    estadoSAT?: NullableStringFieldUpdateOperationsInput | string | null
    tipoComprobante?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    rfcEmisor?: StringFieldUpdateOperationsInput | string
    nombreEmisor?: StringFieldUpdateOperationsInput | string
    rfcReceptor?: StringFieldUpdateOperationsInput | string
    nombreReceptor?: StringFieldUpdateOperationsInput | string
    usoCFDI?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    totalIEPS?: NullableFloatFieldUpdateOperationsInput | number | null
    iva16?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoIVA?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoISR?: NullableFloatFieldUpdateOperationsInput | number | null
    ish?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCambio?: NullableFloatFieldUpdateOperationsInput | number | null
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    conceptos?: StringFieldUpdateOperationsInput | string
    regimenFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    domicilioFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bancoPago?: NullableStringFieldUpdateOperationsInput | string | null
    folioPago?: NullableStringFieldUpdateOperationsInput | string | null
    gastoId?: NullableIntFieldUpdateOperationsInput | number | null
    vehiculoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FacturaCreateManyInput = {
    id?: number
    uuid?: string | null
    estadoSAT?: string | null
    tipoComprobante?: string | null
    tipo?: string | null
    fechaEmision: Date | string
    serie?: string | null
    folio?: string | null
    rfcEmisor: string
    nombreEmisor: string
    rfcReceptor: string
    nombreReceptor: string
    usoCFDI: string
    subTotal: number
    descuento?: number | null
    totalIEPS?: number | null
    iva16?: number | null
    retenidoIVA?: number | null
    retenidoISR?: number | null
    ish?: number | null
    total: number
    moneda?: string | null
    tipoCambio?: number | null
    formaPago: string
    metodoPago: string
    conceptos: string
    regimenFiscalReceptor?: string | null
    domicilioFiscalReceptor?: string | null
    fechaPago?: Date | string | null
    bancoPago?: string | null
    folioPago?: string | null
    gastoId?: number | null
    vehiculoId?: number | null
  }

  export type FacturaUpdateManyMutationInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    estadoSAT?: NullableStringFieldUpdateOperationsInput | string | null
    tipoComprobante?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    rfcEmisor?: StringFieldUpdateOperationsInput | string
    nombreEmisor?: StringFieldUpdateOperationsInput | string
    rfcReceptor?: StringFieldUpdateOperationsInput | string
    nombreReceptor?: StringFieldUpdateOperationsInput | string
    usoCFDI?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    totalIEPS?: NullableFloatFieldUpdateOperationsInput | number | null
    iva16?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoIVA?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoISR?: NullableFloatFieldUpdateOperationsInput | number | null
    ish?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCambio?: NullableFloatFieldUpdateOperationsInput | number | null
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    conceptos?: StringFieldUpdateOperationsInput | string
    regimenFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    domicilioFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bancoPago?: NullableStringFieldUpdateOperationsInput | string | null
    folioPago?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacturaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    estadoSAT?: NullableStringFieldUpdateOperationsInput | string | null
    tipoComprobante?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    rfcEmisor?: StringFieldUpdateOperationsInput | string
    nombreEmisor?: StringFieldUpdateOperationsInput | string
    rfcReceptor?: StringFieldUpdateOperationsInput | string
    nombreReceptor?: StringFieldUpdateOperationsInput | string
    usoCFDI?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    totalIEPS?: NullableFloatFieldUpdateOperationsInput | number | null
    iva16?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoIVA?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoISR?: NullableFloatFieldUpdateOperationsInput | number | null
    ish?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCambio?: NullableFloatFieldUpdateOperationsInput | number | null
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    conceptos?: StringFieldUpdateOperationsInput | string
    regimenFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    domicilioFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bancoPago?: NullableStringFieldUpdateOperationsInput | string | null
    folioPago?: NullableStringFieldUpdateOperationsInput | string | null
    gastoId?: NullableIntFieldUpdateOperationsInput | number | null
    vehiculoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SeguroListRelationFilter = {
    every?: SeguroWhereInput
    some?: SeguroWhereInput
    none?: SeguroWhereInput
  }

  export type GastoListRelationFilter = {
    every?: GastoWhereInput
    some?: GastoWhereInput
    none?: GastoWhereInput
  }

  export type FacturaListRelationFilter = {
    every?: FacturaWhereInput
    some?: FacturaWhereInput
    none?: FacturaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SeguroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GastoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehiculoCountOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    color?: SortOrder
    modelo?: SortOrder
    serie?: SortOrder
    motor?: SortOrder
    proyecto?: SortOrder
    ubicacion?: SortOrder
    placaAnterior?: SortOrder
    comentario?: SortOrder
  }

  export type VehiculoAvgOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
  }

  export type VehiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    color?: SortOrder
    modelo?: SortOrder
    serie?: SortOrder
    motor?: SortOrder
    proyecto?: SortOrder
    ubicacion?: SortOrder
    placaAnterior?: SortOrder
    comentario?: SortOrder
  }

  export type VehiculoMinOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    color?: SortOrder
    modelo?: SortOrder
    serie?: SortOrder
    motor?: SortOrder
    proyecto?: SortOrder
    ubicacion?: SortOrder
    placaAnterior?: SortOrder
    comentario?: SortOrder
  }

  export type VehiculoSumOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCompaniaSeguroFilter<$PrismaModel = never> = {
    equals?: $Enums.CompaniaSeguro | EnumCompaniaSeguroFieldRefInput<$PrismaModel>
    in?: $Enums.CompaniaSeguro[] | ListEnumCompaniaSeguroFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompaniaSeguro[] | ListEnumCompaniaSeguroFieldRefInput<$PrismaModel>
    not?: NestedEnumCompaniaSeguroFilter<$PrismaModel> | $Enums.CompaniaSeguro
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VehiculoScalarRelationFilter = {
    is?: VehiculoWhereInput
    isNot?: VehiculoWhereInput
  }

  export type SeguroCountOrderByAggregateInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    compania?: SortOrder
    precio?: SortOrder
    fechaInicio?: SortOrder
    fechaVencimiento?: SortOrder
    responsable?: SortOrder
  }

  export type SeguroAvgOrderByAggregateInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    precio?: SortOrder
  }

  export type SeguroMaxOrderByAggregateInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    compania?: SortOrder
    precio?: SortOrder
    fechaInicio?: SortOrder
    fechaVencimiento?: SortOrder
    responsable?: SortOrder
  }

  export type SeguroMinOrderByAggregateInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    compania?: SortOrder
    precio?: SortOrder
    fechaInicio?: SortOrder
    fechaVencimiento?: SortOrder
    responsable?: SortOrder
  }

  export type SeguroSumOrderByAggregateInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    precio?: SortOrder
  }

  export type EnumCompaniaSeguroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompaniaSeguro | EnumCompaniaSeguroFieldRefInput<$PrismaModel>
    in?: $Enums.CompaniaSeguro[] | ListEnumCompaniaSeguroFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompaniaSeguro[] | ListEnumCompaniaSeguroFieldRefInput<$PrismaModel>
    not?: NestedEnumCompaniaSeguroWithAggregatesFilter<$PrismaModel> | $Enums.CompaniaSeguro
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompaniaSeguroFilter<$PrismaModel>
    _max?: NestedEnumCompaniaSeguroFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VehiculoNullableScalarRelationFilter = {
    is?: VehiculoWhereInput | null
    isNot?: VehiculoWhereInput | null
  }

  export type GastoCountOrderByAggregateInput = {
    id?: SortOrder
    folio?: SortOrder
    fecha?: SortOrder
    razonSocial?: SortOrder
    banco?: SortOrder
    tdc?: SortOrder
    proveedor?: SortOrder
    concepto?: SortOrder
    referencia?: SortOrder
    documento?: SortOrder
    proyecto?: SortOrder
    responsable?: SortOrder
    transferencia?: SortOrder
    entrada?: SortOrder
    salida?: SortOrder
    saldo?: SortOrder
    vehiculoId?: SortOrder
  }

  export type GastoAvgOrderByAggregateInput = {
    id?: SortOrder
    entrada?: SortOrder
    salida?: SortOrder
    saldo?: SortOrder
    vehiculoId?: SortOrder
  }

  export type GastoMaxOrderByAggregateInput = {
    id?: SortOrder
    folio?: SortOrder
    fecha?: SortOrder
    razonSocial?: SortOrder
    banco?: SortOrder
    tdc?: SortOrder
    proveedor?: SortOrder
    concepto?: SortOrder
    referencia?: SortOrder
    documento?: SortOrder
    proyecto?: SortOrder
    responsable?: SortOrder
    transferencia?: SortOrder
    entrada?: SortOrder
    salida?: SortOrder
    saldo?: SortOrder
    vehiculoId?: SortOrder
  }

  export type GastoMinOrderByAggregateInput = {
    id?: SortOrder
    folio?: SortOrder
    fecha?: SortOrder
    razonSocial?: SortOrder
    banco?: SortOrder
    tdc?: SortOrder
    proveedor?: SortOrder
    concepto?: SortOrder
    referencia?: SortOrder
    documento?: SortOrder
    proyecto?: SortOrder
    responsable?: SortOrder
    transferencia?: SortOrder
    entrada?: SortOrder
    salida?: SortOrder
    saldo?: SortOrder
    vehiculoId?: SortOrder
  }

  export type GastoSumOrderByAggregateInput = {
    id?: SortOrder
    entrada?: SortOrder
    salida?: SortOrder
    saldo?: SortOrder
    vehiculoId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type GastoNullableScalarRelationFilter = {
    is?: GastoWhereInput | null
    isNot?: GastoWhereInput | null
  }

  export type FacturaCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    estadoSAT?: SortOrder
    tipoComprobante?: SortOrder
    tipo?: SortOrder
    fechaEmision?: SortOrder
    serie?: SortOrder
    folio?: SortOrder
    rfcEmisor?: SortOrder
    nombreEmisor?: SortOrder
    rfcReceptor?: SortOrder
    nombreReceptor?: SortOrder
    usoCFDI?: SortOrder
    subTotal?: SortOrder
    descuento?: SortOrder
    totalIEPS?: SortOrder
    iva16?: SortOrder
    retenidoIVA?: SortOrder
    retenidoISR?: SortOrder
    ish?: SortOrder
    total?: SortOrder
    moneda?: SortOrder
    tipoCambio?: SortOrder
    formaPago?: SortOrder
    metodoPago?: SortOrder
    conceptos?: SortOrder
    regimenFiscalReceptor?: SortOrder
    domicilioFiscalReceptor?: SortOrder
    fechaPago?: SortOrder
    bancoPago?: SortOrder
    folioPago?: SortOrder
    gastoId?: SortOrder
    vehiculoId?: SortOrder
  }

  export type FacturaAvgOrderByAggregateInput = {
    id?: SortOrder
    subTotal?: SortOrder
    descuento?: SortOrder
    totalIEPS?: SortOrder
    iva16?: SortOrder
    retenidoIVA?: SortOrder
    retenidoISR?: SortOrder
    ish?: SortOrder
    total?: SortOrder
    tipoCambio?: SortOrder
    gastoId?: SortOrder
    vehiculoId?: SortOrder
  }

  export type FacturaMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    estadoSAT?: SortOrder
    tipoComprobante?: SortOrder
    tipo?: SortOrder
    fechaEmision?: SortOrder
    serie?: SortOrder
    folio?: SortOrder
    rfcEmisor?: SortOrder
    nombreEmisor?: SortOrder
    rfcReceptor?: SortOrder
    nombreReceptor?: SortOrder
    usoCFDI?: SortOrder
    subTotal?: SortOrder
    descuento?: SortOrder
    totalIEPS?: SortOrder
    iva16?: SortOrder
    retenidoIVA?: SortOrder
    retenidoISR?: SortOrder
    ish?: SortOrder
    total?: SortOrder
    moneda?: SortOrder
    tipoCambio?: SortOrder
    formaPago?: SortOrder
    metodoPago?: SortOrder
    conceptos?: SortOrder
    regimenFiscalReceptor?: SortOrder
    domicilioFiscalReceptor?: SortOrder
    fechaPago?: SortOrder
    bancoPago?: SortOrder
    folioPago?: SortOrder
    gastoId?: SortOrder
    vehiculoId?: SortOrder
  }

  export type FacturaMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    estadoSAT?: SortOrder
    tipoComprobante?: SortOrder
    tipo?: SortOrder
    fechaEmision?: SortOrder
    serie?: SortOrder
    folio?: SortOrder
    rfcEmisor?: SortOrder
    nombreEmisor?: SortOrder
    rfcReceptor?: SortOrder
    nombreReceptor?: SortOrder
    usoCFDI?: SortOrder
    subTotal?: SortOrder
    descuento?: SortOrder
    totalIEPS?: SortOrder
    iva16?: SortOrder
    retenidoIVA?: SortOrder
    retenidoISR?: SortOrder
    ish?: SortOrder
    total?: SortOrder
    moneda?: SortOrder
    tipoCambio?: SortOrder
    formaPago?: SortOrder
    metodoPago?: SortOrder
    conceptos?: SortOrder
    regimenFiscalReceptor?: SortOrder
    domicilioFiscalReceptor?: SortOrder
    fechaPago?: SortOrder
    bancoPago?: SortOrder
    folioPago?: SortOrder
    gastoId?: SortOrder
    vehiculoId?: SortOrder
  }

  export type FacturaSumOrderByAggregateInput = {
    id?: SortOrder
    subTotal?: SortOrder
    descuento?: SortOrder
    totalIEPS?: SortOrder
    iva16?: SortOrder
    retenidoIVA?: SortOrder
    retenidoISR?: SortOrder
    ish?: SortOrder
    total?: SortOrder
    tipoCambio?: SortOrder
    gastoId?: SortOrder
    vehiculoId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type SeguroCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<SeguroCreateWithoutVehiculoInput, SeguroUncheckedCreateWithoutVehiculoInput> | SeguroCreateWithoutVehiculoInput[] | SeguroUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: SeguroCreateOrConnectWithoutVehiculoInput | SeguroCreateOrConnectWithoutVehiculoInput[]
    createMany?: SeguroCreateManyVehiculoInputEnvelope
    connect?: SeguroWhereUniqueInput | SeguroWhereUniqueInput[]
  }

  export type GastoCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<GastoCreateWithoutVehiculoInput, GastoUncheckedCreateWithoutVehiculoInput> | GastoCreateWithoutVehiculoInput[] | GastoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutVehiculoInput | GastoCreateOrConnectWithoutVehiculoInput[]
    createMany?: GastoCreateManyVehiculoInputEnvelope
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type FacturaCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<FacturaCreateWithoutVehiculoInput, FacturaUncheckedCreateWithoutVehiculoInput> | FacturaCreateWithoutVehiculoInput[] | FacturaUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutVehiculoInput | FacturaCreateOrConnectWithoutVehiculoInput[]
    createMany?: FacturaCreateManyVehiculoInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type SeguroUncheckedCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<SeguroCreateWithoutVehiculoInput, SeguroUncheckedCreateWithoutVehiculoInput> | SeguroCreateWithoutVehiculoInput[] | SeguroUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: SeguroCreateOrConnectWithoutVehiculoInput | SeguroCreateOrConnectWithoutVehiculoInput[]
    createMany?: SeguroCreateManyVehiculoInputEnvelope
    connect?: SeguroWhereUniqueInput | SeguroWhereUniqueInput[]
  }

  export type GastoUncheckedCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<GastoCreateWithoutVehiculoInput, GastoUncheckedCreateWithoutVehiculoInput> | GastoCreateWithoutVehiculoInput[] | GastoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutVehiculoInput | GastoCreateOrConnectWithoutVehiculoInput[]
    createMany?: GastoCreateManyVehiculoInputEnvelope
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
  }

  export type FacturaUncheckedCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<FacturaCreateWithoutVehiculoInput, FacturaUncheckedCreateWithoutVehiculoInput> | FacturaCreateWithoutVehiculoInput[] | FacturaUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutVehiculoInput | FacturaCreateOrConnectWithoutVehiculoInput[]
    createMany?: FacturaCreateManyVehiculoInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SeguroUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<SeguroCreateWithoutVehiculoInput, SeguroUncheckedCreateWithoutVehiculoInput> | SeguroCreateWithoutVehiculoInput[] | SeguroUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: SeguroCreateOrConnectWithoutVehiculoInput | SeguroCreateOrConnectWithoutVehiculoInput[]
    upsert?: SeguroUpsertWithWhereUniqueWithoutVehiculoInput | SeguroUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: SeguroCreateManyVehiculoInputEnvelope
    set?: SeguroWhereUniqueInput | SeguroWhereUniqueInput[]
    disconnect?: SeguroWhereUniqueInput | SeguroWhereUniqueInput[]
    delete?: SeguroWhereUniqueInput | SeguroWhereUniqueInput[]
    connect?: SeguroWhereUniqueInput | SeguroWhereUniqueInput[]
    update?: SeguroUpdateWithWhereUniqueWithoutVehiculoInput | SeguroUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: SeguroUpdateManyWithWhereWithoutVehiculoInput | SeguroUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: SeguroScalarWhereInput | SeguroScalarWhereInput[]
  }

  export type GastoUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<GastoCreateWithoutVehiculoInput, GastoUncheckedCreateWithoutVehiculoInput> | GastoCreateWithoutVehiculoInput[] | GastoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutVehiculoInput | GastoCreateOrConnectWithoutVehiculoInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutVehiculoInput | GastoUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: GastoCreateManyVehiculoInputEnvelope
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutVehiculoInput | GastoUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutVehiculoInput | GastoUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type FacturaUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<FacturaCreateWithoutVehiculoInput, FacturaUncheckedCreateWithoutVehiculoInput> | FacturaCreateWithoutVehiculoInput[] | FacturaUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutVehiculoInput | FacturaCreateOrConnectWithoutVehiculoInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutVehiculoInput | FacturaUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: FacturaCreateManyVehiculoInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutVehiculoInput | FacturaUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutVehiculoInput | FacturaUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type SeguroUncheckedUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<SeguroCreateWithoutVehiculoInput, SeguroUncheckedCreateWithoutVehiculoInput> | SeguroCreateWithoutVehiculoInput[] | SeguroUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: SeguroCreateOrConnectWithoutVehiculoInput | SeguroCreateOrConnectWithoutVehiculoInput[]
    upsert?: SeguroUpsertWithWhereUniqueWithoutVehiculoInput | SeguroUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: SeguroCreateManyVehiculoInputEnvelope
    set?: SeguroWhereUniqueInput | SeguroWhereUniqueInput[]
    disconnect?: SeguroWhereUniqueInput | SeguroWhereUniqueInput[]
    delete?: SeguroWhereUniqueInput | SeguroWhereUniqueInput[]
    connect?: SeguroWhereUniqueInput | SeguroWhereUniqueInput[]
    update?: SeguroUpdateWithWhereUniqueWithoutVehiculoInput | SeguroUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: SeguroUpdateManyWithWhereWithoutVehiculoInput | SeguroUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: SeguroScalarWhereInput | SeguroScalarWhereInput[]
  }

  export type GastoUncheckedUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<GastoCreateWithoutVehiculoInput, GastoUncheckedCreateWithoutVehiculoInput> | GastoCreateWithoutVehiculoInput[] | GastoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: GastoCreateOrConnectWithoutVehiculoInput | GastoCreateOrConnectWithoutVehiculoInput[]
    upsert?: GastoUpsertWithWhereUniqueWithoutVehiculoInput | GastoUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: GastoCreateManyVehiculoInputEnvelope
    set?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    disconnect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    delete?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    connect?: GastoWhereUniqueInput | GastoWhereUniqueInput[]
    update?: GastoUpdateWithWhereUniqueWithoutVehiculoInput | GastoUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: GastoUpdateManyWithWhereWithoutVehiculoInput | GastoUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: GastoScalarWhereInput | GastoScalarWhereInput[]
  }

  export type FacturaUncheckedUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<FacturaCreateWithoutVehiculoInput, FacturaUncheckedCreateWithoutVehiculoInput> | FacturaCreateWithoutVehiculoInput[] | FacturaUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutVehiculoInput | FacturaCreateOrConnectWithoutVehiculoInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutVehiculoInput | FacturaUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: FacturaCreateManyVehiculoInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutVehiculoInput | FacturaUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutVehiculoInput | FacturaUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type VehiculoCreateNestedOneWithoutSegurosInput = {
    create?: XOR<VehiculoCreateWithoutSegurosInput, VehiculoUncheckedCreateWithoutSegurosInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutSegurosInput
    connect?: VehiculoWhereUniqueInput
  }

  export type EnumCompaniaSeguroFieldUpdateOperationsInput = {
    set?: $Enums.CompaniaSeguro
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VehiculoUpdateOneRequiredWithoutSegurosNestedInput = {
    create?: XOR<VehiculoCreateWithoutSegurosInput, VehiculoUncheckedCreateWithoutSegurosInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutSegurosInput
    upsert?: VehiculoUpsertWithoutSegurosInput
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutSegurosInput, VehiculoUpdateWithoutSegurosInput>, VehiculoUncheckedUpdateWithoutSegurosInput>
  }

  export type VehiculoCreateNestedOneWithoutGastosInput = {
    create?: XOR<VehiculoCreateWithoutGastosInput, VehiculoUncheckedCreateWithoutGastosInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutGastosInput
    connect?: VehiculoWhereUniqueInput
  }

  export type FacturaCreateNestedManyWithoutGastoInput = {
    create?: XOR<FacturaCreateWithoutGastoInput, FacturaUncheckedCreateWithoutGastoInput> | FacturaCreateWithoutGastoInput[] | FacturaUncheckedCreateWithoutGastoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutGastoInput | FacturaCreateOrConnectWithoutGastoInput[]
    createMany?: FacturaCreateManyGastoInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type FacturaUncheckedCreateNestedManyWithoutGastoInput = {
    create?: XOR<FacturaCreateWithoutGastoInput, FacturaUncheckedCreateWithoutGastoInput> | FacturaCreateWithoutGastoInput[] | FacturaUncheckedCreateWithoutGastoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutGastoInput | FacturaCreateOrConnectWithoutGastoInput[]
    createMany?: FacturaCreateManyGastoInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VehiculoUpdateOneWithoutGastosNestedInput = {
    create?: XOR<VehiculoCreateWithoutGastosInput, VehiculoUncheckedCreateWithoutGastosInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutGastosInput
    upsert?: VehiculoUpsertWithoutGastosInput
    disconnect?: VehiculoWhereInput | boolean
    delete?: VehiculoWhereInput | boolean
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutGastosInput, VehiculoUpdateWithoutGastosInput>, VehiculoUncheckedUpdateWithoutGastosInput>
  }

  export type FacturaUpdateManyWithoutGastoNestedInput = {
    create?: XOR<FacturaCreateWithoutGastoInput, FacturaUncheckedCreateWithoutGastoInput> | FacturaCreateWithoutGastoInput[] | FacturaUncheckedCreateWithoutGastoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutGastoInput | FacturaCreateOrConnectWithoutGastoInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutGastoInput | FacturaUpsertWithWhereUniqueWithoutGastoInput[]
    createMany?: FacturaCreateManyGastoInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutGastoInput | FacturaUpdateWithWhereUniqueWithoutGastoInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutGastoInput | FacturaUpdateManyWithWhereWithoutGastoInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FacturaUncheckedUpdateManyWithoutGastoNestedInput = {
    create?: XOR<FacturaCreateWithoutGastoInput, FacturaUncheckedCreateWithoutGastoInput> | FacturaCreateWithoutGastoInput[] | FacturaUncheckedCreateWithoutGastoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutGastoInput | FacturaCreateOrConnectWithoutGastoInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutGastoInput | FacturaUpsertWithWhereUniqueWithoutGastoInput[]
    createMany?: FacturaCreateManyGastoInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutGastoInput | FacturaUpdateWithWhereUniqueWithoutGastoInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutGastoInput | FacturaUpdateManyWithWhereWithoutGastoInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type GastoCreateNestedOneWithoutFacturasInput = {
    create?: XOR<GastoCreateWithoutFacturasInput, GastoUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: GastoCreateOrConnectWithoutFacturasInput
    connect?: GastoWhereUniqueInput
  }

  export type VehiculoCreateNestedOneWithoutFacturasInput = {
    create?: XOR<VehiculoCreateWithoutFacturasInput, VehiculoUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutFacturasInput
    connect?: VehiculoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GastoUpdateOneWithoutFacturasNestedInput = {
    create?: XOR<GastoCreateWithoutFacturasInput, GastoUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: GastoCreateOrConnectWithoutFacturasInput
    upsert?: GastoUpsertWithoutFacturasInput
    disconnect?: GastoWhereInput | boolean
    delete?: GastoWhereInput | boolean
    connect?: GastoWhereUniqueInput
    update?: XOR<XOR<GastoUpdateToOneWithWhereWithoutFacturasInput, GastoUpdateWithoutFacturasInput>, GastoUncheckedUpdateWithoutFacturasInput>
  }

  export type VehiculoUpdateOneWithoutFacturasNestedInput = {
    create?: XOR<VehiculoCreateWithoutFacturasInput, VehiculoUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutFacturasInput
    upsert?: VehiculoUpsertWithoutFacturasInput
    disconnect?: VehiculoWhereInput | boolean
    delete?: VehiculoWhereInput | boolean
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutFacturasInput, VehiculoUpdateWithoutFacturasInput>, VehiculoUncheckedUpdateWithoutFacturasInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCompaniaSeguroFilter<$PrismaModel = never> = {
    equals?: $Enums.CompaniaSeguro | EnumCompaniaSeguroFieldRefInput<$PrismaModel>
    in?: $Enums.CompaniaSeguro[] | ListEnumCompaniaSeguroFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompaniaSeguro[] | ListEnumCompaniaSeguroFieldRefInput<$PrismaModel>
    not?: NestedEnumCompaniaSeguroFilter<$PrismaModel> | $Enums.CompaniaSeguro
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumCompaniaSeguroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompaniaSeguro | EnumCompaniaSeguroFieldRefInput<$PrismaModel>
    in?: $Enums.CompaniaSeguro[] | ListEnumCompaniaSeguroFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompaniaSeguro[] | ListEnumCompaniaSeguroFieldRefInput<$PrismaModel>
    not?: NestedEnumCompaniaSeguroWithAggregatesFilter<$PrismaModel> | $Enums.CompaniaSeguro
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompaniaSeguroFilter<$PrismaModel>
    _max?: NestedEnumCompaniaSeguroFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SeguroCreateWithoutVehiculoInput = {
    compania: $Enums.CompaniaSeguro
    precio: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    responsable?: string | null
  }

  export type SeguroUncheckedCreateWithoutVehiculoInput = {
    id?: number
    compania: $Enums.CompaniaSeguro
    precio: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    responsable?: string | null
  }

  export type SeguroCreateOrConnectWithoutVehiculoInput = {
    where: SeguroWhereUniqueInput
    create: XOR<SeguroCreateWithoutVehiculoInput, SeguroUncheckedCreateWithoutVehiculoInput>
  }

  export type SeguroCreateManyVehiculoInputEnvelope = {
    data: SeguroCreateManyVehiculoInput | SeguroCreateManyVehiculoInput[]
    skipDuplicates?: boolean
  }

  export type GastoCreateWithoutVehiculoInput = {
    folio: string
    fecha: Date | string
    razonSocial: string
    banco?: string | null
    tdc?: string | null
    proveedor: string
    concepto: string
    referencia?: string | null
    documento?: string | null
    proyecto?: string | null
    responsable: string
    transferencia?: string | null
    entrada?: number | null
    salida?: number | null
    saldo?: number | null
    facturas?: FacturaCreateNestedManyWithoutGastoInput
  }

  export type GastoUncheckedCreateWithoutVehiculoInput = {
    id?: number
    folio: string
    fecha: Date | string
    razonSocial: string
    banco?: string | null
    tdc?: string | null
    proveedor: string
    concepto: string
    referencia?: string | null
    documento?: string | null
    proyecto?: string | null
    responsable: string
    transferencia?: string | null
    entrada?: number | null
    salida?: number | null
    saldo?: number | null
    facturas?: FacturaUncheckedCreateNestedManyWithoutGastoInput
  }

  export type GastoCreateOrConnectWithoutVehiculoInput = {
    where: GastoWhereUniqueInput
    create: XOR<GastoCreateWithoutVehiculoInput, GastoUncheckedCreateWithoutVehiculoInput>
  }

  export type GastoCreateManyVehiculoInputEnvelope = {
    data: GastoCreateManyVehiculoInput | GastoCreateManyVehiculoInput[]
    skipDuplicates?: boolean
  }

  export type FacturaCreateWithoutVehiculoInput = {
    uuid?: string | null
    estadoSAT?: string | null
    tipoComprobante?: string | null
    tipo?: string | null
    fechaEmision: Date | string
    serie?: string | null
    folio?: string | null
    rfcEmisor: string
    nombreEmisor: string
    rfcReceptor: string
    nombreReceptor: string
    usoCFDI: string
    subTotal: number
    descuento?: number | null
    totalIEPS?: number | null
    iva16?: number | null
    retenidoIVA?: number | null
    retenidoISR?: number | null
    ish?: number | null
    total: number
    moneda?: string | null
    tipoCambio?: number | null
    formaPago: string
    metodoPago: string
    conceptos: string
    regimenFiscalReceptor?: string | null
    domicilioFiscalReceptor?: string | null
    fechaPago?: Date | string | null
    bancoPago?: string | null
    folioPago?: string | null
    gasto?: GastoCreateNestedOneWithoutFacturasInput
  }

  export type FacturaUncheckedCreateWithoutVehiculoInput = {
    id?: number
    uuid?: string | null
    estadoSAT?: string | null
    tipoComprobante?: string | null
    tipo?: string | null
    fechaEmision: Date | string
    serie?: string | null
    folio?: string | null
    rfcEmisor: string
    nombreEmisor: string
    rfcReceptor: string
    nombreReceptor: string
    usoCFDI: string
    subTotal: number
    descuento?: number | null
    totalIEPS?: number | null
    iva16?: number | null
    retenidoIVA?: number | null
    retenidoISR?: number | null
    ish?: number | null
    total: number
    moneda?: string | null
    tipoCambio?: number | null
    formaPago: string
    metodoPago: string
    conceptos: string
    regimenFiscalReceptor?: string | null
    domicilioFiscalReceptor?: string | null
    fechaPago?: Date | string | null
    bancoPago?: string | null
    folioPago?: string | null
    gastoId?: number | null
  }

  export type FacturaCreateOrConnectWithoutVehiculoInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutVehiculoInput, FacturaUncheckedCreateWithoutVehiculoInput>
  }

  export type FacturaCreateManyVehiculoInputEnvelope = {
    data: FacturaCreateManyVehiculoInput | FacturaCreateManyVehiculoInput[]
    skipDuplicates?: boolean
  }

  export type SeguroUpsertWithWhereUniqueWithoutVehiculoInput = {
    where: SeguroWhereUniqueInput
    update: XOR<SeguroUpdateWithoutVehiculoInput, SeguroUncheckedUpdateWithoutVehiculoInput>
    create: XOR<SeguroCreateWithoutVehiculoInput, SeguroUncheckedCreateWithoutVehiculoInput>
  }

  export type SeguroUpdateWithWhereUniqueWithoutVehiculoInput = {
    where: SeguroWhereUniqueInput
    data: XOR<SeguroUpdateWithoutVehiculoInput, SeguroUncheckedUpdateWithoutVehiculoInput>
  }

  export type SeguroUpdateManyWithWhereWithoutVehiculoInput = {
    where: SeguroScalarWhereInput
    data: XOR<SeguroUpdateManyMutationInput, SeguroUncheckedUpdateManyWithoutVehiculoInput>
  }

  export type SeguroScalarWhereInput = {
    AND?: SeguroScalarWhereInput | SeguroScalarWhereInput[]
    OR?: SeguroScalarWhereInput[]
    NOT?: SeguroScalarWhereInput | SeguroScalarWhereInput[]
    id?: IntFilter<"Seguro"> | number
    vehiculoId?: IntFilter<"Seguro"> | number
    compania?: EnumCompaniaSeguroFilter<"Seguro"> | $Enums.CompaniaSeguro
    precio?: FloatFilter<"Seguro"> | number
    fechaInicio?: DateTimeFilter<"Seguro"> | Date | string
    fechaVencimiento?: DateTimeFilter<"Seguro"> | Date | string
    responsable?: StringNullableFilter<"Seguro"> | string | null
  }

  export type GastoUpsertWithWhereUniqueWithoutVehiculoInput = {
    where: GastoWhereUniqueInput
    update: XOR<GastoUpdateWithoutVehiculoInput, GastoUncheckedUpdateWithoutVehiculoInput>
    create: XOR<GastoCreateWithoutVehiculoInput, GastoUncheckedCreateWithoutVehiculoInput>
  }

  export type GastoUpdateWithWhereUniqueWithoutVehiculoInput = {
    where: GastoWhereUniqueInput
    data: XOR<GastoUpdateWithoutVehiculoInput, GastoUncheckedUpdateWithoutVehiculoInput>
  }

  export type GastoUpdateManyWithWhereWithoutVehiculoInput = {
    where: GastoScalarWhereInput
    data: XOR<GastoUpdateManyMutationInput, GastoUncheckedUpdateManyWithoutVehiculoInput>
  }

  export type GastoScalarWhereInput = {
    AND?: GastoScalarWhereInput | GastoScalarWhereInput[]
    OR?: GastoScalarWhereInput[]
    NOT?: GastoScalarWhereInput | GastoScalarWhereInput[]
    id?: IntFilter<"Gasto"> | number
    folio?: StringFilter<"Gasto"> | string
    fecha?: DateTimeFilter<"Gasto"> | Date | string
    razonSocial?: StringFilter<"Gasto"> | string
    banco?: StringNullableFilter<"Gasto"> | string | null
    tdc?: StringNullableFilter<"Gasto"> | string | null
    proveedor?: StringFilter<"Gasto"> | string
    concepto?: StringFilter<"Gasto"> | string
    referencia?: StringNullableFilter<"Gasto"> | string | null
    documento?: StringNullableFilter<"Gasto"> | string | null
    proyecto?: StringNullableFilter<"Gasto"> | string | null
    responsable?: StringFilter<"Gasto"> | string
    transferencia?: StringNullableFilter<"Gasto"> | string | null
    entrada?: FloatNullableFilter<"Gasto"> | number | null
    salida?: FloatNullableFilter<"Gasto"> | number | null
    saldo?: FloatNullableFilter<"Gasto"> | number | null
    vehiculoId?: IntNullableFilter<"Gasto"> | number | null
  }

  export type FacturaUpsertWithWhereUniqueWithoutVehiculoInput = {
    where: FacturaWhereUniqueInput
    update: XOR<FacturaUpdateWithoutVehiculoInput, FacturaUncheckedUpdateWithoutVehiculoInput>
    create: XOR<FacturaCreateWithoutVehiculoInput, FacturaUncheckedCreateWithoutVehiculoInput>
  }

  export type FacturaUpdateWithWhereUniqueWithoutVehiculoInput = {
    where: FacturaWhereUniqueInput
    data: XOR<FacturaUpdateWithoutVehiculoInput, FacturaUncheckedUpdateWithoutVehiculoInput>
  }

  export type FacturaUpdateManyWithWhereWithoutVehiculoInput = {
    where: FacturaScalarWhereInput
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyWithoutVehiculoInput>
  }

  export type FacturaScalarWhereInput = {
    AND?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
    OR?: FacturaScalarWhereInput[]
    NOT?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
    id?: IntFilter<"Factura"> | number
    uuid?: StringNullableFilter<"Factura"> | string | null
    estadoSAT?: StringNullableFilter<"Factura"> | string | null
    tipoComprobante?: StringNullableFilter<"Factura"> | string | null
    tipo?: StringNullableFilter<"Factura"> | string | null
    fechaEmision?: DateTimeFilter<"Factura"> | Date | string
    serie?: StringNullableFilter<"Factura"> | string | null
    folio?: StringNullableFilter<"Factura"> | string | null
    rfcEmisor?: StringFilter<"Factura"> | string
    nombreEmisor?: StringFilter<"Factura"> | string
    rfcReceptor?: StringFilter<"Factura"> | string
    nombreReceptor?: StringFilter<"Factura"> | string
    usoCFDI?: StringFilter<"Factura"> | string
    subTotal?: FloatFilter<"Factura"> | number
    descuento?: FloatNullableFilter<"Factura"> | number | null
    totalIEPS?: FloatNullableFilter<"Factura"> | number | null
    iva16?: FloatNullableFilter<"Factura"> | number | null
    retenidoIVA?: FloatNullableFilter<"Factura"> | number | null
    retenidoISR?: FloatNullableFilter<"Factura"> | number | null
    ish?: FloatNullableFilter<"Factura"> | number | null
    total?: FloatFilter<"Factura"> | number
    moneda?: StringNullableFilter<"Factura"> | string | null
    tipoCambio?: FloatNullableFilter<"Factura"> | number | null
    formaPago?: StringFilter<"Factura"> | string
    metodoPago?: StringFilter<"Factura"> | string
    conceptos?: StringFilter<"Factura"> | string
    regimenFiscalReceptor?: StringNullableFilter<"Factura"> | string | null
    domicilioFiscalReceptor?: StringNullableFilter<"Factura"> | string | null
    fechaPago?: DateTimeNullableFilter<"Factura"> | Date | string | null
    bancoPago?: StringNullableFilter<"Factura"> | string | null
    folioPago?: StringNullableFilter<"Factura"> | string | null
    gastoId?: IntNullableFilter<"Factura"> | number | null
    vehiculoId?: IntNullableFilter<"Factura"> | number | null
  }

  export type VehiculoCreateWithoutSegurosInput = {
    placa: string
    marca: string
    tipo: string
    color: string
    modelo: number
    serie: string
    motor?: string | null
    proyecto?: string | null
    ubicacion?: string | null
    placaAnterior?: string | null
    comentario?: string | null
    gastos?: GastoCreateNestedManyWithoutVehiculoInput
    facturas?: FacturaCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutSegurosInput = {
    id?: number
    placa: string
    marca: string
    tipo: string
    color: string
    modelo: number
    serie: string
    motor?: string | null
    proyecto?: string | null
    ubicacion?: string | null
    placaAnterior?: string | null
    comentario?: string | null
    gastos?: GastoUncheckedCreateNestedManyWithoutVehiculoInput
    facturas?: FacturaUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutSegurosInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutSegurosInput, VehiculoUncheckedCreateWithoutSegurosInput>
  }

  export type VehiculoUpsertWithoutSegurosInput = {
    update: XOR<VehiculoUpdateWithoutSegurosInput, VehiculoUncheckedUpdateWithoutSegurosInput>
    create: XOR<VehiculoCreateWithoutSegurosInput, VehiculoUncheckedCreateWithoutSegurosInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutSegurosInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutSegurosInput, VehiculoUncheckedUpdateWithoutSegurosInput>
  }

  export type VehiculoUpdateWithoutSegurosInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    modelo?: IntFieldUpdateOperationsInput | number
    serie?: StringFieldUpdateOperationsInput | string
    motor?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    placaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    gastos?: GastoUpdateManyWithoutVehiculoNestedInput
    facturas?: FacturaUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutSegurosInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    modelo?: IntFieldUpdateOperationsInput | number
    serie?: StringFieldUpdateOperationsInput | string
    motor?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    placaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    gastos?: GastoUncheckedUpdateManyWithoutVehiculoNestedInput
    facturas?: FacturaUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoCreateWithoutGastosInput = {
    placa: string
    marca: string
    tipo: string
    color: string
    modelo: number
    serie: string
    motor?: string | null
    proyecto?: string | null
    ubicacion?: string | null
    placaAnterior?: string | null
    comentario?: string | null
    seguros?: SeguroCreateNestedManyWithoutVehiculoInput
    facturas?: FacturaCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutGastosInput = {
    id?: number
    placa: string
    marca: string
    tipo: string
    color: string
    modelo: number
    serie: string
    motor?: string | null
    proyecto?: string | null
    ubicacion?: string | null
    placaAnterior?: string | null
    comentario?: string | null
    seguros?: SeguroUncheckedCreateNestedManyWithoutVehiculoInput
    facturas?: FacturaUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutGastosInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutGastosInput, VehiculoUncheckedCreateWithoutGastosInput>
  }

  export type FacturaCreateWithoutGastoInput = {
    uuid?: string | null
    estadoSAT?: string | null
    tipoComprobante?: string | null
    tipo?: string | null
    fechaEmision: Date | string
    serie?: string | null
    folio?: string | null
    rfcEmisor: string
    nombreEmisor: string
    rfcReceptor: string
    nombreReceptor: string
    usoCFDI: string
    subTotal: number
    descuento?: number | null
    totalIEPS?: number | null
    iva16?: number | null
    retenidoIVA?: number | null
    retenidoISR?: number | null
    ish?: number | null
    total: number
    moneda?: string | null
    tipoCambio?: number | null
    formaPago: string
    metodoPago: string
    conceptos: string
    regimenFiscalReceptor?: string | null
    domicilioFiscalReceptor?: string | null
    fechaPago?: Date | string | null
    bancoPago?: string | null
    folioPago?: string | null
    vehiculo?: VehiculoCreateNestedOneWithoutFacturasInput
  }

  export type FacturaUncheckedCreateWithoutGastoInput = {
    id?: number
    uuid?: string | null
    estadoSAT?: string | null
    tipoComprobante?: string | null
    tipo?: string | null
    fechaEmision: Date | string
    serie?: string | null
    folio?: string | null
    rfcEmisor: string
    nombreEmisor: string
    rfcReceptor: string
    nombreReceptor: string
    usoCFDI: string
    subTotal: number
    descuento?: number | null
    totalIEPS?: number | null
    iva16?: number | null
    retenidoIVA?: number | null
    retenidoISR?: number | null
    ish?: number | null
    total: number
    moneda?: string | null
    tipoCambio?: number | null
    formaPago: string
    metodoPago: string
    conceptos: string
    regimenFiscalReceptor?: string | null
    domicilioFiscalReceptor?: string | null
    fechaPago?: Date | string | null
    bancoPago?: string | null
    folioPago?: string | null
    vehiculoId?: number | null
  }

  export type FacturaCreateOrConnectWithoutGastoInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutGastoInput, FacturaUncheckedCreateWithoutGastoInput>
  }

  export type FacturaCreateManyGastoInputEnvelope = {
    data: FacturaCreateManyGastoInput | FacturaCreateManyGastoInput[]
    skipDuplicates?: boolean
  }

  export type VehiculoUpsertWithoutGastosInput = {
    update: XOR<VehiculoUpdateWithoutGastosInput, VehiculoUncheckedUpdateWithoutGastosInput>
    create: XOR<VehiculoCreateWithoutGastosInput, VehiculoUncheckedCreateWithoutGastosInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutGastosInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutGastosInput, VehiculoUncheckedUpdateWithoutGastosInput>
  }

  export type VehiculoUpdateWithoutGastosInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    modelo?: IntFieldUpdateOperationsInput | number
    serie?: StringFieldUpdateOperationsInput | string
    motor?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    placaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    seguros?: SeguroUpdateManyWithoutVehiculoNestedInput
    facturas?: FacturaUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutGastosInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    modelo?: IntFieldUpdateOperationsInput | number
    serie?: StringFieldUpdateOperationsInput | string
    motor?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    placaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    seguros?: SeguroUncheckedUpdateManyWithoutVehiculoNestedInput
    facturas?: FacturaUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type FacturaUpsertWithWhereUniqueWithoutGastoInput = {
    where: FacturaWhereUniqueInput
    update: XOR<FacturaUpdateWithoutGastoInput, FacturaUncheckedUpdateWithoutGastoInput>
    create: XOR<FacturaCreateWithoutGastoInput, FacturaUncheckedCreateWithoutGastoInput>
  }

  export type FacturaUpdateWithWhereUniqueWithoutGastoInput = {
    where: FacturaWhereUniqueInput
    data: XOR<FacturaUpdateWithoutGastoInput, FacturaUncheckedUpdateWithoutGastoInput>
  }

  export type FacturaUpdateManyWithWhereWithoutGastoInput = {
    where: FacturaScalarWhereInput
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyWithoutGastoInput>
  }

  export type GastoCreateWithoutFacturasInput = {
    folio: string
    fecha: Date | string
    razonSocial: string
    banco?: string | null
    tdc?: string | null
    proveedor: string
    concepto: string
    referencia?: string | null
    documento?: string | null
    proyecto?: string | null
    responsable: string
    transferencia?: string | null
    entrada?: number | null
    salida?: number | null
    saldo?: number | null
    vehiculo?: VehiculoCreateNestedOneWithoutGastosInput
  }

  export type GastoUncheckedCreateWithoutFacturasInput = {
    id?: number
    folio: string
    fecha: Date | string
    razonSocial: string
    banco?: string | null
    tdc?: string | null
    proveedor: string
    concepto: string
    referencia?: string | null
    documento?: string | null
    proyecto?: string | null
    responsable: string
    transferencia?: string | null
    entrada?: number | null
    salida?: number | null
    saldo?: number | null
    vehiculoId?: number | null
  }

  export type GastoCreateOrConnectWithoutFacturasInput = {
    where: GastoWhereUniqueInput
    create: XOR<GastoCreateWithoutFacturasInput, GastoUncheckedCreateWithoutFacturasInput>
  }

  export type VehiculoCreateWithoutFacturasInput = {
    placa: string
    marca: string
    tipo: string
    color: string
    modelo: number
    serie: string
    motor?: string | null
    proyecto?: string | null
    ubicacion?: string | null
    placaAnterior?: string | null
    comentario?: string | null
    seguros?: SeguroCreateNestedManyWithoutVehiculoInput
    gastos?: GastoCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutFacturasInput = {
    id?: number
    placa: string
    marca: string
    tipo: string
    color: string
    modelo: number
    serie: string
    motor?: string | null
    proyecto?: string | null
    ubicacion?: string | null
    placaAnterior?: string | null
    comentario?: string | null
    seguros?: SeguroUncheckedCreateNestedManyWithoutVehiculoInput
    gastos?: GastoUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutFacturasInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutFacturasInput, VehiculoUncheckedCreateWithoutFacturasInput>
  }

  export type GastoUpsertWithoutFacturasInput = {
    update: XOR<GastoUpdateWithoutFacturasInput, GastoUncheckedUpdateWithoutFacturasInput>
    create: XOR<GastoCreateWithoutFacturasInput, GastoUncheckedCreateWithoutFacturasInput>
    where?: GastoWhereInput
  }

  export type GastoUpdateToOneWithWhereWithoutFacturasInput = {
    where?: GastoWhereInput
    data: XOR<GastoUpdateWithoutFacturasInput, GastoUncheckedUpdateWithoutFacturasInput>
  }

  export type GastoUpdateWithoutFacturasInput = {
    folio?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    razonSocial?: StringFieldUpdateOperationsInput | string
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    tdc?: NullableStringFieldUpdateOperationsInput | string | null
    proveedor?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    responsable?: StringFieldUpdateOperationsInput | string
    transferencia?: NullableStringFieldUpdateOperationsInput | string | null
    entrada?: NullableFloatFieldUpdateOperationsInput | number | null
    salida?: NullableFloatFieldUpdateOperationsInput | number | null
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    vehiculo?: VehiculoUpdateOneWithoutGastosNestedInput
  }

  export type GastoUncheckedUpdateWithoutFacturasInput = {
    id?: IntFieldUpdateOperationsInput | number
    folio?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    razonSocial?: StringFieldUpdateOperationsInput | string
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    tdc?: NullableStringFieldUpdateOperationsInput | string | null
    proveedor?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    responsable?: StringFieldUpdateOperationsInput | string
    transferencia?: NullableStringFieldUpdateOperationsInput | string | null
    entrada?: NullableFloatFieldUpdateOperationsInput | number | null
    salida?: NullableFloatFieldUpdateOperationsInput | number | null
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    vehiculoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VehiculoUpsertWithoutFacturasInput = {
    update: XOR<VehiculoUpdateWithoutFacturasInput, VehiculoUncheckedUpdateWithoutFacturasInput>
    create: XOR<VehiculoCreateWithoutFacturasInput, VehiculoUncheckedCreateWithoutFacturasInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutFacturasInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutFacturasInput, VehiculoUncheckedUpdateWithoutFacturasInput>
  }

  export type VehiculoUpdateWithoutFacturasInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    modelo?: IntFieldUpdateOperationsInput | number
    serie?: StringFieldUpdateOperationsInput | string
    motor?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    placaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    seguros?: SeguroUpdateManyWithoutVehiculoNestedInput
    gastos?: GastoUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutFacturasInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    modelo?: IntFieldUpdateOperationsInput | number
    serie?: StringFieldUpdateOperationsInput | string
    motor?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    placaAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    seguros?: SeguroUncheckedUpdateManyWithoutVehiculoNestedInput
    gastos?: GastoUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type SeguroCreateManyVehiculoInput = {
    id?: number
    compania: $Enums.CompaniaSeguro
    precio: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    responsable?: string | null
  }

  export type GastoCreateManyVehiculoInput = {
    id?: number
    folio: string
    fecha: Date | string
    razonSocial: string
    banco?: string | null
    tdc?: string | null
    proveedor: string
    concepto: string
    referencia?: string | null
    documento?: string | null
    proyecto?: string | null
    responsable: string
    transferencia?: string | null
    entrada?: number | null
    salida?: number | null
    saldo?: number | null
  }

  export type FacturaCreateManyVehiculoInput = {
    id?: number
    uuid?: string | null
    estadoSAT?: string | null
    tipoComprobante?: string | null
    tipo?: string | null
    fechaEmision: Date | string
    serie?: string | null
    folio?: string | null
    rfcEmisor: string
    nombreEmisor: string
    rfcReceptor: string
    nombreReceptor: string
    usoCFDI: string
    subTotal: number
    descuento?: number | null
    totalIEPS?: number | null
    iva16?: number | null
    retenidoIVA?: number | null
    retenidoISR?: number | null
    ish?: number | null
    total: number
    moneda?: string | null
    tipoCambio?: number | null
    formaPago: string
    metodoPago: string
    conceptos: string
    regimenFiscalReceptor?: string | null
    domicilioFiscalReceptor?: string | null
    fechaPago?: Date | string | null
    bancoPago?: string | null
    folioPago?: string | null
    gastoId?: number | null
  }

  export type SeguroUpdateWithoutVehiculoInput = {
    compania?: EnumCompaniaSeguroFieldUpdateOperationsInput | $Enums.CompaniaSeguro
    precio?: FloatFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeguroUncheckedUpdateWithoutVehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    compania?: EnumCompaniaSeguroFieldUpdateOperationsInput | $Enums.CompaniaSeguro
    precio?: FloatFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeguroUncheckedUpdateManyWithoutVehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    compania?: EnumCompaniaSeguroFieldUpdateOperationsInput | $Enums.CompaniaSeguro
    precio?: FloatFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GastoUpdateWithoutVehiculoInput = {
    folio?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    razonSocial?: StringFieldUpdateOperationsInput | string
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    tdc?: NullableStringFieldUpdateOperationsInput | string | null
    proveedor?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    responsable?: StringFieldUpdateOperationsInput | string
    transferencia?: NullableStringFieldUpdateOperationsInput | string | null
    entrada?: NullableFloatFieldUpdateOperationsInput | number | null
    salida?: NullableFloatFieldUpdateOperationsInput | number | null
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    facturas?: FacturaUpdateManyWithoutGastoNestedInput
  }

  export type GastoUncheckedUpdateWithoutVehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    folio?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    razonSocial?: StringFieldUpdateOperationsInput | string
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    tdc?: NullableStringFieldUpdateOperationsInput | string | null
    proveedor?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    responsable?: StringFieldUpdateOperationsInput | string
    transferencia?: NullableStringFieldUpdateOperationsInput | string | null
    entrada?: NullableFloatFieldUpdateOperationsInput | number | null
    salida?: NullableFloatFieldUpdateOperationsInput | number | null
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
    facturas?: FacturaUncheckedUpdateManyWithoutGastoNestedInput
  }

  export type GastoUncheckedUpdateManyWithoutVehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    folio?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    razonSocial?: StringFieldUpdateOperationsInput | string
    banco?: NullableStringFieldUpdateOperationsInput | string | null
    tdc?: NullableStringFieldUpdateOperationsInput | string | null
    proveedor?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    proyecto?: NullableStringFieldUpdateOperationsInput | string | null
    responsable?: StringFieldUpdateOperationsInput | string
    transferencia?: NullableStringFieldUpdateOperationsInput | string | null
    entrada?: NullableFloatFieldUpdateOperationsInput | number | null
    salida?: NullableFloatFieldUpdateOperationsInput | number | null
    saldo?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FacturaUpdateWithoutVehiculoInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    estadoSAT?: NullableStringFieldUpdateOperationsInput | string | null
    tipoComprobante?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    rfcEmisor?: StringFieldUpdateOperationsInput | string
    nombreEmisor?: StringFieldUpdateOperationsInput | string
    rfcReceptor?: StringFieldUpdateOperationsInput | string
    nombreReceptor?: StringFieldUpdateOperationsInput | string
    usoCFDI?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    totalIEPS?: NullableFloatFieldUpdateOperationsInput | number | null
    iva16?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoIVA?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoISR?: NullableFloatFieldUpdateOperationsInput | number | null
    ish?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCambio?: NullableFloatFieldUpdateOperationsInput | number | null
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    conceptos?: StringFieldUpdateOperationsInput | string
    regimenFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    domicilioFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bancoPago?: NullableStringFieldUpdateOperationsInput | string | null
    folioPago?: NullableStringFieldUpdateOperationsInput | string | null
    gasto?: GastoUpdateOneWithoutFacturasNestedInput
  }

  export type FacturaUncheckedUpdateWithoutVehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    estadoSAT?: NullableStringFieldUpdateOperationsInput | string | null
    tipoComprobante?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    rfcEmisor?: StringFieldUpdateOperationsInput | string
    nombreEmisor?: StringFieldUpdateOperationsInput | string
    rfcReceptor?: StringFieldUpdateOperationsInput | string
    nombreReceptor?: StringFieldUpdateOperationsInput | string
    usoCFDI?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    totalIEPS?: NullableFloatFieldUpdateOperationsInput | number | null
    iva16?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoIVA?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoISR?: NullableFloatFieldUpdateOperationsInput | number | null
    ish?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCambio?: NullableFloatFieldUpdateOperationsInput | number | null
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    conceptos?: StringFieldUpdateOperationsInput | string
    regimenFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    domicilioFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bancoPago?: NullableStringFieldUpdateOperationsInput | string | null
    folioPago?: NullableStringFieldUpdateOperationsInput | string | null
    gastoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FacturaUncheckedUpdateManyWithoutVehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    estadoSAT?: NullableStringFieldUpdateOperationsInput | string | null
    tipoComprobante?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    rfcEmisor?: StringFieldUpdateOperationsInput | string
    nombreEmisor?: StringFieldUpdateOperationsInput | string
    rfcReceptor?: StringFieldUpdateOperationsInput | string
    nombreReceptor?: StringFieldUpdateOperationsInput | string
    usoCFDI?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    totalIEPS?: NullableFloatFieldUpdateOperationsInput | number | null
    iva16?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoIVA?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoISR?: NullableFloatFieldUpdateOperationsInput | number | null
    ish?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCambio?: NullableFloatFieldUpdateOperationsInput | number | null
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    conceptos?: StringFieldUpdateOperationsInput | string
    regimenFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    domicilioFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bancoPago?: NullableStringFieldUpdateOperationsInput | string | null
    folioPago?: NullableStringFieldUpdateOperationsInput | string | null
    gastoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FacturaCreateManyGastoInput = {
    id?: number
    uuid?: string | null
    estadoSAT?: string | null
    tipoComprobante?: string | null
    tipo?: string | null
    fechaEmision: Date | string
    serie?: string | null
    folio?: string | null
    rfcEmisor: string
    nombreEmisor: string
    rfcReceptor: string
    nombreReceptor: string
    usoCFDI: string
    subTotal: number
    descuento?: number | null
    totalIEPS?: number | null
    iva16?: number | null
    retenidoIVA?: number | null
    retenidoISR?: number | null
    ish?: number | null
    total: number
    moneda?: string | null
    tipoCambio?: number | null
    formaPago: string
    metodoPago: string
    conceptos: string
    regimenFiscalReceptor?: string | null
    domicilioFiscalReceptor?: string | null
    fechaPago?: Date | string | null
    bancoPago?: string | null
    folioPago?: string | null
    vehiculoId?: number | null
  }

  export type FacturaUpdateWithoutGastoInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    estadoSAT?: NullableStringFieldUpdateOperationsInput | string | null
    tipoComprobante?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    rfcEmisor?: StringFieldUpdateOperationsInput | string
    nombreEmisor?: StringFieldUpdateOperationsInput | string
    rfcReceptor?: StringFieldUpdateOperationsInput | string
    nombreReceptor?: StringFieldUpdateOperationsInput | string
    usoCFDI?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    totalIEPS?: NullableFloatFieldUpdateOperationsInput | number | null
    iva16?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoIVA?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoISR?: NullableFloatFieldUpdateOperationsInput | number | null
    ish?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCambio?: NullableFloatFieldUpdateOperationsInput | number | null
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    conceptos?: StringFieldUpdateOperationsInput | string
    regimenFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    domicilioFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bancoPago?: NullableStringFieldUpdateOperationsInput | string | null
    folioPago?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculo?: VehiculoUpdateOneWithoutFacturasNestedInput
  }

  export type FacturaUncheckedUpdateWithoutGastoInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    estadoSAT?: NullableStringFieldUpdateOperationsInput | string | null
    tipoComprobante?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    rfcEmisor?: StringFieldUpdateOperationsInput | string
    nombreEmisor?: StringFieldUpdateOperationsInput | string
    rfcReceptor?: StringFieldUpdateOperationsInput | string
    nombreReceptor?: StringFieldUpdateOperationsInput | string
    usoCFDI?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    totalIEPS?: NullableFloatFieldUpdateOperationsInput | number | null
    iva16?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoIVA?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoISR?: NullableFloatFieldUpdateOperationsInput | number | null
    ish?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCambio?: NullableFloatFieldUpdateOperationsInput | number | null
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    conceptos?: StringFieldUpdateOperationsInput | string
    regimenFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    domicilioFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bancoPago?: NullableStringFieldUpdateOperationsInput | string | null
    folioPago?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FacturaUncheckedUpdateManyWithoutGastoInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    estadoSAT?: NullableStringFieldUpdateOperationsInput | string | null
    tipoComprobante?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    rfcEmisor?: StringFieldUpdateOperationsInput | string
    nombreEmisor?: StringFieldUpdateOperationsInput | string
    rfcReceptor?: StringFieldUpdateOperationsInput | string
    nombreReceptor?: StringFieldUpdateOperationsInput | string
    usoCFDI?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    descuento?: NullableFloatFieldUpdateOperationsInput | number | null
    totalIEPS?: NullableFloatFieldUpdateOperationsInput | number | null
    iva16?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoIVA?: NullableFloatFieldUpdateOperationsInput | number | null
    retenidoISR?: NullableFloatFieldUpdateOperationsInput | number | null
    ish?: NullableFloatFieldUpdateOperationsInput | number | null
    total?: FloatFieldUpdateOperationsInput | number
    moneda?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCambio?: NullableFloatFieldUpdateOperationsInput | number | null
    formaPago?: StringFieldUpdateOperationsInput | string
    metodoPago?: StringFieldUpdateOperationsInput | string
    conceptos?: StringFieldUpdateOperationsInput | string
    regimenFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    domicilioFiscalReceptor?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bancoPago?: NullableStringFieldUpdateOperationsInput | string | null
    folioPago?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculoId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}