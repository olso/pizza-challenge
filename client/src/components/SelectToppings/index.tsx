import React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import {
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Checkbox,
  ListItemText,
} from "@mui/material";

import type { SelectToppingsQuery } from "../../__generated__/SelectToppingsQuery.graphql";
import { fromMoneyToText } from "../../utils/money";
import type { Topping } from "../../types/GeneratedGql";
import Translate from "../Translate";

type ToppingId = Topping["id"];
type ToppingIds = ToppingId[];

function SelectToppingsSkeleton() {
  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="select-toppings-label">
        <Translate t="Toppings" />
      </InputLabel>
      <Select
        labelId="select-toppings-label"
        multiple
        value={[]}
        input={<OutlinedInput label={<Translate t="Toppings" />} />}
      />
    </FormControl>
  );
}

type Props = {
  value: ToppingIds;
  onChange(v: ToppingIds): void;
};
function SelectToppingsMain({ value, onChange }: Props) {
  const handleChange = React.useCallback(
    (event: SelectChangeEvent<ToppingIds>) => {
      const newValue = event.target.value;
      onChange(typeof newValue === "string" ? newValue.split(",") : newValue);
    },
    [onChange]
  );

  const { toppings } = useLazyLoadQuery<SelectToppingsQuery>(
    graphql`
      query SelectToppingsQuery {
        toppings {
          id
          name
          price {
            amount
            symbol
            currency
          }
        }
      }
    `,
    {}
  );

  const toppingIdToName = React.useCallback(
    (id: ToppingId) => {
      return toppings.find((topping) => topping.id === id)?.name || "Not found";
    },
    [toppings]
  );

  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="select-toppings-label">
        <Translate t="Toppings" />
      </InputLabel>
      <Select
        labelId="select-toppings-label"
        multiple
        value={value}
        input={<OutlinedInput label={<Translate t="Toppings" />} />}
        onChange={handleChange}
        renderValue={(selected) =>
          selected.slice(0, 3).map(toppingIdToName).join(", ")
        }
      >
        {toppings.map(({ id, name, price }) => (
          <MenuItem key={id} value={id}>
            <Checkbox checked={value.indexOf(id) > -1} />
            <ListItemText primary={name} secondary={fromMoneyToText(price)} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default function SelectToppings(props: Props) {
  return (
    <React.Suspense fallback={<SelectToppingsSkeleton />}>
      <SelectToppingsMain {...props} />
    </React.Suspense>
  );
}
