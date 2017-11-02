import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './ModuleOne.scss';

/*
N.B. Use styleName instead of className in order to use CSS Modules. You can use
className if you like but that will be a global class. The class that is
generated from styleName will be appended.
*/

class ModuleOne extends React.Component {
  render() {
    return (
      <section styleName="module">
        <h2 styleName="title">Module One</h2>
      </section>
    );
  }
}

export default CSSModules(ModuleOne, styles);
