// import React, { Component } from "react";

// class ComponentX extends Component {
//   render() {
//     console.log(this.props,"in component X");
//     return <div></div>;
//   }
// }

// export default ComponentX;

import React from "react";

function ComponentX(props) {
  return (
    <div>
      {props.people.map((person, index) => (
        <p key={index}>{person.name}</p>
      ))}
    </div>
  );
}

export default ComponentX;
