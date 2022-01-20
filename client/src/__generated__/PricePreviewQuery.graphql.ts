/**
 * @generated SignedSource<<fc43a1d9065cc4bc38b1de7f73cb9411>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PricePreviewInput = {
  sizeId: string;
  toppingIds: ReadonlyArray<string>;
};
export type PricePreviewQuery$variables = {
  input: PricePreviewInput;
  canQuery: boolean;
};
export type PricePreviewQueryVariables = PricePreviewQuery$variables;
export type PricePreviewQuery$data = {
  readonly pricePreview?: {
    readonly totalPrice: {
      readonly amount: number;
      readonly currency: string;
      readonly symbol: string;
    };
    readonly toppingsPrice: {
      readonly amount: number;
      readonly currency: string;
      readonly symbol: string;
    };
    readonly sizePrice: {
      readonly amount: number;
      readonly currency: string;
      readonly symbol: string;
    };
  } | null;
};
export type PricePreviewQueryResponse = PricePreviewQuery$data;
export type PricePreviewQuery = {
  variables: PricePreviewQueryVariables;
  response: PricePreviewQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "canQuery"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
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
v3 = [
  {
    "condition": "canQuery",
    "kind": "Condition",
    "passingValue": true,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input"
          }
        ],
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
            "name": "totalPrice",
            "plural": false,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Money",
            "kind": "LinkedField",
            "name": "toppingsPrice",
            "plural": false,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Money",
            "kind": "LinkedField",
            "name": "sizePrice",
            "plural": false,
            "selections": (v2/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PricePreviewQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PricePreviewQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "b4284e3b1c37ecf3931a2a78c03cccab",
    "id": null,
    "metadata": {},
    "name": "PricePreviewQuery",
    "operationKind": "query",
    "text": "query PricePreviewQuery(\n  $input: PricePreviewInput!\n  $canQuery: Boolean!\n) {\n  pricePreview(input: $input) @include(if: $canQuery) {\n    totalPrice {\n      amount\n      currency\n      symbol\n    }\n    toppingsPrice {\n      amount\n      currency\n      symbol\n    }\n    sizePrice {\n      amount\n      currency\n      symbol\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d3536fe4e50299a271e7876daea3827c";

export default node;
