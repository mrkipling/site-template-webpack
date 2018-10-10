import React from "react";

import { ModuleTwoStyled } from "./styles";

import SuperCuteImage from "./images/super-cute.jpg";

class ModuleTwo extends React.Component {
  render() {
    return (
      <ModuleTwoStyled>
        <h2 className="title">Module Two</h2>
        <img src={SuperCuteImage} alt="This is super-cute" />
      </ModuleTwoStyled>
    );
  }
}

export default ModuleTwo;
