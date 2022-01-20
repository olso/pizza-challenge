import gql from "graphql-tag";
import { toGlobalId } from "graphql-relay";

import { SizeResolvers } from "../types/GeneratedGql";

export const TYPE = "Size";

export const schema = gql`
  type Size implements Node {
    id: ID!

    name: String!
    price: Money!
  }
`;

export const resolver: SizeResolvers = {
  id: ({ id }) => toGlobalId(TYPE, id),
};
