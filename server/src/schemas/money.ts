import gql from "graphql-tag";

export const TYPE = "Price";

export const schema = gql`
  type Money {
    """
    https://stripe.com/docs/currencies#zero-decimal
    e.g. 10 EUR is 1000 (cents)
    """
    amount: Int!
    currency: String!
    symbol: String!
  }
`;
