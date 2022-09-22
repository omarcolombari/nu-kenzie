import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./styles/theme";
import GlobalStyled from "./styles/global";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyled />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
