import gql from "graphql-tag";
import { toGlobalId } from "graphql-relay";

import type { BasketItemResolvers, BasketResolvers } from "../types/GeneratedGql";

export const TYPE_BASKET = "Basket";
export const TYPE_BASKET_ITEM = "BasketItem";

export const schema = gql`
  input BasketItemInput {
    localId: String!
    pizzaId: ID!
    sizeId: ID!
    toppingIds: [ID!]!
  }

  input BasketInput {
    items: [BasketItemInput!]!
  }

  type BasketItem {
    localId: String!

    pricePreview: PricePreview!

    pizza: Pizza!
    size: Size!
    toppings: [Topping!]!

    pizzaId: ID!
    sizeId: ID!
    toppingIds: [ID!]!
  }

  type Basket {
    id: ID!
    totalPrice: Money!
    items: [BasketItem!]!
  }
`;

export const basketResolver: BasketResolvers = {
  id: ({ id }) => toGlobalId(TYPE_BASKET, id),
};

export const basketItemResolver: BasketItemResolvers = {
};
