import { Button, Grid, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useBasket } from "../../contexts/BasketContext";
import type { Pizza, Topping, Size } from "../../types/GeneratedGql";
import SelectSize from "../SelectSize";
import SelectToppings from "../SelectToppings";
import { routes } from "../../consts/routes";
import PricePreview from "../PricePreview";
import testIds from "../../consts/testIds";
import Translate from "../Translate";

type Props = {
  pizzaId: Pizza["id"];
  onSubmit(): void;
};

export default function AddToBasketForm({ pizzaId, onSubmit }: Props) {
  const { add } = useBasket();
  const navigate = useNavigate();

  const [toppingIds, setToppingIds] = React.useState<Topping["id"][]>([]);
  const [sizeId, setSizeId] = React.useState<Size["id"]>("");

  const canSubmit = Boolean(sizeId);

  const handleAdd = React.useCallback(() => {
    add({
      pizzaId,
      sizeId,
      toppingIds,
    });
    onSubmit();
  }, [add, pizzaId, onSubmit, sizeId, toppingIds]);

  const handleCheckout = React.useCallback(() => {
    handleAdd();
    setTimeout(() => {
      navigate(routes.CHECKOUT.url());
    });
  }, [handleAdd, navigate]);

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <SelectSize value={sizeId} onChange={setSizeId} />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectToppings value={toppingIds} onChange={setToppingIds} />
        </Grid>
        <Grid item xs={12}>
          <PricePreview sizeId={sizeId} toppingIds={toppingIds} />
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2} direction="row">
            <Button
              disabled={!canSubmit}
              variant="outlined"
              color="secondary"
              onClick={handleAdd}
            >
              <Translate t="Add" />
            </Button>
            <Button
              data-testid={testIds.addAndCheckout}
              disabled={!canSubmit}
              variant="outlined"
              color="primary"
              onClick={handleCheckout}
            >
              <Translate t="Add + Checkout" />
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
}
