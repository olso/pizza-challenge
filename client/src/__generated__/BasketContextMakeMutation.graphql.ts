/**
 * @generated SignedSource<<7a8948804b915a80c0170f972835fb37>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BasketInput = {
  items: ReadonlyArray<BasketItemInput>;
};
export type BasketItemInput = {
  localId: string;
  pizzaId: string;
  sizeId: string;
  toppingIds: ReadonlyArray<string>;
};
export type BasketContextMakeMutation$variables = {
  input: BasketInput;
};
export type BasketContextMakeMutationVariables = BasketContextMakeMutation$variables;
export type BasketContextMakeMutation$data = {
  readonly basket: {
    readonly id: string;
    readonly totalPrice: {
      readonly amount: number;
      readonly currency: string;
      readonly symbol: string;
    };
    readonly items: ReadonlyArray<{
      readonly localId: string;
      readonly " $fragmentSpreads": FragmentRefs<"CheckoutItem_item">;
    }>;
  } | null;
};
export type BasketContextMakeMutationResponse = BasketContextMakeMutation$data;
export type BasketContextMakeMutation = {
  variables: BasketContextMakeMutationVariables;
  response: BasketContextMakeMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "amount",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "currency",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "symbol",
    "storageKey": null
  }
],
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "Money",
  "kind": "LinkedField",
  "name": "totalPrice",
  "plural": false,
  "selections": (v3/*: any*/),
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "localId",
  "storageKey": null
},
v6 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BasketContextMakeMutation",
    "selections": [
      {
        "alias": "basket",
        "args": (v1/*: any*/),
        "concreteType": "Basket",
        "kind": "LinkedField",
        "name": "makeBasket",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "BasketItem",
            "kind": "LinkedField",
            "name": "items",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CheckoutItem_item"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BasketContextMakeMutation",
    "selections": [
      {
        "alias": "basket",
        "args": (v1/*: any*/),
        "concreteType": "Basket",
        "kind": "LinkedField",
        "name": "makeBasket",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "BasketItem",
            "kind": "LinkedField",
            "name": "items",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "PricePreview",
                "kind": "LinkedField",
                "name": "pricePreview",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Money",
                    "kind": "LinkedField",
                    "name": "sizePrice",
                    "plural": false,
                    "selections": (v3/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Money",
                    "kind": "LinkedField",
                    "name": "toppingsPrice",
                    "plural": false,
                    "selections": (v3/*: any*/),
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Size",
                "kind": "LinkedField",
                "name": "size",
                "plural": false,
                "selections": (v6/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Pizza",
                "kind": "LinkedField",
                "name": "pizza",
                "plural": false,
                "selections": (v6/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Topping",
                "kind": "LinkedField",
                "name": "toppings",
                "plural": true,
                "selections": (v6/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "14c508c8896fa99c30824bb9a6b97bdb",
    "id": null,
    "metadata": {},
    "name": "BasketContextMakeMutation",
    "operationKind": "mutation",
    "text": "mutation BasketContextMakeMutation(\n  $input: BasketInput!\n) {\n  basket: makeBasket(input: $input) {\n    id\n    totalPrice {\n      amount\n      currency\n      symbol\n    }\n    items {\n      localId\n      ...CheckoutItem_item\n    }\n  }\n}\n\nfragment CheckoutItem_item on BasketItem {\n  localId\n  pricePreview {\n    sizePrice {\n      amount\n      currency\n      symbol\n    }\n    toppingsPrice {\n      amount\n      currency\n      symbol\n    }\n    totalPrice {\n      amount\n      currency\n      symbol\n    }\n  }\n  size {\n    id\n    name\n  }\n  pizza {\n    id\n    name\n  }\n  toppings {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "effbcad666515b15e1854e7b7fd0703a";

export default node;
