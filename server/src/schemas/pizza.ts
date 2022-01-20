import gql from "graphql-tag";
import { toGlobalId } from "graphql-relay";

import type { PizzaResolvers } from "../types/GeneratedGql";

export const TYPE = "Pizza";

export const schema = gql`
  type Pizza implements Node {
    id: ID!
    slug: String!

    name: String!
    description: String!
  }
`;

export const resolver: PizzaResolvers = {
  id: ({ id }) => toGlobalId(TYPE, id),
};
