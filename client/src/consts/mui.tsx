import { createTheme, responsiveFontSizes, ThemeOptions } from "@mui/material/styles";

const myPalette = {
  xBackground: {
    primary: "#fffbf6",
    secondary: "#faf3eb",
  },
};

const typographyHeading = {
  fontFamily: "Cardo",
};

let localMuiTheme = responsiveFontSizes(
  createTheme({
    palette: {
      ...myPalette,
      background: {
        default: myPalette.xBackground.primary,
      },
    },
    typography: {
      fontFamily: [
        "Helvetica",
        "Helvetica Neue",
        "Arial",
        "Lucida Grande",
        "sans-serif",
      ].join(","),
      h1: typographyHeading,
      h2: typographyHeading,
      h3: typographyHeading,
      h4: typographyHeading,
      h5: typographyHeading,
      h6: typographyHeading,
    },
  })
);

export const muiTheme = createTheme(localMuiTheme, {
  typography: {
    body2: {
      color: localMuiTheme.palette.text.secondary,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: localMuiTheme.palette.xBackground.secondary,
          boxShadow: "none",
        },
      },
    },
  },
} as ThemeOptions);
