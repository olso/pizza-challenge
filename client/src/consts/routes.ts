export type TUrlParams = {};

export const routes = {
  EXPLORE: {
    path: "/",
    url: function () {
      return this.path;
    },
  },
  CHECKOUT: {
    path: "/checkout",
    url: function () {
      return this.path;
    },
  },
};

export type TRoutes = typeof routes;
export type TRoute = TRoutes[keyof TRoutes];
export type TRoutePath = TRoute["path"];
