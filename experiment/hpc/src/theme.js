import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffa300",
      light: "#ffd449",
      dark: "#c67400",
      contrastText: "#000000"
    },
    secondary: {
      main: "#ff8500",
      light: "#ffb644",
      dark: "#c55600",
      contrastText: "#000000"
    },
    error: {
      main: "#A21C2B"
    }
  }
});

export default theme;
