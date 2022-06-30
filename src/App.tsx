import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";
import Layout from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Routing from "./components/Routing";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <CssBaseline enableColorScheme />
        <Layout>
          <Routing />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
