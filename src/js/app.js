import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { ThemeProvider } from "styled-components";

import App from "./containers/App";

import theme from "./theme";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    </AppContainer>,
    document.getElementById("app")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./containers/App", () => render(App));
}
