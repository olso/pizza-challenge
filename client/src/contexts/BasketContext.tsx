import React from "react";
import { useUpdateEffect } from "react-use";
import { graphql, useMutation } from "react-relay";

import type {
  Pizza,
  Topping,
  Size,
  SubmitBasketInput,
} from "../types/GeneratedGql";
import type {
  BasketContextMakeMutation,
  BasketContextMakeMutation$data,
} from "../__generated__/BasketContextMakeMutation.graphql";

export type BasketItem = {
  localId: string;
  pizzaId: Pizza["id"];
  sizeId: Size["id"];
  toppingIds: Topping["id"][];
};

type Ctx = {
  apiBasket: BasketContextMakeMutation$data["basket"];
  items: BasketItem[];
  itemsSize: number;
  add(v: Omit<BasketItem, "localId">): void;
  remove(v: Pick<BasketItem, "localId">): void;
  submit(v: SubmitBasketInput): Promise<boolean>;
};

const missingCtx = () => {
  throw new Error("Missing ctx");
};

const ctx = React.createContext<Ctx>({
  apiBasket: null,
  items: [],
  itemsSize: 0,
  add: missingCtx,
  remove: missingCtx,
  submit: missingCtx,
});

type BasketContextProviderProps = React.PropsWithChildren<{}>;
export const BasketContextProvider = ({ children }: BasketContextProviderProps) => {
  const [items, setItems] = React.useState<Ctx["items"]>([]);
  const [apiBasket, setApiBasket] = React.useState<Ctx["apiBasket"]>(null);

  const add = React.useCallback<Ctx["add"]>(
    (newItem) => {
      setItems([...items, { localId: Date.now().toString(), ...newItem }]);
    },
    [items]
  );

  const remove = React.useCallback<Ctx["remove"]>(
    ({ localId }) => {
      setItems(items.filter((item) => item.localId !== localId));
    },
    [items]
  );

  const submit = React.useCallback<Ctx["submit"]>((v) => {
    console.log("send to api", v);
    setItems([]);
    setApiBasket(null);
    return Promise.resolve(true);
  }, []);

  const [commitMakeBasket] = useMutation<BasketContextMakeMutation>(graphql`
    mutation BasketContextMakeMutation($input: BasketInput!) {
      basket: makeBasket(input: $input) {
        id
        totalPrice {
          amount
          currency
          symbol
        }
        items {
          localId
          ...CheckoutItem_item
        }
      }
    }
  `);

  useUpdateEffect(() => {
    if (items.length) {
      commitMakeBasket({
        variables: {
          input: {
            items,
          },
        },
        onCompleted: (data) => {
          setApiBasket(data.basket);
        },
      });
    } else {
      setApiBasket(null);
    }
  }, [items]);

  const value: Ctx = {
    apiBasket,
    items,
    add,
    remove,
    submit,
    itemsSize: items.length,
  };

  return <ctx.Provider value={value}>{children}</ctx.Provider>;
};

export const useBasket = () => React.useContext(ctx);
