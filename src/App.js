import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import colors from "./styles/themes/variables";

import Home from "./pages/Home.jsx";
import Promotion from "./pages/Promotion";
import About from "./pages/About";
import Details2 from "./pages/Details";
import Register from "./pages/Register";

function App() {
  return (
    <ThemeProvider theme={colors}>
      <Home />
      <Promotion />
      <About />
      <Details2 />
      <Register />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
