import { fromGlobalId } from "graphql-relay";
import { Chance } from "chance";

import { MutationResolvers, Basket } from "../types/GeneratedGql";
import { getPizza, getSize, getToppings } from "../data";

import { calculcatePricePreview } from "../utils";

const chance = new Chance();

export const mutation: MutationResolvers["makeBasket"] = (_, { input }) => {
  const basket: Basket = {
    id: chance.guid({ version: 4 }),
    items: [],
    totalPrice: {
      amount: 0,
      currency: "USD",
      symbol: "$",
    },
  };

  input.items.forEach((inputItem) => {
    const pizzaId = fromGlobalId(inputItem.pizzaId).id;
    const sizeId = fromGlobalId(inputItem.sizeId).id;
    const toppingIds = inputItem.toppingIds.map((v) => fromGlobalId(v).id);

    const pizza = getPizza(pizzaId);
    const size = getSize(sizeId);

    if (!pizza || !size) {
      return null;
    }

    const toppings = getToppings(toppingIds);

    const pricePreview = calculcatePricePreview({
      size,
      toppings,
    });

    basket.items.push({
      localId: inputItem.localId,
      pizza,
      pricePreview,
      toppingIds: inputItem.toppingIds,
      pizzaId: inputItem.pizzaId,
      sizeId: inputItem.sizeId,
      toppings,
      size,
    });
  });

  basket.totalPrice.amount = basket.items.reduce(
    (result, v) => result + v.pricePreview.totalPrice.amount,
    0
  );

  return basket;
};
