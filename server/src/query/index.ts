import gql from "graphql-tag";

import { QueryResolvers } from "../types/GeneratedGql";

import * as pizza from "./pizza";
import * as pizzas from "./pizzas";
import * as toppings from "./toppings";
import * as sizes from "./sizes";
import * as pricePreview from "./pricePreview";

export const schema = gql`
  type Query {
    pizza(id: ID!): Pizza
    pizzas(ids: [ID!]): [Pizza!]!
    toppings(ids: [ID!]): [Topping!]!
    sizes: [Size!]!
    pricePreview(input: PricePreviewInput!): PricePreview
  }
`;

export const resolver: QueryResolvers = {
  pizza: pizza.query,
  pizzas: pizzas.query,
  toppings: toppings.query,
  sizes: sizes.query,
  pricePreview: pricePreview.query,
};
