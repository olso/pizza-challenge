import React from "react";

type Ctx = {
  t(v: string): string;
};

const missingCtx = () => {
  throw new Error("Missing ctx");
};

const ctx = React.createContext<Ctx>({
  t: missingCtx,
});

type IntlContextProviderProps = React.PropsWithChildren<unknown>;
export const IntlContextProvider = ({ children }: IntlContextProviderProps) => {
  const t = React.useCallback<Ctx["t"]>((v) => v, []);

  return <ctx.Provider value={{ t }}>{children}</ctx.Provider>;
};

export const useIntl = () => React.useContext(ctx);
