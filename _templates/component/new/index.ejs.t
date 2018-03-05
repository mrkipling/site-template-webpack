---
to: src/js/components/<%= name %>/index.js
---
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class <%= name %> extends React.Component {
  render() {
    return (
      <section styleName="module">
        <h2><%= name %></h2>
      </section>
    );
  }
}

export default CSSModules(<%= name %>, styles);
