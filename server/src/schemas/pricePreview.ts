import gql from "graphql-tag";

import type { PricePreviewResolvers } from "../types/GeneratedGql";

export const TYPE = "PricePreview";

export const schema = gql`
  input PricePreviewInput {
    sizeId: ID!
    toppingIds: [ID!]!
  }

  type PricePreview {
    sizePrice: Money!
    toppingsPrice: Money!
    totalPrice: Money!
  }
`;

export const resolver: PricePreviewResolvers = {};
