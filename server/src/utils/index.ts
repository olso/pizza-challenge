import {  Topping, Size, PricePreview } from "../types/GeneratedGql";

export const calculcatePricePreview = ({ size, toppings }: {
  size: Size;
  toppings: Topping[];
}): PricePreview => {
  const { price } = size;

  const toppingsSumAmount = toppings.reduce(
    (result, v) => result + v.price.amount,
    0
  );

  return {
    sizePrice: price,
    toppingsPrice: {
      ...price,
      amount: toppingsSumAmount,
    },
    totalPrice: {
      ...price,
      amount: price.amount + toppingsSumAmount,
    },
  }
}
