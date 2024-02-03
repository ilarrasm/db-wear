import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    common: { black: "#363537", white: "#F5F5F5" },
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    grey: { ["500"]: "#243735F" },
  },
  typography: {
    h1: {
      fontSize: "1.7em",
      fontWeight: "black",
      textAlign: "center",
    },
    h2: {
      fontSize: "1.5em",
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: "normal",
      textAlign: "center",
    },
    h3: {
      fontSize: "1.125em",
      fontWeight: "bold",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          margin: "0",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
