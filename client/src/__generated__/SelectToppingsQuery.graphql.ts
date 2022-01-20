/**
 * @generated SignedSource<<37c9f5fce50730d8c30f473517100dfd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SelectToppingsQuery$variables = {};
export type SelectToppingsQueryVariables = SelectToppingsQuery$variables;
export type SelectToppingsQuery$data = {
  readonly toppings: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly price: {
      readonly amount: number;
      readonly symbol: string;
      readonly currency: string;
    };
  }>;
};
export type SelectToppingsQueryResponse = SelectToppingsQuery$data;
export type SelectToppingsQuery = {
  variables: SelectToppingsQueryVariables;
  response: SelectToppingsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Topping",
    "kind": "LinkedField",
    "name": "toppings",
    "plural": true,
    "selections": [
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Money",
        "kind": "LinkedField",
        "name": "price",
        "plural": false,
        "selections": [
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
            "name": "symbol",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "currency",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SelectToppingsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SelectToppingsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "01ea668e756985ed1421192449ef86e5",
    "id": null,
    "metadata": {},
    "name": "SelectToppingsQuery",
    "operationKind": "query",
    "text": "query SelectToppingsQuery {\n  toppings {\n    id\n    name\n    price {\n      amount\n      symbol\n      currency\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "318f3908ec3ad0ed7c99eeed5d7de7a4";

export default node;
