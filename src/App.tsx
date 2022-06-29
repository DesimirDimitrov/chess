import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";
import Layout from "./components/layout/Layout";
import Home from "./pages/home";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
