import React from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import SceneLayout from "../../components/SceneLayout";
import { useBasket } from "../../contexts/BasketContext";
import { CheckoutItemFragment } from "../../components/CheckoutItem";
import CheckoutForm from "../../components/CheckoutForm";
import { routes } from "../../consts/routes";

export default function CheckoutMain() {
  const { apiBasket, itemsSize, remove, submit } = useBasket();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (itemsSize === 0) {
      navigate(routes.EXPLORE.url());
    }
  }, [itemsSize, navigate]);

  const handleRemove = React.useCallback(
    (v: { localId: string }) => {
      remove(v);
    },
    [remove]
  );

  return (
    <SceneLayout>
      <Grid
        container
        spacing={4}
        sx={{
          py: 5,
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            overflowY: "auto",
          }}
        >
          {apiBasket?.items.map((item) => (
            <Grid item key={item.localId} xs={12}>
              <CheckoutItemFragment
                dataFragment={item}
                onRemove={handleRemove}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          {apiBasket?.totalPrice && (
            <CheckoutForm
              totalPrice={apiBasket.totalPrice}
              onSubmit={(v) => {
                submit({
                  basketId: apiBasket.id,
                  personal: {
                    name: v.name,
                    address: v.address,
                    phone: v.phone,
                  },
                  card: {
                    number: v.cardNumber,
                    expiration: v.cardExpiration,
                    cvv: v.cardCvv
                  }
                })
              }}
            />
          )}
        </Grid>
      </Grid>
    </SceneLayout>
  );
}
