import {
  Environment,
  Network,
  Store,
  RecordSource,
  FetchFunction,
} from "relay-runtime";

export const relayFetch: FetchFunction = async (params, variables) => {
  const res = await fetch("http://localhost:3001/graphql", {
    method: "post",
    headers: {
      "content-type": "application/json",
      cache: "no-cache",
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  return res.json();
};

export const relayEnvironment = new Environment({
  network: Network.create(relayFetch),
  store: new Store(new RecordSource(), {
    gcReleaseBufferSize: 100,
    // queryCacheExpirationTime: 15 * 60 * 1000,
  }),
});
