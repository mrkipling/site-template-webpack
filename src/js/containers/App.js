import React from 'react';

import ModuleOne from '../components/ModuleOne';
import ModuleTwo from '../components/ModuleTwo';

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
