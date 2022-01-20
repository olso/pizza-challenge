/**
 * @generated SignedSource<<27986dcb1a0e355d8c389ed187f4c494>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CheckoutItem_item$data = {
  readonly localId: string;
  readonly pricePreview: {
    readonly sizePrice: {
      readonly amount: number;
      readonly currency: string;
      readonly symbol: string;
    };
    readonly toppingsPrice: {
      readonly amount: number;
      readonly currency: string;
      readonly symbol: string;
    };
    readonly totalPrice: {
      readonly amount: number;
      readonly currency: string;
      readonly symbol: string;
    };
  };
  readonly size: {
    readonly id: string;
    readonly name: string;
  };
  readonly pizza: {
    readonly id: string;
    readonly name: string;
  };
  readonly toppings: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  }>;
  readonly " $fragmentType": "CheckoutItem_item";
};
export type CheckoutItem_item = CheckoutItem_item$data;
export type CheckoutItem_item$key = {
  readonly " $data"?: CheckoutItem_item$data;
  readonly " $fragmentSpreads": FragmentRefs<"CheckoutItem_item">;
};

const node: ReaderFragment = (function(){
var v0 = [
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
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CheckoutItem_item",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "localId",
      "storageKey": null
    },
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
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Money",
          "kind": "LinkedField",
          "name": "toppingsPrice",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Money",
          "kind": "LinkedField",
          "name": "totalPrice",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
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
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Pizza",
      "kind": "LinkedField",
      "name": "pizza",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Topping",
      "kind": "LinkedField",
      "name": "toppings",
      "plural": true,
      "selections": (v1/*: any*/),
      "storageKey": null
    }
  ],
  "type": "BasketItem",
  "abstractKey": null
};
})();

(node as any).hash = "9a5a1caa71326e23ec3b29070144129a";

export default node;
