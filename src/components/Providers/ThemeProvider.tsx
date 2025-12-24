import { createTheme, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";
import { type FunctionComponent, type ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      lineHeight: "1.5rem",
    },
  },
});

type AppThemeProviderProps = {
  children: ReactNode;
};

export const AppThemeProvider: FunctionComponent<AppThemeProviderProps> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
