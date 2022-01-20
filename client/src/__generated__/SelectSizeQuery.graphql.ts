/**
 * @generated SignedSource<<3c6397bea6e45e5c18c1bb6ab576d06d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SelectSizeQuery$variables = {};
export type SelectSizeQueryVariables = SelectSizeQuery$variables;
export type SelectSizeQuery$data = {
  readonly sizes: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly price: {
      readonly amount: number;
      readonly symbol: string;
      readonly currency: string;
    };
  }>;
};
export type SelectSizeQueryResponse = SelectSizeQuery$data;
export type SelectSizeQuery = {
  variables: SelectSizeQueryVariables;
  response: SelectSizeQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Size",
    "kind": "LinkedField",
    "name": "sizes",
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
    "name": "SelectSizeQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SelectSizeQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b3b46cb1917ad75d5a41de675818e99d",
    "id": null,
    "metadata": {},
    "name": "SelectSizeQuery",
    "operationKind": "query",
    "text": "query SelectSizeQuery {\n  sizes {\n    id\n    name\n    price {\n      amount\n      symbol\n      currency\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "626286f3b85d523dee410de3c6b8a8a0";

export default node;
