import React from "react";
import { Stack, Typography } from "@mui/material";
import { useLazyLoadQuery, graphql } from "react-relay";

import type {
  Topping,
  Size,
  Money,
  PricePreview as TPricePreview,
} from "../../types/GeneratedGql";
import type { PricePreviewQuery } from "../../__generated__/PricePreviewQuery.graphql";
import { fromMoneyToText } from "../../utils/money";
import Translate from "../Translate";

type Props = {
  existingPricePreview?: TPricePreview;
  sizeId?: Size["id"];
  toppingIds?: Topping["id"][];
};

const fallbackPrice: Money = {
  amount: 0,
  currency: "USD",
  symbol: "$",
};

const Line = ({ name, price }: { name: React.ReactNode; price: Money }) => (
  <Typography variant="body2">
    {name}: {fromMoneyToText(price)}
  </Typography>
);

function PricePreviewSkeleton() {
  return (
    <Stack>
      <Line name={<Translate t="Size price" />} price={fallbackPrice} />
      <Line name={<Translate t="Toppings price" />} price={fallbackPrice} />
      <Line name={<Translate t="Total price" />} price={fallbackPrice} />
    </Stack>
  );
}

function PricePreviewMain({ sizeId, toppingIds, existingPricePreview }: Props) {
  const data = useLazyLoadQuery<PricePreviewQuery>(
    graphql`
      query PricePreviewQuery($input: PricePreviewInput!, $canQuery: Boolean!) {
        pricePreview(input: $input) @include(if: $canQuery) {
          totalPrice {
            amount
            currency
            symbol
          }
          toppingsPrice {
            amount
            currency
            symbol
          }
          sizePrice {
            amount
            currency
            symbol
          }
        }
      }
    `,
    {
      canQuery: Boolean(sizeId) && !existingPricePreview,
      input: {
        sizeId: sizeId || "",
        toppingIds: toppingIds || [],
      },
    }
  );

  const pricePreview = existingPricePreview || data.pricePreview;

  return (
    <Stack>
      <Line
        name={<Translate t="Size price" />}
        price={pricePreview?.sizePrice ?? fallbackPrice}
      />
      <Line
        name={<Translate t="Toppings price" />}
        price={pricePreview?.toppingsPrice ?? fallbackPrice}
      />
      <Line
        name={<Translate t="Total price" />}
        price={pricePreview?.totalPrice ?? fallbackPrice}
      />
    </Stack>
  );
}

export default function PricePreview(props: Props) {
  return (
    <React.Suspense fallback={<PricePreviewSkeleton />}>
      <PricePreviewMain {...props} />
    </React.Suspense>
  );
}
