import React from 'react';

import ModuleOne from '../components/ModuleOne/ModuleOne';
import ModuleTwo from '../components/ModuleTwo/ModuleTwo';

import '../../sass/site.scss';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <h1>Hello World!</h1>
        <ModuleOne />
        <ModuleTwo />
      </section>
    );
  }
}
