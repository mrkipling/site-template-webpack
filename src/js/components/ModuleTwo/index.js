import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles.scss";

import superCute from "./images/super-cute.jpg";

/*
Notice how the same class (well, styleName) is used as ModuleOne?
Thanks to react-css-modules we don't have to worry about CSS class name
collisions - class names are namespaced per-module.
*/

class ModuleTwo extends React.Component {
  render() {
    return (
      <section styleName="module">
        <h2 styleName="title">Module Two</h2>
        <img src={superCute} alt="This is super-cute" />
      </section>
    );
  }
}

export default CSSModules(ModuleTwo, styles);
