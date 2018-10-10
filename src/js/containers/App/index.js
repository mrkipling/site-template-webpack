import React from "react";

import GlobalStyle from "./GlobalStyle";
import ModuleOne from "../../components/ModuleOne";
import ModuleTwo from "../../components/ModuleTwo";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>Hello World!</h1>
        <ModuleOne />
        <ModuleTwo />
      </div>
    );
  }
}
