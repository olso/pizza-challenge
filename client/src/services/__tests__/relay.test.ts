import { relayFetch } from "../relay";

test("is gql server running", async () => {
  await expect(
    relayFetch(
      { id: "", text: "", name: "", operationKind: "", metadata: {} },
      {},
      {}
    )
  ).resolves.toHaveProperty("errors");
});
