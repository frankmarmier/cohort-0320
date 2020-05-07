import React, { Component } from "react";
import ComponentD from "./ComponentD";

export class ComponentA extends Component {
  render() {
    return (
      <div>
        <h2>In component A</h2>
        <ComponentD people={this.props.people} />
        {/* {this.props.people.map((person) => (
          <h3>{person.name}</h3>
        ))} */}
      </div>
    );
  }
}

export default ComponentA;
