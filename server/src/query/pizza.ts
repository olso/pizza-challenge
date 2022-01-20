import { fromGlobalId } from "graphql-relay";

import { getPizza } from "../data";
import { QueryResolvers } from "../types/GeneratedGql";

export const query: QueryResolvers["pizza"] = (_, { id }) => {
  return getPizza(fromGlobalId(id).id);
};
