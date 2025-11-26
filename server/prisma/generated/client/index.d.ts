
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
 * Model PasswordRecovery
 * 
 */
export type PasswordRecovery = $Result.DefaultSelection<Prisma.$PasswordRecoveryPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model RecurringBill
 * 
 */
export type RecurringBill = $Result.DefaultSelection<Prisma.$RecurringBillPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Budget
 * 
 */
export type Budget = $Result.DefaultSelection<Prisma.$BudgetPayload>
/**
 * Model Pot
 * 
 */
export type Pot = $Result.DefaultSelection<Prisma.$PotPayload>
/**
 * Model Theme
 * 
 */
export type Theme = $Result.DefaultSelection<Prisma.$ThemePayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model RecurringAlert
 * 
 */
export type RecurringAlert = $Result.DefaultSelection<Prisma.$RecurringAlertPayload>
/**
 * Model BudgetAlert
 * 
 */
export type BudgetAlert = $Result.DefaultSelection<Prisma.$BudgetAlertPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.passwordRecovery`: Exposes CRUD operations for the **PasswordRecovery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordRecoveries
    * const passwordRecoveries = await prisma.passwordRecovery.findMany()
    * ```
    */
  get passwordRecovery(): Prisma.PasswordRecoveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recurringBill`: Exposes CRUD operations for the **RecurringBill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecurringBills
    * const recurringBills = await prisma.recurringBill.findMany()
    * ```
    */
  get recurringBill(): Prisma.RecurringBillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.budget`: Exposes CRUD operations for the **Budget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Budgets
    * const budgets = await prisma.budget.findMany()
    * ```
    */
  get budget(): Prisma.BudgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pot`: Exposes CRUD operations for the **Pot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pots
    * const pots = await prisma.pot.findMany()
    * ```
    */
  get pot(): Prisma.PotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.theme`: Exposes CRUD operations for the **Theme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Themes
    * const themes = await prisma.theme.findMany()
    * ```
    */
  get theme(): Prisma.ThemeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recurringAlert`: Exposes CRUD operations for the **RecurringAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecurringAlerts
    * const recurringAlerts = await prisma.recurringAlert.findMany()
    * ```
    */
  get recurringAlert(): Prisma.RecurringAlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.budgetAlert`: Exposes CRUD operations for the **BudgetAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BudgetAlerts
    * const budgetAlerts = await prisma.budgetAlert.findMany()
    * ```
    */
  get budgetAlert(): Prisma.BudgetAlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    PasswordRecovery: 'PasswordRecovery',
    Transaction: 'Transaction',
    RecurringBill: 'RecurringBill',
    Category: 'Category',
    Budget: 'Budget',
    Pot: 'Pot',
    Theme: 'Theme',
    Account: 'Account',
    VerificationToken: 'VerificationToken',
    RecurringAlert: 'RecurringAlert',
    BudgetAlert: 'BudgetAlert',
    Notification: 'Notification'
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
      modelProps: "user" | "passwordRecovery" | "transaction" | "recurringBill" | "category" | "budget" | "pot" | "theme" | "account" | "verificationToken" | "recurringAlert" | "budgetAlert" | "notification"
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
      PasswordRecovery: {
        payload: Prisma.$PasswordRecoveryPayload<ExtArgs>
        fields: Prisma.PasswordRecoveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordRecoveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordRecoveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryPayload>
          }
          findFirst: {
            args: Prisma.PasswordRecoveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordRecoveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryPayload>
          }
          findMany: {
            args: Prisma.PasswordRecoveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryPayload>[]
          }
          create: {
            args: Prisma.PasswordRecoveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryPayload>
          }
          createMany: {
            args: Prisma.PasswordRecoveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordRecoveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryPayload>[]
          }
          delete: {
            args: Prisma.PasswordRecoveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryPayload>
          }
          update: {
            args: Prisma.PasswordRecoveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryPayload>
          }
          deleteMany: {
            args: Prisma.PasswordRecoveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordRecoveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordRecoveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryPayload>[]
          }
          upsert: {
            args: Prisma.PasswordRecoveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryPayload>
          }
          aggregate: {
            args: Prisma.PasswordRecoveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordRecovery>
          }
          groupBy: {
            args: Prisma.PasswordRecoveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordRecoveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordRecoveryCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordRecoveryCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      RecurringBill: {
        payload: Prisma.$RecurringBillPayload<ExtArgs>
        fields: Prisma.RecurringBillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecurringBillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecurringBillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillPayload>
          }
          findFirst: {
            args: Prisma.RecurringBillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecurringBillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillPayload>
          }
          findMany: {
            args: Prisma.RecurringBillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillPayload>[]
          }
          create: {
            args: Prisma.RecurringBillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillPayload>
          }
          createMany: {
            args: Prisma.RecurringBillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecurringBillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillPayload>[]
          }
          delete: {
            args: Prisma.RecurringBillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillPayload>
          }
          update: {
            args: Prisma.RecurringBillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillPayload>
          }
          deleteMany: {
            args: Prisma.RecurringBillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecurringBillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecurringBillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillPayload>[]
          }
          upsert: {
            args: Prisma.RecurringBillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillPayload>
          }
          aggregate: {
            args: Prisma.RecurringBillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurringBill>
          }
          groupBy: {
            args: Prisma.RecurringBillGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecurringBillGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecurringBillCountArgs<ExtArgs>
            result: $Utils.Optional<RecurringBillCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Budget: {
        payload: Prisma.$BudgetPayload<ExtArgs>
        fields: Prisma.BudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findFirst: {
            args: Prisma.BudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findMany: {
            args: Prisma.BudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          create: {
            args: Prisma.BudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          createMany: {
            args: Prisma.BudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BudgetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          delete: {
            args: Prisma.BudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          update: {
            args: Prisma.BudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          deleteMany: {
            args: Prisma.BudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BudgetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          upsert: {
            args: Prisma.BudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          aggregate: {
            args: Prisma.BudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudget>
          }
          groupBy: {
            args: Prisma.BudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetCountAggregateOutputType> | number
          }
        }
      }
      Pot: {
        payload: Prisma.$PotPayload<ExtArgs>
        fields: Prisma.PotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PotPayload>
          }
          findFirst: {
            args: Prisma.PotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PotPayload>
          }
          findMany: {
            args: Prisma.PotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PotPayload>[]
          }
          create: {
            args: Prisma.PotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PotPayload>
          }
          createMany: {
            args: Prisma.PotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PotPayload>[]
          }
          delete: {
            args: Prisma.PotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PotPayload>
          }
          update: {
            args: Prisma.PotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PotPayload>
          }
          deleteMany: {
            args: Prisma.PotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PotPayload>[]
          }
          upsert: {
            args: Prisma.PotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PotPayload>
          }
          aggregate: {
            args: Prisma.PotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePot>
          }
          groupBy: {
            args: Prisma.PotGroupByArgs<ExtArgs>
            result: $Utils.Optional<PotGroupByOutputType>[]
          }
          count: {
            args: Prisma.PotCountArgs<ExtArgs>
            result: $Utils.Optional<PotCountAggregateOutputType> | number
          }
        }
      }
      Theme: {
        payload: Prisma.$ThemePayload<ExtArgs>
        fields: Prisma.ThemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findFirst: {
            args: Prisma.ThemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findMany: {
            args: Prisma.ThemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          create: {
            args: Prisma.ThemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          createMany: {
            args: Prisma.ThemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThemeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          delete: {
            args: Prisma.ThemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          update: {
            args: Prisma.ThemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          deleteMany: {
            args: Prisma.ThemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThemeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          upsert: {
            args: Prisma.ThemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          aggregate: {
            args: Prisma.ThemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTheme>
          }
          groupBy: {
            args: Prisma.ThemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThemeCountArgs<ExtArgs>
            result: $Utils.Optional<ThemeCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      RecurringAlert: {
        payload: Prisma.$RecurringAlertPayload<ExtArgs>
        fields: Prisma.RecurringAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecurringAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecurringAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringAlertPayload>
          }
          findFirst: {
            args: Prisma.RecurringAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecurringAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringAlertPayload>
          }
          findMany: {
            args: Prisma.RecurringAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringAlertPayload>[]
          }
          create: {
            args: Prisma.RecurringAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringAlertPayload>
          }
          createMany: {
            args: Prisma.RecurringAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecurringAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringAlertPayload>[]
          }
          delete: {
            args: Prisma.RecurringAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringAlertPayload>
          }
          update: {
            args: Prisma.RecurringAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringAlertPayload>
          }
          deleteMany: {
            args: Prisma.RecurringAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecurringAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecurringAlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringAlertPayload>[]
          }
          upsert: {
            args: Prisma.RecurringAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringAlertPayload>
          }
          aggregate: {
            args: Prisma.RecurringAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurringAlert>
          }
          groupBy: {
            args: Prisma.RecurringAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecurringAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecurringAlertCountArgs<ExtArgs>
            result: $Utils.Optional<RecurringAlertCountAggregateOutputType> | number
          }
        }
      }
      BudgetAlert: {
        payload: Prisma.$BudgetAlertPayload<ExtArgs>
        fields: Prisma.BudgetAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetAlertPayload>
          }
          findFirst: {
            args: Prisma.BudgetAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetAlertPayload>
          }
          findMany: {
            args: Prisma.BudgetAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetAlertPayload>[]
          }
          create: {
            args: Prisma.BudgetAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetAlertPayload>
          }
          createMany: {
            args: Prisma.BudgetAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BudgetAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetAlertPayload>[]
          }
          delete: {
            args: Prisma.BudgetAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetAlertPayload>
          }
          update: {
            args: Prisma.BudgetAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetAlertPayload>
          }
          deleteMany: {
            args: Prisma.BudgetAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BudgetAlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetAlertPayload>[]
          }
          upsert: {
            args: Prisma.BudgetAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetAlertPayload>
          }
          aggregate: {
            args: Prisma.BudgetAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudgetAlert>
          }
          groupBy: {
            args: Prisma.BudgetAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetAlertCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetAlertCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    passwordRecovery?: PasswordRecoveryOmit
    transaction?: TransactionOmit
    recurringBill?: RecurringBillOmit
    category?: CategoryOmit
    budget?: BudgetOmit
    pot?: PotOmit
    theme?: ThemeOmit
    account?: AccountOmit
    verificationToken?: VerificationTokenOmit
    recurringAlert?: RecurringAlertOmit
    budgetAlert?: BudgetAlertOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    transactions: number
    sentTransactions: number
    receivedTransactions: number
    budgets: number
    pots: number
    recurringBills: number
    sentRecurringBills: number
    receivedRecurringBills: number
    accounts: number
    recurringAlerts: number
    budgetAlerts: number
    notifications: number
    passwordRecoveries: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    sentTransactions?: boolean | UserCountOutputTypeCountSentTransactionsArgs
    receivedTransactions?: boolean | UserCountOutputTypeCountReceivedTransactionsArgs
    budgets?: boolean | UserCountOutputTypeCountBudgetsArgs
    pots?: boolean | UserCountOutputTypeCountPotsArgs
    recurringBills?: boolean | UserCountOutputTypeCountRecurringBillsArgs
    sentRecurringBills?: boolean | UserCountOutputTypeCountSentRecurringBillsArgs
    receivedRecurringBills?: boolean | UserCountOutputTypeCountReceivedRecurringBillsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    recurringAlerts?: boolean | UserCountOutputTypeCountRecurringAlertsArgs
    budgetAlerts?: boolean | UserCountOutputTypeCountBudgetAlertsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    passwordRecoveries?: boolean | UserCountOutputTypeCountPasswordRecoveriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PotWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecurringBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringBillWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentRecurringBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringBillWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedRecurringBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringBillWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecurringAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringAlertWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBudgetAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetAlertWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordRecoveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordRecoveryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    transactions: number
    budgets: number
    recurringBills: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CategoryCountOutputTypeCountTransactionsArgs
    budgets?: boolean | CategoryCountOutputTypeCountBudgetsArgs
    recurringBills?: boolean | CategoryCountOutputTypeCountRecurringBillsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountRecurringBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringBillWhereInput
  }


  /**
   * Count Type ThemeCountOutputType
   */

  export type ThemeCountOutputType = {
    budgets: number
    pots: number
  }

  export type ThemeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budgets?: boolean | ThemeCountOutputTypeCountBudgetsArgs
    pots?: boolean | ThemeCountOutputTypeCountPotsArgs
  }

  // Custom InputTypes
  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemeCountOutputType
     */
    select?: ThemeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeCountBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
  }

  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeCountPotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PotWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    initialBalance: number | null
  }

  export type UserSumAggregateOutputType = {
    initialBalance: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    avatarUrl: string | null
    currency: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
    initialBalance: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    avatarUrl: string | null
    currency: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
    initialBalance: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    avatarUrl: number
    currency: number
    language: number
    createdAt: number
    updatedAt: number
    accountId: number
    initialBalance: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    initialBalance?: true
  }

  export type UserSumAggregateInputType = {
    initialBalance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatarUrl?: true
    currency?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    initialBalance?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatarUrl?: true
    currency?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    initialBalance?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatarUrl?: true
    currency?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    initialBalance?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    avatarUrl: string | null
    currency: string
    language: string
    createdAt: Date
    updatedAt: Date
    accountId: string
    initialBalance: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    currency?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    initialBalance?: boolean
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    sentTransactions?: boolean | User$sentTransactionsArgs<ExtArgs>
    receivedTransactions?: boolean | User$receivedTransactionsArgs<ExtArgs>
    budgets?: boolean | User$budgetsArgs<ExtArgs>
    pots?: boolean | User$potsArgs<ExtArgs>
    recurringBills?: boolean | User$recurringBillsArgs<ExtArgs>
    sentRecurringBills?: boolean | User$sentRecurringBillsArgs<ExtArgs>
    receivedRecurringBills?: boolean | User$receivedRecurringBillsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    recurringAlerts?: boolean | User$recurringAlertsArgs<ExtArgs>
    budgetAlerts?: boolean | User$budgetAlertsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    passwordRecoveries?: boolean | User$passwordRecoveriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    currency?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    initialBalance?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    currency?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    initialBalance?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    currency?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    initialBalance?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "avatarUrl" | "currency" | "language" | "createdAt" | "updatedAt" | "accountId" | "initialBalance", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    sentTransactions?: boolean | User$sentTransactionsArgs<ExtArgs>
    receivedTransactions?: boolean | User$receivedTransactionsArgs<ExtArgs>
    budgets?: boolean | User$budgetsArgs<ExtArgs>
    pots?: boolean | User$potsArgs<ExtArgs>
    recurringBills?: boolean | User$recurringBillsArgs<ExtArgs>
    sentRecurringBills?: boolean | User$sentRecurringBillsArgs<ExtArgs>
    receivedRecurringBills?: boolean | User$receivedRecurringBillsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    recurringAlerts?: boolean | User$recurringAlertsArgs<ExtArgs>
    budgetAlerts?: boolean | User$budgetAlertsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    passwordRecoveries?: boolean | User$passwordRecoveriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      sentTransactions: Prisma.$TransactionPayload<ExtArgs>[]
      receivedTransactions: Prisma.$TransactionPayload<ExtArgs>[]
      budgets: Prisma.$BudgetPayload<ExtArgs>[]
      pots: Prisma.$PotPayload<ExtArgs>[]
      recurringBills: Prisma.$RecurringBillPayload<ExtArgs>[]
      sentRecurringBills: Prisma.$RecurringBillPayload<ExtArgs>[]
      receivedRecurringBills: Prisma.$RecurringBillPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      recurringAlerts: Prisma.$RecurringAlertPayload<ExtArgs>[]
      budgetAlerts: Prisma.$BudgetAlertPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      passwordRecoveries: Prisma.$PasswordRecoveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      avatarUrl: string | null
      currency: string
      language: string
      createdAt: Date
      updatedAt: Date
      accountId: string
      initialBalance: number | null
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
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentTransactions<T extends User$sentTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedTransactions<T extends User$receivedTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    budgets<T extends User$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, User$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pots<T extends User$potsArgs<ExtArgs> = {}>(args?: Subset<T, User$potsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recurringBills<T extends User$recurringBillsArgs<ExtArgs> = {}>(args?: Subset<T, User$recurringBillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentRecurringBills<T extends User$sentRecurringBillsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentRecurringBillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedRecurringBills<T extends User$receivedRecurringBillsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedRecurringBillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recurringAlerts<T extends User$recurringAlertsArgs<ExtArgs> = {}>(args?: Subset<T, User$recurringAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    budgetAlerts<T extends User$budgetAlertsArgs<ExtArgs> = {}>(args?: Subset<T, User$budgetAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordRecoveries<T extends User$passwordRecoveriesArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordRecoveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordRecoveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly currency: FieldRef<"User", 'String'>
    readonly language: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly accountId: FieldRef<"User", 'String'>
    readonly initialBalance: FieldRef<"User", 'Float'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.sentTransactions
   */
  export type User$sentTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.receivedTransactions
   */
  export type User$receivedTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.budgets
   */
  export type User$budgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    cursor?: BudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * User.pots
   */
  export type User$potsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pot
     */
    select?: PotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pot
     */
    omit?: PotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotInclude<ExtArgs> | null
    where?: PotWhereInput
    orderBy?: PotOrderByWithRelationInput | PotOrderByWithRelationInput[]
    cursor?: PotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PotScalarFieldEnum | PotScalarFieldEnum[]
  }

  /**
   * User.recurringBills
   */
  export type User$recurringBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBill
     */
    select?: RecurringBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBill
     */
    omit?: RecurringBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillInclude<ExtArgs> | null
    where?: RecurringBillWhereInput
    orderBy?: RecurringBillOrderByWithRelationInput | RecurringBillOrderByWithRelationInput[]
    cursor?: RecurringBillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurringBillScalarFieldEnum | RecurringBillScalarFieldEnum[]
  }

  /**
   * User.sentRecurringBills
   */
  export type User$sentRecurringBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBill
     */
    select?: RecurringBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBill
     */
    omit?: RecurringBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillInclude<ExtArgs> | null
    where?: RecurringBillWhereInput
    orderBy?: RecurringBillOrderByWithRelationInput | RecurringBillOrderByWithRelationInput[]
    cursor?: RecurringBillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurringBillScalarFieldEnum | RecurringBillScalarFieldEnum[]
  }

  /**
   * User.receivedRecurringBills
   */
  export type User$receivedRecurringBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBill
     */
    select?: RecurringBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBill
     */
    omit?: RecurringBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillInclude<ExtArgs> | null
    where?: RecurringBillWhereInput
    orderBy?: RecurringBillOrderByWithRelationInput | RecurringBillOrderByWithRelationInput[]
    cursor?: RecurringBillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurringBillScalarFieldEnum | RecurringBillScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.recurringAlerts
   */
  export type User$recurringAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringAlert
     */
    select?: RecurringAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringAlert
     */
    omit?: RecurringAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringAlertInclude<ExtArgs> | null
    where?: RecurringAlertWhereInput
    orderBy?: RecurringAlertOrderByWithRelationInput | RecurringAlertOrderByWithRelationInput[]
    cursor?: RecurringAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurringAlertScalarFieldEnum | RecurringAlertScalarFieldEnum[]
  }

  /**
   * User.budgetAlerts
   */
  export type User$budgetAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetAlert
     */
    select?: BudgetAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetAlert
     */
    omit?: BudgetAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetAlertInclude<ExtArgs> | null
    where?: BudgetAlertWhereInput
    orderBy?: BudgetAlertOrderByWithRelationInput | BudgetAlertOrderByWithRelationInput[]
    cursor?: BudgetAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetAlertScalarFieldEnum | BudgetAlertScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.passwordRecoveries
   */
  export type User$passwordRecoveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecovery
     */
    select?: PasswordRecoverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecovery
     */
    omit?: PasswordRecoveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryInclude<ExtArgs> | null
    where?: PasswordRecoveryWhereInput
    orderBy?: PasswordRecoveryOrderByWithRelationInput | PasswordRecoveryOrderByWithRelationInput[]
    cursor?: PasswordRecoveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordRecoveryScalarFieldEnum | PasswordRecoveryScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PasswordRecovery
   */

  export type AggregatePasswordRecovery = {
    _count: PasswordRecoveryCountAggregateOutputType | null
    _min: PasswordRecoveryMinAggregateOutputType | null
    _max: PasswordRecoveryMaxAggregateOutputType | null
  }

  export type PasswordRecoveryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    used: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type PasswordRecoveryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    used: boolean | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type PasswordRecoveryCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    used: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type PasswordRecoveryMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    used?: true
    createdAt?: true
    expiresAt?: true
  }

  export type PasswordRecoveryMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    used?: true
    createdAt?: true
    expiresAt?: true
  }

  export type PasswordRecoveryCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    used?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type PasswordRecoveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordRecovery to aggregate.
     */
    where?: PasswordRecoveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordRecoveries to fetch.
     */
    orderBy?: PasswordRecoveryOrderByWithRelationInput | PasswordRecoveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordRecoveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordRecoveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordRecoveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordRecoveries
    **/
    _count?: true | PasswordRecoveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordRecoveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordRecoveryMaxAggregateInputType
  }

  export type GetPasswordRecoveryAggregateType<T extends PasswordRecoveryAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordRecovery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordRecovery[P]>
      : GetScalarType<T[P], AggregatePasswordRecovery[P]>
  }




  export type PasswordRecoveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordRecoveryWhereInput
    orderBy?: PasswordRecoveryOrderByWithAggregationInput | PasswordRecoveryOrderByWithAggregationInput[]
    by: PasswordRecoveryScalarFieldEnum[] | PasswordRecoveryScalarFieldEnum
    having?: PasswordRecoveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordRecoveryCountAggregateInputType | true
    _min?: PasswordRecoveryMinAggregateInputType
    _max?: PasswordRecoveryMaxAggregateInputType
  }

  export type PasswordRecoveryGroupByOutputType = {
    id: string
    userId: string
    token: string
    used: boolean
    createdAt: Date
    expiresAt: Date
    _count: PasswordRecoveryCountAggregateOutputType | null
    _min: PasswordRecoveryMinAggregateOutputType | null
    _max: PasswordRecoveryMaxAggregateOutputType | null
  }

  type GetPasswordRecoveryGroupByPayload<T extends PasswordRecoveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordRecoveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordRecoveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordRecoveryGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordRecoveryGroupByOutputType[P]>
        }
      >
    >


  export type PasswordRecoverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    used?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordRecovery"]>

  export type PasswordRecoverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    used?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordRecovery"]>

  export type PasswordRecoverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    used?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordRecovery"]>

  export type PasswordRecoverySelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    used?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type PasswordRecoveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "used" | "createdAt" | "expiresAt", ExtArgs["result"]["passwordRecovery"]>
  export type PasswordRecoveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordRecoveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordRecoveryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordRecoveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordRecovery"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      used: boolean
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["passwordRecovery"]>
    composites: {}
  }

  type PasswordRecoveryGetPayload<S extends boolean | null | undefined | PasswordRecoveryDefaultArgs> = $Result.GetResult<Prisma.$PasswordRecoveryPayload, S>

  type PasswordRecoveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordRecoveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordRecoveryCountAggregateInputType | true
    }

  export interface PasswordRecoveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordRecovery'], meta: { name: 'PasswordRecovery' } }
    /**
     * Find zero or one PasswordRecovery that matches the filter.
     * @param {PasswordRecoveryFindUniqueArgs} args - Arguments to find a PasswordRecovery
     * @example
     * // Get one PasswordRecovery
     * const passwordRecovery = await prisma.passwordRecovery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordRecoveryFindUniqueArgs>(args: SelectSubset<T, PasswordRecoveryFindUniqueArgs<ExtArgs>>): Prisma__PasswordRecoveryClient<$Result.GetResult<Prisma.$PasswordRecoveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordRecovery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordRecoveryFindUniqueOrThrowArgs} args - Arguments to find a PasswordRecovery
     * @example
     * // Get one PasswordRecovery
     * const passwordRecovery = await prisma.passwordRecovery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordRecoveryFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordRecoveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordRecoveryClient<$Result.GetResult<Prisma.$PasswordRecoveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordRecovery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryFindFirstArgs} args - Arguments to find a PasswordRecovery
     * @example
     * // Get one PasswordRecovery
     * const passwordRecovery = await prisma.passwordRecovery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordRecoveryFindFirstArgs>(args?: SelectSubset<T, PasswordRecoveryFindFirstArgs<ExtArgs>>): Prisma__PasswordRecoveryClient<$Result.GetResult<Prisma.$PasswordRecoveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordRecovery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryFindFirstOrThrowArgs} args - Arguments to find a PasswordRecovery
     * @example
     * // Get one PasswordRecovery
     * const passwordRecovery = await prisma.passwordRecovery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordRecoveryFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordRecoveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordRecoveryClient<$Result.GetResult<Prisma.$PasswordRecoveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordRecoveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordRecoveries
     * const passwordRecoveries = await prisma.passwordRecovery.findMany()
     * 
     * // Get first 10 PasswordRecoveries
     * const passwordRecoveries = await prisma.passwordRecovery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordRecoveryWithIdOnly = await prisma.passwordRecovery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordRecoveryFindManyArgs>(args?: SelectSubset<T, PasswordRecoveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordRecoveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordRecovery.
     * @param {PasswordRecoveryCreateArgs} args - Arguments to create a PasswordRecovery.
     * @example
     * // Create one PasswordRecovery
     * const PasswordRecovery = await prisma.passwordRecovery.create({
     *   data: {
     *     // ... data to create a PasswordRecovery
     *   }
     * })
     * 
     */
    create<T extends PasswordRecoveryCreateArgs>(args: SelectSubset<T, PasswordRecoveryCreateArgs<ExtArgs>>): Prisma__PasswordRecoveryClient<$Result.GetResult<Prisma.$PasswordRecoveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordRecoveries.
     * @param {PasswordRecoveryCreateManyArgs} args - Arguments to create many PasswordRecoveries.
     * @example
     * // Create many PasswordRecoveries
     * const passwordRecovery = await prisma.passwordRecovery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordRecoveryCreateManyArgs>(args?: SelectSubset<T, PasswordRecoveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordRecoveries and returns the data saved in the database.
     * @param {PasswordRecoveryCreateManyAndReturnArgs} args - Arguments to create many PasswordRecoveries.
     * @example
     * // Create many PasswordRecoveries
     * const passwordRecovery = await prisma.passwordRecovery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordRecoveries and only return the `id`
     * const passwordRecoveryWithIdOnly = await prisma.passwordRecovery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordRecoveryCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordRecoveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordRecoveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordRecovery.
     * @param {PasswordRecoveryDeleteArgs} args - Arguments to delete one PasswordRecovery.
     * @example
     * // Delete one PasswordRecovery
     * const PasswordRecovery = await prisma.passwordRecovery.delete({
     *   where: {
     *     // ... filter to delete one PasswordRecovery
     *   }
     * })
     * 
     */
    delete<T extends PasswordRecoveryDeleteArgs>(args: SelectSubset<T, PasswordRecoveryDeleteArgs<ExtArgs>>): Prisma__PasswordRecoveryClient<$Result.GetResult<Prisma.$PasswordRecoveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordRecovery.
     * @param {PasswordRecoveryUpdateArgs} args - Arguments to update one PasswordRecovery.
     * @example
     * // Update one PasswordRecovery
     * const passwordRecovery = await prisma.passwordRecovery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordRecoveryUpdateArgs>(args: SelectSubset<T, PasswordRecoveryUpdateArgs<ExtArgs>>): Prisma__PasswordRecoveryClient<$Result.GetResult<Prisma.$PasswordRecoveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordRecoveries.
     * @param {PasswordRecoveryDeleteManyArgs} args - Arguments to filter PasswordRecoveries to delete.
     * @example
     * // Delete a few PasswordRecoveries
     * const { count } = await prisma.passwordRecovery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordRecoveryDeleteManyArgs>(args?: SelectSubset<T, PasswordRecoveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordRecoveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordRecoveries
     * const passwordRecovery = await prisma.passwordRecovery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordRecoveryUpdateManyArgs>(args: SelectSubset<T, PasswordRecoveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordRecoveries and returns the data updated in the database.
     * @param {PasswordRecoveryUpdateManyAndReturnArgs} args - Arguments to update many PasswordRecoveries.
     * @example
     * // Update many PasswordRecoveries
     * const passwordRecovery = await prisma.passwordRecovery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordRecoveries and only return the `id`
     * const passwordRecoveryWithIdOnly = await prisma.passwordRecovery.updateManyAndReturn({
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
    updateManyAndReturn<T extends PasswordRecoveryUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordRecoveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordRecoveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordRecovery.
     * @param {PasswordRecoveryUpsertArgs} args - Arguments to update or create a PasswordRecovery.
     * @example
     * // Update or create a PasswordRecovery
     * const passwordRecovery = await prisma.passwordRecovery.upsert({
     *   create: {
     *     // ... data to create a PasswordRecovery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordRecovery we want to update
     *   }
     * })
     */
    upsert<T extends PasswordRecoveryUpsertArgs>(args: SelectSubset<T, PasswordRecoveryUpsertArgs<ExtArgs>>): Prisma__PasswordRecoveryClient<$Result.GetResult<Prisma.$PasswordRecoveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordRecoveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryCountArgs} args - Arguments to filter PasswordRecoveries to count.
     * @example
     * // Count the number of PasswordRecoveries
     * const count = await prisma.passwordRecovery.count({
     *   where: {
     *     // ... the filter for the PasswordRecoveries we want to count
     *   }
     * })
    **/
    count<T extends PasswordRecoveryCountArgs>(
      args?: Subset<T, PasswordRecoveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordRecoveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordRecovery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordRecoveryAggregateArgs>(args: Subset<T, PasswordRecoveryAggregateArgs>): Prisma.PrismaPromise<GetPasswordRecoveryAggregateType<T>>

    /**
     * Group by PasswordRecovery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryGroupByArgs} args - Group by arguments.
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
      T extends PasswordRecoveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordRecoveryGroupByArgs['orderBy'] }
        : { orderBy?: PasswordRecoveryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordRecoveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordRecoveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordRecovery model
   */
  readonly fields: PasswordRecoveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordRecovery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordRecoveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PasswordRecovery model
   */
  interface PasswordRecoveryFieldRefs {
    readonly id: FieldRef<"PasswordRecovery", 'String'>
    readonly userId: FieldRef<"PasswordRecovery", 'String'>
    readonly token: FieldRef<"PasswordRecovery", 'String'>
    readonly used: FieldRef<"PasswordRecovery", 'Boolean'>
    readonly createdAt: FieldRef<"PasswordRecovery", 'DateTime'>
    readonly expiresAt: FieldRef<"PasswordRecovery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordRecovery findUnique
   */
  export type PasswordRecoveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecovery
     */
    select?: PasswordRecoverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecovery
     */
    omit?: PasswordRecoveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryInclude<ExtArgs> | null
    /**
     * Filter, which PasswordRecovery to fetch.
     */
    where: PasswordRecoveryWhereUniqueInput
  }

  /**
   * PasswordRecovery findUniqueOrThrow
   */
  export type PasswordRecoveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecovery
     */
    select?: PasswordRecoverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecovery
     */
    omit?: PasswordRecoveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryInclude<ExtArgs> | null
    /**
     * Filter, which PasswordRecovery to fetch.
     */
    where: PasswordRecoveryWhereUniqueInput
  }

  /**
   * PasswordRecovery findFirst
   */
  export type PasswordRecoveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecovery
     */
    select?: PasswordRecoverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecovery
     */
    omit?: PasswordRecoveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryInclude<ExtArgs> | null
    /**
     * Filter, which PasswordRecovery to fetch.
     */
    where?: PasswordRecoveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordRecoveries to fetch.
     */
    orderBy?: PasswordRecoveryOrderByWithRelationInput | PasswordRecoveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordRecoveries.
     */
    cursor?: PasswordRecoveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordRecoveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordRecoveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordRecoveries.
     */
    distinct?: PasswordRecoveryScalarFieldEnum | PasswordRecoveryScalarFieldEnum[]
  }

  /**
   * PasswordRecovery findFirstOrThrow
   */
  export type PasswordRecoveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecovery
     */
    select?: PasswordRecoverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecovery
     */
    omit?: PasswordRecoveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryInclude<ExtArgs> | null
    /**
     * Filter, which PasswordRecovery to fetch.
     */
    where?: PasswordRecoveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordRecoveries to fetch.
     */
    orderBy?: PasswordRecoveryOrderByWithRelationInput | PasswordRecoveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordRecoveries.
     */
    cursor?: PasswordRecoveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordRecoveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordRecoveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordRecoveries.
     */
    distinct?: PasswordRecoveryScalarFieldEnum | PasswordRecoveryScalarFieldEnum[]
  }

  /**
   * PasswordRecovery findMany
   */
  export type PasswordRecoveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecovery
     */
    select?: PasswordRecoverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecovery
     */
    omit?: PasswordRecoveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryInclude<ExtArgs> | null
    /**
     * Filter, which PasswordRecoveries to fetch.
     */
    where?: PasswordRecoveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordRecoveries to fetch.
     */
    orderBy?: PasswordRecoveryOrderByWithRelationInput | PasswordRecoveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordRecoveries.
     */
    cursor?: PasswordRecoveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordRecoveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordRecoveries.
     */
    skip?: number
    distinct?: PasswordRecoveryScalarFieldEnum | PasswordRecoveryScalarFieldEnum[]
  }

  /**
   * PasswordRecovery create
   */
  export type PasswordRecoveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecovery
     */
    select?: PasswordRecoverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecovery
     */
    omit?: PasswordRecoveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordRecovery.
     */
    data: XOR<PasswordRecoveryCreateInput, PasswordRecoveryUncheckedCreateInput>
  }

  /**
   * PasswordRecovery createMany
   */
  export type PasswordRecoveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordRecoveries.
     */
    data: PasswordRecoveryCreateManyInput | PasswordRecoveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordRecovery createManyAndReturn
   */
  export type PasswordRecoveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecovery
     */
    select?: PasswordRecoverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecovery
     */
    omit?: PasswordRecoveryOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordRecoveries.
     */
    data: PasswordRecoveryCreateManyInput | PasswordRecoveryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordRecovery update
   */
  export type PasswordRecoveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecovery
     */
    select?: PasswordRecoverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecovery
     */
    omit?: PasswordRecoveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordRecovery.
     */
    data: XOR<PasswordRecoveryUpdateInput, PasswordRecoveryUncheckedUpdateInput>
    /**
     * Choose, which PasswordRecovery to update.
     */
    where: PasswordRecoveryWhereUniqueInput
  }

  /**
   * PasswordRecovery updateMany
   */
  export type PasswordRecoveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordRecoveries.
     */
    data: XOR<PasswordRecoveryUpdateManyMutationInput, PasswordRecoveryUncheckedUpdateManyInput>
    /**
     * Filter which PasswordRecoveries to update
     */
    where?: PasswordRecoveryWhereInput
    /**
     * Limit how many PasswordRecoveries to update.
     */
    limit?: number
  }

  /**
   * PasswordRecovery updateManyAndReturn
   */
  export type PasswordRecoveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecovery
     */
    select?: PasswordRecoverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecovery
     */
    omit?: PasswordRecoveryOmit<ExtArgs> | null
    /**
     * The data used to update PasswordRecoveries.
     */
    data: XOR<PasswordRecoveryUpdateManyMutationInput, PasswordRecoveryUncheckedUpdateManyInput>
    /**
     * Filter which PasswordRecoveries to update
     */
    where?: PasswordRecoveryWhereInput
    /**
     * Limit how many PasswordRecoveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordRecovery upsert
   */
  export type PasswordRecoveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecovery
     */
    select?: PasswordRecoverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecovery
     */
    omit?: PasswordRecoveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordRecovery to update in case it exists.
     */
    where: PasswordRecoveryWhereUniqueInput
    /**
     * In case the PasswordRecovery found by the `where` argument doesn't exist, create a new PasswordRecovery with this data.
     */
    create: XOR<PasswordRecoveryCreateInput, PasswordRecoveryUncheckedCreateInput>
    /**
     * In case the PasswordRecovery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordRecoveryUpdateInput, PasswordRecoveryUncheckedUpdateInput>
  }

  /**
   * PasswordRecovery delete
   */
  export type PasswordRecoveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecovery
     */
    select?: PasswordRecoverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecovery
     */
    omit?: PasswordRecoveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryInclude<ExtArgs> | null
    /**
     * Filter which PasswordRecovery to delete.
     */
    where: PasswordRecoveryWhereUniqueInput
  }

  /**
   * PasswordRecovery deleteMany
   */
  export type PasswordRecoveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordRecoveries to delete
     */
    where?: PasswordRecoveryWhereInput
    /**
     * Limit how many PasswordRecoveries to delete.
     */
    limit?: number
  }

  /**
   * PasswordRecovery without action
   */
  export type PasswordRecoveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecovery
     */
    select?: PasswordRecoverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecovery
     */
    omit?: PasswordRecoveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    description: string | null
    amount: number | null
    createdAt: Date | null
    date: Date | null
    isRecurring: boolean | null
    categoryId: string | null
    senderId: string | null
    recipientId: string | null
    userId: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    description: string | null
    amount: number | null
    createdAt: Date | null
    date: Date | null
    isRecurring: boolean | null
    categoryId: string | null
    senderId: string | null
    recipientId: string | null
    userId: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    description: number
    amount: number
    createdAt: number
    date: number
    isRecurring: number
    categoryId: number
    senderId: number
    recipientId: number
    userId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    createdAt?: true
    date?: true
    isRecurring?: true
    categoryId?: true
    senderId?: true
    recipientId?: true
    userId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    createdAt?: true
    date?: true
    isRecurring?: true
    categoryId?: true
    senderId?: true
    recipientId?: true
    userId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    createdAt?: true
    date?: true
    isRecurring?: true
    categoryId?: true
    senderId?: true
    recipientId?: true
    userId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    description: string | null
    amount: number
    createdAt: Date
    date: Date
    isRecurring: boolean
    categoryId: string | null
    senderId: string | null
    recipientId: string | null
    userId: string
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    createdAt?: boolean
    date?: boolean
    isRecurring?: boolean
    categoryId?: boolean
    senderId?: boolean
    recipientId?: boolean
    userId?: boolean
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    sender?: boolean | Transaction$senderArgs<ExtArgs>
    recipient?: boolean | Transaction$recipientArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    createdAt?: boolean
    date?: boolean
    isRecurring?: boolean
    categoryId?: boolean
    senderId?: boolean
    recipientId?: boolean
    userId?: boolean
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    sender?: boolean | Transaction$senderArgs<ExtArgs>
    recipient?: boolean | Transaction$recipientArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    createdAt?: boolean
    date?: boolean
    isRecurring?: boolean
    categoryId?: boolean
    senderId?: boolean
    recipientId?: boolean
    userId?: boolean
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    sender?: boolean | Transaction$senderArgs<ExtArgs>
    recipient?: boolean | Transaction$recipientArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    description?: boolean
    amount?: boolean
    createdAt?: boolean
    date?: boolean
    isRecurring?: boolean
    categoryId?: boolean
    senderId?: boolean
    recipientId?: boolean
    userId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "amount" | "createdAt" | "date" | "isRecurring" | "categoryId" | "senderId" | "recipientId" | "userId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    sender?: boolean | Transaction$senderArgs<ExtArgs>
    recipient?: boolean | Transaction$recipientArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    sender?: boolean | Transaction$senderArgs<ExtArgs>
    recipient?: boolean | Transaction$recipientArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    sender?: boolean | Transaction$senderArgs<ExtArgs>
    recipient?: boolean | Transaction$recipientArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      sender: Prisma.$UserPayload<ExtArgs> | null
      recipient: Prisma.$UserPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string | null
      amount: number
      createdAt: Date
      date: Date
      isRecurring: boolean
      categoryId: string | null
      senderId: string | null
      recipientId: string | null
      userId: string
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Transaction$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sender<T extends Transaction$senderArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$senderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    recipient<T extends Transaction$recipientArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$recipientArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly isRecurring: FieldRef<"Transaction", 'Boolean'>
    readonly categoryId: FieldRef<"Transaction", 'String'>
    readonly senderId: FieldRef<"Transaction", 'String'>
    readonly recipientId: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.category
   */
  export type Transaction$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Transaction.sender
   */
  export type Transaction$senderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Transaction.recipient
   */
  export type Transaction$recipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model RecurringBill
   */

  export type AggregateRecurringBill = {
    _count: RecurringBillCountAggregateOutputType | null
    _avg: RecurringBillAvgAggregateOutputType | null
    _sum: RecurringBillSumAggregateOutputType | null
    _min: RecurringBillMinAggregateOutputType | null
    _max: RecurringBillMaxAggregateOutputType | null
  }

  export type RecurringBillAvgAggregateOutputType = {
    amount: number | null
    recurrenceDay: number | null
  }

  export type RecurringBillSumAggregateOutputType = {
    amount: number | null
    recurrenceDay: number | null
  }

  export type RecurringBillMinAggregateOutputType = {
    id: string | null
    description: string | null
    amount: number | null
    recurrenceDay: number | null
    recurrenceFrequency: string | null
    categoryId: string | null
    userId: string | null
    senderId: string | null
    recipientId: string | null
  }

  export type RecurringBillMaxAggregateOutputType = {
    id: string | null
    description: string | null
    amount: number | null
    recurrenceDay: number | null
    recurrenceFrequency: string | null
    categoryId: string | null
    userId: string | null
    senderId: string | null
    recipientId: string | null
  }

  export type RecurringBillCountAggregateOutputType = {
    id: number
    description: number
    amount: number
    recurrenceDay: number
    recurrenceFrequency: number
    categoryId: number
    userId: number
    senderId: number
    recipientId: number
    _all: number
  }


  export type RecurringBillAvgAggregateInputType = {
    amount?: true
    recurrenceDay?: true
  }

  export type RecurringBillSumAggregateInputType = {
    amount?: true
    recurrenceDay?: true
  }

  export type RecurringBillMinAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    recurrenceDay?: true
    recurrenceFrequency?: true
    categoryId?: true
    userId?: true
    senderId?: true
    recipientId?: true
  }

  export type RecurringBillMaxAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    recurrenceDay?: true
    recurrenceFrequency?: true
    categoryId?: true
    userId?: true
    senderId?: true
    recipientId?: true
  }

  export type RecurringBillCountAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    recurrenceDay?: true
    recurrenceFrequency?: true
    categoryId?: true
    userId?: true
    senderId?: true
    recipientId?: true
    _all?: true
  }

  export type RecurringBillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringBill to aggregate.
     */
    where?: RecurringBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringBills to fetch.
     */
    orderBy?: RecurringBillOrderByWithRelationInput | RecurringBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecurringBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecurringBills
    **/
    _count?: true | RecurringBillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecurringBillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecurringBillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecurringBillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecurringBillMaxAggregateInputType
  }

  export type GetRecurringBillAggregateType<T extends RecurringBillAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurringBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurringBill[P]>
      : GetScalarType<T[P], AggregateRecurringBill[P]>
  }




  export type RecurringBillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringBillWhereInput
    orderBy?: RecurringBillOrderByWithAggregationInput | RecurringBillOrderByWithAggregationInput[]
    by: RecurringBillScalarFieldEnum[] | RecurringBillScalarFieldEnum
    having?: RecurringBillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecurringBillCountAggregateInputType | true
    _avg?: RecurringBillAvgAggregateInputType
    _sum?: RecurringBillSumAggregateInputType
    _min?: RecurringBillMinAggregateInputType
    _max?: RecurringBillMaxAggregateInputType
  }

  export type RecurringBillGroupByOutputType = {
    id: string
    description: string | null
    amount: number
    recurrenceDay: number | null
    recurrenceFrequency: string | null
    categoryId: string | null
    userId: string
    senderId: string | null
    recipientId: string | null
    _count: RecurringBillCountAggregateOutputType | null
    _avg: RecurringBillAvgAggregateOutputType | null
    _sum: RecurringBillSumAggregateOutputType | null
    _min: RecurringBillMinAggregateOutputType | null
    _max: RecurringBillMaxAggregateOutputType | null
  }

  type GetRecurringBillGroupByPayload<T extends RecurringBillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecurringBillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecurringBillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecurringBillGroupByOutputType[P]>
            : GetScalarType<T[P], RecurringBillGroupByOutputType[P]>
        }
      >
    >


  export type RecurringBillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    recurrenceDay?: boolean
    recurrenceFrequency?: boolean
    categoryId?: boolean
    userId?: boolean
    senderId?: boolean
    recipientId?: boolean
    category?: boolean | RecurringBill$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | RecurringBill$senderArgs<ExtArgs>
    recipient?: boolean | RecurringBill$recipientArgs<ExtArgs>
  }, ExtArgs["result"]["recurringBill"]>

  export type RecurringBillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    recurrenceDay?: boolean
    recurrenceFrequency?: boolean
    categoryId?: boolean
    userId?: boolean
    senderId?: boolean
    recipientId?: boolean
    category?: boolean | RecurringBill$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | RecurringBill$senderArgs<ExtArgs>
    recipient?: boolean | RecurringBill$recipientArgs<ExtArgs>
  }, ExtArgs["result"]["recurringBill"]>

  export type RecurringBillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    recurrenceDay?: boolean
    recurrenceFrequency?: boolean
    categoryId?: boolean
    userId?: boolean
    senderId?: boolean
    recipientId?: boolean
    category?: boolean | RecurringBill$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | RecurringBill$senderArgs<ExtArgs>
    recipient?: boolean | RecurringBill$recipientArgs<ExtArgs>
  }, ExtArgs["result"]["recurringBill"]>

  export type RecurringBillSelectScalar = {
    id?: boolean
    description?: boolean
    amount?: boolean
    recurrenceDay?: boolean
    recurrenceFrequency?: boolean
    categoryId?: boolean
    userId?: boolean
    senderId?: boolean
    recipientId?: boolean
  }

  export type RecurringBillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "amount" | "recurrenceDay" | "recurrenceFrequency" | "categoryId" | "userId" | "senderId" | "recipientId", ExtArgs["result"]["recurringBill"]>
  export type RecurringBillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | RecurringBill$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | RecurringBill$senderArgs<ExtArgs>
    recipient?: boolean | RecurringBill$recipientArgs<ExtArgs>
  }
  export type RecurringBillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | RecurringBill$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | RecurringBill$senderArgs<ExtArgs>
    recipient?: boolean | RecurringBill$recipientArgs<ExtArgs>
  }
  export type RecurringBillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | RecurringBill$categoryArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | RecurringBill$senderArgs<ExtArgs>
    recipient?: boolean | RecurringBill$recipientArgs<ExtArgs>
  }

  export type $RecurringBillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecurringBill"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs> | null
      recipient: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string | null
      amount: number
      recurrenceDay: number | null
      recurrenceFrequency: string | null
      categoryId: string | null
      userId: string
      senderId: string | null
      recipientId: string | null
    }, ExtArgs["result"]["recurringBill"]>
    composites: {}
  }

  type RecurringBillGetPayload<S extends boolean | null | undefined | RecurringBillDefaultArgs> = $Result.GetResult<Prisma.$RecurringBillPayload, S>

  type RecurringBillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecurringBillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecurringBillCountAggregateInputType | true
    }

  export interface RecurringBillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecurringBill'], meta: { name: 'RecurringBill' } }
    /**
     * Find zero or one RecurringBill that matches the filter.
     * @param {RecurringBillFindUniqueArgs} args - Arguments to find a RecurringBill
     * @example
     * // Get one RecurringBill
     * const recurringBill = await prisma.recurringBill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecurringBillFindUniqueArgs>(args: SelectSubset<T, RecurringBillFindUniqueArgs<ExtArgs>>): Prisma__RecurringBillClient<$Result.GetResult<Prisma.$RecurringBillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecurringBill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecurringBillFindUniqueOrThrowArgs} args - Arguments to find a RecurringBill
     * @example
     * // Get one RecurringBill
     * const recurringBill = await prisma.recurringBill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecurringBillFindUniqueOrThrowArgs>(args: SelectSubset<T, RecurringBillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecurringBillClient<$Result.GetResult<Prisma.$RecurringBillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringBill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringBillFindFirstArgs} args - Arguments to find a RecurringBill
     * @example
     * // Get one RecurringBill
     * const recurringBill = await prisma.recurringBill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecurringBillFindFirstArgs>(args?: SelectSubset<T, RecurringBillFindFirstArgs<ExtArgs>>): Prisma__RecurringBillClient<$Result.GetResult<Prisma.$RecurringBillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringBill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringBillFindFirstOrThrowArgs} args - Arguments to find a RecurringBill
     * @example
     * // Get one RecurringBill
     * const recurringBill = await prisma.recurringBill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecurringBillFindFirstOrThrowArgs>(args?: SelectSubset<T, RecurringBillFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecurringBillClient<$Result.GetResult<Prisma.$RecurringBillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecurringBills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringBillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecurringBills
     * const recurringBills = await prisma.recurringBill.findMany()
     * 
     * // Get first 10 RecurringBills
     * const recurringBills = await prisma.recurringBill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurringBillWithIdOnly = await prisma.recurringBill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecurringBillFindManyArgs>(args?: SelectSubset<T, RecurringBillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecurringBill.
     * @param {RecurringBillCreateArgs} args - Arguments to create a RecurringBill.
     * @example
     * // Create one RecurringBill
     * const RecurringBill = await prisma.recurringBill.create({
     *   data: {
     *     // ... data to create a RecurringBill
     *   }
     * })
     * 
     */
    create<T extends RecurringBillCreateArgs>(args: SelectSubset<T, RecurringBillCreateArgs<ExtArgs>>): Prisma__RecurringBillClient<$Result.GetResult<Prisma.$RecurringBillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecurringBills.
     * @param {RecurringBillCreateManyArgs} args - Arguments to create many RecurringBills.
     * @example
     * // Create many RecurringBills
     * const recurringBill = await prisma.recurringBill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecurringBillCreateManyArgs>(args?: SelectSubset<T, RecurringBillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecurringBills and returns the data saved in the database.
     * @param {RecurringBillCreateManyAndReturnArgs} args - Arguments to create many RecurringBills.
     * @example
     * // Create many RecurringBills
     * const recurringBill = await prisma.recurringBill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecurringBills and only return the `id`
     * const recurringBillWithIdOnly = await prisma.recurringBill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecurringBillCreateManyAndReturnArgs>(args?: SelectSubset<T, RecurringBillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringBillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecurringBill.
     * @param {RecurringBillDeleteArgs} args - Arguments to delete one RecurringBill.
     * @example
     * // Delete one RecurringBill
     * const RecurringBill = await prisma.recurringBill.delete({
     *   where: {
     *     // ... filter to delete one RecurringBill
     *   }
     * })
     * 
     */
    delete<T extends RecurringBillDeleteArgs>(args: SelectSubset<T, RecurringBillDeleteArgs<ExtArgs>>): Prisma__RecurringBillClient<$Result.GetResult<Prisma.$RecurringBillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecurringBill.
     * @param {RecurringBillUpdateArgs} args - Arguments to update one RecurringBill.
     * @example
     * // Update one RecurringBill
     * const recurringBill = await prisma.recurringBill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecurringBillUpdateArgs>(args: SelectSubset<T, RecurringBillUpdateArgs<ExtArgs>>): Prisma__RecurringBillClient<$Result.GetResult<Prisma.$RecurringBillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecurringBills.
     * @param {RecurringBillDeleteManyArgs} args - Arguments to filter RecurringBills to delete.
     * @example
     * // Delete a few RecurringBills
     * const { count } = await prisma.recurringBill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecurringBillDeleteManyArgs>(args?: SelectSubset<T, RecurringBillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringBillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecurringBills
     * const recurringBill = await prisma.recurringBill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecurringBillUpdateManyArgs>(args: SelectSubset<T, RecurringBillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringBills and returns the data updated in the database.
     * @param {RecurringBillUpdateManyAndReturnArgs} args - Arguments to update many RecurringBills.
     * @example
     * // Update many RecurringBills
     * const recurringBill = await prisma.recurringBill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecurringBills and only return the `id`
     * const recurringBillWithIdOnly = await prisma.recurringBill.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecurringBillUpdateManyAndReturnArgs>(args: SelectSubset<T, RecurringBillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringBillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecurringBill.
     * @param {RecurringBillUpsertArgs} args - Arguments to update or create a RecurringBill.
     * @example
     * // Update or create a RecurringBill
     * const recurringBill = await prisma.recurringBill.upsert({
     *   create: {
     *     // ... data to create a RecurringBill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecurringBill we want to update
     *   }
     * })
     */
    upsert<T extends RecurringBillUpsertArgs>(args: SelectSubset<T, RecurringBillUpsertArgs<ExtArgs>>): Prisma__RecurringBillClient<$Result.GetResult<Prisma.$RecurringBillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecurringBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringBillCountArgs} args - Arguments to filter RecurringBills to count.
     * @example
     * // Count the number of RecurringBills
     * const count = await prisma.recurringBill.count({
     *   where: {
     *     // ... the filter for the RecurringBills we want to count
     *   }
     * })
    **/
    count<T extends RecurringBillCountArgs>(
      args?: Subset<T, RecurringBillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecurringBillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecurringBill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringBillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecurringBillAggregateArgs>(args: Subset<T, RecurringBillAggregateArgs>): Prisma.PrismaPromise<GetRecurringBillAggregateType<T>>

    /**
     * Group by RecurringBill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringBillGroupByArgs} args - Group by arguments.
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
      T extends RecurringBillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecurringBillGroupByArgs['orderBy'] }
        : { orderBy?: RecurringBillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecurringBillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurringBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecurringBill model
   */
  readonly fields: RecurringBillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecurringBill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecurringBillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends RecurringBill$categoryArgs<ExtArgs> = {}>(args?: Subset<T, RecurringBill$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends RecurringBill$senderArgs<ExtArgs> = {}>(args?: Subset<T, RecurringBill$senderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    recipient<T extends RecurringBill$recipientArgs<ExtArgs> = {}>(args?: Subset<T, RecurringBill$recipientArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecurringBill model
   */
  interface RecurringBillFieldRefs {
    readonly id: FieldRef<"RecurringBill", 'String'>
    readonly description: FieldRef<"RecurringBill", 'String'>
    readonly amount: FieldRef<"RecurringBill", 'Float'>
    readonly recurrenceDay: FieldRef<"RecurringBill", 'Int'>
    readonly recurrenceFrequency: FieldRef<"RecurringBill", 'String'>
    readonly categoryId: FieldRef<"RecurringBill", 'String'>
    readonly userId: FieldRef<"RecurringBill", 'String'>
    readonly senderId: FieldRef<"RecurringBill", 'String'>
    readonly recipientId: FieldRef<"RecurringBill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecurringBill findUnique
   */
  export type RecurringBillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBill
     */
    select?: RecurringBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBill
     */
    omit?: RecurringBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillInclude<ExtArgs> | null
    /**
     * Filter, which RecurringBill to fetch.
     */
    where: RecurringBillWhereUniqueInput
  }

  /**
   * RecurringBill findUniqueOrThrow
   */
  export type RecurringBillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBill
     */
    select?: RecurringBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBill
     */
    omit?: RecurringBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillInclude<ExtArgs> | null
    /**
     * Filter, which RecurringBill to fetch.
     */
    where: RecurringBillWhereUniqueInput
  }

  /**
   * RecurringBill findFirst
   */
  export type RecurringBillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBill
     */
    select?: RecurringBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBill
     */
    omit?: RecurringBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillInclude<ExtArgs> | null
    /**
     * Filter, which RecurringBill to fetch.
     */
    where?: RecurringBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringBills to fetch.
     */
    orderBy?: RecurringBillOrderByWithRelationInput | RecurringBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringBills.
     */
    cursor?: RecurringBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringBills.
     */
    distinct?: RecurringBillScalarFieldEnum | RecurringBillScalarFieldEnum[]
  }

  /**
   * RecurringBill findFirstOrThrow
   */
  export type RecurringBillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBill
     */
    select?: RecurringBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBill
     */
    omit?: RecurringBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillInclude<ExtArgs> | null
    /**
     * Filter, which RecurringBill to fetch.
     */
    where?: RecurringBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringBills to fetch.
     */
    orderBy?: RecurringBillOrderByWithRelationInput | RecurringBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringBills.
     */
    cursor?: RecurringBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringBills.
     */
    distinct?: RecurringBillScalarFieldEnum | RecurringBillScalarFieldEnum[]
  }

  /**
   * RecurringBill findMany
   */
  export type RecurringBillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBill
     */
    select?: RecurringBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBill
     */
    omit?: RecurringBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillInclude<ExtArgs> | null
    /**
     * Filter, which RecurringBills to fetch.
     */
    where?: RecurringBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringBills to fetch.
     */
    orderBy?: RecurringBillOrderByWithRelationInput | RecurringBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecurringBills.
     */
    cursor?: RecurringBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringBills.
     */
    skip?: number
    distinct?: RecurringBillScalarFieldEnum | RecurringBillScalarFieldEnum[]
  }

  /**
   * RecurringBill create
   */
  export type RecurringBillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBill
     */
    select?: RecurringBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBill
     */
    omit?: RecurringBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillInclude<ExtArgs> | null
    /**
     * The data needed to create a RecurringBill.
     */
    data: XOR<RecurringBillCreateInput, RecurringBillUncheckedCreateInput>
  }

  /**
   * RecurringBill createMany
   */
  export type RecurringBillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecurringBills.
     */
    data: RecurringBillCreateManyInput | RecurringBillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecurringBill createManyAndReturn
   */
  export type RecurringBillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBill
     */
    select?: RecurringBillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBill
     */
    omit?: RecurringBillOmit<ExtArgs> | null
    /**
     * The data used to create many RecurringBills.
     */
    data: RecurringBillCreateManyInput | RecurringBillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecurringBill update
   */
  export type RecurringBillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBill
     */
    select?: RecurringBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBill
     */
    omit?: RecurringBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillInclude<ExtArgs> | null
    /**
     * The data needed to update a RecurringBill.
     */
    data: XOR<RecurringBillUpdateInput, RecurringBillUncheckedUpdateInput>
    /**
     * Choose, which RecurringBill to update.
     */
    where: RecurringBillWhereUniqueInput
  }

  /**
   * RecurringBill updateMany
   */
  export type RecurringBillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecurringBills.
     */
    data: XOR<RecurringBillUpdateManyMutationInput, RecurringBillUncheckedUpdateManyInput>
    /**
     * Filter which RecurringBills to update
     */
    where?: RecurringBillWhereInput
    /**
     * Limit how many RecurringBills to update.
     */
    limit?: number
  }

  /**
   * RecurringBill updateManyAndReturn
   */
  export type RecurringBillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBill
     */
    select?: RecurringBillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBill
     */
    omit?: RecurringBillOmit<ExtArgs> | null
    /**
     * The data used to update RecurringBills.
     */
    data: XOR<RecurringBillUpdateManyMutationInput, RecurringBillUncheckedUpdateManyInput>
    /**
     * Filter which RecurringBills to update
     */
    where?: RecurringBillWhereInput
    /**
     * Limit how many RecurringBills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecurringBill upsert
   */
  export type RecurringBillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBill
     */
    select?: RecurringBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBill
     */
    omit?: RecurringBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillInclude<ExtArgs> | null
    /**
     * The filter to search for the RecurringBill to update in case it exists.
     */
    where: RecurringBillWhereUniqueInput
    /**
     * In case the RecurringBill found by the `where` argument doesn't exist, create a new RecurringBill with this data.
     */
    create: XOR<RecurringBillCreateInput, RecurringBillUncheckedCreateInput>
    /**
     * In case the RecurringBill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecurringBillUpdateInput, RecurringBillUncheckedUpdateInput>
  }

  /**
   * RecurringBill delete
   */
  export type RecurringBillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBill
     */
    select?: RecurringBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBill
     */
    omit?: RecurringBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillInclude<ExtArgs> | null
    /**
     * Filter which RecurringBill to delete.
     */
    where: RecurringBillWhereUniqueInput
  }

  /**
   * RecurringBill deleteMany
   */
  export type RecurringBillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringBills to delete
     */
    where?: RecurringBillWhereInput
    /**
     * Limit how many RecurringBills to delete.
     */
    limit?: number
  }

  /**
   * RecurringBill.category
   */
  export type RecurringBill$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * RecurringBill.sender
   */
  export type RecurringBill$senderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * RecurringBill.recipient
   */
  export type RecurringBill$recipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * RecurringBill without action
   */
  export type RecurringBillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBill
     */
    select?: RecurringBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBill
     */
    omit?: RecurringBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    budgets?: boolean | Category$budgetsArgs<ExtArgs>
    recurringBills?: boolean | Category$recurringBillsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    budgets?: boolean | Category$budgetsArgs<ExtArgs>
    recurringBills?: boolean | Category$recurringBillsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      budgets: Prisma.$BudgetPayload<ExtArgs>[]
      recurringBills: Prisma.$RecurringBillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends Category$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Category$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    budgets<T extends Category$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, Category$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recurringBills<T extends Category$recurringBillsArgs<ExtArgs> = {}>(args?: Subset<T, Category$recurringBillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.transactions
   */
  export type Category$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Category.budgets
   */
  export type Category$budgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    cursor?: BudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Category.recurringBills
   */
  export type Category$recurringBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBill
     */
    select?: RecurringBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBill
     */
    omit?: RecurringBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillInclude<ExtArgs> | null
    where?: RecurringBillWhereInput
    orderBy?: RecurringBillOrderByWithRelationInput | RecurringBillOrderByWithRelationInput[]
    cursor?: RecurringBillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurringBillScalarFieldEnum | RecurringBillScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Budget
   */

  export type AggregateBudget = {
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  export type BudgetAvgAggregateOutputType = {
    amount: number | null
  }

  export type BudgetSumAggregateOutputType = {
    amount: number | null
  }

  export type BudgetMinAggregateOutputType = {
    id: string | null
    amount: number | null
    createdAt: Date | null
    categoryId: string | null
    themeId: string | null
    userId: string | null
  }

  export type BudgetMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    createdAt: Date | null
    categoryId: string | null
    themeId: string | null
    userId: string | null
  }

  export type BudgetCountAggregateOutputType = {
    id: number
    amount: number
    createdAt: number
    categoryId: number
    themeId: number
    userId: number
    _all: number
  }


  export type BudgetAvgAggregateInputType = {
    amount?: true
  }

  export type BudgetSumAggregateInputType = {
    amount?: true
  }

  export type BudgetMinAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    categoryId?: true
    themeId?: true
    userId?: true
  }

  export type BudgetMaxAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    categoryId?: true
    themeId?: true
    userId?: true
  }

  export type BudgetCountAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    categoryId?: true
    themeId?: true
    userId?: true
    _all?: true
  }

  export type BudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budget to aggregate.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Budgets
    **/
    _count?: true | BudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetMaxAggregateInputType
  }

  export type GetBudgetAggregateType<T extends BudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudget[P]>
      : GetScalarType<T[P], AggregateBudget[P]>
  }




  export type BudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithAggregationInput | BudgetOrderByWithAggregationInput[]
    by: BudgetScalarFieldEnum[] | BudgetScalarFieldEnum
    having?: BudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetCountAggregateInputType | true
    _avg?: BudgetAvgAggregateInputType
    _sum?: BudgetSumAggregateInputType
    _min?: BudgetMinAggregateInputType
    _max?: BudgetMaxAggregateInputType
  }

  export type BudgetGroupByOutputType = {
    id: string
    amount: number
    createdAt: Date
    categoryId: string
    themeId: string | null
    userId: string
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  type GetBudgetGroupByPayload<T extends BudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetGroupByOutputType[P]>
        }
      >
    >


  export type BudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    categoryId?: boolean
    themeId?: boolean
    userId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    theme?: boolean | Budget$themeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    categoryId?: boolean
    themeId?: boolean
    userId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    theme?: boolean | Budget$themeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    categoryId?: boolean
    themeId?: boolean
    userId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    theme?: boolean | Budget$themeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectScalar = {
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    categoryId?: boolean
    themeId?: boolean
    userId?: boolean
  }

  export type BudgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "createdAt" | "categoryId" | "themeId" | "userId", ExtArgs["result"]["budget"]>
  export type BudgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    theme?: boolean | Budget$themeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BudgetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    theme?: boolean | Budget$themeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BudgetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    theme?: boolean | Budget$themeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Budget"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      theme: Prisma.$ThemePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      createdAt: Date
      categoryId: string
      themeId: string | null
      userId: string
    }, ExtArgs["result"]["budget"]>
    composites: {}
  }

  type BudgetGetPayload<S extends boolean | null | undefined | BudgetDefaultArgs> = $Result.GetResult<Prisma.$BudgetPayload, S>

  type BudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BudgetCountAggregateInputType | true
    }

  export interface BudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Budget'], meta: { name: 'Budget' } }
    /**
     * Find zero or one Budget that matches the filter.
     * @param {BudgetFindUniqueArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BudgetFindUniqueArgs>(args: SelectSubset<T, BudgetFindUniqueArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Budget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BudgetFindUniqueOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, BudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BudgetFindFirstArgs>(args?: SelectSubset<T, BudgetFindFirstArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, BudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budget.findMany()
     * 
     * // Get first 10 Budgets
     * const budgets = await prisma.budget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetWithIdOnly = await prisma.budget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BudgetFindManyArgs>(args?: SelectSubset<T, BudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Budget.
     * @param {BudgetCreateArgs} args - Arguments to create a Budget.
     * @example
     * // Create one Budget
     * const Budget = await prisma.budget.create({
     *   data: {
     *     // ... data to create a Budget
     *   }
     * })
     * 
     */
    create<T extends BudgetCreateArgs>(args: SelectSubset<T, BudgetCreateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Budgets.
     * @param {BudgetCreateManyArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BudgetCreateManyArgs>(args?: SelectSubset<T, BudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Budgets and returns the data saved in the database.
     * @param {BudgetCreateManyAndReturnArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BudgetCreateManyAndReturnArgs>(args?: SelectSubset<T, BudgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Budget.
     * @param {BudgetDeleteArgs} args - Arguments to delete one Budget.
     * @example
     * // Delete one Budget
     * const Budget = await prisma.budget.delete({
     *   where: {
     *     // ... filter to delete one Budget
     *   }
     * })
     * 
     */
    delete<T extends BudgetDeleteArgs>(args: SelectSubset<T, BudgetDeleteArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Budget.
     * @param {BudgetUpdateArgs} args - Arguments to update one Budget.
     * @example
     * // Update one Budget
     * const budget = await prisma.budget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BudgetUpdateArgs>(args: SelectSubset<T, BudgetUpdateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Budgets.
     * @param {BudgetDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BudgetDeleteManyArgs>(args?: SelectSubset<T, BudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BudgetUpdateManyArgs>(args: SelectSubset<T, BudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets and returns the data updated in the database.
     * @param {BudgetUpdateManyAndReturnArgs} args - Arguments to update many Budgets.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.updateManyAndReturn({
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
    updateManyAndReturn<T extends BudgetUpdateManyAndReturnArgs>(args: SelectSubset<T, BudgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Budget.
     * @param {BudgetUpsertArgs} args - Arguments to update or create a Budget.
     * @example
     * // Update or create a Budget
     * const budget = await prisma.budget.upsert({
     *   create: {
     *     // ... data to create a Budget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budget we want to update
     *   }
     * })
     */
    upsert<T extends BudgetUpsertArgs>(args: SelectSubset<T, BudgetUpsertArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budget.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
    **/
    count<T extends BudgetCountArgs>(
      args?: Subset<T, BudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BudgetAggregateArgs>(args: Subset<T, BudgetAggregateArgs>): Prisma.PrismaPromise<GetBudgetAggregateType<T>>

    /**
     * Group by Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetGroupByArgs} args - Group by arguments.
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
      T extends BudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetGroupByArgs['orderBy'] }
        : { orderBy?: BudgetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Budget model
   */
  readonly fields: BudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Budget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    theme<T extends Budget$themeArgs<ExtArgs> = {}>(args?: Subset<T, Budget$themeArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Budget model
   */
  interface BudgetFieldRefs {
    readonly id: FieldRef<"Budget", 'String'>
    readonly amount: FieldRef<"Budget", 'Float'>
    readonly createdAt: FieldRef<"Budget", 'DateTime'>
    readonly categoryId: FieldRef<"Budget", 'String'>
    readonly themeId: FieldRef<"Budget", 'String'>
    readonly userId: FieldRef<"Budget", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Budget findUnique
   */
  export type BudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findUniqueOrThrow
   */
  export type BudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findFirst
   */
  export type BudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findFirstOrThrow
   */
  export type BudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findMany
   */
  export type BudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget create
   */
  export type BudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to create a Budget.
     */
    data: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
  }

  /**
   * Budget createMany
   */
  export type BudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Budget createManyAndReturn
   */
  export type BudgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Budget update
   */
  export type BudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to update a Budget.
     */
    data: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
    /**
     * Choose, which Budget to update.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget updateMany
   */
  export type BudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
  }

  /**
   * Budget updateManyAndReturn
   */
  export type BudgetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Budget upsert
   */
  export type BudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The filter to search for the Budget to update in case it exists.
     */
    where: BudgetWhereUniqueInput
    /**
     * In case the Budget found by the `where` argument doesn't exist, create a new Budget with this data.
     */
    create: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
    /**
     * In case the Budget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
  }

  /**
   * Budget delete
   */
  export type BudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter which Budget to delete.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget deleteMany
   */
  export type BudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budgets to delete
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to delete.
     */
    limit?: number
  }

  /**
   * Budget.theme
   */
  export type Budget$themeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    where?: ThemeWhereInput
  }

  /**
   * Budget without action
   */
  export type BudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
  }


  /**
   * Model Pot
   */

  export type AggregatePot = {
    _count: PotCountAggregateOutputType | null
    _avg: PotAvgAggregateOutputType | null
    _sum: PotSumAggregateOutputType | null
    _min: PotMinAggregateOutputType | null
    _max: PotMaxAggregateOutputType | null
  }

  export type PotAvgAggregateOutputType = {
    targetAmount: number | null
    currentAmount: number | null
  }

  export type PotSumAggregateOutputType = {
    targetAmount: number | null
    currentAmount: number | null
  }

  export type PotMinAggregateOutputType = {
    id: string | null
    name: string | null
    targetAmount: number | null
    currentAmount: number | null
    userId: string | null
    themeId: string | null
  }

  export type PotMaxAggregateOutputType = {
    id: string | null
    name: string | null
    targetAmount: number | null
    currentAmount: number | null
    userId: string | null
    themeId: string | null
  }

  export type PotCountAggregateOutputType = {
    id: number
    name: number
    targetAmount: number
    currentAmount: number
    userId: number
    themeId: number
    _all: number
  }


  export type PotAvgAggregateInputType = {
    targetAmount?: true
    currentAmount?: true
  }

  export type PotSumAggregateInputType = {
    targetAmount?: true
    currentAmount?: true
  }

  export type PotMinAggregateInputType = {
    id?: true
    name?: true
    targetAmount?: true
    currentAmount?: true
    userId?: true
    themeId?: true
  }

  export type PotMaxAggregateInputType = {
    id?: true
    name?: true
    targetAmount?: true
    currentAmount?: true
    userId?: true
    themeId?: true
  }

  export type PotCountAggregateInputType = {
    id?: true
    name?: true
    targetAmount?: true
    currentAmount?: true
    userId?: true
    themeId?: true
    _all?: true
  }

  export type PotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pot to aggregate.
     */
    where?: PotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pots to fetch.
     */
    orderBy?: PotOrderByWithRelationInput | PotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pots
    **/
    _count?: true | PotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PotMaxAggregateInputType
  }

  export type GetPotAggregateType<T extends PotAggregateArgs> = {
        [P in keyof T & keyof AggregatePot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePot[P]>
      : GetScalarType<T[P], AggregatePot[P]>
  }




  export type PotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PotWhereInput
    orderBy?: PotOrderByWithAggregationInput | PotOrderByWithAggregationInput[]
    by: PotScalarFieldEnum[] | PotScalarFieldEnum
    having?: PotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PotCountAggregateInputType | true
    _avg?: PotAvgAggregateInputType
    _sum?: PotSumAggregateInputType
    _min?: PotMinAggregateInputType
    _max?: PotMaxAggregateInputType
  }

  export type PotGroupByOutputType = {
    id: string
    name: string
    targetAmount: number
    currentAmount: number
    userId: string
    themeId: string | null
    _count: PotCountAggregateOutputType | null
    _avg: PotAvgAggregateOutputType | null
    _sum: PotSumAggregateOutputType | null
    _min: PotMinAggregateOutputType | null
    _max: PotMaxAggregateOutputType | null
  }

  type GetPotGroupByPayload<T extends PotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PotGroupByOutputType[P]>
            : GetScalarType<T[P], PotGroupByOutputType[P]>
        }
      >
    >


  export type PotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    userId?: boolean
    themeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | Pot$themeArgs<ExtArgs>
  }, ExtArgs["result"]["pot"]>

  export type PotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    userId?: boolean
    themeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | Pot$themeArgs<ExtArgs>
  }, ExtArgs["result"]["pot"]>

  export type PotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    userId?: boolean
    themeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | Pot$themeArgs<ExtArgs>
  }, ExtArgs["result"]["pot"]>

  export type PotSelectScalar = {
    id?: boolean
    name?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    userId?: boolean
    themeId?: boolean
  }

  export type PotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "targetAmount" | "currentAmount" | "userId" | "themeId", ExtArgs["result"]["pot"]>
  export type PotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | Pot$themeArgs<ExtArgs>
  }
  export type PotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | Pot$themeArgs<ExtArgs>
  }
  export type PotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    theme?: boolean | Pot$themeArgs<ExtArgs>
  }

  export type $PotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pot"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      theme: Prisma.$ThemePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      targetAmount: number
      currentAmount: number
      userId: string
      themeId: string | null
    }, ExtArgs["result"]["pot"]>
    composites: {}
  }

  type PotGetPayload<S extends boolean | null | undefined | PotDefaultArgs> = $Result.GetResult<Prisma.$PotPayload, S>

  type PotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PotCountAggregateInputType | true
    }

  export interface PotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pot'], meta: { name: 'Pot' } }
    /**
     * Find zero or one Pot that matches the filter.
     * @param {PotFindUniqueArgs} args - Arguments to find a Pot
     * @example
     * // Get one Pot
     * const pot = await prisma.pot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PotFindUniqueArgs>(args: SelectSubset<T, PotFindUniqueArgs<ExtArgs>>): Prisma__PotClient<$Result.GetResult<Prisma.$PotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PotFindUniqueOrThrowArgs} args - Arguments to find a Pot
     * @example
     * // Get one Pot
     * const pot = await prisma.pot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PotFindUniqueOrThrowArgs>(args: SelectSubset<T, PotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PotClient<$Result.GetResult<Prisma.$PotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PotFindFirstArgs} args - Arguments to find a Pot
     * @example
     * // Get one Pot
     * const pot = await prisma.pot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PotFindFirstArgs>(args?: SelectSubset<T, PotFindFirstArgs<ExtArgs>>): Prisma__PotClient<$Result.GetResult<Prisma.$PotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PotFindFirstOrThrowArgs} args - Arguments to find a Pot
     * @example
     * // Get one Pot
     * const pot = await prisma.pot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PotFindFirstOrThrowArgs>(args?: SelectSubset<T, PotFindFirstOrThrowArgs<ExtArgs>>): Prisma__PotClient<$Result.GetResult<Prisma.$PotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pots
     * const pots = await prisma.pot.findMany()
     * 
     * // Get first 10 Pots
     * const pots = await prisma.pot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const potWithIdOnly = await prisma.pot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PotFindManyArgs>(args?: SelectSubset<T, PotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pot.
     * @param {PotCreateArgs} args - Arguments to create a Pot.
     * @example
     * // Create one Pot
     * const Pot = await prisma.pot.create({
     *   data: {
     *     // ... data to create a Pot
     *   }
     * })
     * 
     */
    create<T extends PotCreateArgs>(args: SelectSubset<T, PotCreateArgs<ExtArgs>>): Prisma__PotClient<$Result.GetResult<Prisma.$PotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pots.
     * @param {PotCreateManyArgs} args - Arguments to create many Pots.
     * @example
     * // Create many Pots
     * const pot = await prisma.pot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PotCreateManyArgs>(args?: SelectSubset<T, PotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pots and returns the data saved in the database.
     * @param {PotCreateManyAndReturnArgs} args - Arguments to create many Pots.
     * @example
     * // Create many Pots
     * const pot = await prisma.pot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pots and only return the `id`
     * const potWithIdOnly = await prisma.pot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PotCreateManyAndReturnArgs>(args?: SelectSubset<T, PotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pot.
     * @param {PotDeleteArgs} args - Arguments to delete one Pot.
     * @example
     * // Delete one Pot
     * const Pot = await prisma.pot.delete({
     *   where: {
     *     // ... filter to delete one Pot
     *   }
     * })
     * 
     */
    delete<T extends PotDeleteArgs>(args: SelectSubset<T, PotDeleteArgs<ExtArgs>>): Prisma__PotClient<$Result.GetResult<Prisma.$PotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pot.
     * @param {PotUpdateArgs} args - Arguments to update one Pot.
     * @example
     * // Update one Pot
     * const pot = await prisma.pot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PotUpdateArgs>(args: SelectSubset<T, PotUpdateArgs<ExtArgs>>): Prisma__PotClient<$Result.GetResult<Prisma.$PotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pots.
     * @param {PotDeleteManyArgs} args - Arguments to filter Pots to delete.
     * @example
     * // Delete a few Pots
     * const { count } = await prisma.pot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PotDeleteManyArgs>(args?: SelectSubset<T, PotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pots
     * const pot = await prisma.pot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PotUpdateManyArgs>(args: SelectSubset<T, PotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pots and returns the data updated in the database.
     * @param {PotUpdateManyAndReturnArgs} args - Arguments to update many Pots.
     * @example
     * // Update many Pots
     * const pot = await prisma.pot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pots and only return the `id`
     * const potWithIdOnly = await prisma.pot.updateManyAndReturn({
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
    updateManyAndReturn<T extends PotUpdateManyAndReturnArgs>(args: SelectSubset<T, PotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pot.
     * @param {PotUpsertArgs} args - Arguments to update or create a Pot.
     * @example
     * // Update or create a Pot
     * const pot = await prisma.pot.upsert({
     *   create: {
     *     // ... data to create a Pot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pot we want to update
     *   }
     * })
     */
    upsert<T extends PotUpsertArgs>(args: SelectSubset<T, PotUpsertArgs<ExtArgs>>): Prisma__PotClient<$Result.GetResult<Prisma.$PotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PotCountArgs} args - Arguments to filter Pots to count.
     * @example
     * // Count the number of Pots
     * const count = await prisma.pot.count({
     *   where: {
     *     // ... the filter for the Pots we want to count
     *   }
     * })
    **/
    count<T extends PotCountArgs>(
      args?: Subset<T, PotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PotAggregateArgs>(args: Subset<T, PotAggregateArgs>): Prisma.PrismaPromise<GetPotAggregateType<T>>

    /**
     * Group by Pot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PotGroupByArgs} args - Group by arguments.
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
      T extends PotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PotGroupByArgs['orderBy'] }
        : { orderBy?: PotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pot model
   */
  readonly fields: PotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    theme<T extends Pot$themeArgs<ExtArgs> = {}>(args?: Subset<T, Pot$themeArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pot model
   */
  interface PotFieldRefs {
    readonly id: FieldRef<"Pot", 'String'>
    readonly name: FieldRef<"Pot", 'String'>
    readonly targetAmount: FieldRef<"Pot", 'Float'>
    readonly currentAmount: FieldRef<"Pot", 'Float'>
    readonly userId: FieldRef<"Pot", 'String'>
    readonly themeId: FieldRef<"Pot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pot findUnique
   */
  export type PotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pot
     */
    select?: PotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pot
     */
    omit?: PotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotInclude<ExtArgs> | null
    /**
     * Filter, which Pot to fetch.
     */
    where: PotWhereUniqueInput
  }

  /**
   * Pot findUniqueOrThrow
   */
  export type PotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pot
     */
    select?: PotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pot
     */
    omit?: PotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotInclude<ExtArgs> | null
    /**
     * Filter, which Pot to fetch.
     */
    where: PotWhereUniqueInput
  }

  /**
   * Pot findFirst
   */
  export type PotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pot
     */
    select?: PotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pot
     */
    omit?: PotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotInclude<ExtArgs> | null
    /**
     * Filter, which Pot to fetch.
     */
    where?: PotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pots to fetch.
     */
    orderBy?: PotOrderByWithRelationInput | PotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pots.
     */
    cursor?: PotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pots.
     */
    distinct?: PotScalarFieldEnum | PotScalarFieldEnum[]
  }

  /**
   * Pot findFirstOrThrow
   */
  export type PotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pot
     */
    select?: PotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pot
     */
    omit?: PotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotInclude<ExtArgs> | null
    /**
     * Filter, which Pot to fetch.
     */
    where?: PotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pots to fetch.
     */
    orderBy?: PotOrderByWithRelationInput | PotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pots.
     */
    cursor?: PotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pots.
     */
    distinct?: PotScalarFieldEnum | PotScalarFieldEnum[]
  }

  /**
   * Pot findMany
   */
  export type PotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pot
     */
    select?: PotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pot
     */
    omit?: PotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotInclude<ExtArgs> | null
    /**
     * Filter, which Pots to fetch.
     */
    where?: PotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pots to fetch.
     */
    orderBy?: PotOrderByWithRelationInput | PotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pots.
     */
    cursor?: PotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pots.
     */
    skip?: number
    distinct?: PotScalarFieldEnum | PotScalarFieldEnum[]
  }

  /**
   * Pot create
   */
  export type PotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pot
     */
    select?: PotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pot
     */
    omit?: PotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotInclude<ExtArgs> | null
    /**
     * The data needed to create a Pot.
     */
    data: XOR<PotCreateInput, PotUncheckedCreateInput>
  }

  /**
   * Pot createMany
   */
  export type PotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pots.
     */
    data: PotCreateManyInput | PotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pot createManyAndReturn
   */
  export type PotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pot
     */
    select?: PotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pot
     */
    omit?: PotOmit<ExtArgs> | null
    /**
     * The data used to create many Pots.
     */
    data: PotCreateManyInput | PotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pot update
   */
  export type PotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pot
     */
    select?: PotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pot
     */
    omit?: PotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotInclude<ExtArgs> | null
    /**
     * The data needed to update a Pot.
     */
    data: XOR<PotUpdateInput, PotUncheckedUpdateInput>
    /**
     * Choose, which Pot to update.
     */
    where: PotWhereUniqueInput
  }

  /**
   * Pot updateMany
   */
  export type PotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pots.
     */
    data: XOR<PotUpdateManyMutationInput, PotUncheckedUpdateManyInput>
    /**
     * Filter which Pots to update
     */
    where?: PotWhereInput
    /**
     * Limit how many Pots to update.
     */
    limit?: number
  }

  /**
   * Pot updateManyAndReturn
   */
  export type PotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pot
     */
    select?: PotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pot
     */
    omit?: PotOmit<ExtArgs> | null
    /**
     * The data used to update Pots.
     */
    data: XOR<PotUpdateManyMutationInput, PotUncheckedUpdateManyInput>
    /**
     * Filter which Pots to update
     */
    where?: PotWhereInput
    /**
     * Limit how many Pots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pot upsert
   */
  export type PotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pot
     */
    select?: PotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pot
     */
    omit?: PotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotInclude<ExtArgs> | null
    /**
     * The filter to search for the Pot to update in case it exists.
     */
    where: PotWhereUniqueInput
    /**
     * In case the Pot found by the `where` argument doesn't exist, create a new Pot with this data.
     */
    create: XOR<PotCreateInput, PotUncheckedCreateInput>
    /**
     * In case the Pot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PotUpdateInput, PotUncheckedUpdateInput>
  }

  /**
   * Pot delete
   */
  export type PotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pot
     */
    select?: PotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pot
     */
    omit?: PotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotInclude<ExtArgs> | null
    /**
     * Filter which Pot to delete.
     */
    where: PotWhereUniqueInput
  }

  /**
   * Pot deleteMany
   */
  export type PotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pots to delete
     */
    where?: PotWhereInput
    /**
     * Limit how many Pots to delete.
     */
    limit?: number
  }

  /**
   * Pot.theme
   */
  export type Pot$themeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    where?: ThemeWhereInput
  }

  /**
   * Pot without action
   */
  export type PotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pot
     */
    select?: PotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pot
     */
    omit?: PotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotInclude<ExtArgs> | null
  }


  /**
   * Model Theme
   */

  export type AggregateTheme = {
    _count: ThemeCountAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  export type ThemeMinAggregateOutputType = {
    id: string | null
    color: string | null
    description: string | null
  }

  export type ThemeMaxAggregateOutputType = {
    id: string | null
    color: string | null
    description: string | null
  }

  export type ThemeCountAggregateOutputType = {
    id: number
    color: number
    description: number
    _all: number
  }


  export type ThemeMinAggregateInputType = {
    id?: true
    color?: true
    description?: true
  }

  export type ThemeMaxAggregateInputType = {
    id?: true
    color?: true
    description?: true
  }

  export type ThemeCountAggregateInputType = {
    id?: true
    color?: true
    description?: true
    _all?: true
  }

  export type ThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theme to aggregate.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Themes
    **/
    _count?: true | ThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThemeMaxAggregateInputType
  }

  export type GetThemeAggregateType<T extends ThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheme[P]>
      : GetScalarType<T[P], AggregateTheme[P]>
  }




  export type ThemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThemeWhereInput
    orderBy?: ThemeOrderByWithAggregationInput | ThemeOrderByWithAggregationInput[]
    by: ThemeScalarFieldEnum[] | ThemeScalarFieldEnum
    having?: ThemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThemeCountAggregateInputType | true
    _min?: ThemeMinAggregateInputType
    _max?: ThemeMaxAggregateInputType
  }

  export type ThemeGroupByOutputType = {
    id: string
    color: string
    description: string | null
    _count: ThemeCountAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  type GetThemeGroupByPayload<T extends ThemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThemeGroupByOutputType[P]>
            : GetScalarType<T[P], ThemeGroupByOutputType[P]>
        }
      >
    >


  export type ThemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    description?: boolean
    budgets?: boolean | Theme$budgetsArgs<ExtArgs>
    pots?: boolean | Theme$potsArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    description?: boolean
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    description?: boolean
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectScalar = {
    id?: boolean
    color?: boolean
    description?: boolean
  }

  export type ThemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "color" | "description", ExtArgs["result"]["theme"]>
  export type ThemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    budgets?: boolean | Theme$budgetsArgs<ExtArgs>
    pots?: boolean | Theme$potsArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ThemeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ThemeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ThemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Theme"
    objects: {
      budgets: Prisma.$BudgetPayload<ExtArgs>[]
      pots: Prisma.$PotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      color: string
      description: string | null
    }, ExtArgs["result"]["theme"]>
    composites: {}
  }

  type ThemeGetPayload<S extends boolean | null | undefined | ThemeDefaultArgs> = $Result.GetResult<Prisma.$ThemePayload, S>

  type ThemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThemeCountAggregateInputType | true
    }

  export interface ThemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Theme'], meta: { name: 'Theme' } }
    /**
     * Find zero or one Theme that matches the filter.
     * @param {ThemeFindUniqueArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThemeFindUniqueArgs>(args: SelectSubset<T, ThemeFindUniqueArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Theme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThemeFindUniqueOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThemeFindUniqueOrThrowArgs>(args: SelectSubset<T, ThemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThemeFindFirstArgs>(args?: SelectSubset<T, ThemeFindFirstArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThemeFindFirstOrThrowArgs>(args?: SelectSubset<T, ThemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Themes
     * const themes = await prisma.theme.findMany()
     * 
     * // Get first 10 Themes
     * const themes = await prisma.theme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const themeWithIdOnly = await prisma.theme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThemeFindManyArgs>(args?: SelectSubset<T, ThemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Theme.
     * @param {ThemeCreateArgs} args - Arguments to create a Theme.
     * @example
     * // Create one Theme
     * const Theme = await prisma.theme.create({
     *   data: {
     *     // ... data to create a Theme
     *   }
     * })
     * 
     */
    create<T extends ThemeCreateArgs>(args: SelectSubset<T, ThemeCreateArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Themes.
     * @param {ThemeCreateManyArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThemeCreateManyArgs>(args?: SelectSubset<T, ThemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Themes and returns the data saved in the database.
     * @param {ThemeCreateManyAndReturnArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Themes and only return the `id`
     * const themeWithIdOnly = await prisma.theme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThemeCreateManyAndReturnArgs>(args?: SelectSubset<T, ThemeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Theme.
     * @param {ThemeDeleteArgs} args - Arguments to delete one Theme.
     * @example
     * // Delete one Theme
     * const Theme = await prisma.theme.delete({
     *   where: {
     *     // ... filter to delete one Theme
     *   }
     * })
     * 
     */
    delete<T extends ThemeDeleteArgs>(args: SelectSubset<T, ThemeDeleteArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Theme.
     * @param {ThemeUpdateArgs} args - Arguments to update one Theme.
     * @example
     * // Update one Theme
     * const theme = await prisma.theme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThemeUpdateArgs>(args: SelectSubset<T, ThemeUpdateArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Themes.
     * @param {ThemeDeleteManyArgs} args - Arguments to filter Themes to delete.
     * @example
     * // Delete a few Themes
     * const { count } = await prisma.theme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThemeDeleteManyArgs>(args?: SelectSubset<T, ThemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThemeUpdateManyArgs>(args: SelectSubset<T, ThemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes and returns the data updated in the database.
     * @param {ThemeUpdateManyAndReturnArgs} args - Arguments to update many Themes.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Themes and only return the `id`
     * const themeWithIdOnly = await prisma.theme.updateManyAndReturn({
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
    updateManyAndReturn<T extends ThemeUpdateManyAndReturnArgs>(args: SelectSubset<T, ThemeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Theme.
     * @param {ThemeUpsertArgs} args - Arguments to update or create a Theme.
     * @example
     * // Update or create a Theme
     * const theme = await prisma.theme.upsert({
     *   create: {
     *     // ... data to create a Theme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theme we want to update
     *   }
     * })
     */
    upsert<T extends ThemeUpsertArgs>(args: SelectSubset<T, ThemeUpsertArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeCountArgs} args - Arguments to filter Themes to count.
     * @example
     * // Count the number of Themes
     * const count = await prisma.theme.count({
     *   where: {
     *     // ... the filter for the Themes we want to count
     *   }
     * })
    **/
    count<T extends ThemeCountArgs>(
      args?: Subset<T, ThemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThemeAggregateArgs>(args: Subset<T, ThemeAggregateArgs>): Prisma.PrismaPromise<GetThemeAggregateType<T>>

    /**
     * Group by Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeGroupByArgs} args - Group by arguments.
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
      T extends ThemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThemeGroupByArgs['orderBy'] }
        : { orderBy?: ThemeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ThemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Theme model
   */
  readonly fields: ThemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Theme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    budgets<T extends Theme$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, Theme$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pots<T extends Theme$potsArgs<ExtArgs> = {}>(args?: Subset<T, Theme$potsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Theme model
   */
  interface ThemeFieldRefs {
    readonly id: FieldRef<"Theme", 'String'>
    readonly color: FieldRef<"Theme", 'String'>
    readonly description: FieldRef<"Theme", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Theme findUnique
   */
  export type ThemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findUniqueOrThrow
   */
  export type ThemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findFirst
   */
  export type ThemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findFirstOrThrow
   */
  export type ThemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findMany
   */
  export type ThemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Themes to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme create
   */
  export type ThemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to create a Theme.
     */
    data: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
  }

  /**
   * Theme createMany
   */
  export type ThemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Themes.
     */
    data: ThemeCreateManyInput | ThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Theme createManyAndReturn
   */
  export type ThemeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * The data used to create many Themes.
     */
    data: ThemeCreateManyInput | ThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Theme update
   */
  export type ThemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to update a Theme.
     */
    data: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
    /**
     * Choose, which Theme to update.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme updateMany
   */
  export type ThemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Themes.
     */
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyInput>
    /**
     * Filter which Themes to update
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to update.
     */
    limit?: number
  }

  /**
   * Theme updateManyAndReturn
   */
  export type ThemeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * The data used to update Themes.
     */
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyInput>
    /**
     * Filter which Themes to update
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to update.
     */
    limit?: number
  }

  /**
   * Theme upsert
   */
  export type ThemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The filter to search for the Theme to update in case it exists.
     */
    where: ThemeWhereUniqueInput
    /**
     * In case the Theme found by the `where` argument doesn't exist, create a new Theme with this data.
     */
    create: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
    /**
     * In case the Theme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
  }

  /**
   * Theme delete
   */
  export type ThemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter which Theme to delete.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme deleteMany
   */
  export type ThemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Themes to delete
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to delete.
     */
    limit?: number
  }

  /**
   * Theme.budgets
   */
  export type Theme$budgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    cursor?: BudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Theme.pots
   */
  export type Theme$potsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pot
     */
    select?: PotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pot
     */
    omit?: PotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotInclude<ExtArgs> | null
    where?: PotWhereInput
    orderBy?: PotOrderByWithRelationInput | PotOrderByWithRelationInput[]
    cursor?: PotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PotScalarFieldEnum | PotScalarFieldEnum[]
  }

  /**
   * Theme without action
   */
  export type ThemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const accountWithUserIdOnly = await prisma.account.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model RecurringAlert
   */

  export type AggregateRecurringAlert = {
    _count: RecurringAlertCountAggregateOutputType | null
    _min: RecurringAlertMinAggregateOutputType | null
    _max: RecurringAlertMaxAggregateOutputType | null
  }

  export type RecurringAlertMinAggregateOutputType = {
    id: string | null
    userId: string | null
    transactionId: string | null
    pattern: string | null
    lastDetectedDate: Date | null
    alertSent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecurringAlertMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    transactionId: string | null
    pattern: string | null
    lastDetectedDate: Date | null
    alertSent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecurringAlertCountAggregateOutputType = {
    id: number
    userId: number
    transactionId: number
    pattern: number
    lastDetectedDate: number
    alertSent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecurringAlertMinAggregateInputType = {
    id?: true
    userId?: true
    transactionId?: true
    pattern?: true
    lastDetectedDate?: true
    alertSent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecurringAlertMaxAggregateInputType = {
    id?: true
    userId?: true
    transactionId?: true
    pattern?: true
    lastDetectedDate?: true
    alertSent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecurringAlertCountAggregateInputType = {
    id?: true
    userId?: true
    transactionId?: true
    pattern?: true
    lastDetectedDate?: true
    alertSent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecurringAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringAlert to aggregate.
     */
    where?: RecurringAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringAlerts to fetch.
     */
    orderBy?: RecurringAlertOrderByWithRelationInput | RecurringAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecurringAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecurringAlerts
    **/
    _count?: true | RecurringAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecurringAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecurringAlertMaxAggregateInputType
  }

  export type GetRecurringAlertAggregateType<T extends RecurringAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurringAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurringAlert[P]>
      : GetScalarType<T[P], AggregateRecurringAlert[P]>
  }




  export type RecurringAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringAlertWhereInput
    orderBy?: RecurringAlertOrderByWithAggregationInput | RecurringAlertOrderByWithAggregationInput[]
    by: RecurringAlertScalarFieldEnum[] | RecurringAlertScalarFieldEnum
    having?: RecurringAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecurringAlertCountAggregateInputType | true
    _min?: RecurringAlertMinAggregateInputType
    _max?: RecurringAlertMaxAggregateInputType
  }

  export type RecurringAlertGroupByOutputType = {
    id: string
    userId: string
    transactionId: string | null
    pattern: string
    lastDetectedDate: Date
    alertSent: boolean
    createdAt: Date
    updatedAt: Date
    _count: RecurringAlertCountAggregateOutputType | null
    _min: RecurringAlertMinAggregateOutputType | null
    _max: RecurringAlertMaxAggregateOutputType | null
  }

  type GetRecurringAlertGroupByPayload<T extends RecurringAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecurringAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecurringAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecurringAlertGroupByOutputType[P]>
            : GetScalarType<T[P], RecurringAlertGroupByOutputType[P]>
        }
      >
    >


  export type RecurringAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    transactionId?: boolean
    pattern?: boolean
    lastDetectedDate?: boolean
    alertSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringAlert"]>

  export type RecurringAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    transactionId?: boolean
    pattern?: boolean
    lastDetectedDate?: boolean
    alertSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringAlert"]>

  export type RecurringAlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    transactionId?: boolean
    pattern?: boolean
    lastDetectedDate?: boolean
    alertSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringAlert"]>

  export type RecurringAlertSelectScalar = {
    id?: boolean
    userId?: boolean
    transactionId?: boolean
    pattern?: boolean
    lastDetectedDate?: boolean
    alertSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecurringAlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "transactionId" | "pattern" | "lastDetectedDate" | "alertSent" | "createdAt" | "updatedAt", ExtArgs["result"]["recurringAlert"]>
  export type RecurringAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecurringAlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecurringAlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecurringAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecurringAlert"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      transactionId: string | null
      pattern: string
      lastDetectedDate: Date
      alertSent: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recurringAlert"]>
    composites: {}
  }

  type RecurringAlertGetPayload<S extends boolean | null | undefined | RecurringAlertDefaultArgs> = $Result.GetResult<Prisma.$RecurringAlertPayload, S>

  type RecurringAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecurringAlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecurringAlertCountAggregateInputType | true
    }

  export interface RecurringAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecurringAlert'], meta: { name: 'RecurringAlert' } }
    /**
     * Find zero or one RecurringAlert that matches the filter.
     * @param {RecurringAlertFindUniqueArgs} args - Arguments to find a RecurringAlert
     * @example
     * // Get one RecurringAlert
     * const recurringAlert = await prisma.recurringAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecurringAlertFindUniqueArgs>(args: SelectSubset<T, RecurringAlertFindUniqueArgs<ExtArgs>>): Prisma__RecurringAlertClient<$Result.GetResult<Prisma.$RecurringAlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecurringAlert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecurringAlertFindUniqueOrThrowArgs} args - Arguments to find a RecurringAlert
     * @example
     * // Get one RecurringAlert
     * const recurringAlert = await prisma.recurringAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecurringAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, RecurringAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecurringAlertClient<$Result.GetResult<Prisma.$RecurringAlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringAlertFindFirstArgs} args - Arguments to find a RecurringAlert
     * @example
     * // Get one RecurringAlert
     * const recurringAlert = await prisma.recurringAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecurringAlertFindFirstArgs>(args?: SelectSubset<T, RecurringAlertFindFirstArgs<ExtArgs>>): Prisma__RecurringAlertClient<$Result.GetResult<Prisma.$RecurringAlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringAlertFindFirstOrThrowArgs} args - Arguments to find a RecurringAlert
     * @example
     * // Get one RecurringAlert
     * const recurringAlert = await prisma.recurringAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecurringAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, RecurringAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecurringAlertClient<$Result.GetResult<Prisma.$RecurringAlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecurringAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecurringAlerts
     * const recurringAlerts = await prisma.recurringAlert.findMany()
     * 
     * // Get first 10 RecurringAlerts
     * const recurringAlerts = await prisma.recurringAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurringAlertWithIdOnly = await prisma.recurringAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecurringAlertFindManyArgs>(args?: SelectSubset<T, RecurringAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecurringAlert.
     * @param {RecurringAlertCreateArgs} args - Arguments to create a RecurringAlert.
     * @example
     * // Create one RecurringAlert
     * const RecurringAlert = await prisma.recurringAlert.create({
     *   data: {
     *     // ... data to create a RecurringAlert
     *   }
     * })
     * 
     */
    create<T extends RecurringAlertCreateArgs>(args: SelectSubset<T, RecurringAlertCreateArgs<ExtArgs>>): Prisma__RecurringAlertClient<$Result.GetResult<Prisma.$RecurringAlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecurringAlerts.
     * @param {RecurringAlertCreateManyArgs} args - Arguments to create many RecurringAlerts.
     * @example
     * // Create many RecurringAlerts
     * const recurringAlert = await prisma.recurringAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecurringAlertCreateManyArgs>(args?: SelectSubset<T, RecurringAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecurringAlerts and returns the data saved in the database.
     * @param {RecurringAlertCreateManyAndReturnArgs} args - Arguments to create many RecurringAlerts.
     * @example
     * // Create many RecurringAlerts
     * const recurringAlert = await prisma.recurringAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecurringAlerts and only return the `id`
     * const recurringAlertWithIdOnly = await prisma.recurringAlert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecurringAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, RecurringAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringAlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecurringAlert.
     * @param {RecurringAlertDeleteArgs} args - Arguments to delete one RecurringAlert.
     * @example
     * // Delete one RecurringAlert
     * const RecurringAlert = await prisma.recurringAlert.delete({
     *   where: {
     *     // ... filter to delete one RecurringAlert
     *   }
     * })
     * 
     */
    delete<T extends RecurringAlertDeleteArgs>(args: SelectSubset<T, RecurringAlertDeleteArgs<ExtArgs>>): Prisma__RecurringAlertClient<$Result.GetResult<Prisma.$RecurringAlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecurringAlert.
     * @param {RecurringAlertUpdateArgs} args - Arguments to update one RecurringAlert.
     * @example
     * // Update one RecurringAlert
     * const recurringAlert = await prisma.recurringAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecurringAlertUpdateArgs>(args: SelectSubset<T, RecurringAlertUpdateArgs<ExtArgs>>): Prisma__RecurringAlertClient<$Result.GetResult<Prisma.$RecurringAlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecurringAlerts.
     * @param {RecurringAlertDeleteManyArgs} args - Arguments to filter RecurringAlerts to delete.
     * @example
     * // Delete a few RecurringAlerts
     * const { count } = await prisma.recurringAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecurringAlertDeleteManyArgs>(args?: SelectSubset<T, RecurringAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecurringAlerts
     * const recurringAlert = await prisma.recurringAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecurringAlertUpdateManyArgs>(args: SelectSubset<T, RecurringAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringAlerts and returns the data updated in the database.
     * @param {RecurringAlertUpdateManyAndReturnArgs} args - Arguments to update many RecurringAlerts.
     * @example
     * // Update many RecurringAlerts
     * const recurringAlert = await prisma.recurringAlert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecurringAlerts and only return the `id`
     * const recurringAlertWithIdOnly = await prisma.recurringAlert.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecurringAlertUpdateManyAndReturnArgs>(args: SelectSubset<T, RecurringAlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringAlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecurringAlert.
     * @param {RecurringAlertUpsertArgs} args - Arguments to update or create a RecurringAlert.
     * @example
     * // Update or create a RecurringAlert
     * const recurringAlert = await prisma.recurringAlert.upsert({
     *   create: {
     *     // ... data to create a RecurringAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecurringAlert we want to update
     *   }
     * })
     */
    upsert<T extends RecurringAlertUpsertArgs>(args: SelectSubset<T, RecurringAlertUpsertArgs<ExtArgs>>): Prisma__RecurringAlertClient<$Result.GetResult<Prisma.$RecurringAlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecurringAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringAlertCountArgs} args - Arguments to filter RecurringAlerts to count.
     * @example
     * // Count the number of RecurringAlerts
     * const count = await prisma.recurringAlert.count({
     *   where: {
     *     // ... the filter for the RecurringAlerts we want to count
     *   }
     * })
    **/
    count<T extends RecurringAlertCountArgs>(
      args?: Subset<T, RecurringAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecurringAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecurringAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecurringAlertAggregateArgs>(args: Subset<T, RecurringAlertAggregateArgs>): Prisma.PrismaPromise<GetRecurringAlertAggregateType<T>>

    /**
     * Group by RecurringAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringAlertGroupByArgs} args - Group by arguments.
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
      T extends RecurringAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecurringAlertGroupByArgs['orderBy'] }
        : { orderBy?: RecurringAlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecurringAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurringAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecurringAlert model
   */
  readonly fields: RecurringAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecurringAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecurringAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecurringAlert model
   */
  interface RecurringAlertFieldRefs {
    readonly id: FieldRef<"RecurringAlert", 'String'>
    readonly userId: FieldRef<"RecurringAlert", 'String'>
    readonly transactionId: FieldRef<"RecurringAlert", 'String'>
    readonly pattern: FieldRef<"RecurringAlert", 'String'>
    readonly lastDetectedDate: FieldRef<"RecurringAlert", 'DateTime'>
    readonly alertSent: FieldRef<"RecurringAlert", 'Boolean'>
    readonly createdAt: FieldRef<"RecurringAlert", 'DateTime'>
    readonly updatedAt: FieldRef<"RecurringAlert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecurringAlert findUnique
   */
  export type RecurringAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringAlert
     */
    select?: RecurringAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringAlert
     */
    omit?: RecurringAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringAlertInclude<ExtArgs> | null
    /**
     * Filter, which RecurringAlert to fetch.
     */
    where: RecurringAlertWhereUniqueInput
  }

  /**
   * RecurringAlert findUniqueOrThrow
   */
  export type RecurringAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringAlert
     */
    select?: RecurringAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringAlert
     */
    omit?: RecurringAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringAlertInclude<ExtArgs> | null
    /**
     * Filter, which RecurringAlert to fetch.
     */
    where: RecurringAlertWhereUniqueInput
  }

  /**
   * RecurringAlert findFirst
   */
  export type RecurringAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringAlert
     */
    select?: RecurringAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringAlert
     */
    omit?: RecurringAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringAlertInclude<ExtArgs> | null
    /**
     * Filter, which RecurringAlert to fetch.
     */
    where?: RecurringAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringAlerts to fetch.
     */
    orderBy?: RecurringAlertOrderByWithRelationInput | RecurringAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringAlerts.
     */
    cursor?: RecurringAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringAlerts.
     */
    distinct?: RecurringAlertScalarFieldEnum | RecurringAlertScalarFieldEnum[]
  }

  /**
   * RecurringAlert findFirstOrThrow
   */
  export type RecurringAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringAlert
     */
    select?: RecurringAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringAlert
     */
    omit?: RecurringAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringAlertInclude<ExtArgs> | null
    /**
     * Filter, which RecurringAlert to fetch.
     */
    where?: RecurringAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringAlerts to fetch.
     */
    orderBy?: RecurringAlertOrderByWithRelationInput | RecurringAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringAlerts.
     */
    cursor?: RecurringAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringAlerts.
     */
    distinct?: RecurringAlertScalarFieldEnum | RecurringAlertScalarFieldEnum[]
  }

  /**
   * RecurringAlert findMany
   */
  export type RecurringAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringAlert
     */
    select?: RecurringAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringAlert
     */
    omit?: RecurringAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringAlertInclude<ExtArgs> | null
    /**
     * Filter, which RecurringAlerts to fetch.
     */
    where?: RecurringAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringAlerts to fetch.
     */
    orderBy?: RecurringAlertOrderByWithRelationInput | RecurringAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecurringAlerts.
     */
    cursor?: RecurringAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringAlerts.
     */
    skip?: number
    distinct?: RecurringAlertScalarFieldEnum | RecurringAlertScalarFieldEnum[]
  }

  /**
   * RecurringAlert create
   */
  export type RecurringAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringAlert
     */
    select?: RecurringAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringAlert
     */
    omit?: RecurringAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a RecurringAlert.
     */
    data: XOR<RecurringAlertCreateInput, RecurringAlertUncheckedCreateInput>
  }

  /**
   * RecurringAlert createMany
   */
  export type RecurringAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecurringAlerts.
     */
    data: RecurringAlertCreateManyInput | RecurringAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecurringAlert createManyAndReturn
   */
  export type RecurringAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringAlert
     */
    select?: RecurringAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringAlert
     */
    omit?: RecurringAlertOmit<ExtArgs> | null
    /**
     * The data used to create many RecurringAlerts.
     */
    data: RecurringAlertCreateManyInput | RecurringAlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringAlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecurringAlert update
   */
  export type RecurringAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringAlert
     */
    select?: RecurringAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringAlert
     */
    omit?: RecurringAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a RecurringAlert.
     */
    data: XOR<RecurringAlertUpdateInput, RecurringAlertUncheckedUpdateInput>
    /**
     * Choose, which RecurringAlert to update.
     */
    where: RecurringAlertWhereUniqueInput
  }

  /**
   * RecurringAlert updateMany
   */
  export type RecurringAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecurringAlerts.
     */
    data: XOR<RecurringAlertUpdateManyMutationInput, RecurringAlertUncheckedUpdateManyInput>
    /**
     * Filter which RecurringAlerts to update
     */
    where?: RecurringAlertWhereInput
    /**
     * Limit how many RecurringAlerts to update.
     */
    limit?: number
  }

  /**
   * RecurringAlert updateManyAndReturn
   */
  export type RecurringAlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringAlert
     */
    select?: RecurringAlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringAlert
     */
    omit?: RecurringAlertOmit<ExtArgs> | null
    /**
     * The data used to update RecurringAlerts.
     */
    data: XOR<RecurringAlertUpdateManyMutationInput, RecurringAlertUncheckedUpdateManyInput>
    /**
     * Filter which RecurringAlerts to update
     */
    where?: RecurringAlertWhereInput
    /**
     * Limit how many RecurringAlerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringAlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecurringAlert upsert
   */
  export type RecurringAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringAlert
     */
    select?: RecurringAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringAlert
     */
    omit?: RecurringAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the RecurringAlert to update in case it exists.
     */
    where: RecurringAlertWhereUniqueInput
    /**
     * In case the RecurringAlert found by the `where` argument doesn't exist, create a new RecurringAlert with this data.
     */
    create: XOR<RecurringAlertCreateInput, RecurringAlertUncheckedCreateInput>
    /**
     * In case the RecurringAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecurringAlertUpdateInput, RecurringAlertUncheckedUpdateInput>
  }

  /**
   * RecurringAlert delete
   */
  export type RecurringAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringAlert
     */
    select?: RecurringAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringAlert
     */
    omit?: RecurringAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringAlertInclude<ExtArgs> | null
    /**
     * Filter which RecurringAlert to delete.
     */
    where: RecurringAlertWhereUniqueInput
  }

  /**
   * RecurringAlert deleteMany
   */
  export type RecurringAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringAlerts to delete
     */
    where?: RecurringAlertWhereInput
    /**
     * Limit how many RecurringAlerts to delete.
     */
    limit?: number
  }

  /**
   * RecurringAlert without action
   */
  export type RecurringAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringAlert
     */
    select?: RecurringAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringAlert
     */
    omit?: RecurringAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringAlertInclude<ExtArgs> | null
  }


  /**
   * Model BudgetAlert
   */

  export type AggregateBudgetAlert = {
    _count: BudgetAlertCountAggregateOutputType | null
    _avg: BudgetAlertAvgAggregateOutputType | null
    _sum: BudgetAlertSumAggregateOutputType | null
    _min: BudgetAlertMinAggregateOutputType | null
    _max: BudgetAlertMaxAggregateOutputType | null
  }

  export type BudgetAlertAvgAggregateOutputType = {
    thresholdPercentage: number | null
  }

  export type BudgetAlertSumAggregateOutputType = {
    thresholdPercentage: number | null
  }

  export type BudgetAlertMinAggregateOutputType = {
    id: string | null
    userId: string | null
    budgetCategory: string | null
    thresholdPercentage: number | null
    alertSent: boolean | null
    createdAt: Date | null
  }

  export type BudgetAlertMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    budgetCategory: string | null
    thresholdPercentage: number | null
    alertSent: boolean | null
    createdAt: Date | null
  }

  export type BudgetAlertCountAggregateOutputType = {
    id: number
    userId: number
    budgetCategory: number
    thresholdPercentage: number
    alertSent: number
    createdAt: number
    _all: number
  }


  export type BudgetAlertAvgAggregateInputType = {
    thresholdPercentage?: true
  }

  export type BudgetAlertSumAggregateInputType = {
    thresholdPercentage?: true
  }

  export type BudgetAlertMinAggregateInputType = {
    id?: true
    userId?: true
    budgetCategory?: true
    thresholdPercentage?: true
    alertSent?: true
    createdAt?: true
  }

  export type BudgetAlertMaxAggregateInputType = {
    id?: true
    userId?: true
    budgetCategory?: true
    thresholdPercentage?: true
    alertSent?: true
    createdAt?: true
  }

  export type BudgetAlertCountAggregateInputType = {
    id?: true
    userId?: true
    budgetCategory?: true
    thresholdPercentage?: true
    alertSent?: true
    createdAt?: true
    _all?: true
  }

  export type BudgetAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BudgetAlert to aggregate.
     */
    where?: BudgetAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetAlerts to fetch.
     */
    orderBy?: BudgetAlertOrderByWithRelationInput | BudgetAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BudgetAlerts
    **/
    _count?: true | BudgetAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetAlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetAlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetAlertMaxAggregateInputType
  }

  export type GetBudgetAlertAggregateType<T extends BudgetAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateBudgetAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudgetAlert[P]>
      : GetScalarType<T[P], AggregateBudgetAlert[P]>
  }




  export type BudgetAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetAlertWhereInput
    orderBy?: BudgetAlertOrderByWithAggregationInput | BudgetAlertOrderByWithAggregationInput[]
    by: BudgetAlertScalarFieldEnum[] | BudgetAlertScalarFieldEnum
    having?: BudgetAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetAlertCountAggregateInputType | true
    _avg?: BudgetAlertAvgAggregateInputType
    _sum?: BudgetAlertSumAggregateInputType
    _min?: BudgetAlertMinAggregateInputType
    _max?: BudgetAlertMaxAggregateInputType
  }

  export type BudgetAlertGroupByOutputType = {
    id: string
    userId: string
    budgetCategory: string
    thresholdPercentage: number
    alertSent: boolean
    createdAt: Date
    _count: BudgetAlertCountAggregateOutputType | null
    _avg: BudgetAlertAvgAggregateOutputType | null
    _sum: BudgetAlertSumAggregateOutputType | null
    _min: BudgetAlertMinAggregateOutputType | null
    _max: BudgetAlertMaxAggregateOutputType | null
  }

  type GetBudgetAlertGroupByPayload<T extends BudgetAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetAlertGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetAlertGroupByOutputType[P]>
        }
      >
    >


  export type BudgetAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    budgetCategory?: boolean
    thresholdPercentage?: boolean
    alertSent?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budgetAlert"]>

  export type BudgetAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    budgetCategory?: boolean
    thresholdPercentage?: boolean
    alertSent?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budgetAlert"]>

  export type BudgetAlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    budgetCategory?: boolean
    thresholdPercentage?: boolean
    alertSent?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budgetAlert"]>

  export type BudgetAlertSelectScalar = {
    id?: boolean
    userId?: boolean
    budgetCategory?: boolean
    thresholdPercentage?: boolean
    alertSent?: boolean
    createdAt?: boolean
  }

  export type BudgetAlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "budgetCategory" | "thresholdPercentage" | "alertSent" | "createdAt", ExtArgs["result"]["budgetAlert"]>
  export type BudgetAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BudgetAlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BudgetAlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BudgetAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BudgetAlert"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      budgetCategory: string
      thresholdPercentage: number
      alertSent: boolean
      createdAt: Date
    }, ExtArgs["result"]["budgetAlert"]>
    composites: {}
  }

  type BudgetAlertGetPayload<S extends boolean | null | undefined | BudgetAlertDefaultArgs> = $Result.GetResult<Prisma.$BudgetAlertPayload, S>

  type BudgetAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BudgetAlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BudgetAlertCountAggregateInputType | true
    }

  export interface BudgetAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BudgetAlert'], meta: { name: 'BudgetAlert' } }
    /**
     * Find zero or one BudgetAlert that matches the filter.
     * @param {BudgetAlertFindUniqueArgs} args - Arguments to find a BudgetAlert
     * @example
     * // Get one BudgetAlert
     * const budgetAlert = await prisma.budgetAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BudgetAlertFindUniqueArgs>(args: SelectSubset<T, BudgetAlertFindUniqueArgs<ExtArgs>>): Prisma__BudgetAlertClient<$Result.GetResult<Prisma.$BudgetAlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BudgetAlert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BudgetAlertFindUniqueOrThrowArgs} args - Arguments to find a BudgetAlert
     * @example
     * // Get one BudgetAlert
     * const budgetAlert = await prisma.budgetAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BudgetAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, BudgetAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BudgetAlertClient<$Result.GetResult<Prisma.$BudgetAlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BudgetAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAlertFindFirstArgs} args - Arguments to find a BudgetAlert
     * @example
     * // Get one BudgetAlert
     * const budgetAlert = await prisma.budgetAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BudgetAlertFindFirstArgs>(args?: SelectSubset<T, BudgetAlertFindFirstArgs<ExtArgs>>): Prisma__BudgetAlertClient<$Result.GetResult<Prisma.$BudgetAlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BudgetAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAlertFindFirstOrThrowArgs} args - Arguments to find a BudgetAlert
     * @example
     * // Get one BudgetAlert
     * const budgetAlert = await prisma.budgetAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BudgetAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, BudgetAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__BudgetAlertClient<$Result.GetResult<Prisma.$BudgetAlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BudgetAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BudgetAlerts
     * const budgetAlerts = await prisma.budgetAlert.findMany()
     * 
     * // Get first 10 BudgetAlerts
     * const budgetAlerts = await prisma.budgetAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetAlertWithIdOnly = await prisma.budgetAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BudgetAlertFindManyArgs>(args?: SelectSubset<T, BudgetAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BudgetAlert.
     * @param {BudgetAlertCreateArgs} args - Arguments to create a BudgetAlert.
     * @example
     * // Create one BudgetAlert
     * const BudgetAlert = await prisma.budgetAlert.create({
     *   data: {
     *     // ... data to create a BudgetAlert
     *   }
     * })
     * 
     */
    create<T extends BudgetAlertCreateArgs>(args: SelectSubset<T, BudgetAlertCreateArgs<ExtArgs>>): Prisma__BudgetAlertClient<$Result.GetResult<Prisma.$BudgetAlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BudgetAlerts.
     * @param {BudgetAlertCreateManyArgs} args - Arguments to create many BudgetAlerts.
     * @example
     * // Create many BudgetAlerts
     * const budgetAlert = await prisma.budgetAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BudgetAlertCreateManyArgs>(args?: SelectSubset<T, BudgetAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BudgetAlerts and returns the data saved in the database.
     * @param {BudgetAlertCreateManyAndReturnArgs} args - Arguments to create many BudgetAlerts.
     * @example
     * // Create many BudgetAlerts
     * const budgetAlert = await prisma.budgetAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BudgetAlerts and only return the `id`
     * const budgetAlertWithIdOnly = await prisma.budgetAlert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BudgetAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, BudgetAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetAlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BudgetAlert.
     * @param {BudgetAlertDeleteArgs} args - Arguments to delete one BudgetAlert.
     * @example
     * // Delete one BudgetAlert
     * const BudgetAlert = await prisma.budgetAlert.delete({
     *   where: {
     *     // ... filter to delete one BudgetAlert
     *   }
     * })
     * 
     */
    delete<T extends BudgetAlertDeleteArgs>(args: SelectSubset<T, BudgetAlertDeleteArgs<ExtArgs>>): Prisma__BudgetAlertClient<$Result.GetResult<Prisma.$BudgetAlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BudgetAlert.
     * @param {BudgetAlertUpdateArgs} args - Arguments to update one BudgetAlert.
     * @example
     * // Update one BudgetAlert
     * const budgetAlert = await prisma.budgetAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BudgetAlertUpdateArgs>(args: SelectSubset<T, BudgetAlertUpdateArgs<ExtArgs>>): Prisma__BudgetAlertClient<$Result.GetResult<Prisma.$BudgetAlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BudgetAlerts.
     * @param {BudgetAlertDeleteManyArgs} args - Arguments to filter BudgetAlerts to delete.
     * @example
     * // Delete a few BudgetAlerts
     * const { count } = await prisma.budgetAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BudgetAlertDeleteManyArgs>(args?: SelectSubset<T, BudgetAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BudgetAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BudgetAlerts
     * const budgetAlert = await prisma.budgetAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BudgetAlertUpdateManyArgs>(args: SelectSubset<T, BudgetAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BudgetAlerts and returns the data updated in the database.
     * @param {BudgetAlertUpdateManyAndReturnArgs} args - Arguments to update many BudgetAlerts.
     * @example
     * // Update many BudgetAlerts
     * const budgetAlert = await prisma.budgetAlert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BudgetAlerts and only return the `id`
     * const budgetAlertWithIdOnly = await prisma.budgetAlert.updateManyAndReturn({
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
    updateManyAndReturn<T extends BudgetAlertUpdateManyAndReturnArgs>(args: SelectSubset<T, BudgetAlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetAlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BudgetAlert.
     * @param {BudgetAlertUpsertArgs} args - Arguments to update or create a BudgetAlert.
     * @example
     * // Update or create a BudgetAlert
     * const budgetAlert = await prisma.budgetAlert.upsert({
     *   create: {
     *     // ... data to create a BudgetAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BudgetAlert we want to update
     *   }
     * })
     */
    upsert<T extends BudgetAlertUpsertArgs>(args: SelectSubset<T, BudgetAlertUpsertArgs<ExtArgs>>): Prisma__BudgetAlertClient<$Result.GetResult<Prisma.$BudgetAlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BudgetAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAlertCountArgs} args - Arguments to filter BudgetAlerts to count.
     * @example
     * // Count the number of BudgetAlerts
     * const count = await prisma.budgetAlert.count({
     *   where: {
     *     // ... the filter for the BudgetAlerts we want to count
     *   }
     * })
    **/
    count<T extends BudgetAlertCountArgs>(
      args?: Subset<T, BudgetAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BudgetAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BudgetAlertAggregateArgs>(args: Subset<T, BudgetAlertAggregateArgs>): Prisma.PrismaPromise<GetBudgetAlertAggregateType<T>>

    /**
     * Group by BudgetAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAlertGroupByArgs} args - Group by arguments.
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
      T extends BudgetAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetAlertGroupByArgs['orderBy'] }
        : { orderBy?: BudgetAlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BudgetAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BudgetAlert model
   */
  readonly fields: BudgetAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BudgetAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BudgetAlert model
   */
  interface BudgetAlertFieldRefs {
    readonly id: FieldRef<"BudgetAlert", 'String'>
    readonly userId: FieldRef<"BudgetAlert", 'String'>
    readonly budgetCategory: FieldRef<"BudgetAlert", 'String'>
    readonly thresholdPercentage: FieldRef<"BudgetAlert", 'Int'>
    readonly alertSent: FieldRef<"BudgetAlert", 'Boolean'>
    readonly createdAt: FieldRef<"BudgetAlert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BudgetAlert findUnique
   */
  export type BudgetAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetAlert
     */
    select?: BudgetAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetAlert
     */
    omit?: BudgetAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetAlertInclude<ExtArgs> | null
    /**
     * Filter, which BudgetAlert to fetch.
     */
    where: BudgetAlertWhereUniqueInput
  }

  /**
   * BudgetAlert findUniqueOrThrow
   */
  export type BudgetAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetAlert
     */
    select?: BudgetAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetAlert
     */
    omit?: BudgetAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetAlertInclude<ExtArgs> | null
    /**
     * Filter, which BudgetAlert to fetch.
     */
    where: BudgetAlertWhereUniqueInput
  }

  /**
   * BudgetAlert findFirst
   */
  export type BudgetAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetAlert
     */
    select?: BudgetAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetAlert
     */
    omit?: BudgetAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetAlertInclude<ExtArgs> | null
    /**
     * Filter, which BudgetAlert to fetch.
     */
    where?: BudgetAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetAlerts to fetch.
     */
    orderBy?: BudgetAlertOrderByWithRelationInput | BudgetAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BudgetAlerts.
     */
    cursor?: BudgetAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BudgetAlerts.
     */
    distinct?: BudgetAlertScalarFieldEnum | BudgetAlertScalarFieldEnum[]
  }

  /**
   * BudgetAlert findFirstOrThrow
   */
  export type BudgetAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetAlert
     */
    select?: BudgetAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetAlert
     */
    omit?: BudgetAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetAlertInclude<ExtArgs> | null
    /**
     * Filter, which BudgetAlert to fetch.
     */
    where?: BudgetAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetAlerts to fetch.
     */
    orderBy?: BudgetAlertOrderByWithRelationInput | BudgetAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BudgetAlerts.
     */
    cursor?: BudgetAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BudgetAlerts.
     */
    distinct?: BudgetAlertScalarFieldEnum | BudgetAlertScalarFieldEnum[]
  }

  /**
   * BudgetAlert findMany
   */
  export type BudgetAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetAlert
     */
    select?: BudgetAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetAlert
     */
    omit?: BudgetAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetAlertInclude<ExtArgs> | null
    /**
     * Filter, which BudgetAlerts to fetch.
     */
    where?: BudgetAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetAlerts to fetch.
     */
    orderBy?: BudgetAlertOrderByWithRelationInput | BudgetAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BudgetAlerts.
     */
    cursor?: BudgetAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetAlerts.
     */
    skip?: number
    distinct?: BudgetAlertScalarFieldEnum | BudgetAlertScalarFieldEnum[]
  }

  /**
   * BudgetAlert create
   */
  export type BudgetAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetAlert
     */
    select?: BudgetAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetAlert
     */
    omit?: BudgetAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a BudgetAlert.
     */
    data: XOR<BudgetAlertCreateInput, BudgetAlertUncheckedCreateInput>
  }

  /**
   * BudgetAlert createMany
   */
  export type BudgetAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BudgetAlerts.
     */
    data: BudgetAlertCreateManyInput | BudgetAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BudgetAlert createManyAndReturn
   */
  export type BudgetAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetAlert
     */
    select?: BudgetAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetAlert
     */
    omit?: BudgetAlertOmit<ExtArgs> | null
    /**
     * The data used to create many BudgetAlerts.
     */
    data: BudgetAlertCreateManyInput | BudgetAlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetAlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BudgetAlert update
   */
  export type BudgetAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetAlert
     */
    select?: BudgetAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetAlert
     */
    omit?: BudgetAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a BudgetAlert.
     */
    data: XOR<BudgetAlertUpdateInput, BudgetAlertUncheckedUpdateInput>
    /**
     * Choose, which BudgetAlert to update.
     */
    where: BudgetAlertWhereUniqueInput
  }

  /**
   * BudgetAlert updateMany
   */
  export type BudgetAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BudgetAlerts.
     */
    data: XOR<BudgetAlertUpdateManyMutationInput, BudgetAlertUncheckedUpdateManyInput>
    /**
     * Filter which BudgetAlerts to update
     */
    where?: BudgetAlertWhereInput
    /**
     * Limit how many BudgetAlerts to update.
     */
    limit?: number
  }

  /**
   * BudgetAlert updateManyAndReturn
   */
  export type BudgetAlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetAlert
     */
    select?: BudgetAlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetAlert
     */
    omit?: BudgetAlertOmit<ExtArgs> | null
    /**
     * The data used to update BudgetAlerts.
     */
    data: XOR<BudgetAlertUpdateManyMutationInput, BudgetAlertUncheckedUpdateManyInput>
    /**
     * Filter which BudgetAlerts to update
     */
    where?: BudgetAlertWhereInput
    /**
     * Limit how many BudgetAlerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetAlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BudgetAlert upsert
   */
  export type BudgetAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetAlert
     */
    select?: BudgetAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetAlert
     */
    omit?: BudgetAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the BudgetAlert to update in case it exists.
     */
    where: BudgetAlertWhereUniqueInput
    /**
     * In case the BudgetAlert found by the `where` argument doesn't exist, create a new BudgetAlert with this data.
     */
    create: XOR<BudgetAlertCreateInput, BudgetAlertUncheckedCreateInput>
    /**
     * In case the BudgetAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetAlertUpdateInput, BudgetAlertUncheckedUpdateInput>
  }

  /**
   * BudgetAlert delete
   */
  export type BudgetAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetAlert
     */
    select?: BudgetAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetAlert
     */
    omit?: BudgetAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetAlertInclude<ExtArgs> | null
    /**
     * Filter which BudgetAlert to delete.
     */
    where: BudgetAlertWhereUniqueInput
  }

  /**
   * BudgetAlert deleteMany
   */
  export type BudgetAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BudgetAlerts to delete
     */
    where?: BudgetAlertWhereInput
    /**
     * Limit how many BudgetAlerts to delete.
     */
    limit?: number
  }

  /**
   * BudgetAlert without action
   */
  export type BudgetAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetAlert
     */
    select?: BudgetAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BudgetAlert
     */
    omit?: BudgetAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetAlertInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    type: string | null
    link: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    type: string | null
    link: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    type: number
    link: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    link?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    link?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    link?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    title: string
    message: string
    type: string
    link: string | null
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "type" | "link" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      message: string
      type: string
      link: string | null
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly link: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    avatarUrl: 'avatarUrl',
    currency: 'currency',
    language: 'language',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    accountId: 'accountId',
    initialBalance: 'initialBalance'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PasswordRecoveryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    used: 'used',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type PasswordRecoveryScalarFieldEnum = (typeof PasswordRecoveryScalarFieldEnum)[keyof typeof PasswordRecoveryScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    amount: 'amount',
    createdAt: 'createdAt',
    date: 'date',
    isRecurring: 'isRecurring',
    categoryId: 'categoryId',
    senderId: 'senderId',
    recipientId: 'recipientId',
    userId: 'userId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const RecurringBillScalarFieldEnum: {
    id: 'id',
    description: 'description',
    amount: 'amount',
    recurrenceDay: 'recurrenceDay',
    recurrenceFrequency: 'recurrenceFrequency',
    categoryId: 'categoryId',
    userId: 'userId',
    senderId: 'senderId',
    recipientId: 'recipientId'
  };

  export type RecurringBillScalarFieldEnum = (typeof RecurringBillScalarFieldEnum)[keyof typeof RecurringBillScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const BudgetScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    createdAt: 'createdAt',
    categoryId: 'categoryId',
    themeId: 'themeId',
    userId: 'userId'
  };

  export type BudgetScalarFieldEnum = (typeof BudgetScalarFieldEnum)[keyof typeof BudgetScalarFieldEnum]


  export const PotScalarFieldEnum: {
    id: 'id',
    name: 'name',
    targetAmount: 'targetAmount',
    currentAmount: 'currentAmount',
    userId: 'userId',
    themeId: 'themeId'
  };

  export type PotScalarFieldEnum = (typeof PotScalarFieldEnum)[keyof typeof PotScalarFieldEnum]


  export const ThemeScalarFieldEnum: {
    id: 'id',
    color: 'color',
    description: 'description'
  };

  export type ThemeScalarFieldEnum = (typeof ThemeScalarFieldEnum)[keyof typeof ThemeScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const RecurringAlertScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    transactionId: 'transactionId',
    pattern: 'pattern',
    lastDetectedDate: 'lastDetectedDate',
    alertSent: 'alertSent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecurringAlertScalarFieldEnum = (typeof RecurringAlertScalarFieldEnum)[keyof typeof RecurringAlertScalarFieldEnum]


  export const BudgetAlertScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    budgetCategory: 'budgetCategory',
    thresholdPercentage: 'thresholdPercentage',
    alertSent: 'alertSent',
    createdAt: 'createdAt'
  };

  export type BudgetAlertScalarFieldEnum = (typeof BudgetAlertScalarFieldEnum)[keyof typeof BudgetAlertScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    type: 'type',
    link: 'link',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    currency?: StringFilter<"User"> | string
    language?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accountId?: StringFilter<"User"> | string
    initialBalance?: FloatNullableFilter<"User"> | number | null
    transactions?: TransactionListRelationFilter
    sentTransactions?: TransactionListRelationFilter
    receivedTransactions?: TransactionListRelationFilter
    budgets?: BudgetListRelationFilter
    pots?: PotListRelationFilter
    recurringBills?: RecurringBillListRelationFilter
    sentRecurringBills?: RecurringBillListRelationFilter
    receivedRecurringBills?: RecurringBillListRelationFilter
    accounts?: AccountListRelationFilter
    recurringAlerts?: RecurringAlertListRelationFilter
    budgetAlerts?: BudgetAlertListRelationFilter
    notifications?: NotificationListRelationFilter
    passwordRecoveries?: PasswordRecoveryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    currency?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    initialBalance?: SortOrderInput | SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
    sentTransactions?: TransactionOrderByRelationAggregateInput
    receivedTransactions?: TransactionOrderByRelationAggregateInput
    budgets?: BudgetOrderByRelationAggregateInput
    pots?: PotOrderByRelationAggregateInput
    recurringBills?: RecurringBillOrderByRelationAggregateInput
    sentRecurringBills?: RecurringBillOrderByRelationAggregateInput
    receivedRecurringBills?: RecurringBillOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    recurringAlerts?: RecurringAlertOrderByRelationAggregateInput
    budgetAlerts?: BudgetAlertOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    passwordRecoveries?: PasswordRecoveryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    accountId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    currency?: StringFilter<"User"> | string
    language?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    initialBalance?: FloatNullableFilter<"User"> | number | null
    transactions?: TransactionListRelationFilter
    sentTransactions?: TransactionListRelationFilter
    receivedTransactions?: TransactionListRelationFilter
    budgets?: BudgetListRelationFilter
    pots?: PotListRelationFilter
    recurringBills?: RecurringBillListRelationFilter
    sentRecurringBills?: RecurringBillListRelationFilter
    receivedRecurringBills?: RecurringBillListRelationFilter
    accounts?: AccountListRelationFilter
    recurringAlerts?: RecurringAlertListRelationFilter
    budgetAlerts?: BudgetAlertListRelationFilter
    notifications?: NotificationListRelationFilter
    passwordRecoveries?: PasswordRecoveryListRelationFilter
  }, "id" | "email" | "accountId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    currency?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    initialBalance?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    currency?: StringWithAggregatesFilter<"User"> | string
    language?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    accountId?: StringWithAggregatesFilter<"User"> | string
    initialBalance?: FloatNullableWithAggregatesFilter<"User"> | number | null
  }

  export type PasswordRecoveryWhereInput = {
    AND?: PasswordRecoveryWhereInput | PasswordRecoveryWhereInput[]
    OR?: PasswordRecoveryWhereInput[]
    NOT?: PasswordRecoveryWhereInput | PasswordRecoveryWhereInput[]
    id?: StringFilter<"PasswordRecovery"> | string
    userId?: StringFilter<"PasswordRecovery"> | string
    token?: StringFilter<"PasswordRecovery"> | string
    used?: BoolFilter<"PasswordRecovery"> | boolean
    createdAt?: DateTimeFilter<"PasswordRecovery"> | Date | string
    expiresAt?: DateTimeFilter<"PasswordRecovery"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordRecoveryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordRecoveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: PasswordRecoveryWhereInput | PasswordRecoveryWhereInput[]
    OR?: PasswordRecoveryWhereInput[]
    NOT?: PasswordRecoveryWhereInput | PasswordRecoveryWhereInput[]
    userId?: StringFilter<"PasswordRecovery"> | string
    used?: BoolFilter<"PasswordRecovery"> | boolean
    createdAt?: DateTimeFilter<"PasswordRecovery"> | Date | string
    expiresAt?: DateTimeFilter<"PasswordRecovery"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type PasswordRecoveryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: PasswordRecoveryCountOrderByAggregateInput
    _max?: PasswordRecoveryMaxOrderByAggregateInput
    _min?: PasswordRecoveryMinOrderByAggregateInput
  }

  export type PasswordRecoveryScalarWhereWithAggregatesInput = {
    AND?: PasswordRecoveryScalarWhereWithAggregatesInput | PasswordRecoveryScalarWhereWithAggregatesInput[]
    OR?: PasswordRecoveryScalarWhereWithAggregatesInput[]
    NOT?: PasswordRecoveryScalarWhereWithAggregatesInput | PasswordRecoveryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordRecovery"> | string
    userId?: StringWithAggregatesFilter<"PasswordRecovery"> | string
    token?: StringWithAggregatesFilter<"PasswordRecovery"> | string
    used?: BoolWithAggregatesFilter<"PasswordRecovery"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PasswordRecovery"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordRecovery"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    description?: StringNullableFilter<"Transaction"> | string | null
    amount?: FloatFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    isRecurring?: BoolFilter<"Transaction"> | boolean
    categoryId?: StringNullableFilter<"Transaction"> | string | null
    senderId?: StringNullableFilter<"Transaction"> | string | null
    recipientId?: StringNullableFilter<"Transaction"> | string | null
    userId?: StringFilter<"Transaction"> | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    recipient?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    isRecurring?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    senderId?: SortOrderInput | SortOrder
    recipientId?: SortOrderInput | SortOrder
    userId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    description?: StringNullableFilter<"Transaction"> | string | null
    amount?: FloatFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    isRecurring?: BoolFilter<"Transaction"> | boolean
    categoryId?: StringNullableFilter<"Transaction"> | string | null
    senderId?: StringNullableFilter<"Transaction"> | string | null
    recipientId?: StringNullableFilter<"Transaction"> | string | null
    userId?: StringFilter<"Transaction"> | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    recipient?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    isRecurring?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    senderId?: SortOrderInput | SortOrder
    recipientId?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    description?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    isRecurring?: BoolWithAggregatesFilter<"Transaction"> | boolean
    categoryId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    senderId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    recipientId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    userId?: StringWithAggregatesFilter<"Transaction"> | string
  }

  export type RecurringBillWhereInput = {
    AND?: RecurringBillWhereInput | RecurringBillWhereInput[]
    OR?: RecurringBillWhereInput[]
    NOT?: RecurringBillWhereInput | RecurringBillWhereInput[]
    id?: StringFilter<"RecurringBill"> | string
    description?: StringNullableFilter<"RecurringBill"> | string | null
    amount?: FloatFilter<"RecurringBill"> | number
    recurrenceDay?: IntNullableFilter<"RecurringBill"> | number | null
    recurrenceFrequency?: StringNullableFilter<"RecurringBill"> | string | null
    categoryId?: StringNullableFilter<"RecurringBill"> | string | null
    userId?: StringFilter<"RecurringBill"> | string
    senderId?: StringNullableFilter<"RecurringBill"> | string | null
    recipientId?: StringNullableFilter<"RecurringBill"> | string | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    recipient?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type RecurringBillOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    recurrenceDay?: SortOrderInput | SortOrder
    recurrenceFrequency?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    userId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    recipientId?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
  }

  export type RecurringBillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecurringBillWhereInput | RecurringBillWhereInput[]
    OR?: RecurringBillWhereInput[]
    NOT?: RecurringBillWhereInput | RecurringBillWhereInput[]
    description?: StringNullableFilter<"RecurringBill"> | string | null
    amount?: FloatFilter<"RecurringBill"> | number
    recurrenceDay?: IntNullableFilter<"RecurringBill"> | number | null
    recurrenceFrequency?: StringNullableFilter<"RecurringBill"> | string | null
    categoryId?: StringNullableFilter<"RecurringBill"> | string | null
    userId?: StringFilter<"RecurringBill"> | string
    senderId?: StringNullableFilter<"RecurringBill"> | string | null
    recipientId?: StringNullableFilter<"RecurringBill"> | string | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    recipient?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type RecurringBillOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    recurrenceDay?: SortOrderInput | SortOrder
    recurrenceFrequency?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    userId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    recipientId?: SortOrderInput | SortOrder
    _count?: RecurringBillCountOrderByAggregateInput
    _avg?: RecurringBillAvgOrderByAggregateInput
    _max?: RecurringBillMaxOrderByAggregateInput
    _min?: RecurringBillMinOrderByAggregateInput
    _sum?: RecurringBillSumOrderByAggregateInput
  }

  export type RecurringBillScalarWhereWithAggregatesInput = {
    AND?: RecurringBillScalarWhereWithAggregatesInput | RecurringBillScalarWhereWithAggregatesInput[]
    OR?: RecurringBillScalarWhereWithAggregatesInput[]
    NOT?: RecurringBillScalarWhereWithAggregatesInput | RecurringBillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecurringBill"> | string
    description?: StringNullableWithAggregatesFilter<"RecurringBill"> | string | null
    amount?: FloatWithAggregatesFilter<"RecurringBill"> | number
    recurrenceDay?: IntNullableWithAggregatesFilter<"RecurringBill"> | number | null
    recurrenceFrequency?: StringNullableWithAggregatesFilter<"RecurringBill"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"RecurringBill"> | string | null
    userId?: StringWithAggregatesFilter<"RecurringBill"> | string
    senderId?: StringNullableWithAggregatesFilter<"RecurringBill"> | string | null
    recipientId?: StringNullableWithAggregatesFilter<"RecurringBill"> | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    transactions?: TransactionListRelationFilter
    budgets?: BudgetListRelationFilter
    recurringBills?: RecurringBillListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
    budgets?: BudgetOrderByRelationAggregateInput
    recurringBills?: RecurringBillOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    transactions?: TransactionListRelationFilter
    budgets?: BudgetListRelationFilter
    recurringBills?: RecurringBillListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type BudgetWhereInput = {
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    id?: StringFilter<"Budget"> | string
    amount?: FloatFilter<"Budget"> | number
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    categoryId?: StringFilter<"Budget"> | string
    themeId?: StringNullableFilter<"Budget"> | string | null
    userId?: StringFilter<"Budget"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    theme?: XOR<ThemeNullableScalarRelationFilter, ThemeWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BudgetOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    themeId?: SortOrderInput | SortOrder
    userId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    theme?: ThemeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    amount?: FloatFilter<"Budget"> | number
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    categoryId?: StringFilter<"Budget"> | string
    themeId?: StringNullableFilter<"Budget"> | string | null
    userId?: StringFilter<"Budget"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    theme?: XOR<ThemeNullableScalarRelationFilter, ThemeWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BudgetOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    themeId?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: BudgetCountOrderByAggregateInput
    _avg?: BudgetAvgOrderByAggregateInput
    _max?: BudgetMaxOrderByAggregateInput
    _min?: BudgetMinOrderByAggregateInput
    _sum?: BudgetSumOrderByAggregateInput
  }

  export type BudgetScalarWhereWithAggregatesInput = {
    AND?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    OR?: BudgetScalarWhereWithAggregatesInput[]
    NOT?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Budget"> | string
    amount?: FloatWithAggregatesFilter<"Budget"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
    categoryId?: StringWithAggregatesFilter<"Budget"> | string
    themeId?: StringNullableWithAggregatesFilter<"Budget"> | string | null
    userId?: StringWithAggregatesFilter<"Budget"> | string
  }

  export type PotWhereInput = {
    AND?: PotWhereInput | PotWhereInput[]
    OR?: PotWhereInput[]
    NOT?: PotWhereInput | PotWhereInput[]
    id?: StringFilter<"Pot"> | string
    name?: StringFilter<"Pot"> | string
    targetAmount?: FloatFilter<"Pot"> | number
    currentAmount?: FloatFilter<"Pot"> | number
    userId?: StringFilter<"Pot"> | string
    themeId?: StringNullableFilter<"Pot"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    theme?: XOR<ThemeNullableScalarRelationFilter, ThemeWhereInput> | null
  }

  export type PotOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    userId?: SortOrder
    themeId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    theme?: ThemeOrderByWithRelationInput
  }

  export type PotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PotWhereInput | PotWhereInput[]
    OR?: PotWhereInput[]
    NOT?: PotWhereInput | PotWhereInput[]
    name?: StringFilter<"Pot"> | string
    targetAmount?: FloatFilter<"Pot"> | number
    currentAmount?: FloatFilter<"Pot"> | number
    userId?: StringFilter<"Pot"> | string
    themeId?: StringNullableFilter<"Pot"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    theme?: XOR<ThemeNullableScalarRelationFilter, ThemeWhereInput> | null
  }, "id">

  export type PotOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    userId?: SortOrder
    themeId?: SortOrderInput | SortOrder
    _count?: PotCountOrderByAggregateInput
    _avg?: PotAvgOrderByAggregateInput
    _max?: PotMaxOrderByAggregateInput
    _min?: PotMinOrderByAggregateInput
    _sum?: PotSumOrderByAggregateInput
  }

  export type PotScalarWhereWithAggregatesInput = {
    AND?: PotScalarWhereWithAggregatesInput | PotScalarWhereWithAggregatesInput[]
    OR?: PotScalarWhereWithAggregatesInput[]
    NOT?: PotScalarWhereWithAggregatesInput | PotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pot"> | string
    name?: StringWithAggregatesFilter<"Pot"> | string
    targetAmount?: FloatWithAggregatesFilter<"Pot"> | number
    currentAmount?: FloatWithAggregatesFilter<"Pot"> | number
    userId?: StringWithAggregatesFilter<"Pot"> | string
    themeId?: StringNullableWithAggregatesFilter<"Pot"> | string | null
  }

  export type ThemeWhereInput = {
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    id?: StringFilter<"Theme"> | string
    color?: StringFilter<"Theme"> | string
    description?: StringNullableFilter<"Theme"> | string | null
    budgets?: BudgetListRelationFilter
    pots?: PotListRelationFilter
  }

  export type ThemeOrderByWithRelationInput = {
    id?: SortOrder
    color?: SortOrder
    description?: SortOrderInput | SortOrder
    budgets?: BudgetOrderByRelationAggregateInput
    pots?: PotOrderByRelationAggregateInput
  }

  export type ThemeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    color?: string
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    description?: StringNullableFilter<"Theme"> | string | null
    budgets?: BudgetListRelationFilter
    pots?: PotListRelationFilter
  }, "id" | "color">

  export type ThemeOrderByWithAggregationInput = {
    id?: SortOrder
    color?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ThemeCountOrderByAggregateInput
    _max?: ThemeMaxOrderByAggregateInput
    _min?: ThemeMinOrderByAggregateInput
  }

  export type ThemeScalarWhereWithAggregatesInput = {
    AND?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    OR?: ThemeScalarWhereWithAggregatesInput[]
    NOT?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Theme"> | string
    color?: StringWithAggregatesFilter<"Theme"> | string
    description?: StringNullableWithAggregatesFilter<"Theme"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type RecurringAlertWhereInput = {
    AND?: RecurringAlertWhereInput | RecurringAlertWhereInput[]
    OR?: RecurringAlertWhereInput[]
    NOT?: RecurringAlertWhereInput | RecurringAlertWhereInput[]
    id?: StringFilter<"RecurringAlert"> | string
    userId?: StringFilter<"RecurringAlert"> | string
    transactionId?: StringNullableFilter<"RecurringAlert"> | string | null
    pattern?: StringFilter<"RecurringAlert"> | string
    lastDetectedDate?: DateTimeFilter<"RecurringAlert"> | Date | string
    alertSent?: BoolFilter<"RecurringAlert"> | boolean
    createdAt?: DateTimeFilter<"RecurringAlert"> | Date | string
    updatedAt?: DateTimeFilter<"RecurringAlert"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RecurringAlertOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    pattern?: SortOrder
    lastDetectedDate?: SortOrder
    alertSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RecurringAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecurringAlertWhereInput | RecurringAlertWhereInput[]
    OR?: RecurringAlertWhereInput[]
    NOT?: RecurringAlertWhereInput | RecurringAlertWhereInput[]
    userId?: StringFilter<"RecurringAlert"> | string
    transactionId?: StringNullableFilter<"RecurringAlert"> | string | null
    pattern?: StringFilter<"RecurringAlert"> | string
    lastDetectedDate?: DateTimeFilter<"RecurringAlert"> | Date | string
    alertSent?: BoolFilter<"RecurringAlert"> | boolean
    createdAt?: DateTimeFilter<"RecurringAlert"> | Date | string
    updatedAt?: DateTimeFilter<"RecurringAlert"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RecurringAlertOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    pattern?: SortOrder
    lastDetectedDate?: SortOrder
    alertSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecurringAlertCountOrderByAggregateInput
    _max?: RecurringAlertMaxOrderByAggregateInput
    _min?: RecurringAlertMinOrderByAggregateInput
  }

  export type RecurringAlertScalarWhereWithAggregatesInput = {
    AND?: RecurringAlertScalarWhereWithAggregatesInput | RecurringAlertScalarWhereWithAggregatesInput[]
    OR?: RecurringAlertScalarWhereWithAggregatesInput[]
    NOT?: RecurringAlertScalarWhereWithAggregatesInput | RecurringAlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecurringAlert"> | string
    userId?: StringWithAggregatesFilter<"RecurringAlert"> | string
    transactionId?: StringNullableWithAggregatesFilter<"RecurringAlert"> | string | null
    pattern?: StringWithAggregatesFilter<"RecurringAlert"> | string
    lastDetectedDate?: DateTimeWithAggregatesFilter<"RecurringAlert"> | Date | string
    alertSent?: BoolWithAggregatesFilter<"RecurringAlert"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RecurringAlert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RecurringAlert"> | Date | string
  }

  export type BudgetAlertWhereInput = {
    AND?: BudgetAlertWhereInput | BudgetAlertWhereInput[]
    OR?: BudgetAlertWhereInput[]
    NOT?: BudgetAlertWhereInput | BudgetAlertWhereInput[]
    id?: StringFilter<"BudgetAlert"> | string
    userId?: StringFilter<"BudgetAlert"> | string
    budgetCategory?: StringFilter<"BudgetAlert"> | string
    thresholdPercentage?: IntFilter<"BudgetAlert"> | number
    alertSent?: BoolFilter<"BudgetAlert"> | boolean
    createdAt?: DateTimeFilter<"BudgetAlert"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BudgetAlertOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    budgetCategory?: SortOrder
    thresholdPercentage?: SortOrder
    alertSent?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BudgetAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_budgetCategory_thresholdPercentage?: BudgetAlertUserIdBudgetCategoryThresholdPercentageCompoundUniqueInput
    AND?: BudgetAlertWhereInput | BudgetAlertWhereInput[]
    OR?: BudgetAlertWhereInput[]
    NOT?: BudgetAlertWhereInput | BudgetAlertWhereInput[]
    userId?: StringFilter<"BudgetAlert"> | string
    budgetCategory?: StringFilter<"BudgetAlert"> | string
    thresholdPercentage?: IntFilter<"BudgetAlert"> | number
    alertSent?: BoolFilter<"BudgetAlert"> | boolean
    createdAt?: DateTimeFilter<"BudgetAlert"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_budgetCategory_thresholdPercentage">

  export type BudgetAlertOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    budgetCategory?: SortOrder
    thresholdPercentage?: SortOrder
    alertSent?: SortOrder
    createdAt?: SortOrder
    _count?: BudgetAlertCountOrderByAggregateInput
    _avg?: BudgetAlertAvgOrderByAggregateInput
    _max?: BudgetAlertMaxOrderByAggregateInput
    _min?: BudgetAlertMinOrderByAggregateInput
    _sum?: BudgetAlertSumOrderByAggregateInput
  }

  export type BudgetAlertScalarWhereWithAggregatesInput = {
    AND?: BudgetAlertScalarWhereWithAggregatesInput | BudgetAlertScalarWhereWithAggregatesInput[]
    OR?: BudgetAlertScalarWhereWithAggregatesInput[]
    NOT?: BudgetAlertScalarWhereWithAggregatesInput | BudgetAlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BudgetAlert"> | string
    userId?: StringWithAggregatesFilter<"BudgetAlert"> | string
    budgetCategory?: StringWithAggregatesFilter<"BudgetAlert"> | string
    thresholdPercentage?: IntWithAggregatesFilter<"BudgetAlert"> | number
    alertSent?: BoolWithAggregatesFilter<"BudgetAlert"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BudgetAlert"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    link?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    link?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    link?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionCreateNestedManyWithoutRecipientInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    pots?: PotCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    pots?: PotUncheckedCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillUncheckedCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertUncheckedCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    pots?: PotUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    pots?: PotUncheckedUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUncheckedUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUncheckedUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUncheckedUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PasswordRecoveryCreateInput = {
    id?: string
    token: string
    used?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutPasswordRecoveriesInput
  }

  export type PasswordRecoveryUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    used?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type PasswordRecoveryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPasswordRecoveriesNestedInput
  }

  export type PasswordRecoveryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordRecoveryCreateManyInput = {
    id?: string
    userId: string
    token: string
    used?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type PasswordRecoveryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordRecoveryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    description?: string | null
    amount: number
    createdAt?: Date | string
    date?: Date | string
    isRecurring?: boolean
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    sender?: UserCreateNestedOneWithoutSentTransactionsInput
    recipient?: UserCreateNestedOneWithoutReceivedTransactionsInput
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    description?: string | null
    amount: number
    createdAt?: Date | string
    date?: Date | string
    isRecurring?: boolean
    categoryId?: string | null
    senderId?: string | null
    recipientId?: string | null
    userId: string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    sender?: UserUpdateOneWithoutSentTransactionsNestedInput
    recipient?: UserUpdateOneWithoutReceivedTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    description?: string | null
    amount: number
    createdAt?: Date | string
    date?: Date | string
    isRecurring?: boolean
    categoryId?: string | null
    senderId?: string | null
    recipientId?: string | null
    userId: string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RecurringBillCreateInput = {
    id?: string
    description?: string | null
    amount: number
    recurrenceDay?: number | null
    recurrenceFrequency?: string | null
    category?: CategoryCreateNestedOneWithoutRecurringBillsInput
    user: UserCreateNestedOneWithoutRecurringBillsInput
    sender?: UserCreateNestedOneWithoutSentRecurringBillsInput
    recipient?: UserCreateNestedOneWithoutReceivedRecurringBillsInput
  }

  export type RecurringBillUncheckedCreateInput = {
    id?: string
    description?: string | null
    amount: number
    recurrenceDay?: number | null
    recurrenceFrequency?: string | null
    categoryId?: string | null
    userId: string
    senderId?: string | null
    recipientId?: string | null
  }

  export type RecurringBillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    recurrenceDay?: NullableIntFieldUpdateOperationsInput | number | null
    recurrenceFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneWithoutRecurringBillsNestedInput
    user?: UserUpdateOneRequiredWithoutRecurringBillsNestedInput
    sender?: UserUpdateOneWithoutSentRecurringBillsNestedInput
    recipient?: UserUpdateOneWithoutReceivedRecurringBillsNestedInput
  }

  export type RecurringBillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    recurrenceDay?: NullableIntFieldUpdateOperationsInput | number | null
    recurrenceFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecurringBillCreateManyInput = {
    id?: string
    description?: string | null
    amount: number
    recurrenceDay?: number | null
    recurrenceFrequency?: string | null
    categoryId?: string | null
    userId: string
    senderId?: string | null
    recipientId?: string | null
  }

  export type RecurringBillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    recurrenceDay?: NullableIntFieldUpdateOperationsInput | number | null
    recurrenceFrequency?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecurringBillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    recurrenceDay?: NullableIntFieldUpdateOperationsInput | number | null
    recurrenceFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    budgets?: BudgetCreateNestedManyWithoutCategoryInput
    recurringBills?: RecurringBillCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutCategoryInput
    recurringBills?: RecurringBillUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    budgets?: BudgetUpdateManyWithoutCategoryNestedInput
    recurringBills?: RecurringBillUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutCategoryNestedInput
    recurringBills?: RecurringBillUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BudgetCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutBudgetsInput
    theme?: ThemeCreateNestedOneWithoutBudgetsInput
    user: UserCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetUncheckedCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    categoryId: string
    themeId?: string | null
    userId: string
  }

  export type BudgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutBudgetsNestedInput
    theme?: ThemeUpdateOneWithoutBudgetsNestedInput
    user?: UserUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type BudgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    themeId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BudgetCreateManyInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    categoryId: string
    themeId?: string | null
    userId: string
  }

  export type BudgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    themeId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PotCreateInput = {
    id?: string
    name: string
    targetAmount: number
    currentAmount?: number
    user: UserCreateNestedOneWithoutPotsInput
    theme?: ThemeCreateNestedOneWithoutPotsInput
  }

  export type PotUncheckedCreateInput = {
    id?: string
    name: string
    targetAmount: number
    currentAmount?: number
    userId: string
    themeId?: string | null
  }

  export type PotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPotsNestedInput
    theme?: ThemeUpdateOneWithoutPotsNestedInput
  }

  export type PotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    themeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PotCreateManyInput = {
    id?: string
    name: string
    targetAmount: number
    currentAmount?: number
    userId: string
    themeId?: string | null
  }

  export type PotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type PotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    themeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ThemeCreateInput = {
    id?: string
    color: string
    description?: string | null
    budgets?: BudgetCreateNestedManyWithoutThemeInput
    pots?: PotCreateNestedManyWithoutThemeInput
  }

  export type ThemeUncheckedCreateInput = {
    id?: string
    color: string
    description?: string | null
    budgets?: BudgetUncheckedCreateNestedManyWithoutThemeInput
    pots?: PotUncheckedCreateNestedManyWithoutThemeInput
  }

  export type ThemeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budgets?: BudgetUpdateManyWithoutThemeNestedInput
    pots?: PotUpdateManyWithoutThemeNestedInput
  }

  export type ThemeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budgets?: BudgetUncheckedUpdateManyWithoutThemeNestedInput
    pots?: PotUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type ThemeCreateManyInput = {
    id?: string
    color: string
    description?: string | null
  }

  export type ThemeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ThemeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringAlertCreateInput = {
    id?: string
    transactionId?: string | null
    pattern: string
    lastDetectedDate: Date | string
    alertSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRecurringAlertsInput
  }

  export type RecurringAlertUncheckedCreateInput = {
    id?: string
    userId: string
    transactionId?: string | null
    pattern: string
    lastDetectedDate: Date | string
    alertSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringAlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    pattern?: StringFieldUpdateOperationsInput | string
    lastDetectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    alertSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecurringAlertsNestedInput
  }

  export type RecurringAlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    pattern?: StringFieldUpdateOperationsInput | string
    lastDetectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    alertSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringAlertCreateManyInput = {
    id?: string
    userId: string
    transactionId?: string | null
    pattern: string
    lastDetectedDate: Date | string
    alertSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringAlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    pattern?: StringFieldUpdateOperationsInput | string
    lastDetectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    alertSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringAlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    pattern?: StringFieldUpdateOperationsInput | string
    lastDetectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    alertSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetAlertCreateInput = {
    id?: string
    budgetCategory: string
    thresholdPercentage: number
    alertSent?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBudgetAlertsInput
  }

  export type BudgetAlertUncheckedCreateInput = {
    id?: string
    userId: string
    budgetCategory: string
    thresholdPercentage: number
    alertSent?: boolean
    createdAt?: Date | string
  }

  export type BudgetAlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetCategory?: StringFieldUpdateOperationsInput | string
    thresholdPercentage?: IntFieldUpdateOperationsInput | number
    alertSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBudgetAlertsNestedInput
  }

  export type BudgetAlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    budgetCategory?: StringFieldUpdateOperationsInput | string
    thresholdPercentage?: IntFieldUpdateOperationsInput | number
    alertSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetAlertCreateManyInput = {
    id?: string
    userId: string
    budgetCategory: string
    thresholdPercentage: number
    alertSent?: boolean
    createdAt?: Date | string
  }

  export type BudgetAlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetCategory?: StringFieldUpdateOperationsInput | string
    thresholdPercentage?: IntFieldUpdateOperationsInput | number
    alertSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetAlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    budgetCategory?: StringFieldUpdateOperationsInput | string
    thresholdPercentage?: IntFieldUpdateOperationsInput | number
    alertSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    type: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    message: string
    type: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    title: string
    message: string
    type: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type BudgetListRelationFilter = {
    every?: BudgetWhereInput
    some?: BudgetWhereInput
    none?: BudgetWhereInput
  }

  export type PotListRelationFilter = {
    every?: PotWhereInput
    some?: PotWhereInput
    none?: PotWhereInput
  }

  export type RecurringBillListRelationFilter = {
    every?: RecurringBillWhereInput
    some?: RecurringBillWhereInput
    none?: RecurringBillWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type RecurringAlertListRelationFilter = {
    every?: RecurringAlertWhereInput
    some?: RecurringAlertWhereInput
    none?: RecurringAlertWhereInput
  }

  export type BudgetAlertListRelationFilter = {
    every?: BudgetAlertWhereInput
    some?: BudgetAlertWhereInput
    none?: BudgetAlertWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type PasswordRecoveryListRelationFilter = {
    every?: PasswordRecoveryWhereInput
    some?: PasswordRecoveryWhereInput
    none?: PasswordRecoveryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BudgetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecurringBillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecurringAlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BudgetAlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordRecoveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    currency?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    initialBalance?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    initialBalance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    currency?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    initialBalance?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    currency?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    initialBalance?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    initialBalance?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PasswordRecoveryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type PasswordRecoveryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type PasswordRecoveryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    isRecurring?: SortOrder
    categoryId?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    userId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    isRecurring?: SortOrder
    categoryId?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    userId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    date?: SortOrder
    isRecurring?: SortOrder
    categoryId?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
    userId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type RecurringBillCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    recurrenceDay?: SortOrder
    recurrenceFrequency?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
  }

  export type RecurringBillAvgOrderByAggregateInput = {
    amount?: SortOrder
    recurrenceDay?: SortOrder
  }

  export type RecurringBillMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    recurrenceDay?: SortOrder
    recurrenceFrequency?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
  }

  export type RecurringBillMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    recurrenceDay?: SortOrder
    recurrenceFrequency?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    senderId?: SortOrder
    recipientId?: SortOrder
  }

  export type RecurringBillSumOrderByAggregateInput = {
    amount?: SortOrder
    recurrenceDay?: SortOrder
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

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ThemeNullableScalarRelationFilter = {
    is?: ThemeWhereInput | null
    isNot?: ThemeWhereInput | null
  }

  export type BudgetCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    themeId?: SortOrder
    userId?: SortOrder
  }

  export type BudgetAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    themeId?: SortOrder
    userId?: SortOrder
  }

  export type BudgetMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    themeId?: SortOrder
    userId?: SortOrder
  }

  export type BudgetSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PotCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    userId?: SortOrder
    themeId?: SortOrder
  }

  export type PotAvgOrderByAggregateInput = {
    targetAmount?: SortOrder
    currentAmount?: SortOrder
  }

  export type PotMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    userId?: SortOrder
    themeId?: SortOrder
  }

  export type PotMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    userId?: SortOrder
    themeId?: SortOrder
  }

  export type PotSumOrderByAggregateInput = {
    targetAmount?: SortOrder
    currentAmount?: SortOrder
  }

  export type ThemeCountOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    description?: SortOrder
  }

  export type ThemeMaxOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    description?: SortOrder
  }

  export type ThemeMinOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    description?: SortOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type RecurringAlertCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    pattern?: SortOrder
    lastDetectedDate?: SortOrder
    alertSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurringAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    pattern?: SortOrder
    lastDetectedDate?: SortOrder
    alertSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurringAlertMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    pattern?: SortOrder
    lastDetectedDate?: SortOrder
    alertSent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BudgetAlertUserIdBudgetCategoryThresholdPercentageCompoundUniqueInput = {
    userId: string
    budgetCategory: string
    thresholdPercentage: number
  }

  export type BudgetAlertCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    budgetCategory?: SortOrder
    thresholdPercentage?: SortOrder
    alertSent?: SortOrder
    createdAt?: SortOrder
  }

  export type BudgetAlertAvgOrderByAggregateInput = {
    thresholdPercentage?: SortOrder
  }

  export type BudgetAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    budgetCategory?: SortOrder
    thresholdPercentage?: SortOrder
    alertSent?: SortOrder
    createdAt?: SortOrder
  }

  export type BudgetAlertMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    budgetCategory?: SortOrder
    thresholdPercentage?: SortOrder
    alertSent?: SortOrder
    createdAt?: SortOrder
  }

  export type BudgetAlertSumOrderByAggregateInput = {
    thresholdPercentage?: SortOrder
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

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutSenderInput = {
    create?: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput> | TransactionCreateWithoutSenderInput[] | TransactionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSenderInput | TransactionCreateOrConnectWithoutSenderInput[]
    createMany?: TransactionCreateManySenderInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutRecipientInput = {
    create?: XOR<TransactionCreateWithoutRecipientInput, TransactionUncheckedCreateWithoutRecipientInput> | TransactionCreateWithoutRecipientInput[] | TransactionUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutRecipientInput | TransactionCreateOrConnectWithoutRecipientInput[]
    createMany?: TransactionCreateManyRecipientInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BudgetCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type PotCreateNestedManyWithoutUserInput = {
    create?: XOR<PotCreateWithoutUserInput, PotUncheckedCreateWithoutUserInput> | PotCreateWithoutUserInput[] | PotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PotCreateOrConnectWithoutUserInput | PotCreateOrConnectWithoutUserInput[]
    createMany?: PotCreateManyUserInputEnvelope
    connect?: PotWhereUniqueInput | PotWhereUniqueInput[]
  }

  export type RecurringBillCreateNestedManyWithoutUserInput = {
    create?: XOR<RecurringBillCreateWithoutUserInput, RecurringBillUncheckedCreateWithoutUserInput> | RecurringBillCreateWithoutUserInput[] | RecurringBillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurringBillCreateOrConnectWithoutUserInput | RecurringBillCreateOrConnectWithoutUserInput[]
    createMany?: RecurringBillCreateManyUserInputEnvelope
    connect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
  }

  export type RecurringBillCreateNestedManyWithoutSenderInput = {
    create?: XOR<RecurringBillCreateWithoutSenderInput, RecurringBillUncheckedCreateWithoutSenderInput> | RecurringBillCreateWithoutSenderInput[] | RecurringBillUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RecurringBillCreateOrConnectWithoutSenderInput | RecurringBillCreateOrConnectWithoutSenderInput[]
    createMany?: RecurringBillCreateManySenderInputEnvelope
    connect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
  }

  export type RecurringBillCreateNestedManyWithoutRecipientInput = {
    create?: XOR<RecurringBillCreateWithoutRecipientInput, RecurringBillUncheckedCreateWithoutRecipientInput> | RecurringBillCreateWithoutRecipientInput[] | RecurringBillUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: RecurringBillCreateOrConnectWithoutRecipientInput | RecurringBillCreateOrConnectWithoutRecipientInput[]
    createMany?: RecurringBillCreateManyRecipientInputEnvelope
    connect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type RecurringAlertCreateNestedManyWithoutUserInput = {
    create?: XOR<RecurringAlertCreateWithoutUserInput, RecurringAlertUncheckedCreateWithoutUserInput> | RecurringAlertCreateWithoutUserInput[] | RecurringAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurringAlertCreateOrConnectWithoutUserInput | RecurringAlertCreateOrConnectWithoutUserInput[]
    createMany?: RecurringAlertCreateManyUserInputEnvelope
    connect?: RecurringAlertWhereUniqueInput | RecurringAlertWhereUniqueInput[]
  }

  export type BudgetAlertCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetAlertCreateWithoutUserInput, BudgetAlertUncheckedCreateWithoutUserInput> | BudgetAlertCreateWithoutUserInput[] | BudgetAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetAlertCreateOrConnectWithoutUserInput | BudgetAlertCreateOrConnectWithoutUserInput[]
    createMany?: BudgetAlertCreateManyUserInputEnvelope
    connect?: BudgetAlertWhereUniqueInput | BudgetAlertWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PasswordRecoveryCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordRecoveryCreateWithoutUserInput, PasswordRecoveryUncheckedCreateWithoutUserInput> | PasswordRecoveryCreateWithoutUserInput[] | PasswordRecoveryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordRecoveryCreateOrConnectWithoutUserInput | PasswordRecoveryCreateOrConnectWithoutUserInput[]
    createMany?: PasswordRecoveryCreateManyUserInputEnvelope
    connect?: PasswordRecoveryWhereUniqueInput | PasswordRecoveryWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput> | TransactionCreateWithoutSenderInput[] | TransactionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSenderInput | TransactionCreateOrConnectWithoutSenderInput[]
    createMany?: TransactionCreateManySenderInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<TransactionCreateWithoutRecipientInput, TransactionUncheckedCreateWithoutRecipientInput> | TransactionCreateWithoutRecipientInput[] | TransactionUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutRecipientInput | TransactionCreateOrConnectWithoutRecipientInput[]
    createMany?: TransactionCreateManyRecipientInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BudgetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type PotUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PotCreateWithoutUserInput, PotUncheckedCreateWithoutUserInput> | PotCreateWithoutUserInput[] | PotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PotCreateOrConnectWithoutUserInput | PotCreateOrConnectWithoutUserInput[]
    createMany?: PotCreateManyUserInputEnvelope
    connect?: PotWhereUniqueInput | PotWhereUniqueInput[]
  }

  export type RecurringBillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecurringBillCreateWithoutUserInput, RecurringBillUncheckedCreateWithoutUserInput> | RecurringBillCreateWithoutUserInput[] | RecurringBillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurringBillCreateOrConnectWithoutUserInput | RecurringBillCreateOrConnectWithoutUserInput[]
    createMany?: RecurringBillCreateManyUserInputEnvelope
    connect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
  }

  export type RecurringBillUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<RecurringBillCreateWithoutSenderInput, RecurringBillUncheckedCreateWithoutSenderInput> | RecurringBillCreateWithoutSenderInput[] | RecurringBillUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RecurringBillCreateOrConnectWithoutSenderInput | RecurringBillCreateOrConnectWithoutSenderInput[]
    createMany?: RecurringBillCreateManySenderInputEnvelope
    connect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
  }

  export type RecurringBillUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<RecurringBillCreateWithoutRecipientInput, RecurringBillUncheckedCreateWithoutRecipientInput> | RecurringBillCreateWithoutRecipientInput[] | RecurringBillUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: RecurringBillCreateOrConnectWithoutRecipientInput | RecurringBillCreateOrConnectWithoutRecipientInput[]
    createMany?: RecurringBillCreateManyRecipientInputEnvelope
    connect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type RecurringAlertUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecurringAlertCreateWithoutUserInput, RecurringAlertUncheckedCreateWithoutUserInput> | RecurringAlertCreateWithoutUserInput[] | RecurringAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurringAlertCreateOrConnectWithoutUserInput | RecurringAlertCreateOrConnectWithoutUserInput[]
    createMany?: RecurringAlertCreateManyUserInputEnvelope
    connect?: RecurringAlertWhereUniqueInput | RecurringAlertWhereUniqueInput[]
  }

  export type BudgetAlertUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetAlertCreateWithoutUserInput, BudgetAlertUncheckedCreateWithoutUserInput> | BudgetAlertCreateWithoutUserInput[] | BudgetAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetAlertCreateOrConnectWithoutUserInput | BudgetAlertCreateOrConnectWithoutUserInput[]
    createMany?: BudgetAlertCreateManyUserInputEnvelope
    connect?: BudgetAlertWhereUniqueInput | BudgetAlertWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PasswordRecoveryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordRecoveryCreateWithoutUserInput, PasswordRecoveryUncheckedCreateWithoutUserInput> | PasswordRecoveryCreateWithoutUserInput[] | PasswordRecoveryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordRecoveryCreateOrConnectWithoutUserInput | PasswordRecoveryCreateOrConnectWithoutUserInput[]
    createMany?: PasswordRecoveryCreateManyUserInputEnvelope
    connect?: PasswordRecoveryWhereUniqueInput | PasswordRecoveryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutSenderNestedInput = {
    create?: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput> | TransactionCreateWithoutSenderInput[] | TransactionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSenderInput | TransactionCreateOrConnectWithoutSenderInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSenderInput | TransactionUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: TransactionCreateManySenderInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSenderInput | TransactionUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSenderInput | TransactionUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<TransactionCreateWithoutRecipientInput, TransactionUncheckedCreateWithoutRecipientInput> | TransactionCreateWithoutRecipientInput[] | TransactionUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutRecipientInput | TransactionCreateOrConnectWithoutRecipientInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutRecipientInput | TransactionUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: TransactionCreateManyRecipientInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutRecipientInput | TransactionUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutRecipientInput | TransactionUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BudgetUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutUserInput | BudgetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutUserInput | BudgetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutUserInput | BudgetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type PotUpdateManyWithoutUserNestedInput = {
    create?: XOR<PotCreateWithoutUserInput, PotUncheckedCreateWithoutUserInput> | PotCreateWithoutUserInput[] | PotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PotCreateOrConnectWithoutUserInput | PotCreateOrConnectWithoutUserInput[]
    upsert?: PotUpsertWithWhereUniqueWithoutUserInput | PotUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PotCreateManyUserInputEnvelope
    set?: PotWhereUniqueInput | PotWhereUniqueInput[]
    disconnect?: PotWhereUniqueInput | PotWhereUniqueInput[]
    delete?: PotWhereUniqueInput | PotWhereUniqueInput[]
    connect?: PotWhereUniqueInput | PotWhereUniqueInput[]
    update?: PotUpdateWithWhereUniqueWithoutUserInput | PotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PotUpdateManyWithWhereWithoutUserInput | PotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PotScalarWhereInput | PotScalarWhereInput[]
  }

  export type RecurringBillUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecurringBillCreateWithoutUserInput, RecurringBillUncheckedCreateWithoutUserInput> | RecurringBillCreateWithoutUserInput[] | RecurringBillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurringBillCreateOrConnectWithoutUserInput | RecurringBillCreateOrConnectWithoutUserInput[]
    upsert?: RecurringBillUpsertWithWhereUniqueWithoutUserInput | RecurringBillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecurringBillCreateManyUserInputEnvelope
    set?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    disconnect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    delete?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    connect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    update?: RecurringBillUpdateWithWhereUniqueWithoutUserInput | RecurringBillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecurringBillUpdateManyWithWhereWithoutUserInput | RecurringBillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecurringBillScalarWhereInput | RecurringBillScalarWhereInput[]
  }

  export type RecurringBillUpdateManyWithoutSenderNestedInput = {
    create?: XOR<RecurringBillCreateWithoutSenderInput, RecurringBillUncheckedCreateWithoutSenderInput> | RecurringBillCreateWithoutSenderInput[] | RecurringBillUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RecurringBillCreateOrConnectWithoutSenderInput | RecurringBillCreateOrConnectWithoutSenderInput[]
    upsert?: RecurringBillUpsertWithWhereUniqueWithoutSenderInput | RecurringBillUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: RecurringBillCreateManySenderInputEnvelope
    set?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    disconnect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    delete?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    connect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    update?: RecurringBillUpdateWithWhereUniqueWithoutSenderInput | RecurringBillUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: RecurringBillUpdateManyWithWhereWithoutSenderInput | RecurringBillUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: RecurringBillScalarWhereInput | RecurringBillScalarWhereInput[]
  }

  export type RecurringBillUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<RecurringBillCreateWithoutRecipientInput, RecurringBillUncheckedCreateWithoutRecipientInput> | RecurringBillCreateWithoutRecipientInput[] | RecurringBillUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: RecurringBillCreateOrConnectWithoutRecipientInput | RecurringBillCreateOrConnectWithoutRecipientInput[]
    upsert?: RecurringBillUpsertWithWhereUniqueWithoutRecipientInput | RecurringBillUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: RecurringBillCreateManyRecipientInputEnvelope
    set?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    disconnect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    delete?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    connect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    update?: RecurringBillUpdateWithWhereUniqueWithoutRecipientInput | RecurringBillUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: RecurringBillUpdateManyWithWhereWithoutRecipientInput | RecurringBillUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: RecurringBillScalarWhereInput | RecurringBillScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type RecurringAlertUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecurringAlertCreateWithoutUserInput, RecurringAlertUncheckedCreateWithoutUserInput> | RecurringAlertCreateWithoutUserInput[] | RecurringAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurringAlertCreateOrConnectWithoutUserInput | RecurringAlertCreateOrConnectWithoutUserInput[]
    upsert?: RecurringAlertUpsertWithWhereUniqueWithoutUserInput | RecurringAlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecurringAlertCreateManyUserInputEnvelope
    set?: RecurringAlertWhereUniqueInput | RecurringAlertWhereUniqueInput[]
    disconnect?: RecurringAlertWhereUniqueInput | RecurringAlertWhereUniqueInput[]
    delete?: RecurringAlertWhereUniqueInput | RecurringAlertWhereUniqueInput[]
    connect?: RecurringAlertWhereUniqueInput | RecurringAlertWhereUniqueInput[]
    update?: RecurringAlertUpdateWithWhereUniqueWithoutUserInput | RecurringAlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecurringAlertUpdateManyWithWhereWithoutUserInput | RecurringAlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecurringAlertScalarWhereInput | RecurringAlertScalarWhereInput[]
  }

  export type BudgetAlertUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetAlertCreateWithoutUserInput, BudgetAlertUncheckedCreateWithoutUserInput> | BudgetAlertCreateWithoutUserInput[] | BudgetAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetAlertCreateOrConnectWithoutUserInput | BudgetAlertCreateOrConnectWithoutUserInput[]
    upsert?: BudgetAlertUpsertWithWhereUniqueWithoutUserInput | BudgetAlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetAlertCreateManyUserInputEnvelope
    set?: BudgetAlertWhereUniqueInput | BudgetAlertWhereUniqueInput[]
    disconnect?: BudgetAlertWhereUniqueInput | BudgetAlertWhereUniqueInput[]
    delete?: BudgetAlertWhereUniqueInput | BudgetAlertWhereUniqueInput[]
    connect?: BudgetAlertWhereUniqueInput | BudgetAlertWhereUniqueInput[]
    update?: BudgetAlertUpdateWithWhereUniqueWithoutUserInput | BudgetAlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetAlertUpdateManyWithWhereWithoutUserInput | BudgetAlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetAlertScalarWhereInput | BudgetAlertScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PasswordRecoveryUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordRecoveryCreateWithoutUserInput, PasswordRecoveryUncheckedCreateWithoutUserInput> | PasswordRecoveryCreateWithoutUserInput[] | PasswordRecoveryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordRecoveryCreateOrConnectWithoutUserInput | PasswordRecoveryCreateOrConnectWithoutUserInput[]
    upsert?: PasswordRecoveryUpsertWithWhereUniqueWithoutUserInput | PasswordRecoveryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordRecoveryCreateManyUserInputEnvelope
    set?: PasswordRecoveryWhereUniqueInput | PasswordRecoveryWhereUniqueInput[]
    disconnect?: PasswordRecoveryWhereUniqueInput | PasswordRecoveryWhereUniqueInput[]
    delete?: PasswordRecoveryWhereUniqueInput | PasswordRecoveryWhereUniqueInput[]
    connect?: PasswordRecoveryWhereUniqueInput | PasswordRecoveryWhereUniqueInput[]
    update?: PasswordRecoveryUpdateWithWhereUniqueWithoutUserInput | PasswordRecoveryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordRecoveryUpdateManyWithWhereWithoutUserInput | PasswordRecoveryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordRecoveryScalarWhereInput | PasswordRecoveryScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput> | TransactionCreateWithoutSenderInput[] | TransactionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSenderInput | TransactionCreateOrConnectWithoutSenderInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSenderInput | TransactionUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: TransactionCreateManySenderInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSenderInput | TransactionUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSenderInput | TransactionUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<TransactionCreateWithoutRecipientInput, TransactionUncheckedCreateWithoutRecipientInput> | TransactionCreateWithoutRecipientInput[] | TransactionUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutRecipientInput | TransactionCreateOrConnectWithoutRecipientInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutRecipientInput | TransactionUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: TransactionCreateManyRecipientInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutRecipientInput | TransactionUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutRecipientInput | TransactionUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BudgetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput> | BudgetCreateWithoutUserInput[] | BudgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput | BudgetCreateOrConnectWithoutUserInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutUserInput | BudgetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetCreateManyUserInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutUserInput | BudgetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutUserInput | BudgetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type PotUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PotCreateWithoutUserInput, PotUncheckedCreateWithoutUserInput> | PotCreateWithoutUserInput[] | PotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PotCreateOrConnectWithoutUserInput | PotCreateOrConnectWithoutUserInput[]
    upsert?: PotUpsertWithWhereUniqueWithoutUserInput | PotUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PotCreateManyUserInputEnvelope
    set?: PotWhereUniqueInput | PotWhereUniqueInput[]
    disconnect?: PotWhereUniqueInput | PotWhereUniqueInput[]
    delete?: PotWhereUniqueInput | PotWhereUniqueInput[]
    connect?: PotWhereUniqueInput | PotWhereUniqueInput[]
    update?: PotUpdateWithWhereUniqueWithoutUserInput | PotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PotUpdateManyWithWhereWithoutUserInput | PotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PotScalarWhereInput | PotScalarWhereInput[]
  }

  export type RecurringBillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecurringBillCreateWithoutUserInput, RecurringBillUncheckedCreateWithoutUserInput> | RecurringBillCreateWithoutUserInput[] | RecurringBillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurringBillCreateOrConnectWithoutUserInput | RecurringBillCreateOrConnectWithoutUserInput[]
    upsert?: RecurringBillUpsertWithWhereUniqueWithoutUserInput | RecurringBillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecurringBillCreateManyUserInputEnvelope
    set?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    disconnect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    delete?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    connect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    update?: RecurringBillUpdateWithWhereUniqueWithoutUserInput | RecurringBillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecurringBillUpdateManyWithWhereWithoutUserInput | RecurringBillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecurringBillScalarWhereInput | RecurringBillScalarWhereInput[]
  }

  export type RecurringBillUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<RecurringBillCreateWithoutSenderInput, RecurringBillUncheckedCreateWithoutSenderInput> | RecurringBillCreateWithoutSenderInput[] | RecurringBillUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RecurringBillCreateOrConnectWithoutSenderInput | RecurringBillCreateOrConnectWithoutSenderInput[]
    upsert?: RecurringBillUpsertWithWhereUniqueWithoutSenderInput | RecurringBillUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: RecurringBillCreateManySenderInputEnvelope
    set?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    disconnect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    delete?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    connect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    update?: RecurringBillUpdateWithWhereUniqueWithoutSenderInput | RecurringBillUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: RecurringBillUpdateManyWithWhereWithoutSenderInput | RecurringBillUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: RecurringBillScalarWhereInput | RecurringBillScalarWhereInput[]
  }

  export type RecurringBillUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<RecurringBillCreateWithoutRecipientInput, RecurringBillUncheckedCreateWithoutRecipientInput> | RecurringBillCreateWithoutRecipientInput[] | RecurringBillUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: RecurringBillCreateOrConnectWithoutRecipientInput | RecurringBillCreateOrConnectWithoutRecipientInput[]
    upsert?: RecurringBillUpsertWithWhereUniqueWithoutRecipientInput | RecurringBillUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: RecurringBillCreateManyRecipientInputEnvelope
    set?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    disconnect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    delete?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    connect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    update?: RecurringBillUpdateWithWhereUniqueWithoutRecipientInput | RecurringBillUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: RecurringBillUpdateManyWithWhereWithoutRecipientInput | RecurringBillUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: RecurringBillScalarWhereInput | RecurringBillScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type RecurringAlertUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecurringAlertCreateWithoutUserInput, RecurringAlertUncheckedCreateWithoutUserInput> | RecurringAlertCreateWithoutUserInput[] | RecurringAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurringAlertCreateOrConnectWithoutUserInput | RecurringAlertCreateOrConnectWithoutUserInput[]
    upsert?: RecurringAlertUpsertWithWhereUniqueWithoutUserInput | RecurringAlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecurringAlertCreateManyUserInputEnvelope
    set?: RecurringAlertWhereUniqueInput | RecurringAlertWhereUniqueInput[]
    disconnect?: RecurringAlertWhereUniqueInput | RecurringAlertWhereUniqueInput[]
    delete?: RecurringAlertWhereUniqueInput | RecurringAlertWhereUniqueInput[]
    connect?: RecurringAlertWhereUniqueInput | RecurringAlertWhereUniqueInput[]
    update?: RecurringAlertUpdateWithWhereUniqueWithoutUserInput | RecurringAlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecurringAlertUpdateManyWithWhereWithoutUserInput | RecurringAlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecurringAlertScalarWhereInput | RecurringAlertScalarWhereInput[]
  }

  export type BudgetAlertUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetAlertCreateWithoutUserInput, BudgetAlertUncheckedCreateWithoutUserInput> | BudgetAlertCreateWithoutUserInput[] | BudgetAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetAlertCreateOrConnectWithoutUserInput | BudgetAlertCreateOrConnectWithoutUserInput[]
    upsert?: BudgetAlertUpsertWithWhereUniqueWithoutUserInput | BudgetAlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetAlertCreateManyUserInputEnvelope
    set?: BudgetAlertWhereUniqueInput | BudgetAlertWhereUniqueInput[]
    disconnect?: BudgetAlertWhereUniqueInput | BudgetAlertWhereUniqueInput[]
    delete?: BudgetAlertWhereUniqueInput | BudgetAlertWhereUniqueInput[]
    connect?: BudgetAlertWhereUniqueInput | BudgetAlertWhereUniqueInput[]
    update?: BudgetAlertUpdateWithWhereUniqueWithoutUserInput | BudgetAlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetAlertUpdateManyWithWhereWithoutUserInput | BudgetAlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetAlertScalarWhereInput | BudgetAlertScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PasswordRecoveryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordRecoveryCreateWithoutUserInput, PasswordRecoveryUncheckedCreateWithoutUserInput> | PasswordRecoveryCreateWithoutUserInput[] | PasswordRecoveryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordRecoveryCreateOrConnectWithoutUserInput | PasswordRecoveryCreateOrConnectWithoutUserInput[]
    upsert?: PasswordRecoveryUpsertWithWhereUniqueWithoutUserInput | PasswordRecoveryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordRecoveryCreateManyUserInputEnvelope
    set?: PasswordRecoveryWhereUniqueInput | PasswordRecoveryWhereUniqueInput[]
    disconnect?: PasswordRecoveryWhereUniqueInput | PasswordRecoveryWhereUniqueInput[]
    delete?: PasswordRecoveryWhereUniqueInput | PasswordRecoveryWhereUniqueInput[]
    connect?: PasswordRecoveryWhereUniqueInput | PasswordRecoveryWhereUniqueInput[]
    update?: PasswordRecoveryUpdateWithWhereUniqueWithoutUserInput | PasswordRecoveryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordRecoveryUpdateManyWithWhereWithoutUserInput | PasswordRecoveryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordRecoveryScalarWhereInput | PasswordRecoveryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPasswordRecoveriesInput = {
    create?: XOR<UserCreateWithoutPasswordRecoveriesInput, UserUncheckedCreateWithoutPasswordRecoveriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordRecoveriesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPasswordRecoveriesNestedInput = {
    create?: XOR<UserCreateWithoutPasswordRecoveriesInput, UserUncheckedCreateWithoutPasswordRecoveriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordRecoveriesInput
    upsert?: UserUpsertWithoutPasswordRecoveriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordRecoveriesInput, UserUpdateWithoutPasswordRecoveriesInput>, UserUncheckedUpdateWithoutPasswordRecoveriesInput>
  }

  export type CategoryCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentTransactionsInput = {
    create?: XOR<UserCreateWithoutSentTransactionsInput, UserUncheckedCreateWithoutSentTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedTransactionsInput = {
    create?: XOR<UserCreateWithoutReceivedTransactionsInput, UserUncheckedCreateWithoutReceivedTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    upsert?: CategoryUpsertWithoutTransactionsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTransactionsInput, CategoryUpdateWithoutTransactionsInput>, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateOneWithoutSentTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutSentTransactionsInput, UserUncheckedCreateWithoutSentTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentTransactionsInput
    upsert?: UserUpsertWithoutSentTransactionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentTransactionsInput, UserUpdateWithoutSentTransactionsInput>, UserUncheckedUpdateWithoutSentTransactionsInput>
  }

  export type UserUpdateOneWithoutReceivedTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedTransactionsInput, UserUncheckedCreateWithoutReceivedTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedTransactionsInput
    upsert?: UserUpsertWithoutReceivedTransactionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedTransactionsInput, UserUpdateWithoutReceivedTransactionsInput>, UserUncheckedUpdateWithoutReceivedTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryCreateNestedOneWithoutRecurringBillsInput = {
    create?: XOR<CategoryCreateWithoutRecurringBillsInput, CategoryUncheckedCreateWithoutRecurringBillsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutRecurringBillsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRecurringBillsInput = {
    create?: XOR<UserCreateWithoutRecurringBillsInput, UserUncheckedCreateWithoutRecurringBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecurringBillsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentRecurringBillsInput = {
    create?: XOR<UserCreateWithoutSentRecurringBillsInput, UserUncheckedCreateWithoutSentRecurringBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRecurringBillsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedRecurringBillsInput = {
    create?: XOR<UserCreateWithoutReceivedRecurringBillsInput, UserUncheckedCreateWithoutReceivedRecurringBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRecurringBillsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneWithoutRecurringBillsNestedInput = {
    create?: XOR<CategoryCreateWithoutRecurringBillsInput, CategoryUncheckedCreateWithoutRecurringBillsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutRecurringBillsInput
    upsert?: CategoryUpsertWithoutRecurringBillsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutRecurringBillsInput, CategoryUpdateWithoutRecurringBillsInput>, CategoryUncheckedUpdateWithoutRecurringBillsInput>
  }

  export type UserUpdateOneRequiredWithoutRecurringBillsNestedInput = {
    create?: XOR<UserCreateWithoutRecurringBillsInput, UserUncheckedCreateWithoutRecurringBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecurringBillsInput
    upsert?: UserUpsertWithoutRecurringBillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecurringBillsInput, UserUpdateWithoutRecurringBillsInput>, UserUncheckedUpdateWithoutRecurringBillsInput>
  }

  export type UserUpdateOneWithoutSentRecurringBillsNestedInput = {
    create?: XOR<UserCreateWithoutSentRecurringBillsInput, UserUncheckedCreateWithoutSentRecurringBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRecurringBillsInput
    upsert?: UserUpsertWithoutSentRecurringBillsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentRecurringBillsInput, UserUpdateWithoutSentRecurringBillsInput>, UserUncheckedUpdateWithoutSentRecurringBillsInput>
  }

  export type UserUpdateOneWithoutReceivedRecurringBillsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedRecurringBillsInput, UserUncheckedCreateWithoutReceivedRecurringBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRecurringBillsInput
    upsert?: UserUpsertWithoutReceivedRecurringBillsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedRecurringBillsInput, UserUpdateWithoutReceivedRecurringBillsInput>, UserUncheckedUpdateWithoutReceivedRecurringBillsInput>
  }

  export type TransactionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BudgetCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput> | BudgetCreateWithoutCategoryInput[] | BudgetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoryInput | BudgetCreateOrConnectWithoutCategoryInput[]
    createMany?: BudgetCreateManyCategoryInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type RecurringBillCreateNestedManyWithoutCategoryInput = {
    create?: XOR<RecurringBillCreateWithoutCategoryInput, RecurringBillUncheckedCreateWithoutCategoryInput> | RecurringBillCreateWithoutCategoryInput[] | RecurringBillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RecurringBillCreateOrConnectWithoutCategoryInput | RecurringBillCreateOrConnectWithoutCategoryInput[]
    createMany?: RecurringBillCreateManyCategoryInputEnvelope
    connect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BudgetUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput> | BudgetCreateWithoutCategoryInput[] | BudgetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoryInput | BudgetCreateOrConnectWithoutCategoryInput[]
    createMany?: BudgetCreateManyCategoryInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type RecurringBillUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<RecurringBillCreateWithoutCategoryInput, RecurringBillUncheckedCreateWithoutCategoryInput> | RecurringBillCreateWithoutCategoryInput[] | RecurringBillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RecurringBillCreateOrConnectWithoutCategoryInput | RecurringBillCreateOrConnectWithoutCategoryInput[]
    createMany?: RecurringBillCreateManyCategoryInputEnvelope
    connect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
  }

  export type TransactionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BudgetUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput> | BudgetCreateWithoutCategoryInput[] | BudgetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoryInput | BudgetCreateOrConnectWithoutCategoryInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutCategoryInput | BudgetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BudgetCreateManyCategoryInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutCategoryInput | BudgetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutCategoryInput | BudgetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type RecurringBillUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<RecurringBillCreateWithoutCategoryInput, RecurringBillUncheckedCreateWithoutCategoryInput> | RecurringBillCreateWithoutCategoryInput[] | RecurringBillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RecurringBillCreateOrConnectWithoutCategoryInput | RecurringBillCreateOrConnectWithoutCategoryInput[]
    upsert?: RecurringBillUpsertWithWhereUniqueWithoutCategoryInput | RecurringBillUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: RecurringBillCreateManyCategoryInputEnvelope
    set?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    disconnect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    delete?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    connect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    update?: RecurringBillUpdateWithWhereUniqueWithoutCategoryInput | RecurringBillUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: RecurringBillUpdateManyWithWhereWithoutCategoryInput | RecurringBillUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: RecurringBillScalarWhereInput | RecurringBillScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BudgetUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput> | BudgetCreateWithoutCategoryInput[] | BudgetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoryInput | BudgetCreateOrConnectWithoutCategoryInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutCategoryInput | BudgetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BudgetCreateManyCategoryInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutCategoryInput | BudgetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutCategoryInput | BudgetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type RecurringBillUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<RecurringBillCreateWithoutCategoryInput, RecurringBillUncheckedCreateWithoutCategoryInput> | RecurringBillCreateWithoutCategoryInput[] | RecurringBillUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RecurringBillCreateOrConnectWithoutCategoryInput | RecurringBillCreateOrConnectWithoutCategoryInput[]
    upsert?: RecurringBillUpsertWithWhereUniqueWithoutCategoryInput | RecurringBillUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: RecurringBillCreateManyCategoryInputEnvelope
    set?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    disconnect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    delete?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    connect?: RecurringBillWhereUniqueInput | RecurringBillWhereUniqueInput[]
    update?: RecurringBillUpdateWithWhereUniqueWithoutCategoryInput | RecurringBillUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: RecurringBillUpdateManyWithWhereWithoutCategoryInput | RecurringBillUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: RecurringBillScalarWhereInput | RecurringBillScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<CategoryCreateWithoutBudgetsInput, CategoryUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBudgetsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ThemeCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<ThemeCreateWithoutBudgetsInput, ThemeUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutBudgetsInput
    connect?: ThemeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutBudgetsNestedInput = {
    create?: XOR<CategoryCreateWithoutBudgetsInput, CategoryUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBudgetsInput
    upsert?: CategoryUpsertWithoutBudgetsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBudgetsInput, CategoryUpdateWithoutBudgetsInput>, CategoryUncheckedUpdateWithoutBudgetsInput>
  }

  export type ThemeUpdateOneWithoutBudgetsNestedInput = {
    create?: XOR<ThemeCreateWithoutBudgetsInput, ThemeUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutBudgetsInput
    upsert?: ThemeUpsertWithoutBudgetsInput
    disconnect?: ThemeWhereInput | boolean
    delete?: ThemeWhereInput | boolean
    connect?: ThemeWhereUniqueInput
    update?: XOR<XOR<ThemeUpdateToOneWithWhereWithoutBudgetsInput, ThemeUpdateWithoutBudgetsInput>, ThemeUncheckedUpdateWithoutBudgetsInput>
  }

  export type UserUpdateOneRequiredWithoutBudgetsNestedInput = {
    create?: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput
    upsert?: UserUpsertWithoutBudgetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBudgetsInput, UserUpdateWithoutBudgetsInput>, UserUncheckedUpdateWithoutBudgetsInput>
  }

  export type UserCreateNestedOneWithoutPotsInput = {
    create?: XOR<UserCreateWithoutPotsInput, UserUncheckedCreateWithoutPotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPotsInput
    connect?: UserWhereUniqueInput
  }

  export type ThemeCreateNestedOneWithoutPotsInput = {
    create?: XOR<ThemeCreateWithoutPotsInput, ThemeUncheckedCreateWithoutPotsInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutPotsInput
    connect?: ThemeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPotsNestedInput = {
    create?: XOR<UserCreateWithoutPotsInput, UserUncheckedCreateWithoutPotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPotsInput
    upsert?: UserUpsertWithoutPotsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPotsInput, UserUpdateWithoutPotsInput>, UserUncheckedUpdateWithoutPotsInput>
  }

  export type ThemeUpdateOneWithoutPotsNestedInput = {
    create?: XOR<ThemeCreateWithoutPotsInput, ThemeUncheckedCreateWithoutPotsInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutPotsInput
    upsert?: ThemeUpsertWithoutPotsInput
    disconnect?: ThemeWhereInput | boolean
    delete?: ThemeWhereInput | boolean
    connect?: ThemeWhereUniqueInput
    update?: XOR<XOR<ThemeUpdateToOneWithWhereWithoutPotsInput, ThemeUpdateWithoutPotsInput>, ThemeUncheckedUpdateWithoutPotsInput>
  }

  export type BudgetCreateNestedManyWithoutThemeInput = {
    create?: XOR<BudgetCreateWithoutThemeInput, BudgetUncheckedCreateWithoutThemeInput> | BudgetCreateWithoutThemeInput[] | BudgetUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutThemeInput | BudgetCreateOrConnectWithoutThemeInput[]
    createMany?: BudgetCreateManyThemeInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type PotCreateNestedManyWithoutThemeInput = {
    create?: XOR<PotCreateWithoutThemeInput, PotUncheckedCreateWithoutThemeInput> | PotCreateWithoutThemeInput[] | PotUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: PotCreateOrConnectWithoutThemeInput | PotCreateOrConnectWithoutThemeInput[]
    createMany?: PotCreateManyThemeInputEnvelope
    connect?: PotWhereUniqueInput | PotWhereUniqueInput[]
  }

  export type BudgetUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<BudgetCreateWithoutThemeInput, BudgetUncheckedCreateWithoutThemeInput> | BudgetCreateWithoutThemeInput[] | BudgetUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutThemeInput | BudgetCreateOrConnectWithoutThemeInput[]
    createMany?: BudgetCreateManyThemeInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type PotUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<PotCreateWithoutThemeInput, PotUncheckedCreateWithoutThemeInput> | PotCreateWithoutThemeInput[] | PotUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: PotCreateOrConnectWithoutThemeInput | PotCreateOrConnectWithoutThemeInput[]
    createMany?: PotCreateManyThemeInputEnvelope
    connect?: PotWhereUniqueInput | PotWhereUniqueInput[]
  }

  export type BudgetUpdateManyWithoutThemeNestedInput = {
    create?: XOR<BudgetCreateWithoutThemeInput, BudgetUncheckedCreateWithoutThemeInput> | BudgetCreateWithoutThemeInput[] | BudgetUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutThemeInput | BudgetCreateOrConnectWithoutThemeInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutThemeInput | BudgetUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: BudgetCreateManyThemeInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutThemeInput | BudgetUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutThemeInput | BudgetUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type PotUpdateManyWithoutThemeNestedInput = {
    create?: XOR<PotCreateWithoutThemeInput, PotUncheckedCreateWithoutThemeInput> | PotCreateWithoutThemeInput[] | PotUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: PotCreateOrConnectWithoutThemeInput | PotCreateOrConnectWithoutThemeInput[]
    upsert?: PotUpsertWithWhereUniqueWithoutThemeInput | PotUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: PotCreateManyThemeInputEnvelope
    set?: PotWhereUniqueInput | PotWhereUniqueInput[]
    disconnect?: PotWhereUniqueInput | PotWhereUniqueInput[]
    delete?: PotWhereUniqueInput | PotWhereUniqueInput[]
    connect?: PotWhereUniqueInput | PotWhereUniqueInput[]
    update?: PotUpdateWithWhereUniqueWithoutThemeInput | PotUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: PotUpdateManyWithWhereWithoutThemeInput | PotUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: PotScalarWhereInput | PotScalarWhereInput[]
  }

  export type BudgetUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<BudgetCreateWithoutThemeInput, BudgetUncheckedCreateWithoutThemeInput> | BudgetCreateWithoutThemeInput[] | BudgetUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutThemeInput | BudgetCreateOrConnectWithoutThemeInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutThemeInput | BudgetUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: BudgetCreateManyThemeInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutThemeInput | BudgetUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutThemeInput | BudgetUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type PotUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<PotCreateWithoutThemeInput, PotUncheckedCreateWithoutThemeInput> | PotCreateWithoutThemeInput[] | PotUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: PotCreateOrConnectWithoutThemeInput | PotCreateOrConnectWithoutThemeInput[]
    upsert?: PotUpsertWithWhereUniqueWithoutThemeInput | PotUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: PotCreateManyThemeInputEnvelope
    set?: PotWhereUniqueInput | PotWhereUniqueInput[]
    disconnect?: PotWhereUniqueInput | PotWhereUniqueInput[]
    delete?: PotWhereUniqueInput | PotWhereUniqueInput[]
    connect?: PotWhereUniqueInput | PotWhereUniqueInput[]
    update?: PotUpdateWithWhereUniqueWithoutThemeInput | PotUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: PotUpdateManyWithWhereWithoutThemeInput | PotUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: PotScalarWhereInput | PotScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutRecurringAlertsInput = {
    create?: XOR<UserCreateWithoutRecurringAlertsInput, UserUncheckedCreateWithoutRecurringAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecurringAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRecurringAlertsNestedInput = {
    create?: XOR<UserCreateWithoutRecurringAlertsInput, UserUncheckedCreateWithoutRecurringAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecurringAlertsInput
    upsert?: UserUpsertWithoutRecurringAlertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecurringAlertsInput, UserUpdateWithoutRecurringAlertsInput>, UserUncheckedUpdateWithoutRecurringAlertsInput>
  }

  export type UserCreateNestedOneWithoutBudgetAlertsInput = {
    create?: XOR<UserCreateWithoutBudgetAlertsInput, UserUncheckedCreateWithoutBudgetAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBudgetAlertsNestedInput = {
    create?: XOR<UserCreateWithoutBudgetAlertsInput, UserUncheckedCreateWithoutBudgetAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetAlertsInput
    upsert?: UserUpsertWithoutBudgetAlertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBudgetAlertsInput, UserUpdateWithoutBudgetAlertsInput>, UserUncheckedUpdateWithoutBudgetAlertsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TransactionCreateWithoutUserInput = {
    id?: string
    description?: string | null
    amount: number
    createdAt?: Date | string
    date?: Date | string
    isRecurring?: boolean
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    sender?: UserCreateNestedOneWithoutSentTransactionsInput
    recipient?: UserCreateNestedOneWithoutReceivedTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    description?: string | null
    amount: number
    createdAt?: Date | string
    date?: Date | string
    isRecurring?: boolean
    categoryId?: string | null
    senderId?: string | null
    recipientId?: string | null
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutSenderInput = {
    id?: string
    description?: string | null
    amount: number
    createdAt?: Date | string
    date?: Date | string
    isRecurring?: boolean
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    recipient?: UserCreateNestedOneWithoutReceivedTransactionsInput
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutSenderInput = {
    id?: string
    description?: string | null
    amount: number
    createdAt?: Date | string
    date?: Date | string
    isRecurring?: boolean
    categoryId?: string | null
    recipientId?: string | null
    userId: string
  }

  export type TransactionCreateOrConnectWithoutSenderInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput>
  }

  export type TransactionCreateManySenderInputEnvelope = {
    data: TransactionCreateManySenderInput | TransactionCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutRecipientInput = {
    id?: string
    description?: string | null
    amount: number
    createdAt?: Date | string
    date?: Date | string
    isRecurring?: boolean
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    sender?: UserCreateNestedOneWithoutSentTransactionsInput
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutRecipientInput = {
    id?: string
    description?: string | null
    amount: number
    createdAt?: Date | string
    date?: Date | string
    isRecurring?: boolean
    categoryId?: string | null
    senderId?: string | null
    userId: string
  }

  export type TransactionCreateOrConnectWithoutRecipientInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutRecipientInput, TransactionUncheckedCreateWithoutRecipientInput>
  }

  export type TransactionCreateManyRecipientInputEnvelope = {
    data: TransactionCreateManyRecipientInput | TransactionCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type BudgetCreateWithoutUserInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutBudgetsInput
    theme?: ThemeCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    categoryId: string
    themeId?: string | null
  }

  export type BudgetCreateOrConnectWithoutUserInput = {
    where: BudgetWhereUniqueInput
    create: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput>
  }

  export type BudgetCreateManyUserInputEnvelope = {
    data: BudgetCreateManyUserInput | BudgetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PotCreateWithoutUserInput = {
    id?: string
    name: string
    targetAmount: number
    currentAmount?: number
    theme?: ThemeCreateNestedOneWithoutPotsInput
  }

  export type PotUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    targetAmount: number
    currentAmount?: number
    themeId?: string | null
  }

  export type PotCreateOrConnectWithoutUserInput = {
    where: PotWhereUniqueInput
    create: XOR<PotCreateWithoutUserInput, PotUncheckedCreateWithoutUserInput>
  }

  export type PotCreateManyUserInputEnvelope = {
    data: PotCreateManyUserInput | PotCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecurringBillCreateWithoutUserInput = {
    id?: string
    description?: string | null
    amount: number
    recurrenceDay?: number | null
    recurrenceFrequency?: string | null
    category?: CategoryCreateNestedOneWithoutRecurringBillsInput
    sender?: UserCreateNestedOneWithoutSentRecurringBillsInput
    recipient?: UserCreateNestedOneWithoutReceivedRecurringBillsInput
  }

  export type RecurringBillUncheckedCreateWithoutUserInput = {
    id?: string
    description?: string | null
    amount: number
    recurrenceDay?: number | null
    recurrenceFrequency?: string | null
    categoryId?: string | null
    senderId?: string | null
    recipientId?: string | null
  }

  export type RecurringBillCreateOrConnectWithoutUserInput = {
    where: RecurringBillWhereUniqueInput
    create: XOR<RecurringBillCreateWithoutUserInput, RecurringBillUncheckedCreateWithoutUserInput>
  }

  export type RecurringBillCreateManyUserInputEnvelope = {
    data: RecurringBillCreateManyUserInput | RecurringBillCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecurringBillCreateWithoutSenderInput = {
    id?: string
    description?: string | null
    amount: number
    recurrenceDay?: number | null
    recurrenceFrequency?: string | null
    category?: CategoryCreateNestedOneWithoutRecurringBillsInput
    user: UserCreateNestedOneWithoutRecurringBillsInput
    recipient?: UserCreateNestedOneWithoutReceivedRecurringBillsInput
  }

  export type RecurringBillUncheckedCreateWithoutSenderInput = {
    id?: string
    description?: string | null
    amount: number
    recurrenceDay?: number | null
    recurrenceFrequency?: string | null
    categoryId?: string | null
    userId: string
    recipientId?: string | null
  }

  export type RecurringBillCreateOrConnectWithoutSenderInput = {
    where: RecurringBillWhereUniqueInput
    create: XOR<RecurringBillCreateWithoutSenderInput, RecurringBillUncheckedCreateWithoutSenderInput>
  }

  export type RecurringBillCreateManySenderInputEnvelope = {
    data: RecurringBillCreateManySenderInput | RecurringBillCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type RecurringBillCreateWithoutRecipientInput = {
    id?: string
    description?: string | null
    amount: number
    recurrenceDay?: number | null
    recurrenceFrequency?: string | null
    category?: CategoryCreateNestedOneWithoutRecurringBillsInput
    user: UserCreateNestedOneWithoutRecurringBillsInput
    sender?: UserCreateNestedOneWithoutSentRecurringBillsInput
  }

  export type RecurringBillUncheckedCreateWithoutRecipientInput = {
    id?: string
    description?: string | null
    amount: number
    recurrenceDay?: number | null
    recurrenceFrequency?: string | null
    categoryId?: string | null
    userId: string
    senderId?: string | null
  }

  export type RecurringBillCreateOrConnectWithoutRecipientInput = {
    where: RecurringBillWhereUniqueInput
    create: XOR<RecurringBillCreateWithoutRecipientInput, RecurringBillUncheckedCreateWithoutRecipientInput>
  }

  export type RecurringBillCreateManyRecipientInputEnvelope = {
    data: RecurringBillCreateManyRecipientInput | RecurringBillCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecurringAlertCreateWithoutUserInput = {
    id?: string
    transactionId?: string | null
    pattern: string
    lastDetectedDate: Date | string
    alertSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringAlertUncheckedCreateWithoutUserInput = {
    id?: string
    transactionId?: string | null
    pattern: string
    lastDetectedDate: Date | string
    alertSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringAlertCreateOrConnectWithoutUserInput = {
    where: RecurringAlertWhereUniqueInput
    create: XOR<RecurringAlertCreateWithoutUserInput, RecurringAlertUncheckedCreateWithoutUserInput>
  }

  export type RecurringAlertCreateManyUserInputEnvelope = {
    data: RecurringAlertCreateManyUserInput | RecurringAlertCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BudgetAlertCreateWithoutUserInput = {
    id?: string
    budgetCategory: string
    thresholdPercentage: number
    alertSent?: boolean
    createdAt?: Date | string
  }

  export type BudgetAlertUncheckedCreateWithoutUserInput = {
    id?: string
    budgetCategory: string
    thresholdPercentage: number
    alertSent?: boolean
    createdAt?: Date | string
  }

  export type BudgetAlertCreateOrConnectWithoutUserInput = {
    where: BudgetAlertWhereUniqueInput
    create: XOR<BudgetAlertCreateWithoutUserInput, BudgetAlertUncheckedCreateWithoutUserInput>
  }

  export type BudgetAlertCreateManyUserInputEnvelope = {
    data: BudgetAlertCreateManyUserInput | BudgetAlertCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordRecoveryCreateWithoutUserInput = {
    id?: string
    token: string
    used?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type PasswordRecoveryUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    used?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type PasswordRecoveryCreateOrConnectWithoutUserInput = {
    where: PasswordRecoveryWhereUniqueInput
    create: XOR<PasswordRecoveryCreateWithoutUserInput, PasswordRecoveryUncheckedCreateWithoutUserInput>
  }

  export type PasswordRecoveryCreateManyUserInputEnvelope = {
    data: PasswordRecoveryCreateManyUserInput | PasswordRecoveryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    description?: StringNullableFilter<"Transaction"> | string | null
    amount?: FloatFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    date?: DateTimeFilter<"Transaction"> | Date | string
    isRecurring?: BoolFilter<"Transaction"> | boolean
    categoryId?: StringNullableFilter<"Transaction"> | string | null
    senderId?: StringNullableFilter<"Transaction"> | string | null
    recipientId?: StringNullableFilter<"Transaction"> | string | null
    userId?: StringFilter<"Transaction"> | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutSenderInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutSenderInput, TransactionUncheckedUpdateWithoutSenderInput>
    create: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutSenderInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutSenderInput, TransactionUncheckedUpdateWithoutSenderInput>
  }

  export type TransactionUpdateManyWithWhereWithoutSenderInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutSenderInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutRecipientInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutRecipientInput, TransactionUncheckedUpdateWithoutRecipientInput>
    create: XOR<TransactionCreateWithoutRecipientInput, TransactionUncheckedCreateWithoutRecipientInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutRecipientInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutRecipientInput, TransactionUncheckedUpdateWithoutRecipientInput>
  }

  export type TransactionUpdateManyWithWhereWithoutRecipientInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutRecipientInput>
  }

  export type BudgetUpsertWithWhereUniqueWithoutUserInput = {
    where: BudgetWhereUniqueInput
    update: XOR<BudgetUpdateWithoutUserInput, BudgetUncheckedUpdateWithoutUserInput>
    create: XOR<BudgetCreateWithoutUserInput, BudgetUncheckedCreateWithoutUserInput>
  }

  export type BudgetUpdateWithWhereUniqueWithoutUserInput = {
    where: BudgetWhereUniqueInput
    data: XOR<BudgetUpdateWithoutUserInput, BudgetUncheckedUpdateWithoutUserInput>
  }

  export type BudgetUpdateManyWithWhereWithoutUserInput = {
    where: BudgetScalarWhereInput
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyWithoutUserInput>
  }

  export type BudgetScalarWhereInput = {
    AND?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    OR?: BudgetScalarWhereInput[]
    NOT?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    id?: StringFilter<"Budget"> | string
    amount?: FloatFilter<"Budget"> | number
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    categoryId?: StringFilter<"Budget"> | string
    themeId?: StringNullableFilter<"Budget"> | string | null
    userId?: StringFilter<"Budget"> | string
  }

  export type PotUpsertWithWhereUniqueWithoutUserInput = {
    where: PotWhereUniqueInput
    update: XOR<PotUpdateWithoutUserInput, PotUncheckedUpdateWithoutUserInput>
    create: XOR<PotCreateWithoutUserInput, PotUncheckedCreateWithoutUserInput>
  }

  export type PotUpdateWithWhereUniqueWithoutUserInput = {
    where: PotWhereUniqueInput
    data: XOR<PotUpdateWithoutUserInput, PotUncheckedUpdateWithoutUserInput>
  }

  export type PotUpdateManyWithWhereWithoutUserInput = {
    where: PotScalarWhereInput
    data: XOR<PotUpdateManyMutationInput, PotUncheckedUpdateManyWithoutUserInput>
  }

  export type PotScalarWhereInput = {
    AND?: PotScalarWhereInput | PotScalarWhereInput[]
    OR?: PotScalarWhereInput[]
    NOT?: PotScalarWhereInput | PotScalarWhereInput[]
    id?: StringFilter<"Pot"> | string
    name?: StringFilter<"Pot"> | string
    targetAmount?: FloatFilter<"Pot"> | number
    currentAmount?: FloatFilter<"Pot"> | number
    userId?: StringFilter<"Pot"> | string
    themeId?: StringNullableFilter<"Pot"> | string | null
  }

  export type RecurringBillUpsertWithWhereUniqueWithoutUserInput = {
    where: RecurringBillWhereUniqueInput
    update: XOR<RecurringBillUpdateWithoutUserInput, RecurringBillUncheckedUpdateWithoutUserInput>
    create: XOR<RecurringBillCreateWithoutUserInput, RecurringBillUncheckedCreateWithoutUserInput>
  }

  export type RecurringBillUpdateWithWhereUniqueWithoutUserInput = {
    where: RecurringBillWhereUniqueInput
    data: XOR<RecurringBillUpdateWithoutUserInput, RecurringBillUncheckedUpdateWithoutUserInput>
  }

  export type RecurringBillUpdateManyWithWhereWithoutUserInput = {
    where: RecurringBillScalarWhereInput
    data: XOR<RecurringBillUpdateManyMutationInput, RecurringBillUncheckedUpdateManyWithoutUserInput>
  }

  export type RecurringBillScalarWhereInput = {
    AND?: RecurringBillScalarWhereInput | RecurringBillScalarWhereInput[]
    OR?: RecurringBillScalarWhereInput[]
    NOT?: RecurringBillScalarWhereInput | RecurringBillScalarWhereInput[]
    id?: StringFilter<"RecurringBill"> | string
    description?: StringNullableFilter<"RecurringBill"> | string | null
    amount?: FloatFilter<"RecurringBill"> | number
    recurrenceDay?: IntNullableFilter<"RecurringBill"> | number | null
    recurrenceFrequency?: StringNullableFilter<"RecurringBill"> | string | null
    categoryId?: StringNullableFilter<"RecurringBill"> | string | null
    userId?: StringFilter<"RecurringBill"> | string
    senderId?: StringNullableFilter<"RecurringBill"> | string | null
    recipientId?: StringNullableFilter<"RecurringBill"> | string | null
  }

  export type RecurringBillUpsertWithWhereUniqueWithoutSenderInput = {
    where: RecurringBillWhereUniqueInput
    update: XOR<RecurringBillUpdateWithoutSenderInput, RecurringBillUncheckedUpdateWithoutSenderInput>
    create: XOR<RecurringBillCreateWithoutSenderInput, RecurringBillUncheckedCreateWithoutSenderInput>
  }

  export type RecurringBillUpdateWithWhereUniqueWithoutSenderInput = {
    where: RecurringBillWhereUniqueInput
    data: XOR<RecurringBillUpdateWithoutSenderInput, RecurringBillUncheckedUpdateWithoutSenderInput>
  }

  export type RecurringBillUpdateManyWithWhereWithoutSenderInput = {
    where: RecurringBillScalarWhereInput
    data: XOR<RecurringBillUpdateManyMutationInput, RecurringBillUncheckedUpdateManyWithoutSenderInput>
  }

  export type RecurringBillUpsertWithWhereUniqueWithoutRecipientInput = {
    where: RecurringBillWhereUniqueInput
    update: XOR<RecurringBillUpdateWithoutRecipientInput, RecurringBillUncheckedUpdateWithoutRecipientInput>
    create: XOR<RecurringBillCreateWithoutRecipientInput, RecurringBillUncheckedCreateWithoutRecipientInput>
  }

  export type RecurringBillUpdateWithWhereUniqueWithoutRecipientInput = {
    where: RecurringBillWhereUniqueInput
    data: XOR<RecurringBillUpdateWithoutRecipientInput, RecurringBillUncheckedUpdateWithoutRecipientInput>
  }

  export type RecurringBillUpdateManyWithWhereWithoutRecipientInput = {
    where: RecurringBillScalarWhereInput
    data: XOR<RecurringBillUpdateManyMutationInput, RecurringBillUncheckedUpdateManyWithoutRecipientInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type RecurringAlertUpsertWithWhereUniqueWithoutUserInput = {
    where: RecurringAlertWhereUniqueInput
    update: XOR<RecurringAlertUpdateWithoutUserInput, RecurringAlertUncheckedUpdateWithoutUserInput>
    create: XOR<RecurringAlertCreateWithoutUserInput, RecurringAlertUncheckedCreateWithoutUserInput>
  }

  export type RecurringAlertUpdateWithWhereUniqueWithoutUserInput = {
    where: RecurringAlertWhereUniqueInput
    data: XOR<RecurringAlertUpdateWithoutUserInput, RecurringAlertUncheckedUpdateWithoutUserInput>
  }

  export type RecurringAlertUpdateManyWithWhereWithoutUserInput = {
    where: RecurringAlertScalarWhereInput
    data: XOR<RecurringAlertUpdateManyMutationInput, RecurringAlertUncheckedUpdateManyWithoutUserInput>
  }

  export type RecurringAlertScalarWhereInput = {
    AND?: RecurringAlertScalarWhereInput | RecurringAlertScalarWhereInput[]
    OR?: RecurringAlertScalarWhereInput[]
    NOT?: RecurringAlertScalarWhereInput | RecurringAlertScalarWhereInput[]
    id?: StringFilter<"RecurringAlert"> | string
    userId?: StringFilter<"RecurringAlert"> | string
    transactionId?: StringNullableFilter<"RecurringAlert"> | string | null
    pattern?: StringFilter<"RecurringAlert"> | string
    lastDetectedDate?: DateTimeFilter<"RecurringAlert"> | Date | string
    alertSent?: BoolFilter<"RecurringAlert"> | boolean
    createdAt?: DateTimeFilter<"RecurringAlert"> | Date | string
    updatedAt?: DateTimeFilter<"RecurringAlert"> | Date | string
  }

  export type BudgetAlertUpsertWithWhereUniqueWithoutUserInput = {
    where: BudgetAlertWhereUniqueInput
    update: XOR<BudgetAlertUpdateWithoutUserInput, BudgetAlertUncheckedUpdateWithoutUserInput>
    create: XOR<BudgetAlertCreateWithoutUserInput, BudgetAlertUncheckedCreateWithoutUserInput>
  }

  export type BudgetAlertUpdateWithWhereUniqueWithoutUserInput = {
    where: BudgetAlertWhereUniqueInput
    data: XOR<BudgetAlertUpdateWithoutUserInput, BudgetAlertUncheckedUpdateWithoutUserInput>
  }

  export type BudgetAlertUpdateManyWithWhereWithoutUserInput = {
    where: BudgetAlertScalarWhereInput
    data: XOR<BudgetAlertUpdateManyMutationInput, BudgetAlertUncheckedUpdateManyWithoutUserInput>
  }

  export type BudgetAlertScalarWhereInput = {
    AND?: BudgetAlertScalarWhereInput | BudgetAlertScalarWhereInput[]
    OR?: BudgetAlertScalarWhereInput[]
    NOT?: BudgetAlertScalarWhereInput | BudgetAlertScalarWhereInput[]
    id?: StringFilter<"BudgetAlert"> | string
    userId?: StringFilter<"BudgetAlert"> | string
    budgetCategory?: StringFilter<"BudgetAlert"> | string
    thresholdPercentage?: IntFilter<"BudgetAlert"> | number
    alertSent?: BoolFilter<"BudgetAlert"> | boolean
    createdAt?: DateTimeFilter<"BudgetAlert"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type PasswordRecoveryUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordRecoveryWhereUniqueInput
    update: XOR<PasswordRecoveryUpdateWithoutUserInput, PasswordRecoveryUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordRecoveryCreateWithoutUserInput, PasswordRecoveryUncheckedCreateWithoutUserInput>
  }

  export type PasswordRecoveryUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordRecoveryWhereUniqueInput
    data: XOR<PasswordRecoveryUpdateWithoutUserInput, PasswordRecoveryUncheckedUpdateWithoutUserInput>
  }

  export type PasswordRecoveryUpdateManyWithWhereWithoutUserInput = {
    where: PasswordRecoveryScalarWhereInput
    data: XOR<PasswordRecoveryUpdateManyMutationInput, PasswordRecoveryUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordRecoveryScalarWhereInput = {
    AND?: PasswordRecoveryScalarWhereInput | PasswordRecoveryScalarWhereInput[]
    OR?: PasswordRecoveryScalarWhereInput[]
    NOT?: PasswordRecoveryScalarWhereInput | PasswordRecoveryScalarWhereInput[]
    id?: StringFilter<"PasswordRecovery"> | string
    userId?: StringFilter<"PasswordRecovery"> | string
    token?: StringFilter<"PasswordRecovery"> | string
    used?: BoolFilter<"PasswordRecovery"> | boolean
    createdAt?: DateTimeFilter<"PasswordRecovery"> | Date | string
    expiresAt?: DateTimeFilter<"PasswordRecovery"> | Date | string
  }

  export type UserCreateWithoutPasswordRecoveriesInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionCreateNestedManyWithoutRecipientInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    pots?: PotCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordRecoveriesInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    pots?: PotUncheckedCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillUncheckedCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertUncheckedCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordRecoveriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordRecoveriesInput, UserUncheckedCreateWithoutPasswordRecoveriesInput>
  }

  export type UserUpsertWithoutPasswordRecoveriesInput = {
    update: XOR<UserUpdateWithoutPasswordRecoveriesInput, UserUncheckedUpdateWithoutPasswordRecoveriesInput>
    create: XOR<UserCreateWithoutPasswordRecoveriesInput, UserUncheckedCreateWithoutPasswordRecoveriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordRecoveriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordRecoveriesInput, UserUncheckedUpdateWithoutPasswordRecoveriesInput>
  }

  export type UserUpdateWithoutPasswordRecoveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    pots?: PotUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordRecoveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    pots?: PotUncheckedUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUncheckedUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUncheckedUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUncheckedUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryCreateWithoutTransactionsInput = {
    id?: string
    name: string
    budgets?: BudgetCreateNestedManyWithoutCategoryInput
    recurringBills?: RecurringBillCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    budgets?: BudgetUncheckedCreateNestedManyWithoutCategoryInput
    recurringBills?: RecurringBillUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTransactionsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutSentTransactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    receivedTransactions?: TransactionCreateNestedManyWithoutRecipientInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    pots?: PotCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentTransactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    receivedTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    pots?: PotUncheckedCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillUncheckedCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertUncheckedCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentTransactionsInput, UserUncheckedCreateWithoutSentTransactionsInput>
  }

  export type UserCreateWithoutReceivedTransactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionCreateNestedManyWithoutSenderInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    pots?: PotCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedTransactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    pots?: PotUncheckedCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillUncheckedCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertUncheckedCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedTransactionsInput, UserUncheckedCreateWithoutReceivedTransactionsInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    sentTransactions?: TransactionCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionCreateNestedManyWithoutRecipientInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    pots?: PotCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    sentTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    pots?: PotUncheckedCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillUncheckedCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertUncheckedCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type CategoryUpsertWithoutTransactionsInput = {
    update: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUpdateManyWithoutCategoryNestedInput
    recurringBills?: RecurringBillUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUncheckedUpdateManyWithoutCategoryNestedInput
    recurringBills?: RecurringBillUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserUpsertWithoutSentTransactionsInput = {
    update: XOR<UserUpdateWithoutSentTransactionsInput, UserUncheckedUpdateWithoutSentTransactionsInput>
    create: XOR<UserCreateWithoutSentTransactionsInput, UserUncheckedCreateWithoutSentTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentTransactionsInput, UserUncheckedUpdateWithoutSentTransactionsInput>
  }

  export type UserUpdateWithoutSentTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    receivedTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    pots?: PotUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    receivedTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    pots?: PotUncheckedUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUncheckedUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUncheckedUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUncheckedUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedTransactionsInput = {
    update: XOR<UserUpdateWithoutReceivedTransactionsInput, UserUncheckedUpdateWithoutReceivedTransactionsInput>
    create: XOR<UserCreateWithoutReceivedTransactionsInput, UserUncheckedCreateWithoutReceivedTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedTransactionsInput, UserUncheckedUpdateWithoutReceivedTransactionsInput>
  }

  export type UserUpdateWithoutReceivedTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUpdateManyWithoutSenderNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    pots?: PotUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    pots?: PotUncheckedUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUncheckedUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUncheckedUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUncheckedUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    sentTransactions?: TransactionUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    pots?: PotUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    sentTransactions?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    pots?: PotUncheckedUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUncheckedUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUncheckedUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUncheckedUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryCreateWithoutRecurringBillsInput = {
    id?: string
    name: string
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    budgets?: BudgetCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutRecurringBillsInput = {
    id?: string
    name: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutRecurringBillsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutRecurringBillsInput, CategoryUncheckedCreateWithoutRecurringBillsInput>
  }

  export type UserCreateWithoutRecurringBillsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionCreateNestedManyWithoutRecipientInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    pots?: PotCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecurringBillsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    pots?: PotUncheckedCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertUncheckedCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecurringBillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecurringBillsInput, UserUncheckedCreateWithoutRecurringBillsInput>
  }

  export type UserCreateWithoutSentRecurringBillsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionCreateNestedManyWithoutRecipientInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    pots?: PotCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillCreateNestedManyWithoutUserInput
    receivedRecurringBills?: RecurringBillCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentRecurringBillsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    pots?: PotUncheckedCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillUncheckedCreateNestedManyWithoutUserInput
    receivedRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertUncheckedCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentRecurringBillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentRecurringBillsInput, UserUncheckedCreateWithoutSentRecurringBillsInput>
  }

  export type UserCreateWithoutReceivedRecurringBillsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionCreateNestedManyWithoutRecipientInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    pots?: PotCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillCreateNestedManyWithoutSenderInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedRecurringBillsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    pots?: PotUncheckedCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillUncheckedCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutSenderInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertUncheckedCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedRecurringBillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedRecurringBillsInput, UserUncheckedCreateWithoutReceivedRecurringBillsInput>
  }

  export type CategoryUpsertWithoutRecurringBillsInput = {
    update: XOR<CategoryUpdateWithoutRecurringBillsInput, CategoryUncheckedUpdateWithoutRecurringBillsInput>
    create: XOR<CategoryCreateWithoutRecurringBillsInput, CategoryUncheckedCreateWithoutRecurringBillsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutRecurringBillsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutRecurringBillsInput, CategoryUncheckedUpdateWithoutRecurringBillsInput>
  }

  export type CategoryUpdateWithoutRecurringBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    budgets?: BudgetUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutRecurringBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserUpsertWithoutRecurringBillsInput = {
    update: XOR<UserUpdateWithoutRecurringBillsInput, UserUncheckedUpdateWithoutRecurringBillsInput>
    create: XOR<UserCreateWithoutRecurringBillsInput, UserUncheckedCreateWithoutRecurringBillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecurringBillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecurringBillsInput, UserUncheckedUpdateWithoutRecurringBillsInput>
  }

  export type UserUpdateWithoutRecurringBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    pots?: PotUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecurringBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    pots?: PotUncheckedUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUncheckedUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUncheckedUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutSentRecurringBillsInput = {
    update: XOR<UserUpdateWithoutSentRecurringBillsInput, UserUncheckedUpdateWithoutSentRecurringBillsInput>
    create: XOR<UserCreateWithoutSentRecurringBillsInput, UserUncheckedCreateWithoutSentRecurringBillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentRecurringBillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentRecurringBillsInput, UserUncheckedUpdateWithoutSentRecurringBillsInput>
  }

  export type UserUpdateWithoutSentRecurringBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    pots?: PotUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUpdateManyWithoutUserNestedInput
    receivedRecurringBills?: RecurringBillUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentRecurringBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    pots?: PotUncheckedUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUncheckedUpdateManyWithoutUserNestedInput
    receivedRecurringBills?: RecurringBillUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUncheckedUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedRecurringBillsInput = {
    update: XOR<UserUpdateWithoutReceivedRecurringBillsInput, UserUncheckedUpdateWithoutReceivedRecurringBillsInput>
    create: XOR<UserCreateWithoutReceivedRecurringBillsInput, UserUncheckedCreateWithoutReceivedRecurringBillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedRecurringBillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedRecurringBillsInput, UserUncheckedUpdateWithoutReceivedRecurringBillsInput>
  }

  export type UserUpdateWithoutReceivedRecurringBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    pots?: PotUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUpdateManyWithoutSenderNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedRecurringBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    pots?: PotUncheckedUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUncheckedUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUncheckedUpdateManyWithoutSenderNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUncheckedUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionCreateWithoutCategoryInput = {
    id?: string
    description?: string | null
    amount: number
    createdAt?: Date | string
    date?: Date | string
    isRecurring?: boolean
    sender?: UserCreateNestedOneWithoutSentTransactionsInput
    recipient?: UserCreateNestedOneWithoutReceivedTransactionsInput
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutCategoryInput = {
    id?: string
    description?: string | null
    amount: number
    createdAt?: Date | string
    date?: Date | string
    isRecurring?: boolean
    senderId?: string | null
    recipientId?: string | null
    userId: string
  }

  export type TransactionCreateOrConnectWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionCreateManyCategoryInputEnvelope = {
    data: TransactionCreateManyCategoryInput | TransactionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BudgetCreateWithoutCategoryInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    theme?: ThemeCreateNestedOneWithoutBudgetsInput
    user: UserCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetUncheckedCreateWithoutCategoryInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    themeId?: string | null
    userId: string
  }

  export type BudgetCreateOrConnectWithoutCategoryInput = {
    where: BudgetWhereUniqueInput
    create: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput>
  }

  export type BudgetCreateManyCategoryInputEnvelope = {
    data: BudgetCreateManyCategoryInput | BudgetCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type RecurringBillCreateWithoutCategoryInput = {
    id?: string
    description?: string | null
    amount: number
    recurrenceDay?: number | null
    recurrenceFrequency?: string | null
    user: UserCreateNestedOneWithoutRecurringBillsInput
    sender?: UserCreateNestedOneWithoutSentRecurringBillsInput
    recipient?: UserCreateNestedOneWithoutReceivedRecurringBillsInput
  }

  export type RecurringBillUncheckedCreateWithoutCategoryInput = {
    id?: string
    description?: string | null
    amount: number
    recurrenceDay?: number | null
    recurrenceFrequency?: string | null
    userId: string
    senderId?: string | null
    recipientId?: string | null
  }

  export type RecurringBillCreateOrConnectWithoutCategoryInput = {
    where: RecurringBillWhereUniqueInput
    create: XOR<RecurringBillCreateWithoutCategoryInput, RecurringBillUncheckedCreateWithoutCategoryInput>
  }

  export type RecurringBillCreateManyCategoryInputEnvelope = {
    data: RecurringBillCreateManyCategoryInput | RecurringBillCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCategoryInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BudgetUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BudgetWhereUniqueInput
    update: XOR<BudgetUpdateWithoutCategoryInput, BudgetUncheckedUpdateWithoutCategoryInput>
    create: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput>
  }

  export type BudgetUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BudgetWhereUniqueInput
    data: XOR<BudgetUpdateWithoutCategoryInput, BudgetUncheckedUpdateWithoutCategoryInput>
  }

  export type BudgetUpdateManyWithWhereWithoutCategoryInput = {
    where: BudgetScalarWhereInput
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyWithoutCategoryInput>
  }

  export type RecurringBillUpsertWithWhereUniqueWithoutCategoryInput = {
    where: RecurringBillWhereUniqueInput
    update: XOR<RecurringBillUpdateWithoutCategoryInput, RecurringBillUncheckedUpdateWithoutCategoryInput>
    create: XOR<RecurringBillCreateWithoutCategoryInput, RecurringBillUncheckedCreateWithoutCategoryInput>
  }

  export type RecurringBillUpdateWithWhereUniqueWithoutCategoryInput = {
    where: RecurringBillWhereUniqueInput
    data: XOR<RecurringBillUpdateWithoutCategoryInput, RecurringBillUncheckedUpdateWithoutCategoryInput>
  }

  export type RecurringBillUpdateManyWithWhereWithoutCategoryInput = {
    where: RecurringBillScalarWhereInput
    data: XOR<RecurringBillUpdateManyMutationInput, RecurringBillUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutBudgetsInput = {
    id?: string
    name: string
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    recurringBills?: RecurringBillCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBudgetsInput = {
    id?: string
    name: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    recurringBills?: RecurringBillUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBudgetsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBudgetsInput, CategoryUncheckedCreateWithoutBudgetsInput>
  }

  export type ThemeCreateWithoutBudgetsInput = {
    id?: string
    color: string
    description?: string | null
    pots?: PotCreateNestedManyWithoutThemeInput
  }

  export type ThemeUncheckedCreateWithoutBudgetsInput = {
    id?: string
    color: string
    description?: string | null
    pots?: PotUncheckedCreateNestedManyWithoutThemeInput
  }

  export type ThemeCreateOrConnectWithoutBudgetsInput = {
    where: ThemeWhereUniqueInput
    create: XOR<ThemeCreateWithoutBudgetsInput, ThemeUncheckedCreateWithoutBudgetsInput>
  }

  export type UserCreateWithoutBudgetsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionCreateNestedManyWithoutRecipientInput
    pots?: PotCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBudgetsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
    pots?: PotUncheckedCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillUncheckedCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertUncheckedCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBudgetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
  }

  export type CategoryUpsertWithoutBudgetsInput = {
    update: XOR<CategoryUpdateWithoutBudgetsInput, CategoryUncheckedUpdateWithoutBudgetsInput>
    create: XOR<CategoryCreateWithoutBudgetsInput, CategoryUncheckedCreateWithoutBudgetsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBudgetsInput, CategoryUncheckedUpdateWithoutBudgetsInput>
  }

  export type CategoryUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    recurringBills?: RecurringBillUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    recurringBills?: RecurringBillUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ThemeUpsertWithoutBudgetsInput = {
    update: XOR<ThemeUpdateWithoutBudgetsInput, ThemeUncheckedUpdateWithoutBudgetsInput>
    create: XOR<ThemeCreateWithoutBudgetsInput, ThemeUncheckedCreateWithoutBudgetsInput>
    where?: ThemeWhereInput
  }

  export type ThemeUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: ThemeWhereInput
    data: XOR<ThemeUpdateWithoutBudgetsInput, ThemeUncheckedUpdateWithoutBudgetsInput>
  }

  export type ThemeUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pots?: PotUpdateManyWithoutThemeNestedInput
  }

  export type ThemeUncheckedUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pots?: PotUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type UserUpsertWithoutBudgetsInput = {
    update: XOR<UserUpdateWithoutBudgetsInput, UserUncheckedUpdateWithoutBudgetsInput>
    create: XOR<UserCreateWithoutBudgetsInput, UserUncheckedCreateWithoutBudgetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBudgetsInput, UserUncheckedUpdateWithoutBudgetsInput>
  }

  export type UserUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
    pots?: PotUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
    pots?: PotUncheckedUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUncheckedUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUncheckedUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUncheckedUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPotsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionCreateNestedManyWithoutRecipientInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPotsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillUncheckedCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertUncheckedCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPotsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPotsInput, UserUncheckedCreateWithoutPotsInput>
  }

  export type ThemeCreateWithoutPotsInput = {
    id?: string
    color: string
    description?: string | null
    budgets?: BudgetCreateNestedManyWithoutThemeInput
  }

  export type ThemeUncheckedCreateWithoutPotsInput = {
    id?: string
    color: string
    description?: string | null
    budgets?: BudgetUncheckedCreateNestedManyWithoutThemeInput
  }

  export type ThemeCreateOrConnectWithoutPotsInput = {
    where: ThemeWhereUniqueInput
    create: XOR<ThemeCreateWithoutPotsInput, ThemeUncheckedCreateWithoutPotsInput>
  }

  export type UserUpsertWithoutPotsInput = {
    update: XOR<UserUpdateWithoutPotsInput, UserUncheckedUpdateWithoutPotsInput>
    create: XOR<UserCreateWithoutPotsInput, UserUncheckedCreateWithoutPotsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPotsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPotsInput, UserUncheckedUpdateWithoutPotsInput>
  }

  export type UserUpdateWithoutPotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUncheckedUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUncheckedUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUncheckedUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThemeUpsertWithoutPotsInput = {
    update: XOR<ThemeUpdateWithoutPotsInput, ThemeUncheckedUpdateWithoutPotsInput>
    create: XOR<ThemeCreateWithoutPotsInput, ThemeUncheckedCreateWithoutPotsInput>
    where?: ThemeWhereInput
  }

  export type ThemeUpdateToOneWithWhereWithoutPotsInput = {
    where?: ThemeWhereInput
    data: XOR<ThemeUpdateWithoutPotsInput, ThemeUncheckedUpdateWithoutPotsInput>
  }

  export type ThemeUpdateWithoutPotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budgets?: BudgetUpdateManyWithoutThemeNestedInput
  }

  export type ThemeUncheckedUpdateWithoutPotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budgets?: BudgetUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type BudgetCreateWithoutThemeInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutBudgetsInput
    user: UserCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetUncheckedCreateWithoutThemeInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    categoryId: string
    userId: string
  }

  export type BudgetCreateOrConnectWithoutThemeInput = {
    where: BudgetWhereUniqueInput
    create: XOR<BudgetCreateWithoutThemeInput, BudgetUncheckedCreateWithoutThemeInput>
  }

  export type BudgetCreateManyThemeInputEnvelope = {
    data: BudgetCreateManyThemeInput | BudgetCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type PotCreateWithoutThemeInput = {
    id?: string
    name: string
    targetAmount: number
    currentAmount?: number
    user: UserCreateNestedOneWithoutPotsInput
  }

  export type PotUncheckedCreateWithoutThemeInput = {
    id?: string
    name: string
    targetAmount: number
    currentAmount?: number
    userId: string
  }

  export type PotCreateOrConnectWithoutThemeInput = {
    where: PotWhereUniqueInput
    create: XOR<PotCreateWithoutThemeInput, PotUncheckedCreateWithoutThemeInput>
  }

  export type PotCreateManyThemeInputEnvelope = {
    data: PotCreateManyThemeInput | PotCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type BudgetUpsertWithWhereUniqueWithoutThemeInput = {
    where: BudgetWhereUniqueInput
    update: XOR<BudgetUpdateWithoutThemeInput, BudgetUncheckedUpdateWithoutThemeInput>
    create: XOR<BudgetCreateWithoutThemeInput, BudgetUncheckedCreateWithoutThemeInput>
  }

  export type BudgetUpdateWithWhereUniqueWithoutThemeInput = {
    where: BudgetWhereUniqueInput
    data: XOR<BudgetUpdateWithoutThemeInput, BudgetUncheckedUpdateWithoutThemeInput>
  }

  export type BudgetUpdateManyWithWhereWithoutThemeInput = {
    where: BudgetScalarWhereInput
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyWithoutThemeInput>
  }

  export type PotUpsertWithWhereUniqueWithoutThemeInput = {
    where: PotWhereUniqueInput
    update: XOR<PotUpdateWithoutThemeInput, PotUncheckedUpdateWithoutThemeInput>
    create: XOR<PotCreateWithoutThemeInput, PotUncheckedCreateWithoutThemeInput>
  }

  export type PotUpdateWithWhereUniqueWithoutThemeInput = {
    where: PotWhereUniqueInput
    data: XOR<PotUpdateWithoutThemeInput, PotUncheckedUpdateWithoutThemeInput>
  }

  export type PotUpdateManyWithWhereWithoutThemeInput = {
    where: PotScalarWhereInput
    data: XOR<PotUpdateManyMutationInput, PotUncheckedUpdateManyWithoutThemeInput>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionCreateNestedManyWithoutRecipientInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    pots?: PotCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillCreateNestedManyWithoutRecipientInput
    recurringAlerts?: RecurringAlertCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    pots?: PotUncheckedCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillUncheckedCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutRecipientInput
    recurringAlerts?: RecurringAlertUncheckedCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    pots?: PotUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUpdateManyWithoutRecipientNestedInput
    recurringAlerts?: RecurringAlertUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    pots?: PotUncheckedUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUncheckedUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUncheckedUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUncheckedUpdateManyWithoutRecipientNestedInput
    recurringAlerts?: RecurringAlertUncheckedUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRecurringAlertsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionCreateNestedManyWithoutRecipientInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    pots?: PotCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecurringAlertsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    pots?: PotUncheckedCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillUncheckedCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecurringAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecurringAlertsInput, UserUncheckedCreateWithoutRecurringAlertsInput>
  }

  export type UserUpsertWithoutRecurringAlertsInput = {
    update: XOR<UserUpdateWithoutRecurringAlertsInput, UserUncheckedUpdateWithoutRecurringAlertsInput>
    create: XOR<UserCreateWithoutRecurringAlertsInput, UserUncheckedCreateWithoutRecurringAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecurringAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecurringAlertsInput, UserUncheckedUpdateWithoutRecurringAlertsInput>
  }

  export type UserUpdateWithoutRecurringAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    pots?: PotUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecurringAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    pots?: PotUncheckedUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUncheckedUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUncheckedUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBudgetAlertsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionCreateNestedManyWithoutRecipientInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    pots?: PotCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBudgetAlertsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    pots?: PotUncheckedCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillUncheckedCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBudgetAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBudgetAlertsInput, UserUncheckedCreateWithoutBudgetAlertsInput>
  }

  export type UserUpsertWithoutBudgetAlertsInput = {
    update: XOR<UserUpdateWithoutBudgetAlertsInput, UserUncheckedUpdateWithoutBudgetAlertsInput>
    create: XOR<UserCreateWithoutBudgetAlertsInput, UserUncheckedCreateWithoutBudgetAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBudgetAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBudgetAlertsInput, UserUncheckedUpdateWithoutBudgetAlertsInput>
  }

  export type UserUpdateWithoutBudgetAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    pots?: PotUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBudgetAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    pots?: PotUncheckedUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUncheckedUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUncheckedUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionCreateNestedManyWithoutRecipientInput
    budgets?: BudgetCreateNestedManyWithoutUserInput
    pots?: PotCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillCreateNestedManyWithoutRecipientInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    currency?: string
    language?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountId?: string
    initialBalance?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: TransactionUncheckedCreateNestedManyWithoutRecipientInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutUserInput
    pots?: PotUncheckedCreateNestedManyWithoutUserInput
    recurringBills?: RecurringBillUncheckedCreateNestedManyWithoutUserInput
    sentRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutSenderInput
    receivedRecurringBills?: RecurringBillUncheckedCreateNestedManyWithoutRecipientInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    recurringAlerts?: RecurringAlertUncheckedCreateNestedManyWithoutUserInput
    budgetAlerts?: BudgetAlertUncheckedCreateNestedManyWithoutUserInput
    passwordRecoveries?: PasswordRecoveryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUpdateManyWithoutUserNestedInput
    pots?: PotUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    initialBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: TransactionUncheckedUpdateManyWithoutRecipientNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutUserNestedInput
    pots?: PotUncheckedUpdateManyWithoutUserNestedInput
    recurringBills?: RecurringBillUncheckedUpdateManyWithoutUserNestedInput
    sentRecurringBills?: RecurringBillUncheckedUpdateManyWithoutSenderNestedInput
    receivedRecurringBills?: RecurringBillUncheckedUpdateManyWithoutRecipientNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    recurringAlerts?: RecurringAlertUncheckedUpdateManyWithoutUserNestedInput
    budgetAlerts?: BudgetAlertUncheckedUpdateManyWithoutUserNestedInput
    passwordRecoveries?: PasswordRecoveryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    description?: string | null
    amount: number
    createdAt?: Date | string
    date?: Date | string
    isRecurring?: boolean
    categoryId?: string | null
    senderId?: string | null
    recipientId?: string | null
  }

  export type TransactionCreateManySenderInput = {
    id?: string
    description?: string | null
    amount: number
    createdAt?: Date | string
    date?: Date | string
    isRecurring?: boolean
    categoryId?: string | null
    recipientId?: string | null
    userId: string
  }

  export type TransactionCreateManyRecipientInput = {
    id?: string
    description?: string | null
    amount: number
    createdAt?: Date | string
    date?: Date | string
    isRecurring?: boolean
    categoryId?: string | null
    senderId?: string | null
    userId: string
  }

  export type BudgetCreateManyUserInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    categoryId: string
    themeId?: string | null
  }

  export type PotCreateManyUserInput = {
    id?: string
    name: string
    targetAmount: number
    currentAmount?: number
    themeId?: string | null
  }

  export type RecurringBillCreateManyUserInput = {
    id?: string
    description?: string | null
    amount: number
    recurrenceDay?: number | null
    recurrenceFrequency?: string | null
    categoryId?: string | null
    senderId?: string | null
    recipientId?: string | null
  }

  export type RecurringBillCreateManySenderInput = {
    id?: string
    description?: string | null
    amount: number
    recurrenceDay?: number | null
    recurrenceFrequency?: string | null
    categoryId?: string | null
    userId: string
    recipientId?: string | null
  }

  export type RecurringBillCreateManyRecipientInput = {
    id?: string
    description?: string | null
    amount: number
    recurrenceDay?: number | null
    recurrenceFrequency?: string | null
    categoryId?: string | null
    userId: string
    senderId?: string | null
  }

  export type AccountCreateManyUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringAlertCreateManyUserInput = {
    id?: string
    transactionId?: string | null
    pattern: string
    lastDetectedDate: Date | string
    alertSent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetAlertCreateManyUserInput = {
    id?: string
    budgetCategory: string
    thresholdPercentage: number
    alertSent?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    message: string
    type: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type PasswordRecoveryCreateManyUserInput = {
    id?: string
    token: string
    used?: boolean
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    sender?: UserUpdateOneWithoutSentTransactionsNestedInput
    recipient?: UserUpdateOneWithoutReceivedTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    recipient?: UserUpdateOneWithoutReceivedTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    sender?: UserUpdateOneWithoutSentTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BudgetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutBudgetsNestedInput
    theme?: ThemeUpdateOneWithoutBudgetsNestedInput
  }

  export type BudgetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    themeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BudgetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    themeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PotUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    theme?: ThemeUpdateOneWithoutPotsNestedInput
  }

  export type PotUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    themeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PotUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    themeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecurringBillUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    recurrenceDay?: NullableIntFieldUpdateOperationsInput | number | null
    recurrenceFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneWithoutRecurringBillsNestedInput
    sender?: UserUpdateOneWithoutSentRecurringBillsNestedInput
    recipient?: UserUpdateOneWithoutReceivedRecurringBillsNestedInput
  }

  export type RecurringBillUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    recurrenceDay?: NullableIntFieldUpdateOperationsInput | number | null
    recurrenceFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecurringBillUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    recurrenceDay?: NullableIntFieldUpdateOperationsInput | number | null
    recurrenceFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecurringBillUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    recurrenceDay?: NullableIntFieldUpdateOperationsInput | number | null
    recurrenceFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneWithoutRecurringBillsNestedInput
    user?: UserUpdateOneRequiredWithoutRecurringBillsNestedInput
    recipient?: UserUpdateOneWithoutReceivedRecurringBillsNestedInput
  }

  export type RecurringBillUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    recurrenceDay?: NullableIntFieldUpdateOperationsInput | number | null
    recurrenceFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecurringBillUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    recurrenceDay?: NullableIntFieldUpdateOperationsInput | number | null
    recurrenceFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecurringBillUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    recurrenceDay?: NullableIntFieldUpdateOperationsInput | number | null
    recurrenceFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneWithoutRecurringBillsNestedInput
    user?: UserUpdateOneRequiredWithoutRecurringBillsNestedInput
    sender?: UserUpdateOneWithoutSentRecurringBillsNestedInput
  }

  export type RecurringBillUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    recurrenceDay?: NullableIntFieldUpdateOperationsInput | number | null
    recurrenceFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecurringBillUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    recurrenceDay?: NullableIntFieldUpdateOperationsInput | number | null
    recurrenceFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringAlertUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    pattern?: StringFieldUpdateOperationsInput | string
    lastDetectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    alertSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringAlertUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    pattern?: StringFieldUpdateOperationsInput | string
    lastDetectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    alertSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringAlertUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    pattern?: StringFieldUpdateOperationsInput | string
    lastDetectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    alertSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetAlertUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetCategory?: StringFieldUpdateOperationsInput | string
    thresholdPercentage?: IntFieldUpdateOperationsInput | number
    alertSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetAlertUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetCategory?: StringFieldUpdateOperationsInput | string
    thresholdPercentage?: IntFieldUpdateOperationsInput | number
    alertSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetAlertUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    budgetCategory?: StringFieldUpdateOperationsInput | string
    thresholdPercentage?: IntFieldUpdateOperationsInput | number
    alertSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordRecoveryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordRecoveryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordRecoveryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyCategoryInput = {
    id?: string
    description?: string | null
    amount: number
    createdAt?: Date | string
    date?: Date | string
    isRecurring?: boolean
    senderId?: string | null
    recipientId?: string | null
    userId: string
  }

  export type BudgetCreateManyCategoryInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    themeId?: string | null
    userId: string
  }

  export type RecurringBillCreateManyCategoryInput = {
    id?: string
    description?: string | null
    amount: number
    recurrenceDay?: number | null
    recurrenceFrequency?: string | null
    userId: string
    senderId?: string | null
    recipientId?: string | null
  }

  export type TransactionUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneWithoutSentTransactionsNestedInput
    recipient?: UserUpdateOneWithoutReceivedTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BudgetUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: ThemeUpdateOneWithoutBudgetsNestedInput
    user?: UserUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type BudgetUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BudgetUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RecurringBillUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    recurrenceDay?: NullableIntFieldUpdateOperationsInput | number | null
    recurrenceFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRecurringBillsNestedInput
    sender?: UserUpdateOneWithoutSentRecurringBillsNestedInput
    recipient?: UserUpdateOneWithoutReceivedRecurringBillsNestedInput
  }

  export type RecurringBillUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    recurrenceDay?: NullableIntFieldUpdateOperationsInput | number | null
    recurrenceFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecurringBillUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    recurrenceDay?: NullableIntFieldUpdateOperationsInput | number | null
    recurrenceFrequency?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BudgetCreateManyThemeInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    categoryId: string
    userId: string
  }

  export type PotCreateManyThemeInput = {
    id?: string
    name: string
    targetAmount: number
    currentAmount?: number
    userId: string
  }

  export type BudgetUpdateWithoutThemeInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutBudgetsNestedInput
    user?: UserUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type BudgetUncheckedUpdateWithoutThemeInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BudgetUncheckedUpdateManyWithoutThemeInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PotUpdateWithoutThemeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPotsNestedInput
  }

  export type PotUncheckedUpdateWithoutThemeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PotUncheckedUpdateManyWithoutThemeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
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