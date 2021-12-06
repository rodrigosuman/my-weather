import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { TThemeProvider } from "../types/themeProvider";

const ThemeProvider: React.FC = (props) => {
  const theme = React.useMemo<TThemeProvider>(() => {
    const hours = new Date().getHours();

    // troca o background conforme a hora do dia
    const bg =
      hours > 6 && hours < 18
        ? "linear-gradient(89.82deg, #85c3f0 0.17%, #0850bd 99.86%);"
        : "linear-gradient(89.82deg, #446481 0.17%, #091F34 99.86%);";

    return {
      bg,
      bgError: "linear-gradient(89.82deg, #21013e 0.17%, #370861  99.86%)",
      textDark: "#615F5F",
      textLight: "#A7A7A7",
      textWhite: "#FFFFFF",
    };
  }, []);
  return (
    <StyledThemeProvider theme={theme}>{props.children}</StyledThemeProvider>
  );
};

export default ThemeProvider;
