import React, { Component } from "react";

class Toto extends Component {
  render() {
    console.log(this.props, "props in");
    return <p>I am toto component</p>;
  }
}

export default Toto;
