import { fromGlobalId } from "graphql-relay";

import { toppings, getToppings } from "../data";
import { QueryResolvers } from "../types/GeneratedGql";

export const query: QueryResolvers["toppings"] = (_, { ids }) => {
  if (ids?.length) {
    const resolvedIds = ids.map((id) => fromGlobalId(id).id);
    return getToppings(resolvedIds);
  }

  return toppings;
};
