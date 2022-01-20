import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import MuiCssBaseline from "@mui/material/CssBaseline";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { relayEnvironment } from "./services/relay";
import { BasketContextProvider } from "./contexts/BasketContext";
import { IntlContextProvider } from "./contexts/IntlContext";
import { routes } from "./consts/routes";
import { muiTheme } from "./consts/mui";

import Explore from "./scenes/Explore";
import Checkout from "./scenes/Checkout";

const App = () => (
  <MuiThemeProvider theme={muiTheme}>
    <MuiCssBaseline>
      <RelayEnvironmentProvider environment={relayEnvironment}>
        <IntlContextProvider>
          <BasketContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path={routes.EXPLORE.path}>
                  <Route index element={<Explore />} />
                  <Route path={routes.CHECKOUT.path} element={<Checkout />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </BasketContextProvider>
        </IntlContextProvider>
      </RelayEnvironmentProvider>
    </MuiCssBaseline>
  </MuiThemeProvider>
);

export default App;
