import { ApolloServer } from "apollo-server";
import type { DocumentNode } from "graphql";

import * as relay from "./schemas/relay";
import * as money from "./schemas/money";
import * as topping from "./schemas/topping";
import * as pizza from "./schemas/pizza";
import * as basket from "./schemas/basket";
import * as size from "./schemas/size";
import * as pricePreview from "./schemas/pricePreview";

import * as query from "./query";
import * as mutation from "./mutation";

import type { Resolvers } from "./types/GeneratedGql";

const typeDefs: DocumentNode[] = [
  relay.schema,
  money.schema,
  pizza.schema,
  topping.schema,
  basket.schema,
  size.schema,
  pricePreview.schema,

  mutation.schema,
  query.schema,
];

const resolvers: Resolvers = {
  [relay.TYPE]: relay.resolver,
  [size.TYPE]: size.resolver,
  [pizza.TYPE]: pizza.resolver,
  [topping.TYPE]: topping.resolver,
  [basket.TYPE_BASKET]: basket.basketResolver,
  [basket.TYPE_BASKET_ITEM]: basket.basketItemResolver,
  [pricePreview.TYPE]: pricePreview.resolver,

  Mutation: mutation.resolvers,
  Query: query.resolver,
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  debug: true,
});

apolloServer
  .listen({
    port: 3001,
  })
  .then(({ url, port }) => {
    console.log(`🚀 Apollo server ready at ${url}`);
  });
