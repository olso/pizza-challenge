import React from "react";
import { useFragment, graphql } from "react-relay";
import { Typography, Box, Button, Avatar } from "@mui/material";

import ClampedTypography from "../ClampedTypography";
import PricePreview from "../PricePreview";
import type {
  CheckoutItem_item$key,
  CheckoutItem_item$data,
} from "../../__generated__/CheckoutItem_item.graphql";
import testIds from "../../consts/testIds";
import Translate from "../Translate";

type CheckoutItemProps = {
  onRemove(v: { localId: string }): void;
  className?: string;
  data: Omit<CheckoutItem_item$data, " $fragmentType">;
};
export function CheckoutItem({ data, className, onRemove }: CheckoutItemProps) {
  return (
    <Box
      data-testid={testIds.checkoutItem}
      className={className}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "20px",
        py: 2,
        borderBottom: ({ palette }) => `1px solid ${palette.text.secondary}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <ClampedTypography lineClamp={1} variant="h5">
          {data.pizza.name}
        </ClampedTypography>
        <ClampedTypography lineClamp={1} variant="body2">
          <Translate t="Toppings" />:{" "}
          {data.toppings.length ? (
            data.toppings.map((v) => v.name).join(", ")
          ) : (
            <Translate t="No toppings" />
          )}
        </ClampedTypography>
        <Typography variant="body2">
          <Translate t="Size" />: {data.size.name}
        </Typography>
        <br />
        <PricePreview existingPricePreview={data.pricePreview} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          size="small"
          color="error"
          onClick={() => onRemove({ localId: data.localId })}
        >
          <Translate t="Remove" />
        </Button>
        <Avatar
          sx={{
            height: 110,
            width: 110,
          }}
        >
          {data.pizza.name.charAt(0)}
        </Avatar>
      </Box>
    </Box>
  );
}

type CheckoutItemFragmentProps = Omit<CheckoutItemProps, "data"> & {
  dataFragment: CheckoutItem_item$key;
};
export function CheckoutItemFragment(props: CheckoutItemFragmentProps) {
  const data = useFragment(
    graphql`
      fragment CheckoutItem_item on BasketItem {
        localId
        pricePreview {
          sizePrice {
            amount
            currency
            symbol
          }
          toppingsPrice {
            amount
            currency
            symbol
          }
          totalPrice {
            amount
            currency
            symbol
          }
        }
        size {
          id
          name
        }
        pizza {
          id
          name
        }
        toppings {
          id
          name
        }
      }
    `,
    props.dataFragment
  );

  return <CheckoutItem {...props} data={data} />;
}
