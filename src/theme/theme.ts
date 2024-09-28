import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      mobile: 320,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

if (theme.components) {
  theme.components.MuiButton = {
    styleOverrides: {
      root: {
        color: "white",
        // [theme.breakpoints.up("xs")]: {
        //   background: "#ff0400",
        //   "&:hover": {
        //     color: "#ff0400",
        //   },
        // },
        // [theme.breakpoints.up("mobile")]: {
        //   background: "#ffc300",
        //   "&:hover": {
        //     color: "#ffc300",
        //   },
        // },
        // [theme.breakpoints.up("tablet")]: {
        //   background: "#ff0400",
        //   "&:hover": {
        //     color: "#ff0400",
        //   },
        // },
        // [theme.breakpoints.up("desktop")]: {
        //   background: "#000000",
        //   "&:hover": {
        //     color: "#0000000",
        //   },
        // },
      },
    },
  };
}

export { theme };
