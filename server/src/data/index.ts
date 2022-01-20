import { Chance } from "chance";
import slugify from "slugify";

import {
  Pizza as GqlPizza,
  Topping as GqlTopping,
  Size as GqlSize,
} from "../types/GeneratedGql";

export type DbPizza = Omit<GqlPizza, "__typename">;
export type DbTopping = Omit<GqlTopping, "__typename">;
export type DbSize = Omit<GqlSize, "__typename">;

const chance = new Chance();

const makeId = () => chance.guid({ version: 4 });

const bakePizza = (pizza?: Partial<DbPizza>): DbPizza => ({
  id: makeId(),
  // prettier-ignore
  name: `${chance.word({ capitalize: true })} ${chance.word({ capitalize: false })}`,
  get slug() {
    return slugify(
      `pizza ${this.name} ${chance.integer({ min: 1, max: 1000 })}`,
      {
        lower: true,
        strict: true,
      }
    );
  },
  description: chance.paragraph(),
  ...pizza,
});

const sprinkleTopping = (topping?: Partial<DbTopping>): DbTopping => ({
  id: makeId(),
  name: chance.word({
    capitalize: true,
  }),
  price: {
    amount: chance.integer({
      min: 10, // 0.1
      max: 500, // 5
    }),
    currency: "USD",
    symbol: "$",
  },
  ...topping,
});

export const pizzas: DbPizza[] = [
  bakePizza({
    name: "ModeRNA",
  }),
  bakePizza({
    name: "Rebecca Black - Friday",
  }),
  bakePizza({
    name: "r/WallStreetBets",
  }),
  bakePizza({
    name: "Radical candor",
  }),
  bakePizza({
    name: "Matriarchy",
  }),
  bakePizza({
    name: "Tresor BERLIN",
  }),
  bakePizza({
    name: "It all goes back in the box",
  }),
  bakePizza({
    name: "Neurocapitalism",
  }),
  // ...new Array(5).fill(null).map(() => bakePizza()),
];

export const toppings: DbTopping[] = [
  sprinkleTopping({
    name: "Jet fuel can't melt steel beams 🔥",
  }),
  sprinkleTopping({
    name: "Omicron",
  }),
  sprinkleTopping({
    name: "Delta",
  }),
  sprinkleTopping({
    name: "Slovak style 🇸🇰",
  }),
  // ...new Array(2).fill(null).map(() => sprinkleTopping()),
];

export const sizes: DbSize[] = [
  {
    id: makeId(),
    name: "Small",
    price: {
      amount: 1500,
      currency: "USD",
      symbol: "$",
    },
  },
  {
    id: makeId(),
    name: "Medium",
    price: {
      amount: 2000,
      currency: "USD",
      symbol: "$",
    },
  },
  {
    id: makeId(),
    name: "Large",
    price: {
      amount: 2500,
      currency: "USD",
      symbol: "$",
    },
  },
];

export const getPizza = (id: DbPizza["id"]): DbPizza | null =>
  pizzas.find((v) => v.id === id) || null;

export const getPizzas = (ids: DbPizza["id"][]): DbPizza[] =>
  pizzas.filter((v) => ids.includes(v.id));

export const getTopping = (id: DbTopping["id"]): DbTopping | null =>
  toppings.find((v) => v.id === id) || null;

export const getToppings = (ids: DbTopping["id"][]): DbTopping[] =>
  toppings.filter((v) => ids.includes(v.id));

export const getSize = (id: DbPizza["id"]): DbSize | null =>
  sizes.find((v) => v.id === id) || null;

export const getSizes = (ids: DbSize["id"][]): DbSize[] =>
  sizes.filter((v) => ids.includes(v.id));
