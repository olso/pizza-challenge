import gql from "graphql-tag";

import { MutationResolvers } from "../types/GeneratedGql";

import * as makeBasket from "./makeBasket";

export const schema = gql`
  input SubmitPersonalInput {
    name: String!
    address: String!
    phone: String!
  }

  input SubmitCardInput {
    number: String!
    expiration: String!
    cvv: String!
  }

  input SubmitBasketInput {
    basketId: ID!
    personal: SubmitPersonalInput!
    card: SubmitCardInput!
  }

  type Mutation {
    makeBasket(input: BasketInput!): Basket
  }
`;

export const resolvers: MutationResolvers = {
  makeBasket: makeBasket.mutation,
}
