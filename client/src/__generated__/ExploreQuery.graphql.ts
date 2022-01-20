/**
 * @generated SignedSource<<36289ff9b1ea146d9e7bc1837e191bfd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExploreQuery$variables = {};
export type ExploreQueryVariables = ExploreQuery$variables;
export type ExploreQuery$data = {
  readonly pizzas: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"PizzaCard_pizza">;
  }>;
};
export type ExploreQueryResponse = ExploreQuery$data;
export type ExploreQuery = {
  variables: ExploreQueryVariables;
  response: ExploreQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ExploreQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Pizza",
        "kind": "LinkedField",
        "name": "pizzas",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PizzaCard_pizza"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ExploreQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Pizza",
        "kind": "LinkedField",
        "name": "pizzas",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "db39227ac79287cdadd8431a160e3444",
    "id": null,
    "metadata": {},
    "name": "ExploreQuery",
    "operationKind": "query",
    "text": "query ExploreQuery {\n  pizzas {\n    id\n    ...PizzaCard_pizza\n  }\n}\n\nfragment PizzaCard_pizza on Pizza {\n  id\n  name\n  slug\n  description\n}\n"
  }
};
})();

(node as any).hash = "2707a9b4096b65f5480cddfdca7ae244";

export default node;
