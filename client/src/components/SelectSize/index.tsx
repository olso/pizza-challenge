import React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import {
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  ListItemText,
} from "@mui/material";

import type { SelectSizeQuery } from "../../__generated__/SelectSizeQuery.graphql";
import { fromMoneyToText } from "../../utils/money";
import type { Size } from "../../types/GeneratedGql";
import Translate from "../Translate";

type SizeId = Size["id"];

function SelectSizeSkeleton() {
  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="select-size-label">
        <Translate t="Size" />
      </InputLabel>
      <Select
        labelId="select-size-label"
        value=""
        input={<OutlinedInput label={<Translate t="Size" />} />}
      />
    </FormControl>
  );
}

type Props = {
  value: SizeId;
  onChange(v: SizeId): void;
};
function SelectSizeMain({ value, onChange }: Props) {
  const handleChange = React.useCallback(
    (event: SelectChangeEvent<SizeId>) => {
      const newValue = event.target.value;
      onChange(newValue);
    },
    [onChange]
  );

  const { sizes } = useLazyLoadQuery<SelectSizeQuery>(
    graphql`
      query SelectSizeQuery {
        sizes {
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

  React.useEffect(() => {
    if (sizes.length) {
      onChange(sizes[0].id);
    }
  }, [sizes, onChange]);

  const sizeIdToName = React.useCallback(
    (id: SizeId) => {
      const foundSize = sizes.find((size) => size.id === id);

      if (foundSize) {
        return `${foundSize.name} (${fromMoneyToText(foundSize.price)})`;
      }

      return "Not found";
    },
    [sizes]
  );

  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="select-size-label">
        <Translate t="Size" />
      </InputLabel>
      <Select
        labelId="select-size-label"
        required
        value={value}
        input={<OutlinedInput label={<Translate t="Size" />} />}
        onChange={handleChange}
        renderValue={(selected) => sizeIdToName(selected)}
      >
        {sizes.map(({ id, name, price }) => (
          <MenuItem key={id} value={id}>
            <ListItemText primary={`${name} (${fromMoneyToText(price)})`} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default function SelectSize(props: Props) {
  return (
    <React.Suspense fallback={<SelectSizeSkeleton />}>
      <SelectSizeMain {...props} />
    </React.Suspense>
  );
}
