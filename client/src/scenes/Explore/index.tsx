import React from "react";
import { useLazyLoadQuery, graphql } from "react-relay";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import SceneLayout from "../../components/SceneLayout";
import type { ExploreQuery } from "../../__generated__/ExploreQuery.graphql";
import {
  PizzaCardFragment,
  PizzCardSkeleton,
} from "../../components/PizzaCard";
import Jumbo from "./components/Jumbo";
import Modal from "../../components/Modal";
import AddToBasketForm from "../../components/AddToBasketForm";
import { noop } from "../../utils/fp";

const StyledPizzaCardFragment = styled(PizzaCardFragment)`
  ${({ theme }) => `
    &:hover {
      box-shadow: ${theme.shadows[10]};
      cursor: pointer;
      border: none;
    }
  `}
`;

function ExploreSkeleton() {
  return (
    <Grid
      container
      spacing={10}
      sx={{
        py: 5,
      }}
    >
      <Grid item xs={12}>
        <PizzCardSkeleton />
      </Grid>
      <Grid item xs={12}>
        <PizzCardSkeleton />
      </Grid>
      <Grid item xs={12}>
        <PizzCardSkeleton />
      </Grid>
      <Grid item xs={12}>
        <PizzCardSkeleton />
      </Grid>
    </Grid>
  );
}

function ExploreMain() {
  const [pizzaId, setPizzaId] = React.useState<string | null>(null);

  const { pizzas } = useLazyLoadQuery<ExploreQuery>(
    graphql`
      query ExploreQuery {
        pizzas {
          id
          ...PizzaCard_pizza
        }
      }
    `,
    {}
  );

  const selectedPizza = React.useMemo(() => {
    return pizzas.find((v) => v.id === pizzaId) || null;
  }, [pizzaId, pizzas]);

  const handleModalClose = React.useCallback(() => {
    setPizzaId(null);
  }, []);

  return (
    <>
      <Modal open={Boolean(selectedPizza)} onClose={handleModalClose}>
        {selectedPizza ? (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <PizzaCardFragment dataFragment={selectedPizza} onClick={noop} />
            </Grid>
            <Grid item xs={12}>
              <AddToBasketForm
                pizzaId={selectedPizza.id}
                onSubmit={handleModalClose}
              />
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </Modal>
      <Grid
        container
        spacing={10}
        sx={{
          py: 5,
        }}
      >
        {pizzas.map((pizza) => (
          <Grid item key={pizza.id} xs={12} sm={6}>
            <StyledPizzaCardFragment
              sx={{ px: 2 }}
              dataFragment={pizza}
              onClick={setPizzaId}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default function Explore() {
  return (
    <SceneLayout banner={<Jumbo />}>
      <React.Suspense fallback={<ExploreSkeleton />}>
        <ExploreMain />
      </React.Suspense>
    </SceneLayout>
  );
}
