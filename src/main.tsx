import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App.tsx";
import "./index.css";
import theme from "./theme";
import Fonts from "./Fonts.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
