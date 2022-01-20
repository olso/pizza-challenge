/**
 * @generated SignedSource<<1da2f783fc03f46bf9b644967181cc90>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PizzaCard_pizza$data = {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly description: string;
  readonly " $fragmentType": "PizzaCard_pizza";
};
export type PizzaCard_pizza = PizzaCard_pizza$data;
export type PizzaCard_pizza$key = {
  readonly " $data"?: PizzaCard_pizza$data;
  readonly " $fragmentSpreads": FragmentRefs<"PizzaCard_pizza">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PizzaCard_pizza",
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
  "type": "Pizza",
  "abstractKey": null
};

(node as any).hash = "d8df9e9f463cb1357180d52cdbed9282";

export default node;
