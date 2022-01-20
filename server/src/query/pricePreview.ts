import { fromGlobalId } from "graphql-relay";

import { getSize, getToppings } from "../data";
import { QueryResolvers } from "../types/GeneratedGql";
import { calculcatePricePreview } from "../utils";

export const query: QueryResolvers["pricePreview"] = (_, { input }) => {
  const sizeId = fromGlobalId(input.sizeId).id;
  const toppingIds = input.toppingIds.map((v) => fromGlobalId(v).id);

  const size = getSize(sizeId);

  if (!size) {
    return null;
  }

  const toppings = getToppings(toppingIds);

  const pricePreview = calculcatePricePreview({
    size,
    toppings,
  });

  return pricePreview;
};
