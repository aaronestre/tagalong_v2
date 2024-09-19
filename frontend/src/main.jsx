import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({

});

createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme} defaultColorScheme="dark">
    <StrictMode>
      <App />
    </StrictMode>
  </MantineProvider>
);
