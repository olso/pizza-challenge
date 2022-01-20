import type { GraphQLResolveInfo } from 'graphql';
import type { DbPizza, DbTopping } from '../data';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Basket = {
  __typename?: 'Basket';
  id: Scalars['ID'];
  items: Array<BasketItem>;
  totalPrice: Money;
};

export type BasketInput = {
  items: Array<BasketItemInput>;
};

export type BasketItem = {
  __typename?: 'BasketItem';
  localId: Scalars['String'];
  pizza: Pizza;
  pizzaId: Scalars['ID'];
  pricePreview: PricePreview;
  size: Size;
  sizeId: Scalars['ID'];
  toppingIds: Array<Scalars['ID']>;
  toppings: Array<Topping>;
};

export type BasketItemInput = {
  localId: Scalars['String'];
  pizzaId: Scalars['ID'];
  sizeId: Scalars['ID'];
  toppingIds: Array<Scalars['ID']>;
};

export type Money = {
  __typename?: 'Money';
  /**
   * https://stripe.com/docs/currencies#zero-decimal
   * e.g. 10 EUR is 1000 (cents)
   */
  amount: Scalars['Int'];
  currency: Scalars['String'];
  symbol: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  makeBasket?: Maybe<Basket>;
};


export type MutationMakeBasketArgs = {
  input: BasketInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type Pizza = Node & {
  __typename?: 'Pizza';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type PricePreview = {
  __typename?: 'PricePreview';
  sizePrice: Money;
  toppingsPrice: Money;
  totalPrice: Money;
};

export type PricePreviewInput = {
  sizeId: Scalars['ID'];
  toppingIds: Array<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  pizza?: Maybe<Pizza>;
  pizzas: Array<Pizza>;
  pricePreview?: Maybe<PricePreview>;
  sizes: Array<Size>;
  toppings: Array<Topping>;
};


export type QueryPizzaArgs = {
  id: Scalars['ID'];
};


export type QueryPizzasArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryPricePreviewArgs = {
  input: PricePreviewInput;
};


export type QueryToppingsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type Size = Node & {
  __typename?: 'Size';
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Money;
};

export type SubmitBasketInput = {
  basketId: Scalars['ID'];
  card: SubmitCardInput;
  personal: SubmitPersonalInput;
};

export type SubmitCardInput = {
  cvv: Scalars['String'];
  expiration: Scalars['String'];
  number: Scalars['String'];
};

export type SubmitPersonalInput = {
  address: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type Topping = Node & {
  __typename?: 'Topping';
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Money;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info?: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info?: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Basket: ResolverTypeWrapper<Omit<Basket, 'items'> & { items: Array<ResolversTypes['BasketItem']> }>;
  BasketInput: BasketInput;
  BasketItem: ResolverTypeWrapper<Omit<BasketItem, 'pizza' | 'toppings'> & { pizza: ResolversTypes['Pizza'], toppings: Array<ResolversTypes['Topping']> }>;
  BasketItemInput: BasketItemInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Money: ResolverTypeWrapper<Money>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Pizza'] | ResolversTypes['Size'] | ResolversTypes['Topping'];
  Pizza: ResolverTypeWrapper<DbPizza>;
  PricePreview: ResolverTypeWrapper<PricePreview>;
  PricePreviewInput: PricePreviewInput;
  Query: ResolverTypeWrapper<{}>;
  Size: ResolverTypeWrapper<Size>;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubmitBasketInput: SubmitBasketInput;
  SubmitCardInput: SubmitCardInput;
  SubmitPersonalInput: SubmitPersonalInput;
  Topping: ResolverTypeWrapper<DbTopping>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Basket: Omit<Basket, 'items'> & { items: Array<ResolversParentTypes['BasketItem']> };
  BasketInput: BasketInput;
  BasketItem: Omit<BasketItem, 'pizza' | 'toppings'> & { pizza: ResolversParentTypes['Pizza'], toppings: Array<ResolversParentTypes['Topping']> };
  BasketItemInput: BasketItemInput;
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Money: Money;
  Mutation: {};
  Node: ResolversParentTypes['Pizza'] | ResolversParentTypes['Size'] | ResolversParentTypes['Topping'];
  Pizza: DbPizza;
  PricePreview: PricePreview;
  PricePreviewInput: PricePreviewInput;
  Query: {};
  Size: Size;
  String: Scalars['String'];
  SubmitBasketInput: SubmitBasketInput;
  SubmitCardInput: SubmitCardInput;
  SubmitPersonalInput: SubmitPersonalInput;
  Topping: DbTopping;
};

export type BasketResolvers<ContextType = any, ParentType extends ResolversParentTypes['Basket'] = ResolversParentTypes['Basket']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['BasketItem']>, ParentType, ContextType>;
  totalPrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasketItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasketItem'] = ResolversParentTypes['BasketItem']> = {
  localId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pizza?: Resolver<ResolversTypes['Pizza'], ParentType, ContextType>;
  pizzaId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pricePreview?: Resolver<ResolversTypes['PricePreview'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Size'], ParentType, ContextType>;
  sizeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  toppingIds?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  toppings?: Resolver<Array<ResolversTypes['Topping']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoneyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money'] = ResolversParentTypes['Money']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  makeBasket?: Resolver<Maybe<ResolversTypes['Basket']>, ParentType, ContextType, RequireFields<MutationMakeBasketArgs, 'input'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Pizza' | 'Size' | 'Topping', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type PizzaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pizza'] = ResolversParentTypes['Pizza']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PricePreviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['PricePreview'] = ResolversParentTypes['PricePreview']> = {
  sizePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  toppingsPrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  totalPrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  pizza?: Resolver<Maybe<ResolversTypes['Pizza']>, ParentType, ContextType, RequireFields<QueryPizzaArgs, 'id'>>;
  pizzas?: Resolver<Array<ResolversTypes['Pizza']>, ParentType, ContextType, RequireFields<QueryPizzasArgs, never>>;
  pricePreview?: Resolver<Maybe<ResolversTypes['PricePreview']>, ParentType, ContextType, RequireFields<QueryPricePreviewArgs, 'input'>>;
  sizes?: Resolver<Array<ResolversTypes['Size']>, ParentType, ContextType>;
  toppings?: Resolver<Array<ResolversTypes['Topping']>, ParentType, ContextType, RequireFields<QueryToppingsArgs, never>>;
};

export type SizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Size'] = ResolversParentTypes['Size']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ToppingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Topping'] = ResolversParentTypes['Topping']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Basket?: BasketResolvers<ContextType>;
  BasketItem?: BasketItemResolvers<ContextType>;
  Money?: MoneyResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Pizza?: PizzaResolvers<ContextType>;
  PricePreview?: PricePreviewResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Size?: SizeResolvers<ContextType>;
  Topping?: ToppingResolvers<ContextType>;
};

