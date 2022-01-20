export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  submitBasket: SubmitBasketResult;
};


export type MutationMakeBasketArgs = {
  input: BasketInput;
};


export type MutationSubmitBasketArgs = {
  input: SubmitBasketInput;
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

export type SubmitBasketResult = {
  __typename?: 'SubmitBasketResult';
  ok: Scalars['Boolean'];
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
