/// <reference types="react-scripts" />

// declare module "babel-plugin-relay/macro" {
//   export { graphql } from "react-relay";
// }

import type {
  PaletteOptions as MuiPaletteOptions,
  Palette as MuiPalette,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  export interface Palette extends MuiPalette {
    xBackground: {
      primary: string;
      secondary: string;
    };
  }
  export interface PaletteOptions extends MuiPaletteOptions {
    xBackground: {
      primary: string;
      secondary: string;
    };
  }
}
