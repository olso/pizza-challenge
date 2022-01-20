import type { Money } from "../types/GeneratedGql";

export const fromMoneyToText = ({ symbol, amount, currency }: Money): string =>
  `${symbol}${(amount / 100).toFixed(2)} ${currency}`;
