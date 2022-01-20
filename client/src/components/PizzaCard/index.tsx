import React from "react";
import { Box, Avatar } from "@mui/material";
import { useFragment, graphql } from "react-relay";

import ClampedTypography from "../ClampedTypography";
import type {
  PizzaCard_pizza$key,
  PizzaCard_pizza$data,
} from "../../__generated__/PizzaCard_pizza.graphql";
import { noop } from "../../utils/fp";
import testIds from "../../consts/testIds";

export function PizzCardSkeleton(props: Partial<PizzaCardProps>) {
  return (
    <PizzaCard
      {...props}
      data={{
        id: "",
        slug: "",
        name: "Loading...",
        description: "Loading...",
        ...props.data,
      }}
      onClick={noop}
    />
  );
}

type PizzaCardProps = {
  className?: string;
  onClick(id: string): void;
  data: Omit<PizzaCard_pizza$data, " $fragmentType">;
};
export function PizzaCard({ data, onClick, className }: PizzaCardProps) {
  return (
    <Box
      data-testid={testIds.pizzaCard}
      onClick={() => onClick && onClick(data.id)}
      className={className}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px",
        py: 2,
        borderBottom: ({ palette }) => `1px solid ${palette.text.secondary}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <ClampedTypography lineClamp={1} variant="h5">
          {data.name}
        </ClampedTypography>
        <ClampedTypography lineClamp={2} variant="body2">
          {data.description}
        </ClampedTypography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          sx={{
            height: 110,
            width: 110,
          }}
        >
          {data.name.charAt(0)}
        </Avatar>
      </Box>
    </Box>
  );
}

export type PizzaCardFragmentProps = Omit<PizzaCardProps, "data"> & {
  dataFragment: PizzaCard_pizza$key;
};
export function PizzaCardFragment(props: PizzaCardFragmentProps) {
  const data = useFragment(
    graphql`
      fragment PizzaCard_pizza on Pizza {
        id
        name
        slug
        description
      }
    `,
    props.dataFragment
  );

  return <PizzaCard {...props} data={data} />;
}
