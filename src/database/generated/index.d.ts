
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
 * Model files
 * 
 */
export type files = $Result.DefaultSelection<Prisma.$filesPayload>
/**
 * Model shares
 * 
 */
export type shares = $Result.DefaultSelection<Prisma.$sharesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Files
 * const files = await prisma.files.findMany()
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
   * // Fetch zero or more Files
   * const files = await prisma.files.findMany()
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
   * `prisma.files`: Exposes CRUD operations for the **files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.files.findMany()
    * ```
    */
  get files(): Prisma.filesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shares`: Exposes CRUD operations for the **shares** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shares
    * const shares = await prisma.shares.findMany()
    * ```
    */
  get shares(): Prisma.sharesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    files: 'files',
    shares: 'shares'
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
      modelProps: "files" | "shares"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      files: {
        payload: Prisma.$filesPayload<ExtArgs>
        fields: Prisma.filesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.filesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.filesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          findFirst: {
            args: Prisma.filesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.filesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          findMany: {
            args: Prisma.filesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>[]
          }
          create: {
            args: Prisma.filesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          createMany: {
            args: Prisma.filesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.filesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>[]
          }
          delete: {
            args: Prisma.filesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          update: {
            args: Prisma.filesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          deleteMany: {
            args: Prisma.filesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.filesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.filesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>[]
          }
          upsert: {
            args: Prisma.filesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          aggregate: {
            args: Prisma.FilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiles>
          }
          groupBy: {
            args: Prisma.filesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.filesCountArgs<ExtArgs>
            result: $Utils.Optional<FilesCountAggregateOutputType> | number
          }
        }
      }
      shares: {
        payload: Prisma.$sharesPayload<ExtArgs>
        fields: Prisma.sharesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sharesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sharesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharesPayload>
          }
          findFirst: {
            args: Prisma.sharesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sharesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharesPayload>
          }
          findMany: {
            args: Prisma.sharesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharesPayload>[]
          }
          create: {
            args: Prisma.sharesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharesPayload>
          }
          createMany: {
            args: Prisma.sharesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sharesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharesPayload>[]
          }
          delete: {
            args: Prisma.sharesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharesPayload>
          }
          update: {
            args: Prisma.sharesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharesPayload>
          }
          deleteMany: {
            args: Prisma.sharesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sharesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sharesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharesPayload>[]
          }
          upsert: {
            args: Prisma.sharesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sharesPayload>
          }
          aggregate: {
            args: Prisma.SharesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShares>
          }
          groupBy: {
            args: Prisma.sharesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SharesGroupByOutputType>[]
          }
          count: {
            args: Prisma.sharesCountArgs<ExtArgs>
            result: $Utils.Optional<SharesCountAggregateOutputType> | number
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
    files?: filesOmit
    shares?: sharesOmit
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
   * Models
   */

  /**
   * Model files
   */

  export type AggregateFiles = {
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  export type FilesAvgAggregateOutputType = {
    id: number | null
    size: number | null
  }

  export type FilesSumAggregateOutputType = {
    id: number | null
    size: number | null
  }

  export type FilesMinAggregateOutputType = {
    id: number | null
    filename: string | null
    size: number | null
    mimeType: string | null
    createdAt: Date | null
  }

  export type FilesMaxAggregateOutputType = {
    id: number | null
    filename: string | null
    size: number | null
    mimeType: string | null
    createdAt: Date | null
  }

  export type FilesCountAggregateOutputType = {
    id: number
    filename: number
    size: number
    mimeType: number
    createdAt: number
    _all: number
  }


  export type FilesAvgAggregateInputType = {
    id?: true
    size?: true
  }

  export type FilesSumAggregateInputType = {
    id?: true
    size?: true
  }

  export type FilesMinAggregateInputType = {
    id?: true
    filename?: true
    size?: true
    mimeType?: true
    createdAt?: true
  }

  export type FilesMaxAggregateInputType = {
    id?: true
    filename?: true
    size?: true
    mimeType?: true
    createdAt?: true
  }

  export type FilesCountAggregateInputType = {
    id?: true
    filename?: true
    size?: true
    mimeType?: true
    createdAt?: true
    _all?: true
  }

  export type FilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which files to aggregate.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned files
    **/
    _count?: true | FilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilesMaxAggregateInputType
  }

  export type GetFilesAggregateType<T extends FilesAggregateArgs> = {
        [P in keyof T & keyof AggregateFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiles[P]>
      : GetScalarType<T[P], AggregateFiles[P]>
  }




  export type filesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filesWhereInput
    orderBy?: filesOrderByWithAggregationInput | filesOrderByWithAggregationInput[]
    by: FilesScalarFieldEnum[] | FilesScalarFieldEnum
    having?: filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilesCountAggregateInputType | true
    _avg?: FilesAvgAggregateInputType
    _sum?: FilesSumAggregateInputType
    _min?: FilesMinAggregateInputType
    _max?: FilesMaxAggregateInputType
  }

  export type FilesGroupByOutputType = {
    id: number
    filename: string
    size: number
    mimeType: string
    createdAt: Date
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  type GetFilesGroupByPayload<T extends filesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilesGroupByOutputType[P]>
            : GetScalarType<T[P], FilesGroupByOutputType[P]>
        }
      >
    >


  export type filesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    size?: boolean
    mimeType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["files"]>

  export type filesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    size?: boolean
    mimeType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["files"]>

  export type filesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    size?: boolean
    mimeType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["files"]>

  export type filesSelectScalar = {
    id?: boolean
    filename?: boolean
    size?: boolean
    mimeType?: boolean
    createdAt?: boolean
  }

  export type filesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "size" | "mimeType" | "createdAt", ExtArgs["result"]["files"]>

  export type $filesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "files"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string
      size: number
      mimeType: string
      createdAt: Date
    }, ExtArgs["result"]["files"]>
    composites: {}
  }

  type filesGetPayload<S extends boolean | null | undefined | filesDefaultArgs> = $Result.GetResult<Prisma.$filesPayload, S>

  type filesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilesCountAggregateInputType | true
    }

  export interface filesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['files'], meta: { name: 'files' } }
    /**
     * Find zero or one Files that matches the filter.
     * @param {filesFindUniqueArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends filesFindUniqueArgs>(args: SelectSubset<T, filesFindUniqueArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {filesFindUniqueOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends filesFindUniqueOrThrowArgs>(args: SelectSubset<T, filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesFindFirstArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends filesFindFirstArgs>(args?: SelectSubset<T, filesFindFirstArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesFindFirstOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends filesFindFirstOrThrowArgs>(args?: SelectSubset<T, filesFindFirstOrThrowArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.files.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filesWithIdOnly = await prisma.files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends filesFindManyArgs>(args?: SelectSubset<T, filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Files.
     * @param {filesCreateArgs} args - Arguments to create a Files.
     * @example
     * // Create one Files
     * const Files = await prisma.files.create({
     *   data: {
     *     // ... data to create a Files
     *   }
     * })
     * 
     */
    create<T extends filesCreateArgs>(args: SelectSubset<T, filesCreateArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {filesCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends filesCreateManyArgs>(args?: SelectSubset<T, filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {filesCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends filesCreateManyAndReturnArgs>(args?: SelectSubset<T, filesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Files.
     * @param {filesDeleteArgs} args - Arguments to delete one Files.
     * @example
     * // Delete one Files
     * const Files = await prisma.files.delete({
     *   where: {
     *     // ... filter to delete one Files
     *   }
     * })
     * 
     */
    delete<T extends filesDeleteArgs>(args: SelectSubset<T, filesDeleteArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Files.
     * @param {filesUpdateArgs} args - Arguments to update one Files.
     * @example
     * // Update one Files
     * const files = await prisma.files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends filesUpdateArgs>(args: SelectSubset<T, filesUpdateArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {filesDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends filesDeleteManyArgs>(args?: SelectSubset<T, filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends filesUpdateManyArgs>(args: SelectSubset<T, filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {filesUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.updateManyAndReturn({
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
    updateManyAndReturn<T extends filesUpdateManyAndReturnArgs>(args: SelectSubset<T, filesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Files.
     * @param {filesUpsertArgs} args - Arguments to update or create a Files.
     * @example
     * // Update or create a Files
     * const files = await prisma.files.upsert({
     *   create: {
     *     // ... data to create a Files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Files we want to update
     *   }
     * })
     */
    upsert<T extends filesUpsertArgs>(args: SelectSubset<T, filesUpsertArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.files.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends filesCountArgs>(
      args?: Subset<T, filesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilesAggregateArgs>(args: Subset<T, FilesAggregateArgs>): Prisma.PrismaPromise<GetFilesAggregateType<T>>

    /**
     * Group by Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesGroupByArgs} args - Group by arguments.
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
      T extends filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: filesGroupByArgs['orderBy'] }
        : { orderBy?: filesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the files model
   */
  readonly fields: filesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__filesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the files model
   */
  interface filesFieldRefs {
    readonly id: FieldRef<"files", 'Int'>
    readonly filename: FieldRef<"files", 'String'>
    readonly size: FieldRef<"files", 'Float'>
    readonly mimeType: FieldRef<"files", 'String'>
    readonly createdAt: FieldRef<"files", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * files findUnique
   */
  export type filesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files findUniqueOrThrow
   */
  export type filesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files findFirst
   */
  export type filesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * files findFirstOrThrow
   */
  export type filesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * files findMany
   */
  export type filesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing files.
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * files create
   */
  export type filesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * The data needed to create a files.
     */
    data: XOR<filesCreateInput, filesUncheckedCreateInput>
  }

  /**
   * files createMany
   */
  export type filesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many files.
     */
    data: filesCreateManyInput | filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * files createManyAndReturn
   */
  export type filesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * The data used to create many files.
     */
    data: filesCreateManyInput | filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * files update
   */
  export type filesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * The data needed to update a files.
     */
    data: XOR<filesUpdateInput, filesUncheckedUpdateInput>
    /**
     * Choose, which files to update.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files updateMany
   */
  export type filesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update files.
     */
    data: XOR<filesUpdateManyMutationInput, filesUncheckedUpdateManyInput>
    /**
     * Filter which files to update
     */
    where?: filesWhereInput
    /**
     * Limit how many files to update.
     */
    limit?: number
  }

  /**
   * files updateManyAndReturn
   */
  export type filesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * The data used to update files.
     */
    data: XOR<filesUpdateManyMutationInput, filesUncheckedUpdateManyInput>
    /**
     * Filter which files to update
     */
    where?: filesWhereInput
    /**
     * Limit how many files to update.
     */
    limit?: number
  }

  /**
   * files upsert
   */
  export type filesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * The filter to search for the files to update in case it exists.
     */
    where: filesWhereUniqueInput
    /**
     * In case the files found by the `where` argument doesn't exist, create a new files with this data.
     */
    create: XOR<filesCreateInput, filesUncheckedCreateInput>
    /**
     * In case the files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<filesUpdateInput, filesUncheckedUpdateInput>
  }

  /**
   * files delete
   */
  export type filesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Filter which files to delete.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files deleteMany
   */
  export type filesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which files to delete
     */
    where?: filesWhereInput
    /**
     * Limit how many files to delete.
     */
    limit?: number
  }

  /**
   * files without action
   */
  export type filesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
  }


  /**
   * Model shares
   */

  export type AggregateShares = {
    _count: SharesCountAggregateOutputType | null
    _avg: SharesAvgAggregateOutputType | null
    _sum: SharesSumAggregateOutputType | null
    _min: SharesMinAggregateOutputType | null
    _max: SharesMaxAggregateOutputType | null
  }

  export type SharesAvgAggregateOutputType = {
    id: number | null
    fileId: number | null
    accessCount: number | null
  }

  export type SharesSumAggregateOutputType = {
    id: number | null
    fileId: number | null
    accessCount: number | null
  }

  export type SharesMinAggregateOutputType = {
    id: number | null
    fileId: number | null
    filename: string | null
    shareUrl: string | null
    expireAt: Date | null
    createdAt: Date | null
    accessCount: number | null
  }

  export type SharesMaxAggregateOutputType = {
    id: number | null
    fileId: number | null
    filename: string | null
    shareUrl: string | null
    expireAt: Date | null
    createdAt: Date | null
    accessCount: number | null
  }

  export type SharesCountAggregateOutputType = {
    id: number
    fileId: number
    filename: number
    shareUrl: number
    expireAt: number
    createdAt: number
    accessCount: number
    _all: number
  }


  export type SharesAvgAggregateInputType = {
    id?: true
    fileId?: true
    accessCount?: true
  }

  export type SharesSumAggregateInputType = {
    id?: true
    fileId?: true
    accessCount?: true
  }

  export type SharesMinAggregateInputType = {
    id?: true
    fileId?: true
    filename?: true
    shareUrl?: true
    expireAt?: true
    createdAt?: true
    accessCount?: true
  }

  export type SharesMaxAggregateInputType = {
    id?: true
    fileId?: true
    filename?: true
    shareUrl?: true
    expireAt?: true
    createdAt?: true
    accessCount?: true
  }

  export type SharesCountAggregateInputType = {
    id?: true
    fileId?: true
    filename?: true
    shareUrl?: true
    expireAt?: true
    createdAt?: true
    accessCount?: true
    _all?: true
  }

  export type SharesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shares to aggregate.
     */
    where?: sharesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shares to fetch.
     */
    orderBy?: sharesOrderByWithRelationInput | sharesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sharesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shares
    **/
    _count?: true | SharesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SharesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SharesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharesMaxAggregateInputType
  }

  export type GetSharesAggregateType<T extends SharesAggregateArgs> = {
        [P in keyof T & keyof AggregateShares]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShares[P]>
      : GetScalarType<T[P], AggregateShares[P]>
  }




  export type sharesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sharesWhereInput
    orderBy?: sharesOrderByWithAggregationInput | sharesOrderByWithAggregationInput[]
    by: SharesScalarFieldEnum[] | SharesScalarFieldEnum
    having?: sharesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharesCountAggregateInputType | true
    _avg?: SharesAvgAggregateInputType
    _sum?: SharesSumAggregateInputType
    _min?: SharesMinAggregateInputType
    _max?: SharesMaxAggregateInputType
  }

  export type SharesGroupByOutputType = {
    id: number
    fileId: number
    filename: string
    shareUrl: string
    expireAt: Date
    createdAt: Date
    accessCount: number
    _count: SharesCountAggregateOutputType | null
    _avg: SharesAvgAggregateOutputType | null
    _sum: SharesSumAggregateOutputType | null
    _min: SharesMinAggregateOutputType | null
    _max: SharesMaxAggregateOutputType | null
  }

  type GetSharesGroupByPayload<T extends sharesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharesGroupByOutputType[P]>
            : GetScalarType<T[P], SharesGroupByOutputType[P]>
        }
      >
    >


  export type sharesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    filename?: boolean
    shareUrl?: boolean
    expireAt?: boolean
    createdAt?: boolean
    accessCount?: boolean
  }, ExtArgs["result"]["shares"]>

  export type sharesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    filename?: boolean
    shareUrl?: boolean
    expireAt?: boolean
    createdAt?: boolean
    accessCount?: boolean
  }, ExtArgs["result"]["shares"]>

  export type sharesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    filename?: boolean
    shareUrl?: boolean
    expireAt?: boolean
    createdAt?: boolean
    accessCount?: boolean
  }, ExtArgs["result"]["shares"]>

  export type sharesSelectScalar = {
    id?: boolean
    fileId?: boolean
    filename?: boolean
    shareUrl?: boolean
    expireAt?: boolean
    createdAt?: boolean
    accessCount?: boolean
  }

  export type sharesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileId" | "filename" | "shareUrl" | "expireAt" | "createdAt" | "accessCount", ExtArgs["result"]["shares"]>

  export type $sharesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shares"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileId: number
      filename: string
      shareUrl: string
      expireAt: Date
      createdAt: Date
      accessCount: number
    }, ExtArgs["result"]["shares"]>
    composites: {}
  }

  type sharesGetPayload<S extends boolean | null | undefined | sharesDefaultArgs> = $Result.GetResult<Prisma.$sharesPayload, S>

  type sharesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sharesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SharesCountAggregateInputType | true
    }

  export interface sharesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shares'], meta: { name: 'shares' } }
    /**
     * Find zero or one Shares that matches the filter.
     * @param {sharesFindUniqueArgs} args - Arguments to find a Shares
     * @example
     * // Get one Shares
     * const shares = await prisma.shares.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sharesFindUniqueArgs>(args: SelectSubset<T, sharesFindUniqueArgs<ExtArgs>>): Prisma__sharesClient<$Result.GetResult<Prisma.$sharesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shares that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sharesFindUniqueOrThrowArgs} args - Arguments to find a Shares
     * @example
     * // Get one Shares
     * const shares = await prisma.shares.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sharesFindUniqueOrThrowArgs>(args: SelectSubset<T, sharesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sharesClient<$Result.GetResult<Prisma.$sharesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharesFindFirstArgs} args - Arguments to find a Shares
     * @example
     * // Get one Shares
     * const shares = await prisma.shares.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sharesFindFirstArgs>(args?: SelectSubset<T, sharesFindFirstArgs<ExtArgs>>): Prisma__sharesClient<$Result.GetResult<Prisma.$sharesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shares that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharesFindFirstOrThrowArgs} args - Arguments to find a Shares
     * @example
     * // Get one Shares
     * const shares = await prisma.shares.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sharesFindFirstOrThrowArgs>(args?: SelectSubset<T, sharesFindFirstOrThrowArgs<ExtArgs>>): Prisma__sharesClient<$Result.GetResult<Prisma.$sharesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shares
     * const shares = await prisma.shares.findMany()
     * 
     * // Get first 10 Shares
     * const shares = await prisma.shares.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharesWithIdOnly = await prisma.shares.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sharesFindManyArgs>(args?: SelectSubset<T, sharesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sharesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shares.
     * @param {sharesCreateArgs} args - Arguments to create a Shares.
     * @example
     * // Create one Shares
     * const Shares = await prisma.shares.create({
     *   data: {
     *     // ... data to create a Shares
     *   }
     * })
     * 
     */
    create<T extends sharesCreateArgs>(args: SelectSubset<T, sharesCreateArgs<ExtArgs>>): Prisma__sharesClient<$Result.GetResult<Prisma.$sharesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shares.
     * @param {sharesCreateManyArgs} args - Arguments to create many Shares.
     * @example
     * // Create many Shares
     * const shares = await prisma.shares.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sharesCreateManyArgs>(args?: SelectSubset<T, sharesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shares and returns the data saved in the database.
     * @param {sharesCreateManyAndReturnArgs} args - Arguments to create many Shares.
     * @example
     * // Create many Shares
     * const shares = await prisma.shares.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shares and only return the `id`
     * const sharesWithIdOnly = await prisma.shares.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sharesCreateManyAndReturnArgs>(args?: SelectSubset<T, sharesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sharesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shares.
     * @param {sharesDeleteArgs} args - Arguments to delete one Shares.
     * @example
     * // Delete one Shares
     * const Shares = await prisma.shares.delete({
     *   where: {
     *     // ... filter to delete one Shares
     *   }
     * })
     * 
     */
    delete<T extends sharesDeleteArgs>(args: SelectSubset<T, sharesDeleteArgs<ExtArgs>>): Prisma__sharesClient<$Result.GetResult<Prisma.$sharesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shares.
     * @param {sharesUpdateArgs} args - Arguments to update one Shares.
     * @example
     * // Update one Shares
     * const shares = await prisma.shares.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sharesUpdateArgs>(args: SelectSubset<T, sharesUpdateArgs<ExtArgs>>): Prisma__sharesClient<$Result.GetResult<Prisma.$sharesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shares.
     * @param {sharesDeleteManyArgs} args - Arguments to filter Shares to delete.
     * @example
     * // Delete a few Shares
     * const { count } = await prisma.shares.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sharesDeleteManyArgs>(args?: SelectSubset<T, sharesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shares
     * const shares = await prisma.shares.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sharesUpdateManyArgs>(args: SelectSubset<T, sharesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shares and returns the data updated in the database.
     * @param {sharesUpdateManyAndReturnArgs} args - Arguments to update many Shares.
     * @example
     * // Update many Shares
     * const shares = await prisma.shares.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shares and only return the `id`
     * const sharesWithIdOnly = await prisma.shares.updateManyAndReturn({
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
    updateManyAndReturn<T extends sharesUpdateManyAndReturnArgs>(args: SelectSubset<T, sharesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sharesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shares.
     * @param {sharesUpsertArgs} args - Arguments to update or create a Shares.
     * @example
     * // Update or create a Shares
     * const shares = await prisma.shares.upsert({
     *   create: {
     *     // ... data to create a Shares
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shares we want to update
     *   }
     * })
     */
    upsert<T extends sharesUpsertArgs>(args: SelectSubset<T, sharesUpsertArgs<ExtArgs>>): Prisma__sharesClient<$Result.GetResult<Prisma.$sharesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharesCountArgs} args - Arguments to filter Shares to count.
     * @example
     * // Count the number of Shares
     * const count = await prisma.shares.count({
     *   where: {
     *     // ... the filter for the Shares we want to count
     *   }
     * })
    **/
    count<T extends sharesCountArgs>(
      args?: Subset<T, sharesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SharesAggregateArgs>(args: Subset<T, SharesAggregateArgs>): Prisma.PrismaPromise<GetSharesAggregateType<T>>

    /**
     * Group by Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharesGroupByArgs} args - Group by arguments.
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
      T extends sharesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sharesGroupByArgs['orderBy'] }
        : { orderBy?: sharesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sharesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shares model
   */
  readonly fields: sharesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shares.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sharesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the shares model
   */
  interface sharesFieldRefs {
    readonly id: FieldRef<"shares", 'Int'>
    readonly fileId: FieldRef<"shares", 'Int'>
    readonly filename: FieldRef<"shares", 'String'>
    readonly shareUrl: FieldRef<"shares", 'String'>
    readonly expireAt: FieldRef<"shares", 'DateTime'>
    readonly createdAt: FieldRef<"shares", 'DateTime'>
    readonly accessCount: FieldRef<"shares", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * shares findUnique
   */
  export type sharesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shares
     */
    select?: sharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shares
     */
    omit?: sharesOmit<ExtArgs> | null
    /**
     * Filter, which shares to fetch.
     */
    where: sharesWhereUniqueInput
  }

  /**
   * shares findUniqueOrThrow
   */
  export type sharesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shares
     */
    select?: sharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shares
     */
    omit?: sharesOmit<ExtArgs> | null
    /**
     * Filter, which shares to fetch.
     */
    where: sharesWhereUniqueInput
  }

  /**
   * shares findFirst
   */
  export type sharesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shares
     */
    select?: sharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shares
     */
    omit?: sharesOmit<ExtArgs> | null
    /**
     * Filter, which shares to fetch.
     */
    where?: sharesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shares to fetch.
     */
    orderBy?: sharesOrderByWithRelationInput | sharesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shares.
     */
    cursor?: sharesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shares.
     */
    distinct?: SharesScalarFieldEnum | SharesScalarFieldEnum[]
  }

  /**
   * shares findFirstOrThrow
   */
  export type sharesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shares
     */
    select?: sharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shares
     */
    omit?: sharesOmit<ExtArgs> | null
    /**
     * Filter, which shares to fetch.
     */
    where?: sharesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shares to fetch.
     */
    orderBy?: sharesOrderByWithRelationInput | sharesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shares.
     */
    cursor?: sharesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shares.
     */
    distinct?: SharesScalarFieldEnum | SharesScalarFieldEnum[]
  }

  /**
   * shares findMany
   */
  export type sharesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shares
     */
    select?: sharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shares
     */
    omit?: sharesOmit<ExtArgs> | null
    /**
     * Filter, which shares to fetch.
     */
    where?: sharesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shares to fetch.
     */
    orderBy?: sharesOrderByWithRelationInput | sharesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shares.
     */
    cursor?: sharesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shares.
     */
    skip?: number
    distinct?: SharesScalarFieldEnum | SharesScalarFieldEnum[]
  }

  /**
   * shares create
   */
  export type sharesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shares
     */
    select?: sharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shares
     */
    omit?: sharesOmit<ExtArgs> | null
    /**
     * The data needed to create a shares.
     */
    data: XOR<sharesCreateInput, sharesUncheckedCreateInput>
  }

  /**
   * shares createMany
   */
  export type sharesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shares.
     */
    data: sharesCreateManyInput | sharesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shares createManyAndReturn
   */
  export type sharesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shares
     */
    select?: sharesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shares
     */
    omit?: sharesOmit<ExtArgs> | null
    /**
     * The data used to create many shares.
     */
    data: sharesCreateManyInput | sharesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shares update
   */
  export type sharesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shares
     */
    select?: sharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shares
     */
    omit?: sharesOmit<ExtArgs> | null
    /**
     * The data needed to update a shares.
     */
    data: XOR<sharesUpdateInput, sharesUncheckedUpdateInput>
    /**
     * Choose, which shares to update.
     */
    where: sharesWhereUniqueInput
  }

  /**
   * shares updateMany
   */
  export type sharesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shares.
     */
    data: XOR<sharesUpdateManyMutationInput, sharesUncheckedUpdateManyInput>
    /**
     * Filter which shares to update
     */
    where?: sharesWhereInput
    /**
     * Limit how many shares to update.
     */
    limit?: number
  }

  /**
   * shares updateManyAndReturn
   */
  export type sharesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shares
     */
    select?: sharesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shares
     */
    omit?: sharesOmit<ExtArgs> | null
    /**
     * The data used to update shares.
     */
    data: XOR<sharesUpdateManyMutationInput, sharesUncheckedUpdateManyInput>
    /**
     * Filter which shares to update
     */
    where?: sharesWhereInput
    /**
     * Limit how many shares to update.
     */
    limit?: number
  }

  /**
   * shares upsert
   */
  export type sharesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shares
     */
    select?: sharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shares
     */
    omit?: sharesOmit<ExtArgs> | null
    /**
     * The filter to search for the shares to update in case it exists.
     */
    where: sharesWhereUniqueInput
    /**
     * In case the shares found by the `where` argument doesn't exist, create a new shares with this data.
     */
    create: XOR<sharesCreateInput, sharesUncheckedCreateInput>
    /**
     * In case the shares was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sharesUpdateInput, sharesUncheckedUpdateInput>
  }

  /**
   * shares delete
   */
  export type sharesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shares
     */
    select?: sharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shares
     */
    omit?: sharesOmit<ExtArgs> | null
    /**
     * Filter which shares to delete.
     */
    where: sharesWhereUniqueInput
  }

  /**
   * shares deleteMany
   */
  export type sharesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shares to delete
     */
    where?: sharesWhereInput
    /**
     * Limit how many shares to delete.
     */
    limit?: number
  }

  /**
   * shares without action
   */
  export type sharesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shares
     */
    select?: sharesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shares
     */
    omit?: sharesOmit<ExtArgs> | null
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


  export const FilesScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    size: 'size',
    mimeType: 'mimeType',
    createdAt: 'createdAt'
  };

  export type FilesScalarFieldEnum = (typeof FilesScalarFieldEnum)[keyof typeof FilesScalarFieldEnum]


  export const SharesScalarFieldEnum: {
    id: 'id',
    fileId: 'fileId',
    filename: 'filename',
    shareUrl: 'shareUrl',
    expireAt: 'expireAt',
    createdAt: 'createdAt',
    accessCount: 'accessCount'
  };

  export type SharesScalarFieldEnum = (typeof SharesScalarFieldEnum)[keyof typeof SharesScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type filesWhereInput = {
    AND?: filesWhereInput | filesWhereInput[]
    OR?: filesWhereInput[]
    NOT?: filesWhereInput | filesWhereInput[]
    id?: IntFilter<"files"> | number
    filename?: StringFilter<"files"> | string
    size?: FloatFilter<"files"> | number
    mimeType?: StringFilter<"files"> | string
    createdAt?: DateTimeFilter<"files"> | Date | string
  }

  export type filesOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
  }

  export type filesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: filesWhereInput | filesWhereInput[]
    OR?: filesWhereInput[]
    NOT?: filesWhereInput | filesWhereInput[]
    filename?: StringFilter<"files"> | string
    size?: FloatFilter<"files"> | number
    mimeType?: StringFilter<"files"> | string
    createdAt?: DateTimeFilter<"files"> | Date | string
  }, "id">

  export type filesOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
    _count?: filesCountOrderByAggregateInput
    _avg?: filesAvgOrderByAggregateInput
    _max?: filesMaxOrderByAggregateInput
    _min?: filesMinOrderByAggregateInput
    _sum?: filesSumOrderByAggregateInput
  }

  export type filesScalarWhereWithAggregatesInput = {
    AND?: filesScalarWhereWithAggregatesInput | filesScalarWhereWithAggregatesInput[]
    OR?: filesScalarWhereWithAggregatesInput[]
    NOT?: filesScalarWhereWithAggregatesInput | filesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"files"> | number
    filename?: StringWithAggregatesFilter<"files"> | string
    size?: FloatWithAggregatesFilter<"files"> | number
    mimeType?: StringWithAggregatesFilter<"files"> | string
    createdAt?: DateTimeWithAggregatesFilter<"files"> | Date | string
  }

  export type sharesWhereInput = {
    AND?: sharesWhereInput | sharesWhereInput[]
    OR?: sharesWhereInput[]
    NOT?: sharesWhereInput | sharesWhereInput[]
    id?: IntFilter<"shares"> | number
    fileId?: IntFilter<"shares"> | number
    filename?: StringFilter<"shares"> | string
    shareUrl?: StringFilter<"shares"> | string
    expireAt?: DateTimeFilter<"shares"> | Date | string
    createdAt?: DateTimeFilter<"shares"> | Date | string
    accessCount?: IntFilter<"shares"> | number
  }

  export type sharesOrderByWithRelationInput = {
    id?: SortOrder
    fileId?: SortOrder
    filename?: SortOrder
    shareUrl?: SortOrder
    expireAt?: SortOrder
    createdAt?: SortOrder
    accessCount?: SortOrder
  }

  export type sharesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sharesWhereInput | sharesWhereInput[]
    OR?: sharesWhereInput[]
    NOT?: sharesWhereInput | sharesWhereInput[]
    fileId?: IntFilter<"shares"> | number
    filename?: StringFilter<"shares"> | string
    shareUrl?: StringFilter<"shares"> | string
    expireAt?: DateTimeFilter<"shares"> | Date | string
    createdAt?: DateTimeFilter<"shares"> | Date | string
    accessCount?: IntFilter<"shares"> | number
  }, "id">

  export type sharesOrderByWithAggregationInput = {
    id?: SortOrder
    fileId?: SortOrder
    filename?: SortOrder
    shareUrl?: SortOrder
    expireAt?: SortOrder
    createdAt?: SortOrder
    accessCount?: SortOrder
    _count?: sharesCountOrderByAggregateInput
    _avg?: sharesAvgOrderByAggregateInput
    _max?: sharesMaxOrderByAggregateInput
    _min?: sharesMinOrderByAggregateInput
    _sum?: sharesSumOrderByAggregateInput
  }

  export type sharesScalarWhereWithAggregatesInput = {
    AND?: sharesScalarWhereWithAggregatesInput | sharesScalarWhereWithAggregatesInput[]
    OR?: sharesScalarWhereWithAggregatesInput[]
    NOT?: sharesScalarWhereWithAggregatesInput | sharesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"shares"> | number
    fileId?: IntWithAggregatesFilter<"shares"> | number
    filename?: StringWithAggregatesFilter<"shares"> | string
    shareUrl?: StringWithAggregatesFilter<"shares"> | string
    expireAt?: DateTimeWithAggregatesFilter<"shares"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"shares"> | Date | string
    accessCount?: IntWithAggregatesFilter<"shares"> | number
  }

  export type filesCreateInput = {
    filename: string
    size: number
    mimeType: string
    createdAt?: Date | string
  }

  export type filesUncheckedCreateInput = {
    id?: number
    filename: string
    size: number
    mimeType: string
    createdAt?: Date | string
  }

  export type filesUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type filesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type filesCreateManyInput = {
    id?: number
    filename: string
    size: number
    mimeType: string
    createdAt?: Date | string
  }

  export type filesUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type filesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sharesCreateInput = {
    fileId: number
    filename: string
    shareUrl: string
    expireAt: Date | string
    createdAt?: Date | string
    accessCount: number
  }

  export type sharesUncheckedCreateInput = {
    id?: number
    fileId: number
    filename: string
    shareUrl: string
    expireAt: Date | string
    createdAt?: Date | string
    accessCount: number
  }

  export type sharesUpdateInput = {
    fileId?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessCount?: IntFieldUpdateOperationsInput | number
  }

  export type sharesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessCount?: IntFieldUpdateOperationsInput | number
  }

  export type sharesCreateManyInput = {
    id?: number
    fileId: number
    filename: string
    shareUrl: string
    expireAt: Date | string
    createdAt?: Date | string
    accessCount: number
  }

  export type sharesUpdateManyMutationInput = {
    fileId?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessCount?: IntFieldUpdateOperationsInput | number
  }

  export type sharesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    shareUrl?: StringFieldUpdateOperationsInput | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessCount?: IntFieldUpdateOperationsInput | number
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

  export type filesCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
  }

  export type filesAvgOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type filesMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
  }

  export type filesMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    createdAt?: SortOrder
  }

  export type filesSumOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
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

  export type sharesCountOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    filename?: SortOrder
    shareUrl?: SortOrder
    expireAt?: SortOrder
    createdAt?: SortOrder
    accessCount?: SortOrder
  }

  export type sharesAvgOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    accessCount?: SortOrder
  }

  export type sharesMaxOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    filename?: SortOrder
    shareUrl?: SortOrder
    expireAt?: SortOrder
    createdAt?: SortOrder
    accessCount?: SortOrder
  }

  export type sharesMinOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    filename?: SortOrder
    shareUrl?: SortOrder
    expireAt?: SortOrder
    createdAt?: SortOrder
    accessCount?: SortOrder
  }

  export type sharesSumOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    accessCount?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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