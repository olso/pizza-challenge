import { fromGlobalId } from "graphql-relay";

import { getPizzas, pizzas } from "../data";
import { QueryResolvers } from "../types/GeneratedGql";

export const query: QueryResolvers["pizzas"] = (_, { ids }) => {
  if (ids?.length) {
    const resolvedIds = ids.map((id) => fromGlobalId(id).id);
    return getPizzas(resolvedIds);
  }

  return pizzas;
};
