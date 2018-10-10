import React from "react";
import { ModuleOneStyled } from "./styles";

class ModuleOne extends React.Component {
  render() {
    return (
      <ModuleOneStyled>
        <h2 className="title">Module One</h2>
      </ModuleOneStyled>
    );
  }
}

export default ModuleOne;
