import React from "react";
import {
  AppBar as MuiAppBar,
  Slide,
  Box,
  Typography,
  IconButton,
  Container,
  Toolbar,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useUpdateEffect } from "react-use";

import StylelessLink from "../../../StylelessLink";
import { routes } from "../../../../consts/routes";
import { useBasket } from "../../../../contexts/BasketContext";
import { fromMoneyToText } from "../../../../utils/money";

export default function AppBar() {
  const scrollTrigger = useScrollTrigger();
  const { itemsSize, apiBasket } = useBasket();

  const [basketIconSize, setBasketIconSize] = React.useState(1);

  useUpdateEffect(() => {
    setBasketIconSize(1.5);
    const timeoutRef = setTimeout(() => {
      setBasketIconSize(1);
    }, 600);

    return () => {
      clearTimeout(timeoutRef);
    };
  }, [itemsSize]);

  const itemsEmpty = itemsSize === 0;

  const totalPrice = apiBasket?.totalPrice ?? {
    amount: 0,
    symbol: "$",
    currency: "USD ",
  };

  return (
    <>
      <Slide appear={false} direction="down" in={!scrollTrigger}>
        <MuiAppBar>
          <Container>
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1 }}>
                <StylelessLink to={routes.EXPLORE.url()}>
                  <Typography
                    component="span"
                    variant="h4"
                    sx={{
                      color: ({ palette }) => palette.text.primary,
                    }}
                  >
                    Back 🤌 Pizzeria
                  </Typography>
                </StylelessLink>
              </Box>
              <Typography component="span" variant="body2">
                {fromMoneyToText(totalPrice)}
              </Typography>
              <StylelessLink to={itemsEmpty ? "#" : routes.CHECKOUT.url()}>
                <IconButton
                  size="large"
                  edge="end"
                  disabled={itemsEmpty}
                  color="primary"
                >
                  <ShoppingBasketIcon
                    sx={{
                      zoom: `${basketIconSize}`,
                    }}
                  />
                </IconButton>
              </StylelessLink>
            </Toolbar>
          </Container>
        </MuiAppBar>
      </Slide>
      <Toolbar
        sx={{
          backgroundColor: ({ palette }) => palette.xBackground.secondary,
        }}
      >
        <div />
      </Toolbar>
    </>
  );
}
