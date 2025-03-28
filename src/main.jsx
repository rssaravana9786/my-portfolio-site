import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "./theme";
import Portfolio from "./Portfolio";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Portfolio />
    </ThemeProvider>
  </React.StrictMode>
);
