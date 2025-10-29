
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
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model IngredientUse
 * 
 */
export type IngredientUse = $Result.DefaultSelection<Prisma.$IngredientUsePayload>
/**
 * Model Step
 * 
 */
export type Step = $Result.DefaultSelection<Prisma.$StepPayload>
/**
 * Model Quirk
 * 
 */
export type Quirk = $Result.DefaultSelection<Prisma.$QuirkPayload>
/**
 * Model CuisineDNA
 * 
 */
export type CuisineDNA = $Result.DefaultSelection<Prisma.$CuisineDNAPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Recipes
 * const recipes = await prisma.recipe.findMany()
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
   * // Fetch zero or more Recipes
   * const recipes = await prisma.recipe.findMany()
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
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredientUse`: Exposes CRUD operations for the **IngredientUse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IngredientUses
    * const ingredientUses = await prisma.ingredientUse.findMany()
    * ```
    */
  get ingredientUse(): Prisma.IngredientUseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.step`: Exposes CRUD operations for the **Step** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Steps
    * const steps = await prisma.step.findMany()
    * ```
    */
  get step(): Prisma.StepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quirk`: Exposes CRUD operations for the **Quirk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quirks
    * const quirks = await prisma.quirk.findMany()
    * ```
    */
  get quirk(): Prisma.QuirkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cuisineDNA`: Exposes CRUD operations for the **CuisineDNA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CuisineDNAS
    * const cuisineDNAS = await prisma.cuisineDNA.findMany()
    * ```
    */
  get cuisineDNA(): Prisma.CuisineDNADelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
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
    Recipe: 'Recipe',
    Ingredient: 'Ingredient',
    IngredientUse: 'IngredientUse',
    Step: 'Step',
    Quirk: 'Quirk',
    CuisineDNA: 'CuisineDNA'
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
      modelProps: "recipe" | "ingredient" | "ingredientUse" | "step" | "quirk" | "cuisineDNA"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      IngredientUse: {
        payload: Prisma.$IngredientUsePayload<ExtArgs>
        fields: Prisma.IngredientUseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientUseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientUsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientUseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientUsePayload>
          }
          findFirst: {
            args: Prisma.IngredientUseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientUsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientUseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientUsePayload>
          }
          findMany: {
            args: Prisma.IngredientUseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientUsePayload>[]
          }
          create: {
            args: Prisma.IngredientUseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientUsePayload>
          }
          createMany: {
            args: Prisma.IngredientUseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientUseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientUsePayload>[]
          }
          delete: {
            args: Prisma.IngredientUseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientUsePayload>
          }
          update: {
            args: Prisma.IngredientUseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientUsePayload>
          }
          deleteMany: {
            args: Prisma.IngredientUseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientUseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientUsePayload>[]
          }
          upsert: {
            args: Prisma.IngredientUseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientUsePayload>
          }
          aggregate: {
            args: Prisma.IngredientUseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredientUse>
          }
          groupBy: {
            args: Prisma.IngredientUseGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientUseGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientUseCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientUseCountAggregateOutputType> | number
          }
        }
      }
      Step: {
        payload: Prisma.$StepPayload<ExtArgs>
        fields: Prisma.StepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findFirst: {
            args: Prisma.StepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findMany: {
            args: Prisma.StepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          create: {
            args: Prisma.StepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          createMany: {
            args: Prisma.StepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          delete: {
            args: Prisma.StepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          update: {
            args: Prisma.StepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          deleteMany: {
            args: Prisma.StepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          upsert: {
            args: Prisma.StepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          aggregate: {
            args: Prisma.StepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStep>
          }
          groupBy: {
            args: Prisma.StepGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepCountArgs<ExtArgs>
            result: $Utils.Optional<StepCountAggregateOutputType> | number
          }
        }
      }
      Quirk: {
        payload: Prisma.$QuirkPayload<ExtArgs>
        fields: Prisma.QuirkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuirkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuirkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuirkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuirkPayload>
          }
          findFirst: {
            args: Prisma.QuirkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuirkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuirkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuirkPayload>
          }
          findMany: {
            args: Prisma.QuirkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuirkPayload>[]
          }
          create: {
            args: Prisma.QuirkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuirkPayload>
          }
          createMany: {
            args: Prisma.QuirkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuirkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuirkPayload>[]
          }
          delete: {
            args: Prisma.QuirkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuirkPayload>
          }
          update: {
            args: Prisma.QuirkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuirkPayload>
          }
          deleteMany: {
            args: Prisma.QuirkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuirkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuirkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuirkPayload>[]
          }
          upsert: {
            args: Prisma.QuirkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuirkPayload>
          }
          aggregate: {
            args: Prisma.QuirkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuirk>
          }
          groupBy: {
            args: Prisma.QuirkGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuirkGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuirkCountArgs<ExtArgs>
            result: $Utils.Optional<QuirkCountAggregateOutputType> | number
          }
        }
      }
      CuisineDNA: {
        payload: Prisma.$CuisineDNAPayload<ExtArgs>
        fields: Prisma.CuisineDNAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CuisineDNAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisineDNAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CuisineDNAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisineDNAPayload>
          }
          findFirst: {
            args: Prisma.CuisineDNAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisineDNAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CuisineDNAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisineDNAPayload>
          }
          findMany: {
            args: Prisma.CuisineDNAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisineDNAPayload>[]
          }
          create: {
            args: Prisma.CuisineDNACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisineDNAPayload>
          }
          createMany: {
            args: Prisma.CuisineDNACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CuisineDNACreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisineDNAPayload>[]
          }
          delete: {
            args: Prisma.CuisineDNADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisineDNAPayload>
          }
          update: {
            args: Prisma.CuisineDNAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisineDNAPayload>
          }
          deleteMany: {
            args: Prisma.CuisineDNADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CuisineDNAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CuisineDNAUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisineDNAPayload>[]
          }
          upsert: {
            args: Prisma.CuisineDNAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuisineDNAPayload>
          }
          aggregate: {
            args: Prisma.CuisineDNAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuisineDNA>
          }
          groupBy: {
            args: Prisma.CuisineDNAGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuisineDNAGroupByOutputType>[]
          }
          count: {
            args: Prisma.CuisineDNACountArgs<ExtArgs>
            result: $Utils.Optional<CuisineDNACountAggregateOutputType> | number
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
    recipe?: RecipeOmit
    ingredient?: IngredientOmit
    ingredientUse?: IngredientUseOmit
    step?: StepOmit
    quirk?: QuirkOmit
    cuisineDNA?: CuisineDNAOmit
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
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    ingredients: number
    steps: number
    quirks: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | RecipeCountOutputTypeCountIngredientsArgs
    steps?: boolean | RecipeCountOutputTypeCountStepsArgs
    quirks?: boolean | RecipeCountOutputTypeCountQuirksArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientUseWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountQuirksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuirkWhereInput
  }


  /**
   * Count Type IngredientCountOutputType
   */

  export type IngredientCountOutputType = {
    uses: number
  }

  export type IngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uses?: boolean | IngredientCountOutputTypeCountUsesArgs
  }

  // Custom InputTypes
  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientCountOutputType
     */
    select?: IngredientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountUsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientUseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    timeMinutes: number | null
    costEstimate: number | null
    skillLevel: number | null
  }

  export type RecipeSumAggregateOutputType = {
    timeMinutes: number | null
    costEstimate: number | null
    skillLevel: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: string | null
    title: string | null
    cuisine: string | null
    timeMinutes: number | null
    costEstimate: number | null
    skillLevel: number | null
    createdById: string | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    cuisine: string | null
    timeMinutes: number | null
    costEstimate: number | null
    skillLevel: number | null
    createdById: string | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    title: number
    cuisine: number
    timeMinutes: number
    costEstimate: number
    dietTags: number
    skillLevel: number
    sidePairs: number
    flavor: number
    createdById: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    timeMinutes?: true
    costEstimate?: true
    skillLevel?: true
  }

  export type RecipeSumAggregateInputType = {
    timeMinutes?: true
    costEstimate?: true
    skillLevel?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    title?: true
    cuisine?: true
    timeMinutes?: true
    costEstimate?: true
    skillLevel?: true
    createdById?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    title?: true
    cuisine?: true
    timeMinutes?: true
    costEstimate?: true
    skillLevel?: true
    createdById?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    title?: true
    cuisine?: true
    timeMinutes?: true
    costEstimate?: true
    dietTags?: true
    skillLevel?: true
    sidePairs?: true
    flavor?: true
    createdById?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: string
    title: string
    cuisine: string
    timeMinutes: number
    costEstimate: number | null
    dietTags: JsonValue
    skillLevel: number
    sidePairs: JsonValue
    flavor: JsonValue
    createdById: string | null
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cuisine?: boolean
    timeMinutes?: boolean
    costEstimate?: boolean
    dietTags?: boolean
    skillLevel?: boolean
    sidePairs?: boolean
    flavor?: boolean
    createdById?: boolean
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    steps?: boolean | Recipe$stepsArgs<ExtArgs>
    quirks?: boolean | Recipe$quirksArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cuisine?: boolean
    timeMinutes?: boolean
    costEstimate?: boolean
    dietTags?: boolean
    skillLevel?: boolean
    sidePairs?: boolean
    flavor?: boolean
    createdById?: boolean
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cuisine?: boolean
    timeMinutes?: boolean
    costEstimate?: boolean
    dietTags?: boolean
    skillLevel?: boolean
    sidePairs?: boolean
    flavor?: boolean
    createdById?: boolean
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    title?: boolean
    cuisine?: boolean
    timeMinutes?: boolean
    costEstimate?: boolean
    dietTags?: boolean
    skillLevel?: boolean
    sidePairs?: boolean
    flavor?: boolean
    createdById?: boolean
  }

  export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "cuisine" | "timeMinutes" | "costEstimate" | "dietTags" | "skillLevel" | "sidePairs" | "flavor" | "createdById", ExtArgs["result"]["recipe"]>
  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    steps?: boolean | Recipe$stepsArgs<ExtArgs>
    quirks?: boolean | Recipe$quirksArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      ingredients: Prisma.$IngredientUsePayload<ExtArgs>[]
      steps: Prisma.$StepPayload<ExtArgs>[]
      quirks: Prisma.$QuirkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      cuisine: string
      timeMinutes: number
      costEstimate: number | null
      dietTags: Prisma.JsonValue
      skillLevel: number
      sidePairs: Prisma.JsonValue
      flavor: Prisma.JsonValue
      createdById: string | null
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
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
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends Recipe$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientUsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    steps<T extends Recipe$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quirks<T extends Recipe$quirksArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$quirksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuirkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Recipe model
   */
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'String'>
    readonly title: FieldRef<"Recipe", 'String'>
    readonly cuisine: FieldRef<"Recipe", 'String'>
    readonly timeMinutes: FieldRef<"Recipe", 'Int'>
    readonly costEstimate: FieldRef<"Recipe", 'Int'>
    readonly dietTags: FieldRef<"Recipe", 'Json'>
    readonly skillLevel: FieldRef<"Recipe", 'Int'>
    readonly sidePairs: FieldRef<"Recipe", 'Json'>
    readonly flavor: FieldRef<"Recipe", 'Json'>
    readonly createdById: FieldRef<"Recipe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
  }

  /**
   * Recipe createManyAndReturn
   */
  export type RecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe updateManyAndReturn
   */
  export type RecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipe.ingredients
   */
  export type Recipe$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientUse
     */
    select?: IngredientUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientUse
     */
    omit?: IngredientUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientUseInclude<ExtArgs> | null
    where?: IngredientUseWhereInput
    orderBy?: IngredientUseOrderByWithRelationInput | IngredientUseOrderByWithRelationInput[]
    cursor?: IngredientUseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientUseScalarFieldEnum | IngredientUseScalarFieldEnum[]
  }

  /**
   * Recipe.steps
   */
  export type Recipe$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    cursor?: StepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Recipe.quirks
   */
  export type Recipe$quirksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quirk
     */
    select?: QuirkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quirk
     */
    omit?: QuirkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuirkInclude<ExtArgs> | null
    where?: QuirkWhereInput
    orderBy?: QuirkOrderByWithRelationInput | QuirkOrderByWithRelationInput[]
    cursor?: QuirkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuirkScalarFieldEnum | QuirkScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    name: number
    groups: number
    aliases: number
    _all: number
  }


  export type IngredientMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    name?: true
    groups?: true
    aliases?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: string
    name: string
    groups: JsonValue
    aliases: JsonValue
    _count: IngredientCountAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    groups?: boolean
    aliases?: boolean
    uses?: boolean | Ingredient$usesArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    groups?: boolean
    aliases?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    groups?: boolean
    aliases?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    name?: boolean
    groups?: boolean
    aliases?: boolean
  }

  export type IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "groups" | "aliases", ExtArgs["result"]["ingredient"]>
  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uses?: boolean | Ingredient$usesArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      uses: Prisma.$IngredientUsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      groups: Prisma.JsonValue
      aliases: Prisma.JsonValue
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientFindManyArgs>(args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends IngredientCreateArgs>(args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientCreateManyArgs>(args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends IngredientDeleteArgs>(args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUpdateArgs>(args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientDeleteManyArgs>(args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUpdateManyArgs>(args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.updateManyAndReturn({
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
    updateManyAndReturn<T extends IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
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
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uses<T extends Ingredient$usesArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$usesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientUsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ingredient model
   */
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'String'>
    readonly name: FieldRef<"Ingredient", 'String'>
    readonly groups: FieldRef<"Ingredient", 'Json'>
    readonly aliases: FieldRef<"Ingredient", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
  }

  /**
   * Ingredient createManyAndReturn
   */
  export type IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient updateManyAndReturn
   */
  export type IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredient.uses
   */
  export type Ingredient$usesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientUse
     */
    select?: IngredientUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientUse
     */
    omit?: IngredientUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientUseInclude<ExtArgs> | null
    where?: IngredientUseWhereInput
    orderBy?: IngredientUseOrderByWithRelationInput | IngredientUseOrderByWithRelationInput[]
    cursor?: IngredientUseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientUseScalarFieldEnum | IngredientUseScalarFieldEnum[]
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
  }


  /**
   * Model IngredientUse
   */

  export type AggregateIngredientUse = {
    _count: IngredientUseCountAggregateOutputType | null
    _avg: IngredientUseAvgAggregateOutputType | null
    _sum: IngredientUseSumAggregateOutputType | null
    _min: IngredientUseMinAggregateOutputType | null
    _max: IngredientUseMaxAggregateOutputType | null
  }

  export type IngredientUseAvgAggregateOutputType = {
    qty: number | null
  }

  export type IngredientUseSumAggregateOutputType = {
    qty: number | null
  }

  export type IngredientUseMinAggregateOutputType = {
    id: string | null
    recipeId: string | null
    ingredientId: string | null
    qty: number | null
    unit: string | null
    optional: boolean | null
    isKeystone: boolean | null
  }

  export type IngredientUseMaxAggregateOutputType = {
    id: string | null
    recipeId: string | null
    ingredientId: string | null
    qty: number | null
    unit: string | null
    optional: boolean | null
    isKeystone: boolean | null
  }

  export type IngredientUseCountAggregateOutputType = {
    id: number
    recipeId: number
    ingredientId: number
    qty: number
    unit: number
    optional: number
    isKeystone: number
    _all: number
  }


  export type IngredientUseAvgAggregateInputType = {
    qty?: true
  }

  export type IngredientUseSumAggregateInputType = {
    qty?: true
  }

  export type IngredientUseMinAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    qty?: true
    unit?: true
    optional?: true
    isKeystone?: true
  }

  export type IngredientUseMaxAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    qty?: true
    unit?: true
    optional?: true
    isKeystone?: true
  }

  export type IngredientUseCountAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    qty?: true
    unit?: true
    optional?: true
    isKeystone?: true
    _all?: true
  }

  export type IngredientUseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngredientUse to aggregate.
     */
    where?: IngredientUseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientUses to fetch.
     */
    orderBy?: IngredientUseOrderByWithRelationInput | IngredientUseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientUseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientUses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientUses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IngredientUses
    **/
    _count?: true | IngredientUseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientUseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientUseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientUseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientUseMaxAggregateInputType
  }

  export type GetIngredientUseAggregateType<T extends IngredientUseAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredientUse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredientUse[P]>
      : GetScalarType<T[P], AggregateIngredientUse[P]>
  }




  export type IngredientUseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientUseWhereInput
    orderBy?: IngredientUseOrderByWithAggregationInput | IngredientUseOrderByWithAggregationInput[]
    by: IngredientUseScalarFieldEnum[] | IngredientUseScalarFieldEnum
    having?: IngredientUseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientUseCountAggregateInputType | true
    _avg?: IngredientUseAvgAggregateInputType
    _sum?: IngredientUseSumAggregateInputType
    _min?: IngredientUseMinAggregateInputType
    _max?: IngredientUseMaxAggregateInputType
  }

  export type IngredientUseGroupByOutputType = {
    id: string
    recipeId: string
    ingredientId: string
    qty: number | null
    unit: string | null
    optional: boolean
    isKeystone: boolean
    _count: IngredientUseCountAggregateOutputType | null
    _avg: IngredientUseAvgAggregateOutputType | null
    _sum: IngredientUseSumAggregateOutputType | null
    _min: IngredientUseMinAggregateOutputType | null
    _max: IngredientUseMaxAggregateOutputType | null
  }

  type GetIngredientUseGroupByPayload<T extends IngredientUseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientUseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientUseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientUseGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientUseGroupByOutputType[P]>
        }
      >
    >


  export type IngredientUseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    qty?: boolean
    unit?: boolean
    optional?: boolean
    isKeystone?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientUse"]>

  export type IngredientUseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    qty?: boolean
    unit?: boolean
    optional?: boolean
    isKeystone?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientUse"]>

  export type IngredientUseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    qty?: boolean
    unit?: boolean
    optional?: boolean
    isKeystone?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientUse"]>

  export type IngredientUseSelectScalar = {
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    qty?: boolean
    unit?: boolean
    optional?: boolean
    isKeystone?: boolean
  }

  export type IngredientUseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipeId" | "ingredientId" | "qty" | "unit" | "optional" | "isKeystone", ExtArgs["result"]["ingredientUse"]>
  export type IngredientUseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type IngredientUseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type IngredientUseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }

  export type $IngredientUsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IngredientUse"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      ingredient: Prisma.$IngredientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipeId: string
      ingredientId: string
      qty: number | null
      unit: string | null
      optional: boolean
      isKeystone: boolean
    }, ExtArgs["result"]["ingredientUse"]>
    composites: {}
  }

  type IngredientUseGetPayload<S extends boolean | null | undefined | IngredientUseDefaultArgs> = $Result.GetResult<Prisma.$IngredientUsePayload, S>

  type IngredientUseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientUseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientUseCountAggregateInputType | true
    }

  export interface IngredientUseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IngredientUse'], meta: { name: 'IngredientUse' } }
    /**
     * Find zero or one IngredientUse that matches the filter.
     * @param {IngredientUseFindUniqueArgs} args - Arguments to find a IngredientUse
     * @example
     * // Get one IngredientUse
     * const ingredientUse = await prisma.ingredientUse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientUseFindUniqueArgs>(args: SelectSubset<T, IngredientUseFindUniqueArgs<ExtArgs>>): Prisma__IngredientUseClient<$Result.GetResult<Prisma.$IngredientUsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IngredientUse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientUseFindUniqueOrThrowArgs} args - Arguments to find a IngredientUse
     * @example
     * // Get one IngredientUse
     * const ingredientUse = await prisma.ingredientUse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientUseFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientUseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientUseClient<$Result.GetResult<Prisma.$IngredientUsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngredientUse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUseFindFirstArgs} args - Arguments to find a IngredientUse
     * @example
     * // Get one IngredientUse
     * const ingredientUse = await prisma.ingredientUse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientUseFindFirstArgs>(args?: SelectSubset<T, IngredientUseFindFirstArgs<ExtArgs>>): Prisma__IngredientUseClient<$Result.GetResult<Prisma.$IngredientUsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngredientUse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUseFindFirstOrThrowArgs} args - Arguments to find a IngredientUse
     * @example
     * // Get one IngredientUse
     * const ingredientUse = await prisma.ingredientUse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientUseFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientUseFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientUseClient<$Result.GetResult<Prisma.$IngredientUsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IngredientUses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IngredientUses
     * const ingredientUses = await prisma.ingredientUse.findMany()
     * 
     * // Get first 10 IngredientUses
     * const ingredientUses = await prisma.ingredientUse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientUseWithIdOnly = await prisma.ingredientUse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientUseFindManyArgs>(args?: SelectSubset<T, IngredientUseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientUsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IngredientUse.
     * @param {IngredientUseCreateArgs} args - Arguments to create a IngredientUse.
     * @example
     * // Create one IngredientUse
     * const IngredientUse = await prisma.ingredientUse.create({
     *   data: {
     *     // ... data to create a IngredientUse
     *   }
     * })
     * 
     */
    create<T extends IngredientUseCreateArgs>(args: SelectSubset<T, IngredientUseCreateArgs<ExtArgs>>): Prisma__IngredientUseClient<$Result.GetResult<Prisma.$IngredientUsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IngredientUses.
     * @param {IngredientUseCreateManyArgs} args - Arguments to create many IngredientUses.
     * @example
     * // Create many IngredientUses
     * const ingredientUse = await prisma.ingredientUse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientUseCreateManyArgs>(args?: SelectSubset<T, IngredientUseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IngredientUses and returns the data saved in the database.
     * @param {IngredientUseCreateManyAndReturnArgs} args - Arguments to create many IngredientUses.
     * @example
     * // Create many IngredientUses
     * const ingredientUse = await prisma.ingredientUse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IngredientUses and only return the `id`
     * const ingredientUseWithIdOnly = await prisma.ingredientUse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientUseCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientUseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientUsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IngredientUse.
     * @param {IngredientUseDeleteArgs} args - Arguments to delete one IngredientUse.
     * @example
     * // Delete one IngredientUse
     * const IngredientUse = await prisma.ingredientUse.delete({
     *   where: {
     *     // ... filter to delete one IngredientUse
     *   }
     * })
     * 
     */
    delete<T extends IngredientUseDeleteArgs>(args: SelectSubset<T, IngredientUseDeleteArgs<ExtArgs>>): Prisma__IngredientUseClient<$Result.GetResult<Prisma.$IngredientUsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IngredientUse.
     * @param {IngredientUseUpdateArgs} args - Arguments to update one IngredientUse.
     * @example
     * // Update one IngredientUse
     * const ingredientUse = await prisma.ingredientUse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUseUpdateArgs>(args: SelectSubset<T, IngredientUseUpdateArgs<ExtArgs>>): Prisma__IngredientUseClient<$Result.GetResult<Prisma.$IngredientUsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IngredientUses.
     * @param {IngredientUseDeleteManyArgs} args - Arguments to filter IngredientUses to delete.
     * @example
     * // Delete a few IngredientUses
     * const { count } = await prisma.ingredientUse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientUseDeleteManyArgs>(args?: SelectSubset<T, IngredientUseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngredientUses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IngredientUses
     * const ingredientUse = await prisma.ingredientUse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUseUpdateManyArgs>(args: SelectSubset<T, IngredientUseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngredientUses and returns the data updated in the database.
     * @param {IngredientUseUpdateManyAndReturnArgs} args - Arguments to update many IngredientUses.
     * @example
     * // Update many IngredientUses
     * const ingredientUse = await prisma.ingredientUse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IngredientUses and only return the `id`
     * const ingredientUseWithIdOnly = await prisma.ingredientUse.updateManyAndReturn({
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
    updateManyAndReturn<T extends IngredientUseUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientUseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientUsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IngredientUse.
     * @param {IngredientUseUpsertArgs} args - Arguments to update or create a IngredientUse.
     * @example
     * // Update or create a IngredientUse
     * const ingredientUse = await prisma.ingredientUse.upsert({
     *   create: {
     *     // ... data to create a IngredientUse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IngredientUse we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUseUpsertArgs>(args: SelectSubset<T, IngredientUseUpsertArgs<ExtArgs>>): Prisma__IngredientUseClient<$Result.GetResult<Prisma.$IngredientUsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IngredientUses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUseCountArgs} args - Arguments to filter IngredientUses to count.
     * @example
     * // Count the number of IngredientUses
     * const count = await prisma.ingredientUse.count({
     *   where: {
     *     // ... the filter for the IngredientUses we want to count
     *   }
     * })
    **/
    count<T extends IngredientUseCountArgs>(
      args?: Subset<T, IngredientUseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientUseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IngredientUse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientUseAggregateArgs>(args: Subset<T, IngredientUseAggregateArgs>): Prisma.PrismaPromise<GetIngredientUseAggregateType<T>>

    /**
     * Group by IngredientUse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUseGroupByArgs} args - Group by arguments.
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
      T extends IngredientUseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientUseGroupByArgs['orderBy'] }
        : { orderBy?: IngredientUseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientUseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientUseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IngredientUse model
   */
  readonly fields: IngredientUseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IngredientUse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientUseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IngredientUse model
   */
  interface IngredientUseFieldRefs {
    readonly id: FieldRef<"IngredientUse", 'String'>
    readonly recipeId: FieldRef<"IngredientUse", 'String'>
    readonly ingredientId: FieldRef<"IngredientUse", 'String'>
    readonly qty: FieldRef<"IngredientUse", 'Float'>
    readonly unit: FieldRef<"IngredientUse", 'String'>
    readonly optional: FieldRef<"IngredientUse", 'Boolean'>
    readonly isKeystone: FieldRef<"IngredientUse", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * IngredientUse findUnique
   */
  export type IngredientUseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientUse
     */
    select?: IngredientUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientUse
     */
    omit?: IngredientUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientUseInclude<ExtArgs> | null
    /**
     * Filter, which IngredientUse to fetch.
     */
    where: IngredientUseWhereUniqueInput
  }

  /**
   * IngredientUse findUniqueOrThrow
   */
  export type IngredientUseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientUse
     */
    select?: IngredientUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientUse
     */
    omit?: IngredientUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientUseInclude<ExtArgs> | null
    /**
     * Filter, which IngredientUse to fetch.
     */
    where: IngredientUseWhereUniqueInput
  }

  /**
   * IngredientUse findFirst
   */
  export type IngredientUseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientUse
     */
    select?: IngredientUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientUse
     */
    omit?: IngredientUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientUseInclude<ExtArgs> | null
    /**
     * Filter, which IngredientUse to fetch.
     */
    where?: IngredientUseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientUses to fetch.
     */
    orderBy?: IngredientUseOrderByWithRelationInput | IngredientUseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngredientUses.
     */
    cursor?: IngredientUseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientUses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientUses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngredientUses.
     */
    distinct?: IngredientUseScalarFieldEnum | IngredientUseScalarFieldEnum[]
  }

  /**
   * IngredientUse findFirstOrThrow
   */
  export type IngredientUseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientUse
     */
    select?: IngredientUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientUse
     */
    omit?: IngredientUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientUseInclude<ExtArgs> | null
    /**
     * Filter, which IngredientUse to fetch.
     */
    where?: IngredientUseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientUses to fetch.
     */
    orderBy?: IngredientUseOrderByWithRelationInput | IngredientUseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngredientUses.
     */
    cursor?: IngredientUseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientUses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientUses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngredientUses.
     */
    distinct?: IngredientUseScalarFieldEnum | IngredientUseScalarFieldEnum[]
  }

  /**
   * IngredientUse findMany
   */
  export type IngredientUseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientUse
     */
    select?: IngredientUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientUse
     */
    omit?: IngredientUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientUseInclude<ExtArgs> | null
    /**
     * Filter, which IngredientUses to fetch.
     */
    where?: IngredientUseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientUses to fetch.
     */
    orderBy?: IngredientUseOrderByWithRelationInput | IngredientUseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IngredientUses.
     */
    cursor?: IngredientUseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientUses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientUses.
     */
    skip?: number
    distinct?: IngredientUseScalarFieldEnum | IngredientUseScalarFieldEnum[]
  }

  /**
   * IngredientUse create
   */
  export type IngredientUseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientUse
     */
    select?: IngredientUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientUse
     */
    omit?: IngredientUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientUseInclude<ExtArgs> | null
    /**
     * The data needed to create a IngredientUse.
     */
    data: XOR<IngredientUseCreateInput, IngredientUseUncheckedCreateInput>
  }

  /**
   * IngredientUse createMany
   */
  export type IngredientUseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IngredientUses.
     */
    data: IngredientUseCreateManyInput | IngredientUseCreateManyInput[]
  }

  /**
   * IngredientUse createManyAndReturn
   */
  export type IngredientUseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientUse
     */
    select?: IngredientUseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientUse
     */
    omit?: IngredientUseOmit<ExtArgs> | null
    /**
     * The data used to create many IngredientUses.
     */
    data: IngredientUseCreateManyInput | IngredientUseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientUseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IngredientUse update
   */
  export type IngredientUseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientUse
     */
    select?: IngredientUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientUse
     */
    omit?: IngredientUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientUseInclude<ExtArgs> | null
    /**
     * The data needed to update a IngredientUse.
     */
    data: XOR<IngredientUseUpdateInput, IngredientUseUncheckedUpdateInput>
    /**
     * Choose, which IngredientUse to update.
     */
    where: IngredientUseWhereUniqueInput
  }

  /**
   * IngredientUse updateMany
   */
  export type IngredientUseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IngredientUses.
     */
    data: XOR<IngredientUseUpdateManyMutationInput, IngredientUseUncheckedUpdateManyInput>
    /**
     * Filter which IngredientUses to update
     */
    where?: IngredientUseWhereInput
    /**
     * Limit how many IngredientUses to update.
     */
    limit?: number
  }

  /**
   * IngredientUse updateManyAndReturn
   */
  export type IngredientUseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientUse
     */
    select?: IngredientUseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientUse
     */
    omit?: IngredientUseOmit<ExtArgs> | null
    /**
     * The data used to update IngredientUses.
     */
    data: XOR<IngredientUseUpdateManyMutationInput, IngredientUseUncheckedUpdateManyInput>
    /**
     * Filter which IngredientUses to update
     */
    where?: IngredientUseWhereInput
    /**
     * Limit how many IngredientUses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientUseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IngredientUse upsert
   */
  export type IngredientUseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientUse
     */
    select?: IngredientUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientUse
     */
    omit?: IngredientUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientUseInclude<ExtArgs> | null
    /**
     * The filter to search for the IngredientUse to update in case it exists.
     */
    where: IngredientUseWhereUniqueInput
    /**
     * In case the IngredientUse found by the `where` argument doesn't exist, create a new IngredientUse with this data.
     */
    create: XOR<IngredientUseCreateInput, IngredientUseUncheckedCreateInput>
    /**
     * In case the IngredientUse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUseUpdateInput, IngredientUseUncheckedUpdateInput>
  }

  /**
   * IngredientUse delete
   */
  export type IngredientUseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientUse
     */
    select?: IngredientUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientUse
     */
    omit?: IngredientUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientUseInclude<ExtArgs> | null
    /**
     * Filter which IngredientUse to delete.
     */
    where: IngredientUseWhereUniqueInput
  }

  /**
   * IngredientUse deleteMany
   */
  export type IngredientUseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngredientUses to delete
     */
    where?: IngredientUseWhereInput
    /**
     * Limit how many IngredientUses to delete.
     */
    limit?: number
  }

  /**
   * IngredientUse without action
   */
  export type IngredientUseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientUse
     */
    select?: IngredientUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientUse
     */
    omit?: IngredientUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientUseInclude<ExtArgs> | null
  }


  /**
   * Model Step
   */

  export type AggregateStep = {
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  export type StepAvgAggregateOutputType = {
    index: number | null
    timersSec: number | null
  }

  export type StepSumAggregateOutputType = {
    index: number | null
    timersSec: number | null
  }

  export type StepMinAggregateOutputType = {
    id: string | null
    recipeId: string | null
    index: number | null
    text: string | null
    timersSec: number | null
  }

  export type StepMaxAggregateOutputType = {
    id: string | null
    recipeId: string | null
    index: number | null
    text: string | null
    timersSec: number | null
  }

  export type StepCountAggregateOutputType = {
    id: number
    recipeId: number
    index: number
    text: number
    timersSec: number
    _all: number
  }


  export type StepAvgAggregateInputType = {
    index?: true
    timersSec?: true
  }

  export type StepSumAggregateInputType = {
    index?: true
    timersSec?: true
  }

  export type StepMinAggregateInputType = {
    id?: true
    recipeId?: true
    index?: true
    text?: true
    timersSec?: true
  }

  export type StepMaxAggregateInputType = {
    id?: true
    recipeId?: true
    index?: true
    text?: true
    timersSec?: true
  }

  export type StepCountAggregateInputType = {
    id?: true
    recipeId?: true
    index?: true
    text?: true
    timersSec?: true
    _all?: true
  }

  export type StepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Step to aggregate.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Steps
    **/
    _count?: true | StepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepMaxAggregateInputType
  }

  export type GetStepAggregateType<T extends StepAggregateArgs> = {
        [P in keyof T & keyof AggregateStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStep[P]>
      : GetScalarType<T[P], AggregateStep[P]>
  }




  export type StepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
    orderBy?: StepOrderByWithAggregationInput | StepOrderByWithAggregationInput[]
    by: StepScalarFieldEnum[] | StepScalarFieldEnum
    having?: StepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepCountAggregateInputType | true
    _avg?: StepAvgAggregateInputType
    _sum?: StepSumAggregateInputType
    _min?: StepMinAggregateInputType
    _max?: StepMaxAggregateInputType
  }

  export type StepGroupByOutputType = {
    id: string
    recipeId: string
    index: number
    text: string
    timersSec: number | null
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  type GetStepGroupByPayload<T extends StepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepGroupByOutputType[P]>
            : GetScalarType<T[P], StepGroupByOutputType[P]>
        }
      >
    >


  export type StepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    index?: boolean
    text?: boolean
    timersSec?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    index?: boolean
    text?: boolean
    timersSec?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    index?: boolean
    text?: boolean
    timersSec?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectScalar = {
    id?: boolean
    recipeId?: boolean
    index?: boolean
    text?: boolean
    timersSec?: boolean
  }

  export type StepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipeId" | "index" | "text" | "timersSec", ExtArgs["result"]["step"]>
  export type StepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type StepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type StepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $StepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Step"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipeId: string
      index: number
      text: string
      timersSec: number | null
    }, ExtArgs["result"]["step"]>
    composites: {}
  }

  type StepGetPayload<S extends boolean | null | undefined | StepDefaultArgs> = $Result.GetResult<Prisma.$StepPayload, S>

  type StepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StepCountAggregateInputType | true
    }

  export interface StepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Step'], meta: { name: 'Step' } }
    /**
     * Find zero or one Step that matches the filter.
     * @param {StepFindUniqueArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepFindUniqueArgs>(args: SelectSubset<T, StepFindUniqueArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Step that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepFindUniqueOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepFindUniqueOrThrowArgs>(args: SelectSubset<T, StepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepFindFirstArgs>(args?: SelectSubset<T, StepFindFirstArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepFindFirstOrThrowArgs>(args?: SelectSubset<T, StepFindFirstOrThrowArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Steps
     * const steps = await prisma.step.findMany()
     * 
     * // Get first 10 Steps
     * const steps = await prisma.step.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepWithIdOnly = await prisma.step.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StepFindManyArgs>(args?: SelectSubset<T, StepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Step.
     * @param {StepCreateArgs} args - Arguments to create a Step.
     * @example
     * // Create one Step
     * const Step = await prisma.step.create({
     *   data: {
     *     // ... data to create a Step
     *   }
     * })
     * 
     */
    create<T extends StepCreateArgs>(args: SelectSubset<T, StepCreateArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Steps.
     * @param {StepCreateManyArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StepCreateManyArgs>(args?: SelectSubset<T, StepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Steps and returns the data saved in the database.
     * @param {StepCreateManyAndReturnArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StepCreateManyAndReturnArgs>(args?: SelectSubset<T, StepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Step.
     * @param {StepDeleteArgs} args - Arguments to delete one Step.
     * @example
     * // Delete one Step
     * const Step = await prisma.step.delete({
     *   where: {
     *     // ... filter to delete one Step
     *   }
     * })
     * 
     */
    delete<T extends StepDeleteArgs>(args: SelectSubset<T, StepDeleteArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Step.
     * @param {StepUpdateArgs} args - Arguments to update one Step.
     * @example
     * // Update one Step
     * const step = await prisma.step.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StepUpdateArgs>(args: SelectSubset<T, StepUpdateArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Steps.
     * @param {StepDeleteManyArgs} args - Arguments to filter Steps to delete.
     * @example
     * // Delete a few Steps
     * const { count } = await prisma.step.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StepDeleteManyArgs>(args?: SelectSubset<T, StepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StepUpdateManyArgs>(args: SelectSubset<T, StepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps and returns the data updated in the database.
     * @param {StepUpdateManyAndReturnArgs} args - Arguments to update many Steps.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.updateManyAndReturn({
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
    updateManyAndReturn<T extends StepUpdateManyAndReturnArgs>(args: SelectSubset<T, StepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Step.
     * @param {StepUpsertArgs} args - Arguments to update or create a Step.
     * @example
     * // Update or create a Step
     * const step = await prisma.step.upsert({
     *   create: {
     *     // ... data to create a Step
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Step we want to update
     *   }
     * })
     */
    upsert<T extends StepUpsertArgs>(args: SelectSubset<T, StepUpsertArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepCountArgs} args - Arguments to filter Steps to count.
     * @example
     * // Count the number of Steps
     * const count = await prisma.step.count({
     *   where: {
     *     // ... the filter for the Steps we want to count
     *   }
     * })
    **/
    count<T extends StepCountArgs>(
      args?: Subset<T, StepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StepAggregateArgs>(args: Subset<T, StepAggregateArgs>): Prisma.PrismaPromise<GetStepAggregateType<T>>

    /**
     * Group by Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepGroupByArgs} args - Group by arguments.
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
      T extends StepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepGroupByArgs['orderBy'] }
        : { orderBy?: StepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Step model
   */
  readonly fields: StepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Step.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Step model
   */
  interface StepFieldRefs {
    readonly id: FieldRef<"Step", 'String'>
    readonly recipeId: FieldRef<"Step", 'String'>
    readonly index: FieldRef<"Step", 'Int'>
    readonly text: FieldRef<"Step", 'String'>
    readonly timersSec: FieldRef<"Step", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Step findUnique
   */
  export type StepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findUniqueOrThrow
   */
  export type StepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findFirst
   */
  export type StepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findFirstOrThrow
   */
  export type StepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findMany
   */
  export type StepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step create
   */
  export type StepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to create a Step.
     */
    data: XOR<StepCreateInput, StepUncheckedCreateInput>
  }

  /**
   * Step createMany
   */
  export type StepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
  }

  /**
   * Step createManyAndReturn
   */
  export type StepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Step update
   */
  export type StepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to update a Step.
     */
    data: XOR<StepUpdateInput, StepUncheckedUpdateInput>
    /**
     * Choose, which Step to update.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step updateMany
   */
  export type StepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
  }

  /**
   * Step updateManyAndReturn
   */
  export type StepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Step upsert
   */
  export type StepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The filter to search for the Step to update in case it exists.
     */
    where: StepWhereUniqueInput
    /**
     * In case the Step found by the `where` argument doesn't exist, create a new Step with this data.
     */
    create: XOR<StepCreateInput, StepUncheckedCreateInput>
    /**
     * In case the Step was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepUpdateInput, StepUncheckedUpdateInput>
  }

  /**
   * Step delete
   */
  export type StepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter which Step to delete.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step deleteMany
   */
  export type StepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Steps to delete
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to delete.
     */
    limit?: number
  }

  /**
   * Step without action
   */
  export type StepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
  }


  /**
   * Model Quirk
   */

  export type AggregateQuirk = {
    _count: QuirkCountAggregateOutputType | null
    _avg: QuirkAvgAggregateOutputType | null
    _sum: QuirkSumAggregateOutputType | null
    _min: QuirkMinAggregateOutputType | null
    _max: QuirkMaxAggregateOutputType | null
  }

  export type QuirkAvgAggregateOutputType = {
    stepIndex: number | null
    upvotes: number | null
  }

  export type QuirkSumAggregateOutputType = {
    stepIndex: number | null
    upvotes: number | null
  }

  export type QuirkMinAggregateOutputType = {
    id: string | null
    recipeId: string | null
    stepIndex: number | null
    text: string | null
    authorId: string | null
    upvotes: number | null
  }

  export type QuirkMaxAggregateOutputType = {
    id: string | null
    recipeId: string | null
    stepIndex: number | null
    text: string | null
    authorId: string | null
    upvotes: number | null
  }

  export type QuirkCountAggregateOutputType = {
    id: number
    recipeId: number
    stepIndex: number
    text: number
    tags: number
    authorId: number
    upvotes: number
    _all: number
  }


  export type QuirkAvgAggregateInputType = {
    stepIndex?: true
    upvotes?: true
  }

  export type QuirkSumAggregateInputType = {
    stepIndex?: true
    upvotes?: true
  }

  export type QuirkMinAggregateInputType = {
    id?: true
    recipeId?: true
    stepIndex?: true
    text?: true
    authorId?: true
    upvotes?: true
  }

  export type QuirkMaxAggregateInputType = {
    id?: true
    recipeId?: true
    stepIndex?: true
    text?: true
    authorId?: true
    upvotes?: true
  }

  export type QuirkCountAggregateInputType = {
    id?: true
    recipeId?: true
    stepIndex?: true
    text?: true
    tags?: true
    authorId?: true
    upvotes?: true
    _all?: true
  }

  export type QuirkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quirk to aggregate.
     */
    where?: QuirkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quirks to fetch.
     */
    orderBy?: QuirkOrderByWithRelationInput | QuirkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuirkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quirks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quirks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quirks
    **/
    _count?: true | QuirkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuirkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuirkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuirkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuirkMaxAggregateInputType
  }

  export type GetQuirkAggregateType<T extends QuirkAggregateArgs> = {
        [P in keyof T & keyof AggregateQuirk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuirk[P]>
      : GetScalarType<T[P], AggregateQuirk[P]>
  }




  export type QuirkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuirkWhereInput
    orderBy?: QuirkOrderByWithAggregationInput | QuirkOrderByWithAggregationInput[]
    by: QuirkScalarFieldEnum[] | QuirkScalarFieldEnum
    having?: QuirkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuirkCountAggregateInputType | true
    _avg?: QuirkAvgAggregateInputType
    _sum?: QuirkSumAggregateInputType
    _min?: QuirkMinAggregateInputType
    _max?: QuirkMaxAggregateInputType
  }

  export type QuirkGroupByOutputType = {
    id: string
    recipeId: string
    stepIndex: number | null
    text: string
    tags: JsonValue
    authorId: string | null
    upvotes: number
    _count: QuirkCountAggregateOutputType | null
    _avg: QuirkAvgAggregateOutputType | null
    _sum: QuirkSumAggregateOutputType | null
    _min: QuirkMinAggregateOutputType | null
    _max: QuirkMaxAggregateOutputType | null
  }

  type GetQuirkGroupByPayload<T extends QuirkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuirkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuirkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuirkGroupByOutputType[P]>
            : GetScalarType<T[P], QuirkGroupByOutputType[P]>
        }
      >
    >


  export type QuirkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    stepIndex?: boolean
    text?: boolean
    tags?: boolean
    authorId?: boolean
    upvotes?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quirk"]>

  export type QuirkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    stepIndex?: boolean
    text?: boolean
    tags?: boolean
    authorId?: boolean
    upvotes?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quirk"]>

  export type QuirkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    stepIndex?: boolean
    text?: boolean
    tags?: boolean
    authorId?: boolean
    upvotes?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quirk"]>

  export type QuirkSelectScalar = {
    id?: boolean
    recipeId?: boolean
    stepIndex?: boolean
    text?: boolean
    tags?: boolean
    authorId?: boolean
    upvotes?: boolean
  }

  export type QuirkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipeId" | "stepIndex" | "text" | "tags" | "authorId" | "upvotes", ExtArgs["result"]["quirk"]>
  export type QuirkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type QuirkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type QuirkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $QuirkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quirk"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipeId: string
      stepIndex: number | null
      text: string
      tags: Prisma.JsonValue
      authorId: string | null
      upvotes: number
    }, ExtArgs["result"]["quirk"]>
    composites: {}
  }

  type QuirkGetPayload<S extends boolean | null | undefined | QuirkDefaultArgs> = $Result.GetResult<Prisma.$QuirkPayload, S>

  type QuirkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuirkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuirkCountAggregateInputType | true
    }

  export interface QuirkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quirk'], meta: { name: 'Quirk' } }
    /**
     * Find zero or one Quirk that matches the filter.
     * @param {QuirkFindUniqueArgs} args - Arguments to find a Quirk
     * @example
     * // Get one Quirk
     * const quirk = await prisma.quirk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuirkFindUniqueArgs>(args: SelectSubset<T, QuirkFindUniqueArgs<ExtArgs>>): Prisma__QuirkClient<$Result.GetResult<Prisma.$QuirkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quirk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuirkFindUniqueOrThrowArgs} args - Arguments to find a Quirk
     * @example
     * // Get one Quirk
     * const quirk = await prisma.quirk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuirkFindUniqueOrThrowArgs>(args: SelectSubset<T, QuirkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuirkClient<$Result.GetResult<Prisma.$QuirkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quirk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuirkFindFirstArgs} args - Arguments to find a Quirk
     * @example
     * // Get one Quirk
     * const quirk = await prisma.quirk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuirkFindFirstArgs>(args?: SelectSubset<T, QuirkFindFirstArgs<ExtArgs>>): Prisma__QuirkClient<$Result.GetResult<Prisma.$QuirkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quirk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuirkFindFirstOrThrowArgs} args - Arguments to find a Quirk
     * @example
     * // Get one Quirk
     * const quirk = await prisma.quirk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuirkFindFirstOrThrowArgs>(args?: SelectSubset<T, QuirkFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuirkClient<$Result.GetResult<Prisma.$QuirkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quirks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuirkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quirks
     * const quirks = await prisma.quirk.findMany()
     * 
     * // Get first 10 Quirks
     * const quirks = await prisma.quirk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quirkWithIdOnly = await prisma.quirk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuirkFindManyArgs>(args?: SelectSubset<T, QuirkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuirkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quirk.
     * @param {QuirkCreateArgs} args - Arguments to create a Quirk.
     * @example
     * // Create one Quirk
     * const Quirk = await prisma.quirk.create({
     *   data: {
     *     // ... data to create a Quirk
     *   }
     * })
     * 
     */
    create<T extends QuirkCreateArgs>(args: SelectSubset<T, QuirkCreateArgs<ExtArgs>>): Prisma__QuirkClient<$Result.GetResult<Prisma.$QuirkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quirks.
     * @param {QuirkCreateManyArgs} args - Arguments to create many Quirks.
     * @example
     * // Create many Quirks
     * const quirk = await prisma.quirk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuirkCreateManyArgs>(args?: SelectSubset<T, QuirkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quirks and returns the data saved in the database.
     * @param {QuirkCreateManyAndReturnArgs} args - Arguments to create many Quirks.
     * @example
     * // Create many Quirks
     * const quirk = await prisma.quirk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quirks and only return the `id`
     * const quirkWithIdOnly = await prisma.quirk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuirkCreateManyAndReturnArgs>(args?: SelectSubset<T, QuirkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuirkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quirk.
     * @param {QuirkDeleteArgs} args - Arguments to delete one Quirk.
     * @example
     * // Delete one Quirk
     * const Quirk = await prisma.quirk.delete({
     *   where: {
     *     // ... filter to delete one Quirk
     *   }
     * })
     * 
     */
    delete<T extends QuirkDeleteArgs>(args: SelectSubset<T, QuirkDeleteArgs<ExtArgs>>): Prisma__QuirkClient<$Result.GetResult<Prisma.$QuirkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quirk.
     * @param {QuirkUpdateArgs} args - Arguments to update one Quirk.
     * @example
     * // Update one Quirk
     * const quirk = await prisma.quirk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuirkUpdateArgs>(args: SelectSubset<T, QuirkUpdateArgs<ExtArgs>>): Prisma__QuirkClient<$Result.GetResult<Prisma.$QuirkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quirks.
     * @param {QuirkDeleteManyArgs} args - Arguments to filter Quirks to delete.
     * @example
     * // Delete a few Quirks
     * const { count } = await prisma.quirk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuirkDeleteManyArgs>(args?: SelectSubset<T, QuirkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quirks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuirkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quirks
     * const quirk = await prisma.quirk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuirkUpdateManyArgs>(args: SelectSubset<T, QuirkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quirks and returns the data updated in the database.
     * @param {QuirkUpdateManyAndReturnArgs} args - Arguments to update many Quirks.
     * @example
     * // Update many Quirks
     * const quirk = await prisma.quirk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quirks and only return the `id`
     * const quirkWithIdOnly = await prisma.quirk.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuirkUpdateManyAndReturnArgs>(args: SelectSubset<T, QuirkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuirkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quirk.
     * @param {QuirkUpsertArgs} args - Arguments to update or create a Quirk.
     * @example
     * // Update or create a Quirk
     * const quirk = await prisma.quirk.upsert({
     *   create: {
     *     // ... data to create a Quirk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quirk we want to update
     *   }
     * })
     */
    upsert<T extends QuirkUpsertArgs>(args: SelectSubset<T, QuirkUpsertArgs<ExtArgs>>): Prisma__QuirkClient<$Result.GetResult<Prisma.$QuirkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quirks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuirkCountArgs} args - Arguments to filter Quirks to count.
     * @example
     * // Count the number of Quirks
     * const count = await prisma.quirk.count({
     *   where: {
     *     // ... the filter for the Quirks we want to count
     *   }
     * })
    **/
    count<T extends QuirkCountArgs>(
      args?: Subset<T, QuirkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuirkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quirk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuirkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuirkAggregateArgs>(args: Subset<T, QuirkAggregateArgs>): Prisma.PrismaPromise<GetQuirkAggregateType<T>>

    /**
     * Group by Quirk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuirkGroupByArgs} args - Group by arguments.
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
      T extends QuirkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuirkGroupByArgs['orderBy'] }
        : { orderBy?: QuirkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuirkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuirkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quirk model
   */
  readonly fields: QuirkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quirk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuirkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Quirk model
   */
  interface QuirkFieldRefs {
    readonly id: FieldRef<"Quirk", 'String'>
    readonly recipeId: FieldRef<"Quirk", 'String'>
    readonly stepIndex: FieldRef<"Quirk", 'Int'>
    readonly text: FieldRef<"Quirk", 'String'>
    readonly tags: FieldRef<"Quirk", 'Json'>
    readonly authorId: FieldRef<"Quirk", 'String'>
    readonly upvotes: FieldRef<"Quirk", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Quirk findUnique
   */
  export type QuirkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quirk
     */
    select?: QuirkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quirk
     */
    omit?: QuirkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuirkInclude<ExtArgs> | null
    /**
     * Filter, which Quirk to fetch.
     */
    where: QuirkWhereUniqueInput
  }

  /**
   * Quirk findUniqueOrThrow
   */
  export type QuirkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quirk
     */
    select?: QuirkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quirk
     */
    omit?: QuirkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuirkInclude<ExtArgs> | null
    /**
     * Filter, which Quirk to fetch.
     */
    where: QuirkWhereUniqueInput
  }

  /**
   * Quirk findFirst
   */
  export type QuirkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quirk
     */
    select?: QuirkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quirk
     */
    omit?: QuirkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuirkInclude<ExtArgs> | null
    /**
     * Filter, which Quirk to fetch.
     */
    where?: QuirkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quirks to fetch.
     */
    orderBy?: QuirkOrderByWithRelationInput | QuirkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quirks.
     */
    cursor?: QuirkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quirks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quirks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quirks.
     */
    distinct?: QuirkScalarFieldEnum | QuirkScalarFieldEnum[]
  }

  /**
   * Quirk findFirstOrThrow
   */
  export type QuirkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quirk
     */
    select?: QuirkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quirk
     */
    omit?: QuirkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuirkInclude<ExtArgs> | null
    /**
     * Filter, which Quirk to fetch.
     */
    where?: QuirkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quirks to fetch.
     */
    orderBy?: QuirkOrderByWithRelationInput | QuirkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quirks.
     */
    cursor?: QuirkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quirks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quirks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quirks.
     */
    distinct?: QuirkScalarFieldEnum | QuirkScalarFieldEnum[]
  }

  /**
   * Quirk findMany
   */
  export type QuirkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quirk
     */
    select?: QuirkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quirk
     */
    omit?: QuirkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuirkInclude<ExtArgs> | null
    /**
     * Filter, which Quirks to fetch.
     */
    where?: QuirkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quirks to fetch.
     */
    orderBy?: QuirkOrderByWithRelationInput | QuirkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quirks.
     */
    cursor?: QuirkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quirks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quirks.
     */
    skip?: number
    distinct?: QuirkScalarFieldEnum | QuirkScalarFieldEnum[]
  }

  /**
   * Quirk create
   */
  export type QuirkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quirk
     */
    select?: QuirkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quirk
     */
    omit?: QuirkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuirkInclude<ExtArgs> | null
    /**
     * The data needed to create a Quirk.
     */
    data: XOR<QuirkCreateInput, QuirkUncheckedCreateInput>
  }

  /**
   * Quirk createMany
   */
  export type QuirkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quirks.
     */
    data: QuirkCreateManyInput | QuirkCreateManyInput[]
  }

  /**
   * Quirk createManyAndReturn
   */
  export type QuirkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quirk
     */
    select?: QuirkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quirk
     */
    omit?: QuirkOmit<ExtArgs> | null
    /**
     * The data used to create many Quirks.
     */
    data: QuirkCreateManyInput | QuirkCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuirkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quirk update
   */
  export type QuirkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quirk
     */
    select?: QuirkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quirk
     */
    omit?: QuirkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuirkInclude<ExtArgs> | null
    /**
     * The data needed to update a Quirk.
     */
    data: XOR<QuirkUpdateInput, QuirkUncheckedUpdateInput>
    /**
     * Choose, which Quirk to update.
     */
    where: QuirkWhereUniqueInput
  }

  /**
   * Quirk updateMany
   */
  export type QuirkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quirks.
     */
    data: XOR<QuirkUpdateManyMutationInput, QuirkUncheckedUpdateManyInput>
    /**
     * Filter which Quirks to update
     */
    where?: QuirkWhereInput
    /**
     * Limit how many Quirks to update.
     */
    limit?: number
  }

  /**
   * Quirk updateManyAndReturn
   */
  export type QuirkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quirk
     */
    select?: QuirkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quirk
     */
    omit?: QuirkOmit<ExtArgs> | null
    /**
     * The data used to update Quirks.
     */
    data: XOR<QuirkUpdateManyMutationInput, QuirkUncheckedUpdateManyInput>
    /**
     * Filter which Quirks to update
     */
    where?: QuirkWhereInput
    /**
     * Limit how many Quirks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuirkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quirk upsert
   */
  export type QuirkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quirk
     */
    select?: QuirkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quirk
     */
    omit?: QuirkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuirkInclude<ExtArgs> | null
    /**
     * The filter to search for the Quirk to update in case it exists.
     */
    where: QuirkWhereUniqueInput
    /**
     * In case the Quirk found by the `where` argument doesn't exist, create a new Quirk with this data.
     */
    create: XOR<QuirkCreateInput, QuirkUncheckedCreateInput>
    /**
     * In case the Quirk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuirkUpdateInput, QuirkUncheckedUpdateInput>
  }

  /**
   * Quirk delete
   */
  export type QuirkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quirk
     */
    select?: QuirkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quirk
     */
    omit?: QuirkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuirkInclude<ExtArgs> | null
    /**
     * Filter which Quirk to delete.
     */
    where: QuirkWhereUniqueInput
  }

  /**
   * Quirk deleteMany
   */
  export type QuirkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quirks to delete
     */
    where?: QuirkWhereInput
    /**
     * Limit how many Quirks to delete.
     */
    limit?: number
  }

  /**
   * Quirk without action
   */
  export type QuirkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quirk
     */
    select?: QuirkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quirk
     */
    omit?: QuirkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuirkInclude<ExtArgs> | null
  }


  /**
   * Model CuisineDNA
   */

  export type AggregateCuisineDNA = {
    _count: CuisineDNACountAggregateOutputType | null
    _min: CuisineDNAMinAggregateOutputType | null
    _max: CuisineDNAMaxAggregateOutputType | null
  }

  export type CuisineDNAMinAggregateOutputType = {
    cuisine: string | null
  }

  export type CuisineDNAMaxAggregateOutputType = {
    cuisine: string | null
  }

  export type CuisineDNACountAggregateOutputType = {
    cuisine: number
    aromatics: number
    baseSpices: number
    staples: number
    techniques: number
    subsGraphJson: number
    _all: number
  }


  export type CuisineDNAMinAggregateInputType = {
    cuisine?: true
  }

  export type CuisineDNAMaxAggregateInputType = {
    cuisine?: true
  }

  export type CuisineDNACountAggregateInputType = {
    cuisine?: true
    aromatics?: true
    baseSpices?: true
    staples?: true
    techniques?: true
    subsGraphJson?: true
    _all?: true
  }

  export type CuisineDNAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CuisineDNA to aggregate.
     */
    where?: CuisineDNAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CuisineDNAS to fetch.
     */
    orderBy?: CuisineDNAOrderByWithRelationInput | CuisineDNAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CuisineDNAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CuisineDNAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CuisineDNAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CuisineDNAS
    **/
    _count?: true | CuisineDNACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuisineDNAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuisineDNAMaxAggregateInputType
  }

  export type GetCuisineDNAAggregateType<T extends CuisineDNAAggregateArgs> = {
        [P in keyof T & keyof AggregateCuisineDNA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuisineDNA[P]>
      : GetScalarType<T[P], AggregateCuisineDNA[P]>
  }




  export type CuisineDNAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuisineDNAWhereInput
    orderBy?: CuisineDNAOrderByWithAggregationInput | CuisineDNAOrderByWithAggregationInput[]
    by: CuisineDNAScalarFieldEnum[] | CuisineDNAScalarFieldEnum
    having?: CuisineDNAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuisineDNACountAggregateInputType | true
    _min?: CuisineDNAMinAggregateInputType
    _max?: CuisineDNAMaxAggregateInputType
  }

  export type CuisineDNAGroupByOutputType = {
    cuisine: string
    aromatics: JsonValue
    baseSpices: JsonValue
    staples: JsonValue
    techniques: JsonValue
    subsGraphJson: JsonValue
    _count: CuisineDNACountAggregateOutputType | null
    _min: CuisineDNAMinAggregateOutputType | null
    _max: CuisineDNAMaxAggregateOutputType | null
  }

  type GetCuisineDNAGroupByPayload<T extends CuisineDNAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuisineDNAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuisineDNAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuisineDNAGroupByOutputType[P]>
            : GetScalarType<T[P], CuisineDNAGroupByOutputType[P]>
        }
      >
    >


  export type CuisineDNASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cuisine?: boolean
    aromatics?: boolean
    baseSpices?: boolean
    staples?: boolean
    techniques?: boolean
    subsGraphJson?: boolean
  }, ExtArgs["result"]["cuisineDNA"]>

  export type CuisineDNASelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cuisine?: boolean
    aromatics?: boolean
    baseSpices?: boolean
    staples?: boolean
    techniques?: boolean
    subsGraphJson?: boolean
  }, ExtArgs["result"]["cuisineDNA"]>

  export type CuisineDNASelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cuisine?: boolean
    aromatics?: boolean
    baseSpices?: boolean
    staples?: boolean
    techniques?: boolean
    subsGraphJson?: boolean
  }, ExtArgs["result"]["cuisineDNA"]>

  export type CuisineDNASelectScalar = {
    cuisine?: boolean
    aromatics?: boolean
    baseSpices?: boolean
    staples?: boolean
    techniques?: boolean
    subsGraphJson?: boolean
  }

  export type CuisineDNAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cuisine" | "aromatics" | "baseSpices" | "staples" | "techniques" | "subsGraphJson", ExtArgs["result"]["cuisineDNA"]>

  export type $CuisineDNAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CuisineDNA"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      cuisine: string
      aromatics: Prisma.JsonValue
      baseSpices: Prisma.JsonValue
      staples: Prisma.JsonValue
      techniques: Prisma.JsonValue
      subsGraphJson: Prisma.JsonValue
    }, ExtArgs["result"]["cuisineDNA"]>
    composites: {}
  }

  type CuisineDNAGetPayload<S extends boolean | null | undefined | CuisineDNADefaultArgs> = $Result.GetResult<Prisma.$CuisineDNAPayload, S>

  type CuisineDNACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CuisineDNAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CuisineDNACountAggregateInputType | true
    }

  export interface CuisineDNADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CuisineDNA'], meta: { name: 'CuisineDNA' } }
    /**
     * Find zero or one CuisineDNA that matches the filter.
     * @param {CuisineDNAFindUniqueArgs} args - Arguments to find a CuisineDNA
     * @example
     * // Get one CuisineDNA
     * const cuisineDNA = await prisma.cuisineDNA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CuisineDNAFindUniqueArgs>(args: SelectSubset<T, CuisineDNAFindUniqueArgs<ExtArgs>>): Prisma__CuisineDNAClient<$Result.GetResult<Prisma.$CuisineDNAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CuisineDNA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CuisineDNAFindUniqueOrThrowArgs} args - Arguments to find a CuisineDNA
     * @example
     * // Get one CuisineDNA
     * const cuisineDNA = await prisma.cuisineDNA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CuisineDNAFindUniqueOrThrowArgs>(args: SelectSubset<T, CuisineDNAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CuisineDNAClient<$Result.GetResult<Prisma.$CuisineDNAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CuisineDNA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineDNAFindFirstArgs} args - Arguments to find a CuisineDNA
     * @example
     * // Get one CuisineDNA
     * const cuisineDNA = await prisma.cuisineDNA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CuisineDNAFindFirstArgs>(args?: SelectSubset<T, CuisineDNAFindFirstArgs<ExtArgs>>): Prisma__CuisineDNAClient<$Result.GetResult<Prisma.$CuisineDNAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CuisineDNA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineDNAFindFirstOrThrowArgs} args - Arguments to find a CuisineDNA
     * @example
     * // Get one CuisineDNA
     * const cuisineDNA = await prisma.cuisineDNA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CuisineDNAFindFirstOrThrowArgs>(args?: SelectSubset<T, CuisineDNAFindFirstOrThrowArgs<ExtArgs>>): Prisma__CuisineDNAClient<$Result.GetResult<Prisma.$CuisineDNAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CuisineDNAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineDNAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CuisineDNAS
     * const cuisineDNAS = await prisma.cuisineDNA.findMany()
     * 
     * // Get first 10 CuisineDNAS
     * const cuisineDNAS = await prisma.cuisineDNA.findMany({ take: 10 })
     * 
     * // Only select the `cuisine`
     * const cuisineDNAWithCuisineOnly = await prisma.cuisineDNA.findMany({ select: { cuisine: true } })
     * 
     */
    findMany<T extends CuisineDNAFindManyArgs>(args?: SelectSubset<T, CuisineDNAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuisineDNAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CuisineDNA.
     * @param {CuisineDNACreateArgs} args - Arguments to create a CuisineDNA.
     * @example
     * // Create one CuisineDNA
     * const CuisineDNA = await prisma.cuisineDNA.create({
     *   data: {
     *     // ... data to create a CuisineDNA
     *   }
     * })
     * 
     */
    create<T extends CuisineDNACreateArgs>(args: SelectSubset<T, CuisineDNACreateArgs<ExtArgs>>): Prisma__CuisineDNAClient<$Result.GetResult<Prisma.$CuisineDNAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CuisineDNAS.
     * @param {CuisineDNACreateManyArgs} args - Arguments to create many CuisineDNAS.
     * @example
     * // Create many CuisineDNAS
     * const cuisineDNA = await prisma.cuisineDNA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CuisineDNACreateManyArgs>(args?: SelectSubset<T, CuisineDNACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CuisineDNAS and returns the data saved in the database.
     * @param {CuisineDNACreateManyAndReturnArgs} args - Arguments to create many CuisineDNAS.
     * @example
     * // Create many CuisineDNAS
     * const cuisineDNA = await prisma.cuisineDNA.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CuisineDNAS and only return the `cuisine`
     * const cuisineDNAWithCuisineOnly = await prisma.cuisineDNA.createManyAndReturn({
     *   select: { cuisine: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CuisineDNACreateManyAndReturnArgs>(args?: SelectSubset<T, CuisineDNACreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuisineDNAPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CuisineDNA.
     * @param {CuisineDNADeleteArgs} args - Arguments to delete one CuisineDNA.
     * @example
     * // Delete one CuisineDNA
     * const CuisineDNA = await prisma.cuisineDNA.delete({
     *   where: {
     *     // ... filter to delete one CuisineDNA
     *   }
     * })
     * 
     */
    delete<T extends CuisineDNADeleteArgs>(args: SelectSubset<T, CuisineDNADeleteArgs<ExtArgs>>): Prisma__CuisineDNAClient<$Result.GetResult<Prisma.$CuisineDNAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CuisineDNA.
     * @param {CuisineDNAUpdateArgs} args - Arguments to update one CuisineDNA.
     * @example
     * // Update one CuisineDNA
     * const cuisineDNA = await prisma.cuisineDNA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CuisineDNAUpdateArgs>(args: SelectSubset<T, CuisineDNAUpdateArgs<ExtArgs>>): Prisma__CuisineDNAClient<$Result.GetResult<Prisma.$CuisineDNAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CuisineDNAS.
     * @param {CuisineDNADeleteManyArgs} args - Arguments to filter CuisineDNAS to delete.
     * @example
     * // Delete a few CuisineDNAS
     * const { count } = await prisma.cuisineDNA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CuisineDNADeleteManyArgs>(args?: SelectSubset<T, CuisineDNADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CuisineDNAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineDNAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CuisineDNAS
     * const cuisineDNA = await prisma.cuisineDNA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CuisineDNAUpdateManyArgs>(args: SelectSubset<T, CuisineDNAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CuisineDNAS and returns the data updated in the database.
     * @param {CuisineDNAUpdateManyAndReturnArgs} args - Arguments to update many CuisineDNAS.
     * @example
     * // Update many CuisineDNAS
     * const cuisineDNA = await prisma.cuisineDNA.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CuisineDNAS and only return the `cuisine`
     * const cuisineDNAWithCuisineOnly = await prisma.cuisineDNA.updateManyAndReturn({
     *   select: { cuisine: true },
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
    updateManyAndReturn<T extends CuisineDNAUpdateManyAndReturnArgs>(args: SelectSubset<T, CuisineDNAUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuisineDNAPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CuisineDNA.
     * @param {CuisineDNAUpsertArgs} args - Arguments to update or create a CuisineDNA.
     * @example
     * // Update or create a CuisineDNA
     * const cuisineDNA = await prisma.cuisineDNA.upsert({
     *   create: {
     *     // ... data to create a CuisineDNA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CuisineDNA we want to update
     *   }
     * })
     */
    upsert<T extends CuisineDNAUpsertArgs>(args: SelectSubset<T, CuisineDNAUpsertArgs<ExtArgs>>): Prisma__CuisineDNAClient<$Result.GetResult<Prisma.$CuisineDNAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CuisineDNAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineDNACountArgs} args - Arguments to filter CuisineDNAS to count.
     * @example
     * // Count the number of CuisineDNAS
     * const count = await prisma.cuisineDNA.count({
     *   where: {
     *     // ... the filter for the CuisineDNAS we want to count
     *   }
     * })
    **/
    count<T extends CuisineDNACountArgs>(
      args?: Subset<T, CuisineDNACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuisineDNACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CuisineDNA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineDNAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CuisineDNAAggregateArgs>(args: Subset<T, CuisineDNAAggregateArgs>): Prisma.PrismaPromise<GetCuisineDNAAggregateType<T>>

    /**
     * Group by CuisineDNA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuisineDNAGroupByArgs} args - Group by arguments.
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
      T extends CuisineDNAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CuisineDNAGroupByArgs['orderBy'] }
        : { orderBy?: CuisineDNAGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CuisineDNAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuisineDNAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CuisineDNA model
   */
  readonly fields: CuisineDNAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CuisineDNA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CuisineDNAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CuisineDNA model
   */
  interface CuisineDNAFieldRefs {
    readonly cuisine: FieldRef<"CuisineDNA", 'String'>
    readonly aromatics: FieldRef<"CuisineDNA", 'Json'>
    readonly baseSpices: FieldRef<"CuisineDNA", 'Json'>
    readonly staples: FieldRef<"CuisineDNA", 'Json'>
    readonly techniques: FieldRef<"CuisineDNA", 'Json'>
    readonly subsGraphJson: FieldRef<"CuisineDNA", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * CuisineDNA findUnique
   */
  export type CuisineDNAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuisineDNA
     */
    select?: CuisineDNASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuisineDNA
     */
    omit?: CuisineDNAOmit<ExtArgs> | null
    /**
     * Filter, which CuisineDNA to fetch.
     */
    where: CuisineDNAWhereUniqueInput
  }

  /**
   * CuisineDNA findUniqueOrThrow
   */
  export type CuisineDNAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuisineDNA
     */
    select?: CuisineDNASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuisineDNA
     */
    omit?: CuisineDNAOmit<ExtArgs> | null
    /**
     * Filter, which CuisineDNA to fetch.
     */
    where: CuisineDNAWhereUniqueInput
  }

  /**
   * CuisineDNA findFirst
   */
  export type CuisineDNAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuisineDNA
     */
    select?: CuisineDNASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuisineDNA
     */
    omit?: CuisineDNAOmit<ExtArgs> | null
    /**
     * Filter, which CuisineDNA to fetch.
     */
    where?: CuisineDNAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CuisineDNAS to fetch.
     */
    orderBy?: CuisineDNAOrderByWithRelationInput | CuisineDNAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CuisineDNAS.
     */
    cursor?: CuisineDNAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CuisineDNAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CuisineDNAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CuisineDNAS.
     */
    distinct?: CuisineDNAScalarFieldEnum | CuisineDNAScalarFieldEnum[]
  }

  /**
   * CuisineDNA findFirstOrThrow
   */
  export type CuisineDNAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuisineDNA
     */
    select?: CuisineDNASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuisineDNA
     */
    omit?: CuisineDNAOmit<ExtArgs> | null
    /**
     * Filter, which CuisineDNA to fetch.
     */
    where?: CuisineDNAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CuisineDNAS to fetch.
     */
    orderBy?: CuisineDNAOrderByWithRelationInput | CuisineDNAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CuisineDNAS.
     */
    cursor?: CuisineDNAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CuisineDNAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CuisineDNAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CuisineDNAS.
     */
    distinct?: CuisineDNAScalarFieldEnum | CuisineDNAScalarFieldEnum[]
  }

  /**
   * CuisineDNA findMany
   */
  export type CuisineDNAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuisineDNA
     */
    select?: CuisineDNASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuisineDNA
     */
    omit?: CuisineDNAOmit<ExtArgs> | null
    /**
     * Filter, which CuisineDNAS to fetch.
     */
    where?: CuisineDNAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CuisineDNAS to fetch.
     */
    orderBy?: CuisineDNAOrderByWithRelationInput | CuisineDNAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CuisineDNAS.
     */
    cursor?: CuisineDNAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CuisineDNAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CuisineDNAS.
     */
    skip?: number
    distinct?: CuisineDNAScalarFieldEnum | CuisineDNAScalarFieldEnum[]
  }

  /**
   * CuisineDNA create
   */
  export type CuisineDNACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuisineDNA
     */
    select?: CuisineDNASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuisineDNA
     */
    omit?: CuisineDNAOmit<ExtArgs> | null
    /**
     * The data needed to create a CuisineDNA.
     */
    data: XOR<CuisineDNACreateInput, CuisineDNAUncheckedCreateInput>
  }

  /**
   * CuisineDNA createMany
   */
  export type CuisineDNACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CuisineDNAS.
     */
    data: CuisineDNACreateManyInput | CuisineDNACreateManyInput[]
  }

  /**
   * CuisineDNA createManyAndReturn
   */
  export type CuisineDNACreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuisineDNA
     */
    select?: CuisineDNASelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CuisineDNA
     */
    omit?: CuisineDNAOmit<ExtArgs> | null
    /**
     * The data used to create many CuisineDNAS.
     */
    data: CuisineDNACreateManyInput | CuisineDNACreateManyInput[]
  }

  /**
   * CuisineDNA update
   */
  export type CuisineDNAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuisineDNA
     */
    select?: CuisineDNASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuisineDNA
     */
    omit?: CuisineDNAOmit<ExtArgs> | null
    /**
     * The data needed to update a CuisineDNA.
     */
    data: XOR<CuisineDNAUpdateInput, CuisineDNAUncheckedUpdateInput>
    /**
     * Choose, which CuisineDNA to update.
     */
    where: CuisineDNAWhereUniqueInput
  }

  /**
   * CuisineDNA updateMany
   */
  export type CuisineDNAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CuisineDNAS.
     */
    data: XOR<CuisineDNAUpdateManyMutationInput, CuisineDNAUncheckedUpdateManyInput>
    /**
     * Filter which CuisineDNAS to update
     */
    where?: CuisineDNAWhereInput
    /**
     * Limit how many CuisineDNAS to update.
     */
    limit?: number
  }

  /**
   * CuisineDNA updateManyAndReturn
   */
  export type CuisineDNAUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuisineDNA
     */
    select?: CuisineDNASelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CuisineDNA
     */
    omit?: CuisineDNAOmit<ExtArgs> | null
    /**
     * The data used to update CuisineDNAS.
     */
    data: XOR<CuisineDNAUpdateManyMutationInput, CuisineDNAUncheckedUpdateManyInput>
    /**
     * Filter which CuisineDNAS to update
     */
    where?: CuisineDNAWhereInput
    /**
     * Limit how many CuisineDNAS to update.
     */
    limit?: number
  }

  /**
   * CuisineDNA upsert
   */
  export type CuisineDNAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuisineDNA
     */
    select?: CuisineDNASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuisineDNA
     */
    omit?: CuisineDNAOmit<ExtArgs> | null
    /**
     * The filter to search for the CuisineDNA to update in case it exists.
     */
    where: CuisineDNAWhereUniqueInput
    /**
     * In case the CuisineDNA found by the `where` argument doesn't exist, create a new CuisineDNA with this data.
     */
    create: XOR<CuisineDNACreateInput, CuisineDNAUncheckedCreateInput>
    /**
     * In case the CuisineDNA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CuisineDNAUpdateInput, CuisineDNAUncheckedUpdateInput>
  }

  /**
   * CuisineDNA delete
   */
  export type CuisineDNADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuisineDNA
     */
    select?: CuisineDNASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuisineDNA
     */
    omit?: CuisineDNAOmit<ExtArgs> | null
    /**
     * Filter which CuisineDNA to delete.
     */
    where: CuisineDNAWhereUniqueInput
  }

  /**
   * CuisineDNA deleteMany
   */
  export type CuisineDNADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CuisineDNAS to delete
     */
    where?: CuisineDNAWhereInput
    /**
     * Limit how many CuisineDNAS to delete.
     */
    limit?: number
  }

  /**
   * CuisineDNA without action
   */
  export type CuisineDNADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuisineDNA
     */
    select?: CuisineDNASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuisineDNA
     */
    omit?: CuisineDNAOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    cuisine: 'cuisine',
    timeMinutes: 'timeMinutes',
    costEstimate: 'costEstimate',
    dietTags: 'dietTags',
    skillLevel: 'skillLevel',
    sidePairs: 'sidePairs',
    flavor: 'flavor',
    createdById: 'createdById'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    groups: 'groups',
    aliases: 'aliases'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const IngredientUseScalarFieldEnum: {
    id: 'id',
    recipeId: 'recipeId',
    ingredientId: 'ingredientId',
    qty: 'qty',
    unit: 'unit',
    optional: 'optional',
    isKeystone: 'isKeystone'
  };

  export type IngredientUseScalarFieldEnum = (typeof IngredientUseScalarFieldEnum)[keyof typeof IngredientUseScalarFieldEnum]


  export const StepScalarFieldEnum: {
    id: 'id',
    recipeId: 'recipeId',
    index: 'index',
    text: 'text',
    timersSec: 'timersSec'
  };

  export type StepScalarFieldEnum = (typeof StepScalarFieldEnum)[keyof typeof StepScalarFieldEnum]


  export const QuirkScalarFieldEnum: {
    id: 'id',
    recipeId: 'recipeId',
    stepIndex: 'stepIndex',
    text: 'text',
    tags: 'tags',
    authorId: 'authorId',
    upvotes: 'upvotes'
  };

  export type QuirkScalarFieldEnum = (typeof QuirkScalarFieldEnum)[keyof typeof QuirkScalarFieldEnum]


  export const CuisineDNAScalarFieldEnum: {
    cuisine: 'cuisine',
    aromatics: 'aromatics',
    baseSpices: 'baseSpices',
    staples: 'staples',
    techniques: 'techniques',
    subsGraphJson: 'subsGraphJson'
  };

  export type CuisineDNAScalarFieldEnum = (typeof CuisineDNAScalarFieldEnum)[keyof typeof CuisineDNAScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: StringFilter<"Recipe"> | string
    title?: StringFilter<"Recipe"> | string
    cuisine?: StringFilter<"Recipe"> | string
    timeMinutes?: IntFilter<"Recipe"> | number
    costEstimate?: IntNullableFilter<"Recipe"> | number | null
    dietTags?: JsonFilter<"Recipe">
    skillLevel?: IntFilter<"Recipe"> | number
    sidePairs?: JsonFilter<"Recipe">
    flavor?: JsonFilter<"Recipe">
    createdById?: StringNullableFilter<"Recipe"> | string | null
    ingredients?: IngredientUseListRelationFilter
    steps?: StepListRelationFilter
    quirks?: QuirkListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    cuisine?: SortOrder
    timeMinutes?: SortOrder
    costEstimate?: SortOrderInput | SortOrder
    dietTags?: SortOrder
    skillLevel?: SortOrder
    sidePairs?: SortOrder
    flavor?: SortOrder
    createdById?: SortOrderInput | SortOrder
    ingredients?: IngredientUseOrderByRelationAggregateInput
    steps?: StepOrderByRelationAggregateInput
    quirks?: QuirkOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    title?: StringFilter<"Recipe"> | string
    cuisine?: StringFilter<"Recipe"> | string
    timeMinutes?: IntFilter<"Recipe"> | number
    costEstimate?: IntNullableFilter<"Recipe"> | number | null
    dietTags?: JsonFilter<"Recipe">
    skillLevel?: IntFilter<"Recipe"> | number
    sidePairs?: JsonFilter<"Recipe">
    flavor?: JsonFilter<"Recipe">
    createdById?: StringNullableFilter<"Recipe"> | string | null
    ingredients?: IngredientUseListRelationFilter
    steps?: StepListRelationFilter
    quirks?: QuirkListRelationFilter
  }, "id">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    cuisine?: SortOrder
    timeMinutes?: SortOrder
    costEstimate?: SortOrderInput | SortOrder
    dietTags?: SortOrder
    skillLevel?: SortOrder
    sidePairs?: SortOrder
    flavor?: SortOrder
    createdById?: SortOrderInput | SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recipe"> | string
    title?: StringWithAggregatesFilter<"Recipe"> | string
    cuisine?: StringWithAggregatesFilter<"Recipe"> | string
    timeMinutes?: IntWithAggregatesFilter<"Recipe"> | number
    costEstimate?: IntNullableWithAggregatesFilter<"Recipe"> | number | null
    dietTags?: JsonWithAggregatesFilter<"Recipe">
    skillLevel?: IntWithAggregatesFilter<"Recipe"> | number
    sidePairs?: JsonWithAggregatesFilter<"Recipe">
    flavor?: JsonWithAggregatesFilter<"Recipe">
    createdById?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: StringFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    groups?: JsonFilter<"Ingredient">
    aliases?: JsonFilter<"Ingredient">
    uses?: IngredientUseListRelationFilter
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    groups?: SortOrder
    aliases?: SortOrder
    uses?: IngredientUseOrderByRelationAggregateInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    groups?: JsonFilter<"Ingredient">
    aliases?: JsonFilter<"Ingredient">
    uses?: IngredientUseListRelationFilter
  }, "id" | "name">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    groups?: SortOrder
    aliases?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ingredient"> | string
    name?: StringWithAggregatesFilter<"Ingredient"> | string
    groups?: JsonWithAggregatesFilter<"Ingredient">
    aliases?: JsonWithAggregatesFilter<"Ingredient">
  }

  export type IngredientUseWhereInput = {
    AND?: IngredientUseWhereInput | IngredientUseWhereInput[]
    OR?: IngredientUseWhereInput[]
    NOT?: IngredientUseWhereInput | IngredientUseWhereInput[]
    id?: StringFilter<"IngredientUse"> | string
    recipeId?: StringFilter<"IngredientUse"> | string
    ingredientId?: StringFilter<"IngredientUse"> | string
    qty?: FloatNullableFilter<"IngredientUse"> | number | null
    unit?: StringNullableFilter<"IngredientUse"> | string | null
    optional?: BoolFilter<"IngredientUse"> | boolean
    isKeystone?: BoolFilter<"IngredientUse"> | boolean
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }

  export type IngredientUseOrderByWithRelationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    qty?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    optional?: SortOrder
    isKeystone?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    ingredient?: IngredientOrderByWithRelationInput
  }

  export type IngredientUseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngredientUseWhereInput | IngredientUseWhereInput[]
    OR?: IngredientUseWhereInput[]
    NOT?: IngredientUseWhereInput | IngredientUseWhereInput[]
    recipeId?: StringFilter<"IngredientUse"> | string
    ingredientId?: StringFilter<"IngredientUse"> | string
    qty?: FloatNullableFilter<"IngredientUse"> | number | null
    unit?: StringNullableFilter<"IngredientUse"> | string | null
    optional?: BoolFilter<"IngredientUse"> | boolean
    isKeystone?: BoolFilter<"IngredientUse"> | boolean
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }, "id">

  export type IngredientUseOrderByWithAggregationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    qty?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    optional?: SortOrder
    isKeystone?: SortOrder
    _count?: IngredientUseCountOrderByAggregateInput
    _avg?: IngredientUseAvgOrderByAggregateInput
    _max?: IngredientUseMaxOrderByAggregateInput
    _min?: IngredientUseMinOrderByAggregateInput
    _sum?: IngredientUseSumOrderByAggregateInput
  }

  export type IngredientUseScalarWhereWithAggregatesInput = {
    AND?: IngredientUseScalarWhereWithAggregatesInput | IngredientUseScalarWhereWithAggregatesInput[]
    OR?: IngredientUseScalarWhereWithAggregatesInput[]
    NOT?: IngredientUseScalarWhereWithAggregatesInput | IngredientUseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IngredientUse"> | string
    recipeId?: StringWithAggregatesFilter<"IngredientUse"> | string
    ingredientId?: StringWithAggregatesFilter<"IngredientUse"> | string
    qty?: FloatNullableWithAggregatesFilter<"IngredientUse"> | number | null
    unit?: StringNullableWithAggregatesFilter<"IngredientUse"> | string | null
    optional?: BoolWithAggregatesFilter<"IngredientUse"> | boolean
    isKeystone?: BoolWithAggregatesFilter<"IngredientUse"> | boolean
  }

  export type StepWhereInput = {
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    id?: StringFilter<"Step"> | string
    recipeId?: StringFilter<"Step"> | string
    index?: IntFilter<"Step"> | number
    text?: StringFilter<"Step"> | string
    timersSec?: IntNullableFilter<"Step"> | number | null
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type StepOrderByWithRelationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    index?: SortOrder
    text?: SortOrder
    timersSec?: SortOrderInput | SortOrder
    recipe?: RecipeOrderByWithRelationInput
  }

  export type StepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    recipeId_index?: StepRecipeIdIndexCompoundUniqueInput
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    recipeId?: StringFilter<"Step"> | string
    index?: IntFilter<"Step"> | number
    text?: StringFilter<"Step"> | string
    timersSec?: IntNullableFilter<"Step"> | number | null
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id" | "recipeId_index">

  export type StepOrderByWithAggregationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    index?: SortOrder
    text?: SortOrder
    timersSec?: SortOrderInput | SortOrder
    _count?: StepCountOrderByAggregateInput
    _avg?: StepAvgOrderByAggregateInput
    _max?: StepMaxOrderByAggregateInput
    _min?: StepMinOrderByAggregateInput
    _sum?: StepSumOrderByAggregateInput
  }

  export type StepScalarWhereWithAggregatesInput = {
    AND?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    OR?: StepScalarWhereWithAggregatesInput[]
    NOT?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Step"> | string
    recipeId?: StringWithAggregatesFilter<"Step"> | string
    index?: IntWithAggregatesFilter<"Step"> | number
    text?: StringWithAggregatesFilter<"Step"> | string
    timersSec?: IntNullableWithAggregatesFilter<"Step"> | number | null
  }

  export type QuirkWhereInput = {
    AND?: QuirkWhereInput | QuirkWhereInput[]
    OR?: QuirkWhereInput[]
    NOT?: QuirkWhereInput | QuirkWhereInput[]
    id?: StringFilter<"Quirk"> | string
    recipeId?: StringFilter<"Quirk"> | string
    stepIndex?: IntNullableFilter<"Quirk"> | number | null
    text?: StringFilter<"Quirk"> | string
    tags?: JsonFilter<"Quirk">
    authorId?: StringNullableFilter<"Quirk"> | string | null
    upvotes?: IntFilter<"Quirk"> | number
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type QuirkOrderByWithRelationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    stepIndex?: SortOrderInput | SortOrder
    text?: SortOrder
    tags?: SortOrder
    authorId?: SortOrderInput | SortOrder
    upvotes?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
  }

  export type QuirkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuirkWhereInput | QuirkWhereInput[]
    OR?: QuirkWhereInput[]
    NOT?: QuirkWhereInput | QuirkWhereInput[]
    recipeId?: StringFilter<"Quirk"> | string
    stepIndex?: IntNullableFilter<"Quirk"> | number | null
    text?: StringFilter<"Quirk"> | string
    tags?: JsonFilter<"Quirk">
    authorId?: StringNullableFilter<"Quirk"> | string | null
    upvotes?: IntFilter<"Quirk"> | number
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id">

  export type QuirkOrderByWithAggregationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    stepIndex?: SortOrderInput | SortOrder
    text?: SortOrder
    tags?: SortOrder
    authorId?: SortOrderInput | SortOrder
    upvotes?: SortOrder
    _count?: QuirkCountOrderByAggregateInput
    _avg?: QuirkAvgOrderByAggregateInput
    _max?: QuirkMaxOrderByAggregateInput
    _min?: QuirkMinOrderByAggregateInput
    _sum?: QuirkSumOrderByAggregateInput
  }

  export type QuirkScalarWhereWithAggregatesInput = {
    AND?: QuirkScalarWhereWithAggregatesInput | QuirkScalarWhereWithAggregatesInput[]
    OR?: QuirkScalarWhereWithAggregatesInput[]
    NOT?: QuirkScalarWhereWithAggregatesInput | QuirkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quirk"> | string
    recipeId?: StringWithAggregatesFilter<"Quirk"> | string
    stepIndex?: IntNullableWithAggregatesFilter<"Quirk"> | number | null
    text?: StringWithAggregatesFilter<"Quirk"> | string
    tags?: JsonWithAggregatesFilter<"Quirk">
    authorId?: StringNullableWithAggregatesFilter<"Quirk"> | string | null
    upvotes?: IntWithAggregatesFilter<"Quirk"> | number
  }

  export type CuisineDNAWhereInput = {
    AND?: CuisineDNAWhereInput | CuisineDNAWhereInput[]
    OR?: CuisineDNAWhereInput[]
    NOT?: CuisineDNAWhereInput | CuisineDNAWhereInput[]
    cuisine?: StringFilter<"CuisineDNA"> | string
    aromatics?: JsonFilter<"CuisineDNA">
    baseSpices?: JsonFilter<"CuisineDNA">
    staples?: JsonFilter<"CuisineDNA">
    techniques?: JsonFilter<"CuisineDNA">
    subsGraphJson?: JsonFilter<"CuisineDNA">
  }

  export type CuisineDNAOrderByWithRelationInput = {
    cuisine?: SortOrder
    aromatics?: SortOrder
    baseSpices?: SortOrder
    staples?: SortOrder
    techniques?: SortOrder
    subsGraphJson?: SortOrder
  }

  export type CuisineDNAWhereUniqueInput = Prisma.AtLeast<{
    cuisine?: string
    AND?: CuisineDNAWhereInput | CuisineDNAWhereInput[]
    OR?: CuisineDNAWhereInput[]
    NOT?: CuisineDNAWhereInput | CuisineDNAWhereInput[]
    aromatics?: JsonFilter<"CuisineDNA">
    baseSpices?: JsonFilter<"CuisineDNA">
    staples?: JsonFilter<"CuisineDNA">
    techniques?: JsonFilter<"CuisineDNA">
    subsGraphJson?: JsonFilter<"CuisineDNA">
  }, "cuisine">

  export type CuisineDNAOrderByWithAggregationInput = {
    cuisine?: SortOrder
    aromatics?: SortOrder
    baseSpices?: SortOrder
    staples?: SortOrder
    techniques?: SortOrder
    subsGraphJson?: SortOrder
    _count?: CuisineDNACountOrderByAggregateInput
    _max?: CuisineDNAMaxOrderByAggregateInput
    _min?: CuisineDNAMinOrderByAggregateInput
  }

  export type CuisineDNAScalarWhereWithAggregatesInput = {
    AND?: CuisineDNAScalarWhereWithAggregatesInput | CuisineDNAScalarWhereWithAggregatesInput[]
    OR?: CuisineDNAScalarWhereWithAggregatesInput[]
    NOT?: CuisineDNAScalarWhereWithAggregatesInput | CuisineDNAScalarWhereWithAggregatesInput[]
    cuisine?: StringWithAggregatesFilter<"CuisineDNA"> | string
    aromatics?: JsonWithAggregatesFilter<"CuisineDNA">
    baseSpices?: JsonWithAggregatesFilter<"CuisineDNA">
    staples?: JsonWithAggregatesFilter<"CuisineDNA">
    techniques?: JsonWithAggregatesFilter<"CuisineDNA">
    subsGraphJson?: JsonWithAggregatesFilter<"CuisineDNA">
  }

  export type RecipeCreateInput = {
    id?: string
    title: string
    cuisine: string
    timeMinutes: number
    costEstimate?: number | null
    dietTags: JsonNullValueInput | InputJsonValue
    skillLevel: number
    sidePairs: JsonNullValueInput | InputJsonValue
    flavor: JsonNullValueInput | InputJsonValue
    createdById?: string | null
    ingredients?: IngredientUseCreateNestedManyWithoutRecipeInput
    steps?: StepCreateNestedManyWithoutRecipeInput
    quirks?: QuirkCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: string
    title: string
    cuisine: string
    timeMinutes: number
    costEstimate?: number | null
    dietTags: JsonNullValueInput | InputJsonValue
    skillLevel: number
    sidePairs: JsonNullValueInput | InputJsonValue
    flavor: JsonNullValueInput | InputJsonValue
    createdById?: string | null
    ingredients?: IngredientUseUncheckedCreateNestedManyWithoutRecipeInput
    steps?: StepUncheckedCreateNestedManyWithoutRecipeInput
    quirks?: QuirkUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    timeMinutes?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    dietTags?: JsonNullValueInput | InputJsonValue
    skillLevel?: IntFieldUpdateOperationsInput | number
    sidePairs?: JsonNullValueInput | InputJsonValue
    flavor?: JsonNullValueInput | InputJsonValue
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: IngredientUseUpdateManyWithoutRecipeNestedInput
    steps?: StepUpdateManyWithoutRecipeNestedInput
    quirks?: QuirkUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    timeMinutes?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    dietTags?: JsonNullValueInput | InputJsonValue
    skillLevel?: IntFieldUpdateOperationsInput | number
    sidePairs?: JsonNullValueInput | InputJsonValue
    flavor?: JsonNullValueInput | InputJsonValue
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: IngredientUseUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: StepUncheckedUpdateManyWithoutRecipeNestedInput
    quirks?: QuirkUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: string
    title: string
    cuisine: string
    timeMinutes: number
    costEstimate?: number | null
    dietTags: JsonNullValueInput | InputJsonValue
    skillLevel: number
    sidePairs: JsonNullValueInput | InputJsonValue
    flavor: JsonNullValueInput | InputJsonValue
    createdById?: string | null
  }

  export type RecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    timeMinutes?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    dietTags?: JsonNullValueInput | InputJsonValue
    skillLevel?: IntFieldUpdateOperationsInput | number
    sidePairs?: JsonNullValueInput | InputJsonValue
    flavor?: JsonNullValueInput | InputJsonValue
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    timeMinutes?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    dietTags?: JsonNullValueInput | InputJsonValue
    skillLevel?: IntFieldUpdateOperationsInput | number
    sidePairs?: JsonNullValueInput | InputJsonValue
    flavor?: JsonNullValueInput | InputJsonValue
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IngredientCreateInput = {
    id?: string
    name: string
    groups: JsonNullValueInput | InputJsonValue
    aliases: JsonNullValueInput | InputJsonValue
    uses?: IngredientUseCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: string
    name: string
    groups: JsonNullValueInput | InputJsonValue
    aliases: JsonNullValueInput | InputJsonValue
    uses?: IngredientUseUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groups?: JsonNullValueInput | InputJsonValue
    aliases?: JsonNullValueInput | InputJsonValue
    uses?: IngredientUseUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groups?: JsonNullValueInput | InputJsonValue
    aliases?: JsonNullValueInput | InputJsonValue
    uses?: IngredientUseUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientCreateManyInput = {
    id?: string
    name: string
    groups: JsonNullValueInput | InputJsonValue
    aliases: JsonNullValueInput | InputJsonValue
  }

  export type IngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groups?: JsonNullValueInput | InputJsonValue
    aliases?: JsonNullValueInput | InputJsonValue
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groups?: JsonNullValueInput | InputJsonValue
    aliases?: JsonNullValueInput | InputJsonValue
  }

  export type IngredientUseCreateInput = {
    id?: string
    qty?: number | null
    unit?: string | null
    optional?: boolean
    isKeystone?: boolean
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
    ingredient: IngredientCreateNestedOneWithoutUsesInput
  }

  export type IngredientUseUncheckedCreateInput = {
    id?: string
    recipeId: string
    ingredientId: string
    qty?: number | null
    unit?: string | null
    optional?: boolean
    isKeystone?: boolean
  }

  export type IngredientUseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    isKeystone?: BoolFieldUpdateOperationsInput | boolean
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutUsesNestedInput
  }

  export type IngredientUseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    qty?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    isKeystone?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IngredientUseCreateManyInput = {
    id?: string
    recipeId: string
    ingredientId: string
    qty?: number | null
    unit?: string | null
    optional?: boolean
    isKeystone?: boolean
  }

  export type IngredientUseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    isKeystone?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IngredientUseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    qty?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    isKeystone?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StepCreateInput = {
    id?: string
    index: number
    text: string
    timersSec?: number | null
    recipe: RecipeCreateNestedOneWithoutStepsInput
  }

  export type StepUncheckedCreateInput = {
    id?: string
    recipeId: string
    index: number
    text: string
    timersSec?: number | null
  }

  export type StepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    timersSec?: NullableIntFieldUpdateOperationsInput | number | null
    recipe?: RecipeUpdateOneRequiredWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    timersSec?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StepCreateManyInput = {
    id?: string
    recipeId: string
    index: number
    text: string
    timersSec?: number | null
  }

  export type StepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    timersSec?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    timersSec?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuirkCreateInput = {
    id?: string
    stepIndex?: number | null
    text: string
    tags: JsonNullValueInput | InputJsonValue
    authorId?: string | null
    upvotes?: number
    recipe: RecipeCreateNestedOneWithoutQuirksInput
  }

  export type QuirkUncheckedCreateInput = {
    id?: string
    recipeId: string
    stepIndex?: number | null
    text: string
    tags: JsonNullValueInput | InputJsonValue
    authorId?: string | null
    upvotes?: number
  }

  export type QuirkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepIndex?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: IntFieldUpdateOperationsInput | number
    recipe?: RecipeUpdateOneRequiredWithoutQuirksNestedInput
  }

  export type QuirkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    stepIndex?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: IntFieldUpdateOperationsInput | number
  }

  export type QuirkCreateManyInput = {
    id?: string
    recipeId: string
    stepIndex?: number | null
    text: string
    tags: JsonNullValueInput | InputJsonValue
    authorId?: string | null
    upvotes?: number
  }

  export type QuirkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepIndex?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: IntFieldUpdateOperationsInput | number
  }

  export type QuirkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    stepIndex?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: IntFieldUpdateOperationsInput | number
  }

  export type CuisineDNACreateInput = {
    cuisine: string
    aromatics: JsonNullValueInput | InputJsonValue
    baseSpices: JsonNullValueInput | InputJsonValue
    staples: JsonNullValueInput | InputJsonValue
    techniques: JsonNullValueInput | InputJsonValue
    subsGraphJson: JsonNullValueInput | InputJsonValue
  }

  export type CuisineDNAUncheckedCreateInput = {
    cuisine: string
    aromatics: JsonNullValueInput | InputJsonValue
    baseSpices: JsonNullValueInput | InputJsonValue
    staples: JsonNullValueInput | InputJsonValue
    techniques: JsonNullValueInput | InputJsonValue
    subsGraphJson: JsonNullValueInput | InputJsonValue
  }

  export type CuisineDNAUpdateInput = {
    cuisine?: StringFieldUpdateOperationsInput | string
    aromatics?: JsonNullValueInput | InputJsonValue
    baseSpices?: JsonNullValueInput | InputJsonValue
    staples?: JsonNullValueInput | InputJsonValue
    techniques?: JsonNullValueInput | InputJsonValue
    subsGraphJson?: JsonNullValueInput | InputJsonValue
  }

  export type CuisineDNAUncheckedUpdateInput = {
    cuisine?: StringFieldUpdateOperationsInput | string
    aromatics?: JsonNullValueInput | InputJsonValue
    baseSpices?: JsonNullValueInput | InputJsonValue
    staples?: JsonNullValueInput | InputJsonValue
    techniques?: JsonNullValueInput | InputJsonValue
    subsGraphJson?: JsonNullValueInput | InputJsonValue
  }

  export type CuisineDNACreateManyInput = {
    cuisine: string
    aromatics: JsonNullValueInput | InputJsonValue
    baseSpices: JsonNullValueInput | InputJsonValue
    staples: JsonNullValueInput | InputJsonValue
    techniques: JsonNullValueInput | InputJsonValue
    subsGraphJson: JsonNullValueInput | InputJsonValue
  }

  export type CuisineDNAUpdateManyMutationInput = {
    cuisine?: StringFieldUpdateOperationsInput | string
    aromatics?: JsonNullValueInput | InputJsonValue
    baseSpices?: JsonNullValueInput | InputJsonValue
    staples?: JsonNullValueInput | InputJsonValue
    techniques?: JsonNullValueInput | InputJsonValue
    subsGraphJson?: JsonNullValueInput | InputJsonValue
  }

  export type CuisineDNAUncheckedUpdateManyInput = {
    cuisine?: StringFieldUpdateOperationsInput | string
    aromatics?: JsonNullValueInput | InputJsonValue
    baseSpices?: JsonNullValueInput | InputJsonValue
    staples?: JsonNullValueInput | InputJsonValue
    techniques?: JsonNullValueInput | InputJsonValue
    subsGraphJson?: JsonNullValueInput | InputJsonValue
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IngredientUseListRelationFilter = {
    every?: IngredientUseWhereInput
    some?: IngredientUseWhereInput
    none?: IngredientUseWhereInput
  }

  export type StepListRelationFilter = {
    every?: StepWhereInput
    some?: StepWhereInput
    none?: StepWhereInput
  }

  export type QuirkListRelationFilter = {
    every?: QuirkWhereInput
    some?: QuirkWhereInput
    none?: QuirkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IngredientUseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuirkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cuisine?: SortOrder
    timeMinutes?: SortOrder
    costEstimate?: SortOrder
    dietTags?: SortOrder
    skillLevel?: SortOrder
    sidePairs?: SortOrder
    flavor?: SortOrder
    createdById?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    timeMinutes?: SortOrder
    costEstimate?: SortOrder
    skillLevel?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cuisine?: SortOrder
    timeMinutes?: SortOrder
    costEstimate?: SortOrder
    skillLevel?: SortOrder
    createdById?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cuisine?: SortOrder
    timeMinutes?: SortOrder
    costEstimate?: SortOrder
    skillLevel?: SortOrder
    createdById?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    timeMinutes?: SortOrder
    costEstimate?: SortOrder
    skillLevel?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    groups?: SortOrder
    aliases?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RecipeScalarRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type IngredientScalarRelationFilter = {
    is?: IngredientWhereInput
    isNot?: IngredientWhereInput
  }

  export type IngredientUseCountOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    qty?: SortOrder
    unit?: SortOrder
    optional?: SortOrder
    isKeystone?: SortOrder
  }

  export type IngredientUseAvgOrderByAggregateInput = {
    qty?: SortOrder
  }

  export type IngredientUseMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    qty?: SortOrder
    unit?: SortOrder
    optional?: SortOrder
    isKeystone?: SortOrder
  }

  export type IngredientUseMinOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    qty?: SortOrder
    unit?: SortOrder
    optional?: SortOrder
    isKeystone?: SortOrder
  }

  export type IngredientUseSumOrderByAggregateInput = {
    qty?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StepRecipeIdIndexCompoundUniqueInput = {
    recipeId: string
    index: number
  }

  export type StepCountOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    index?: SortOrder
    text?: SortOrder
    timersSec?: SortOrder
  }

  export type StepAvgOrderByAggregateInput = {
    index?: SortOrder
    timersSec?: SortOrder
  }

  export type StepMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    index?: SortOrder
    text?: SortOrder
    timersSec?: SortOrder
  }

  export type StepMinOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    index?: SortOrder
    text?: SortOrder
    timersSec?: SortOrder
  }

  export type StepSumOrderByAggregateInput = {
    index?: SortOrder
    timersSec?: SortOrder
  }

  export type QuirkCountOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    stepIndex?: SortOrder
    text?: SortOrder
    tags?: SortOrder
    authorId?: SortOrder
    upvotes?: SortOrder
  }

  export type QuirkAvgOrderByAggregateInput = {
    stepIndex?: SortOrder
    upvotes?: SortOrder
  }

  export type QuirkMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    stepIndex?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    upvotes?: SortOrder
  }

  export type QuirkMinOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    stepIndex?: SortOrder
    text?: SortOrder
    authorId?: SortOrder
    upvotes?: SortOrder
  }

  export type QuirkSumOrderByAggregateInput = {
    stepIndex?: SortOrder
    upvotes?: SortOrder
  }

  export type CuisineDNACountOrderByAggregateInput = {
    cuisine?: SortOrder
    aromatics?: SortOrder
    baseSpices?: SortOrder
    staples?: SortOrder
    techniques?: SortOrder
    subsGraphJson?: SortOrder
  }

  export type CuisineDNAMaxOrderByAggregateInput = {
    cuisine?: SortOrder
  }

  export type CuisineDNAMinOrderByAggregateInput = {
    cuisine?: SortOrder
  }

  export type IngredientUseCreateNestedManyWithoutRecipeInput = {
    create?: XOR<IngredientUseCreateWithoutRecipeInput, IngredientUseUncheckedCreateWithoutRecipeInput> | IngredientUseCreateWithoutRecipeInput[] | IngredientUseUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientUseCreateOrConnectWithoutRecipeInput | IngredientUseCreateOrConnectWithoutRecipeInput[]
    createMany?: IngredientUseCreateManyRecipeInputEnvelope
    connect?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
  }

  export type StepCreateNestedManyWithoutRecipeInput = {
    create?: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput> | StepCreateWithoutRecipeInput[] | StepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: StepCreateOrConnectWithoutRecipeInput | StepCreateOrConnectWithoutRecipeInput[]
    createMany?: StepCreateManyRecipeInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type QuirkCreateNestedManyWithoutRecipeInput = {
    create?: XOR<QuirkCreateWithoutRecipeInput, QuirkUncheckedCreateWithoutRecipeInput> | QuirkCreateWithoutRecipeInput[] | QuirkUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: QuirkCreateOrConnectWithoutRecipeInput | QuirkCreateOrConnectWithoutRecipeInput[]
    createMany?: QuirkCreateManyRecipeInputEnvelope
    connect?: QuirkWhereUniqueInput | QuirkWhereUniqueInput[]
  }

  export type IngredientUseUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<IngredientUseCreateWithoutRecipeInput, IngredientUseUncheckedCreateWithoutRecipeInput> | IngredientUseCreateWithoutRecipeInput[] | IngredientUseUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientUseCreateOrConnectWithoutRecipeInput | IngredientUseCreateOrConnectWithoutRecipeInput[]
    createMany?: IngredientUseCreateManyRecipeInputEnvelope
    connect?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
  }

  export type StepUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput> | StepCreateWithoutRecipeInput[] | StepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: StepCreateOrConnectWithoutRecipeInput | StepCreateOrConnectWithoutRecipeInput[]
    createMany?: StepCreateManyRecipeInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type QuirkUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<QuirkCreateWithoutRecipeInput, QuirkUncheckedCreateWithoutRecipeInput> | QuirkCreateWithoutRecipeInput[] | QuirkUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: QuirkCreateOrConnectWithoutRecipeInput | QuirkCreateOrConnectWithoutRecipeInput[]
    createMany?: QuirkCreateManyRecipeInputEnvelope
    connect?: QuirkWhereUniqueInput | QuirkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IngredientUseUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<IngredientUseCreateWithoutRecipeInput, IngredientUseUncheckedCreateWithoutRecipeInput> | IngredientUseCreateWithoutRecipeInput[] | IngredientUseUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientUseCreateOrConnectWithoutRecipeInput | IngredientUseCreateOrConnectWithoutRecipeInput[]
    upsert?: IngredientUseUpsertWithWhereUniqueWithoutRecipeInput | IngredientUseUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: IngredientUseCreateManyRecipeInputEnvelope
    set?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
    disconnect?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
    delete?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
    connect?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
    update?: IngredientUseUpdateWithWhereUniqueWithoutRecipeInput | IngredientUseUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: IngredientUseUpdateManyWithWhereWithoutRecipeInput | IngredientUseUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: IngredientUseScalarWhereInput | IngredientUseScalarWhereInput[]
  }

  export type StepUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput> | StepCreateWithoutRecipeInput[] | StepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: StepCreateOrConnectWithoutRecipeInput | StepCreateOrConnectWithoutRecipeInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutRecipeInput | StepUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: StepCreateManyRecipeInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutRecipeInput | StepUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: StepUpdateManyWithWhereWithoutRecipeInput | StepUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type QuirkUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<QuirkCreateWithoutRecipeInput, QuirkUncheckedCreateWithoutRecipeInput> | QuirkCreateWithoutRecipeInput[] | QuirkUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: QuirkCreateOrConnectWithoutRecipeInput | QuirkCreateOrConnectWithoutRecipeInput[]
    upsert?: QuirkUpsertWithWhereUniqueWithoutRecipeInput | QuirkUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: QuirkCreateManyRecipeInputEnvelope
    set?: QuirkWhereUniqueInput | QuirkWhereUniqueInput[]
    disconnect?: QuirkWhereUniqueInput | QuirkWhereUniqueInput[]
    delete?: QuirkWhereUniqueInput | QuirkWhereUniqueInput[]
    connect?: QuirkWhereUniqueInput | QuirkWhereUniqueInput[]
    update?: QuirkUpdateWithWhereUniqueWithoutRecipeInput | QuirkUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: QuirkUpdateManyWithWhereWithoutRecipeInput | QuirkUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: QuirkScalarWhereInput | QuirkScalarWhereInput[]
  }

  export type IngredientUseUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<IngredientUseCreateWithoutRecipeInput, IngredientUseUncheckedCreateWithoutRecipeInput> | IngredientUseCreateWithoutRecipeInput[] | IngredientUseUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientUseCreateOrConnectWithoutRecipeInput | IngredientUseCreateOrConnectWithoutRecipeInput[]
    upsert?: IngredientUseUpsertWithWhereUniqueWithoutRecipeInput | IngredientUseUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: IngredientUseCreateManyRecipeInputEnvelope
    set?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
    disconnect?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
    delete?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
    connect?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
    update?: IngredientUseUpdateWithWhereUniqueWithoutRecipeInput | IngredientUseUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: IngredientUseUpdateManyWithWhereWithoutRecipeInput | IngredientUseUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: IngredientUseScalarWhereInput | IngredientUseScalarWhereInput[]
  }

  export type StepUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput> | StepCreateWithoutRecipeInput[] | StepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: StepCreateOrConnectWithoutRecipeInput | StepCreateOrConnectWithoutRecipeInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutRecipeInput | StepUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: StepCreateManyRecipeInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutRecipeInput | StepUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: StepUpdateManyWithWhereWithoutRecipeInput | StepUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type QuirkUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<QuirkCreateWithoutRecipeInput, QuirkUncheckedCreateWithoutRecipeInput> | QuirkCreateWithoutRecipeInput[] | QuirkUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: QuirkCreateOrConnectWithoutRecipeInput | QuirkCreateOrConnectWithoutRecipeInput[]
    upsert?: QuirkUpsertWithWhereUniqueWithoutRecipeInput | QuirkUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: QuirkCreateManyRecipeInputEnvelope
    set?: QuirkWhereUniqueInput | QuirkWhereUniqueInput[]
    disconnect?: QuirkWhereUniqueInput | QuirkWhereUniqueInput[]
    delete?: QuirkWhereUniqueInput | QuirkWhereUniqueInput[]
    connect?: QuirkWhereUniqueInput | QuirkWhereUniqueInput[]
    update?: QuirkUpdateWithWhereUniqueWithoutRecipeInput | QuirkUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: QuirkUpdateManyWithWhereWithoutRecipeInput | QuirkUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: QuirkScalarWhereInput | QuirkScalarWhereInput[]
  }

  export type IngredientUseCreateNestedManyWithoutIngredientInput = {
    create?: XOR<IngredientUseCreateWithoutIngredientInput, IngredientUseUncheckedCreateWithoutIngredientInput> | IngredientUseCreateWithoutIngredientInput[] | IngredientUseUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientUseCreateOrConnectWithoutIngredientInput | IngredientUseCreateOrConnectWithoutIngredientInput[]
    createMany?: IngredientUseCreateManyIngredientInputEnvelope
    connect?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
  }

  export type IngredientUseUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<IngredientUseCreateWithoutIngredientInput, IngredientUseUncheckedCreateWithoutIngredientInput> | IngredientUseCreateWithoutIngredientInput[] | IngredientUseUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientUseCreateOrConnectWithoutIngredientInput | IngredientUseCreateOrConnectWithoutIngredientInput[]
    createMany?: IngredientUseCreateManyIngredientInputEnvelope
    connect?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
  }

  export type IngredientUseUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<IngredientUseCreateWithoutIngredientInput, IngredientUseUncheckedCreateWithoutIngredientInput> | IngredientUseCreateWithoutIngredientInput[] | IngredientUseUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientUseCreateOrConnectWithoutIngredientInput | IngredientUseCreateOrConnectWithoutIngredientInput[]
    upsert?: IngredientUseUpsertWithWhereUniqueWithoutIngredientInput | IngredientUseUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: IngredientUseCreateManyIngredientInputEnvelope
    set?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
    disconnect?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
    delete?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
    connect?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
    update?: IngredientUseUpdateWithWhereUniqueWithoutIngredientInput | IngredientUseUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: IngredientUseUpdateManyWithWhereWithoutIngredientInput | IngredientUseUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: IngredientUseScalarWhereInput | IngredientUseScalarWhereInput[]
  }

  export type IngredientUseUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<IngredientUseCreateWithoutIngredientInput, IngredientUseUncheckedCreateWithoutIngredientInput> | IngredientUseCreateWithoutIngredientInput[] | IngredientUseUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientUseCreateOrConnectWithoutIngredientInput | IngredientUseCreateOrConnectWithoutIngredientInput[]
    upsert?: IngredientUseUpsertWithWhereUniqueWithoutIngredientInput | IngredientUseUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: IngredientUseCreateManyIngredientInputEnvelope
    set?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
    disconnect?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
    delete?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
    connect?: IngredientUseWhereUniqueInput | IngredientUseWhereUniqueInput[]
    update?: IngredientUseUpdateWithWhereUniqueWithoutIngredientInput | IngredientUseUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: IngredientUseUpdateManyWithWhereWithoutIngredientInput | IngredientUseUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: IngredientUseScalarWhereInput | IngredientUseScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
  }

  export type IngredientCreateNestedOneWithoutUsesInput = {
    create?: XOR<IngredientCreateWithoutUsesInput, IngredientUncheckedCreateWithoutUsesInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutUsesInput
    connect?: IngredientWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RecipeUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    upsert?: RecipeUpsertWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutIngredientsInput, RecipeUpdateWithoutIngredientsInput>, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type IngredientUpdateOneRequiredWithoutUsesNestedInput = {
    create?: XOR<IngredientCreateWithoutUsesInput, IngredientUncheckedCreateWithoutUsesInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutUsesInput
    upsert?: IngredientUpsertWithoutUsesInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutUsesInput, IngredientUpdateWithoutUsesInput>, IngredientUncheckedUpdateWithoutUsesInput>
  }

  export type RecipeCreateNestedOneWithoutStepsInput = {
    create?: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutStepsInput
    connect?: RecipeWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutStepsInput
    upsert?: RecipeUpsertWithoutStepsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutStepsInput, RecipeUpdateWithoutStepsInput>, RecipeUncheckedUpdateWithoutStepsInput>
  }

  export type RecipeCreateNestedOneWithoutQuirksInput = {
    create?: XOR<RecipeCreateWithoutQuirksInput, RecipeUncheckedCreateWithoutQuirksInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutQuirksInput
    connect?: RecipeWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutQuirksNestedInput = {
    create?: XOR<RecipeCreateWithoutQuirksInput, RecipeUncheckedCreateWithoutQuirksInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutQuirksInput
    upsert?: RecipeUpsertWithoutQuirksInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutQuirksInput, RecipeUpdateWithoutQuirksInput>, RecipeUncheckedUpdateWithoutQuirksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IngredientUseCreateWithoutRecipeInput = {
    id?: string
    qty?: number | null
    unit?: string | null
    optional?: boolean
    isKeystone?: boolean
    ingredient: IngredientCreateNestedOneWithoutUsesInput
  }

  export type IngredientUseUncheckedCreateWithoutRecipeInput = {
    id?: string
    ingredientId: string
    qty?: number | null
    unit?: string | null
    optional?: boolean
    isKeystone?: boolean
  }

  export type IngredientUseCreateOrConnectWithoutRecipeInput = {
    where: IngredientUseWhereUniqueInput
    create: XOR<IngredientUseCreateWithoutRecipeInput, IngredientUseUncheckedCreateWithoutRecipeInput>
  }

  export type IngredientUseCreateManyRecipeInputEnvelope = {
    data: IngredientUseCreateManyRecipeInput | IngredientUseCreateManyRecipeInput[]
  }

  export type StepCreateWithoutRecipeInput = {
    id?: string
    index: number
    text: string
    timersSec?: number | null
  }

  export type StepUncheckedCreateWithoutRecipeInput = {
    id?: string
    index: number
    text: string
    timersSec?: number | null
  }

  export type StepCreateOrConnectWithoutRecipeInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput>
  }

  export type StepCreateManyRecipeInputEnvelope = {
    data: StepCreateManyRecipeInput | StepCreateManyRecipeInput[]
  }

  export type QuirkCreateWithoutRecipeInput = {
    id?: string
    stepIndex?: number | null
    text: string
    tags: JsonNullValueInput | InputJsonValue
    authorId?: string | null
    upvotes?: number
  }

  export type QuirkUncheckedCreateWithoutRecipeInput = {
    id?: string
    stepIndex?: number | null
    text: string
    tags: JsonNullValueInput | InputJsonValue
    authorId?: string | null
    upvotes?: number
  }

  export type QuirkCreateOrConnectWithoutRecipeInput = {
    where: QuirkWhereUniqueInput
    create: XOR<QuirkCreateWithoutRecipeInput, QuirkUncheckedCreateWithoutRecipeInput>
  }

  export type QuirkCreateManyRecipeInputEnvelope = {
    data: QuirkCreateManyRecipeInput | QuirkCreateManyRecipeInput[]
  }

  export type IngredientUseUpsertWithWhereUniqueWithoutRecipeInput = {
    where: IngredientUseWhereUniqueInput
    update: XOR<IngredientUseUpdateWithoutRecipeInput, IngredientUseUncheckedUpdateWithoutRecipeInput>
    create: XOR<IngredientUseCreateWithoutRecipeInput, IngredientUseUncheckedCreateWithoutRecipeInput>
  }

  export type IngredientUseUpdateWithWhereUniqueWithoutRecipeInput = {
    where: IngredientUseWhereUniqueInput
    data: XOR<IngredientUseUpdateWithoutRecipeInput, IngredientUseUncheckedUpdateWithoutRecipeInput>
  }

  export type IngredientUseUpdateManyWithWhereWithoutRecipeInput = {
    where: IngredientUseScalarWhereInput
    data: XOR<IngredientUseUpdateManyMutationInput, IngredientUseUncheckedUpdateManyWithoutRecipeInput>
  }

  export type IngredientUseScalarWhereInput = {
    AND?: IngredientUseScalarWhereInput | IngredientUseScalarWhereInput[]
    OR?: IngredientUseScalarWhereInput[]
    NOT?: IngredientUseScalarWhereInput | IngredientUseScalarWhereInput[]
    id?: StringFilter<"IngredientUse"> | string
    recipeId?: StringFilter<"IngredientUse"> | string
    ingredientId?: StringFilter<"IngredientUse"> | string
    qty?: FloatNullableFilter<"IngredientUse"> | number | null
    unit?: StringNullableFilter<"IngredientUse"> | string | null
    optional?: BoolFilter<"IngredientUse"> | boolean
    isKeystone?: BoolFilter<"IngredientUse"> | boolean
  }

  export type StepUpsertWithWhereUniqueWithoutRecipeInput = {
    where: StepWhereUniqueInput
    update: XOR<StepUpdateWithoutRecipeInput, StepUncheckedUpdateWithoutRecipeInput>
    create: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput>
  }

  export type StepUpdateWithWhereUniqueWithoutRecipeInput = {
    where: StepWhereUniqueInput
    data: XOR<StepUpdateWithoutRecipeInput, StepUncheckedUpdateWithoutRecipeInput>
  }

  export type StepUpdateManyWithWhereWithoutRecipeInput = {
    where: StepScalarWhereInput
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyWithoutRecipeInput>
  }

  export type StepScalarWhereInput = {
    AND?: StepScalarWhereInput | StepScalarWhereInput[]
    OR?: StepScalarWhereInput[]
    NOT?: StepScalarWhereInput | StepScalarWhereInput[]
    id?: StringFilter<"Step"> | string
    recipeId?: StringFilter<"Step"> | string
    index?: IntFilter<"Step"> | number
    text?: StringFilter<"Step"> | string
    timersSec?: IntNullableFilter<"Step"> | number | null
  }

  export type QuirkUpsertWithWhereUniqueWithoutRecipeInput = {
    where: QuirkWhereUniqueInput
    update: XOR<QuirkUpdateWithoutRecipeInput, QuirkUncheckedUpdateWithoutRecipeInput>
    create: XOR<QuirkCreateWithoutRecipeInput, QuirkUncheckedCreateWithoutRecipeInput>
  }

  export type QuirkUpdateWithWhereUniqueWithoutRecipeInput = {
    where: QuirkWhereUniqueInput
    data: XOR<QuirkUpdateWithoutRecipeInput, QuirkUncheckedUpdateWithoutRecipeInput>
  }

  export type QuirkUpdateManyWithWhereWithoutRecipeInput = {
    where: QuirkScalarWhereInput
    data: XOR<QuirkUpdateManyMutationInput, QuirkUncheckedUpdateManyWithoutRecipeInput>
  }

  export type QuirkScalarWhereInput = {
    AND?: QuirkScalarWhereInput | QuirkScalarWhereInput[]
    OR?: QuirkScalarWhereInput[]
    NOT?: QuirkScalarWhereInput | QuirkScalarWhereInput[]
    id?: StringFilter<"Quirk"> | string
    recipeId?: StringFilter<"Quirk"> | string
    stepIndex?: IntNullableFilter<"Quirk"> | number | null
    text?: StringFilter<"Quirk"> | string
    tags?: JsonFilter<"Quirk">
    authorId?: StringNullableFilter<"Quirk"> | string | null
    upvotes?: IntFilter<"Quirk"> | number
  }

  export type IngredientUseCreateWithoutIngredientInput = {
    id?: string
    qty?: number | null
    unit?: string | null
    optional?: boolean
    isKeystone?: boolean
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
  }

  export type IngredientUseUncheckedCreateWithoutIngredientInput = {
    id?: string
    recipeId: string
    qty?: number | null
    unit?: string | null
    optional?: boolean
    isKeystone?: boolean
  }

  export type IngredientUseCreateOrConnectWithoutIngredientInput = {
    where: IngredientUseWhereUniqueInput
    create: XOR<IngredientUseCreateWithoutIngredientInput, IngredientUseUncheckedCreateWithoutIngredientInput>
  }

  export type IngredientUseCreateManyIngredientInputEnvelope = {
    data: IngredientUseCreateManyIngredientInput | IngredientUseCreateManyIngredientInput[]
  }

  export type IngredientUseUpsertWithWhereUniqueWithoutIngredientInput = {
    where: IngredientUseWhereUniqueInput
    update: XOR<IngredientUseUpdateWithoutIngredientInput, IngredientUseUncheckedUpdateWithoutIngredientInput>
    create: XOR<IngredientUseCreateWithoutIngredientInput, IngredientUseUncheckedCreateWithoutIngredientInput>
  }

  export type IngredientUseUpdateWithWhereUniqueWithoutIngredientInput = {
    where: IngredientUseWhereUniqueInput
    data: XOR<IngredientUseUpdateWithoutIngredientInput, IngredientUseUncheckedUpdateWithoutIngredientInput>
  }

  export type IngredientUseUpdateManyWithWhereWithoutIngredientInput = {
    where: IngredientUseScalarWhereInput
    data: XOR<IngredientUseUpdateManyMutationInput, IngredientUseUncheckedUpdateManyWithoutIngredientInput>
  }

  export type RecipeCreateWithoutIngredientsInput = {
    id?: string
    title: string
    cuisine: string
    timeMinutes: number
    costEstimate?: number | null
    dietTags: JsonNullValueInput | InputJsonValue
    skillLevel: number
    sidePairs: JsonNullValueInput | InputJsonValue
    flavor: JsonNullValueInput | InputJsonValue
    createdById?: string | null
    steps?: StepCreateNestedManyWithoutRecipeInput
    quirks?: QuirkCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutIngredientsInput = {
    id?: string
    title: string
    cuisine: string
    timeMinutes: number
    costEstimate?: number | null
    dietTags: JsonNullValueInput | InputJsonValue
    skillLevel: number
    sidePairs: JsonNullValueInput | InputJsonValue
    flavor: JsonNullValueInput | InputJsonValue
    createdById?: string | null
    steps?: StepUncheckedCreateNestedManyWithoutRecipeInput
    quirks?: QuirkUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutIngredientsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
  }

  export type IngredientCreateWithoutUsesInput = {
    id?: string
    name: string
    groups: JsonNullValueInput | InputJsonValue
    aliases: JsonNullValueInput | InputJsonValue
  }

  export type IngredientUncheckedCreateWithoutUsesInput = {
    id?: string
    name: string
    groups: JsonNullValueInput | InputJsonValue
    aliases: JsonNullValueInput | InputJsonValue
  }

  export type IngredientCreateOrConnectWithoutUsesInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutUsesInput, IngredientUncheckedCreateWithoutUsesInput>
  }

  export type RecipeUpsertWithoutIngredientsInput = {
    update: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type RecipeUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    timeMinutes?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    dietTags?: JsonNullValueInput | InputJsonValue
    skillLevel?: IntFieldUpdateOperationsInput | number
    sidePairs?: JsonNullValueInput | InputJsonValue
    flavor?: JsonNullValueInput | InputJsonValue
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: StepUpdateManyWithoutRecipeNestedInput
    quirks?: QuirkUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    timeMinutes?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    dietTags?: JsonNullValueInput | InputJsonValue
    skillLevel?: IntFieldUpdateOperationsInput | number
    sidePairs?: JsonNullValueInput | InputJsonValue
    flavor?: JsonNullValueInput | InputJsonValue
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: StepUncheckedUpdateManyWithoutRecipeNestedInput
    quirks?: QuirkUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type IngredientUpsertWithoutUsesInput = {
    update: XOR<IngredientUpdateWithoutUsesInput, IngredientUncheckedUpdateWithoutUsesInput>
    create: XOR<IngredientCreateWithoutUsesInput, IngredientUncheckedCreateWithoutUsesInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutUsesInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutUsesInput, IngredientUncheckedUpdateWithoutUsesInput>
  }

  export type IngredientUpdateWithoutUsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groups?: JsonNullValueInput | InputJsonValue
    aliases?: JsonNullValueInput | InputJsonValue
  }

  export type IngredientUncheckedUpdateWithoutUsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groups?: JsonNullValueInput | InputJsonValue
    aliases?: JsonNullValueInput | InputJsonValue
  }

  export type RecipeCreateWithoutStepsInput = {
    id?: string
    title: string
    cuisine: string
    timeMinutes: number
    costEstimate?: number | null
    dietTags: JsonNullValueInput | InputJsonValue
    skillLevel: number
    sidePairs: JsonNullValueInput | InputJsonValue
    flavor: JsonNullValueInput | InputJsonValue
    createdById?: string | null
    ingredients?: IngredientUseCreateNestedManyWithoutRecipeInput
    quirks?: QuirkCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutStepsInput = {
    id?: string
    title: string
    cuisine: string
    timeMinutes: number
    costEstimate?: number | null
    dietTags: JsonNullValueInput | InputJsonValue
    skillLevel: number
    sidePairs: JsonNullValueInput | InputJsonValue
    flavor: JsonNullValueInput | InputJsonValue
    createdById?: string | null
    ingredients?: IngredientUseUncheckedCreateNestedManyWithoutRecipeInput
    quirks?: QuirkUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutStepsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
  }

  export type RecipeUpsertWithoutStepsInput = {
    update: XOR<RecipeUpdateWithoutStepsInput, RecipeUncheckedUpdateWithoutStepsInput>
    create: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutStepsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutStepsInput, RecipeUncheckedUpdateWithoutStepsInput>
  }

  export type RecipeUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    timeMinutes?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    dietTags?: JsonNullValueInput | InputJsonValue
    skillLevel?: IntFieldUpdateOperationsInput | number
    sidePairs?: JsonNullValueInput | InputJsonValue
    flavor?: JsonNullValueInput | InputJsonValue
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: IngredientUseUpdateManyWithoutRecipeNestedInput
    quirks?: QuirkUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    timeMinutes?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    dietTags?: JsonNullValueInput | InputJsonValue
    skillLevel?: IntFieldUpdateOperationsInput | number
    sidePairs?: JsonNullValueInput | InputJsonValue
    flavor?: JsonNullValueInput | InputJsonValue
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: IngredientUseUncheckedUpdateManyWithoutRecipeNestedInput
    quirks?: QuirkUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateWithoutQuirksInput = {
    id?: string
    title: string
    cuisine: string
    timeMinutes: number
    costEstimate?: number | null
    dietTags: JsonNullValueInput | InputJsonValue
    skillLevel: number
    sidePairs: JsonNullValueInput | InputJsonValue
    flavor: JsonNullValueInput | InputJsonValue
    createdById?: string | null
    ingredients?: IngredientUseCreateNestedManyWithoutRecipeInput
    steps?: StepCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutQuirksInput = {
    id?: string
    title: string
    cuisine: string
    timeMinutes: number
    costEstimate?: number | null
    dietTags: JsonNullValueInput | InputJsonValue
    skillLevel: number
    sidePairs: JsonNullValueInput | InputJsonValue
    flavor: JsonNullValueInput | InputJsonValue
    createdById?: string | null
    ingredients?: IngredientUseUncheckedCreateNestedManyWithoutRecipeInput
    steps?: StepUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutQuirksInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutQuirksInput, RecipeUncheckedCreateWithoutQuirksInput>
  }

  export type RecipeUpsertWithoutQuirksInput = {
    update: XOR<RecipeUpdateWithoutQuirksInput, RecipeUncheckedUpdateWithoutQuirksInput>
    create: XOR<RecipeCreateWithoutQuirksInput, RecipeUncheckedCreateWithoutQuirksInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutQuirksInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutQuirksInput, RecipeUncheckedUpdateWithoutQuirksInput>
  }

  export type RecipeUpdateWithoutQuirksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    timeMinutes?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    dietTags?: JsonNullValueInput | InputJsonValue
    skillLevel?: IntFieldUpdateOperationsInput | number
    sidePairs?: JsonNullValueInput | InputJsonValue
    flavor?: JsonNullValueInput | InputJsonValue
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: IngredientUseUpdateManyWithoutRecipeNestedInput
    steps?: StepUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutQuirksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cuisine?: StringFieldUpdateOperationsInput | string
    timeMinutes?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableIntFieldUpdateOperationsInput | number | null
    dietTags?: JsonNullValueInput | InputJsonValue
    skillLevel?: IntFieldUpdateOperationsInput | number
    sidePairs?: JsonNullValueInput | InputJsonValue
    flavor?: JsonNullValueInput | InputJsonValue
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: IngredientUseUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: StepUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type IngredientUseCreateManyRecipeInput = {
    id?: string
    ingredientId: string
    qty?: number | null
    unit?: string | null
    optional?: boolean
    isKeystone?: boolean
  }

  export type StepCreateManyRecipeInput = {
    id?: string
    index: number
    text: string
    timersSec?: number | null
  }

  export type QuirkCreateManyRecipeInput = {
    id?: string
    stepIndex?: number | null
    text: string
    tags: JsonNullValueInput | InputJsonValue
    authorId?: string | null
    upvotes?: number
  }

  export type IngredientUseUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    isKeystone?: BoolFieldUpdateOperationsInput | boolean
    ingredient?: IngredientUpdateOneRequiredWithoutUsesNestedInput
  }

  export type IngredientUseUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    qty?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    isKeystone?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IngredientUseUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    qty?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    isKeystone?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StepUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    timersSec?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StepUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    timersSec?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StepUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    timersSec?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuirkUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepIndex?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: IntFieldUpdateOperationsInput | number
  }

  export type QuirkUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepIndex?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: IntFieldUpdateOperationsInput | number
  }

  export type QuirkUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepIndex?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: IntFieldUpdateOperationsInput | number
  }

  export type IngredientUseCreateManyIngredientInput = {
    id?: string
    recipeId: string
    qty?: number | null
    unit?: string | null
    optional?: boolean
    isKeystone?: boolean
  }

  export type IngredientUseUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    isKeystone?: BoolFieldUpdateOperationsInput | boolean
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type IngredientUseUncheckedUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    qty?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    isKeystone?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IngredientUseUncheckedUpdateManyWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    qty?: NullableFloatFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    isKeystone?: BoolFieldUpdateOperationsInput | boolean
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