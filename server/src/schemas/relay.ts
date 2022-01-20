import gql from "graphql-tag";
import type { NodeResolvers } from "../types/GeneratedGql";

export const TYPE = "Node";

export const schema = gql`
  interface Node {
    id: ID!
  }
`;

export const resolver: NodeResolvers = {
  __resolveType: (o: any) => o.typename,
};
