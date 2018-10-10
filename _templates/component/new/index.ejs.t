---
to: src/js/components/<%= name %>/index.js
---
import React from "react";
import { <%= name %>Styled } from "./styles";

class <%= name %> extends React.Component {
  render() {
    return (
      <<%= name %>Styled>
        <h2><%= name %></h2>
      </<%= name %>Styled>
    );
  }
}

export default <%= name %>;
