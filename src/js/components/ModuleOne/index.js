import React, { useState } from "react";
import { ModuleOneStyled } from "./styles";

function ModuleOne() {
  const [count, setCount] = useState(0);

  return (
    <ModuleOneStyled>
      <h2 className="title">Module One</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </ModuleOneStyled>
  );
}

export default ModuleOne;
