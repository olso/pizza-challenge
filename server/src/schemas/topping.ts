import gql from "graphql-tag";
import { toGlobalId } from "graphql-relay";

import { ToppingResolvers } from "../types/GeneratedGql";

export const TYPE = "Topping";

export const schema = gql`
  type Topping implements Node {
    id: ID!

    name: String!
    price: Money!
  }
`;

export const resolver: ToppingResolvers = {
  id: ({ id }) => toGlobalId(TYPE, id),
};
