import React from "react";

function MyCustomButton(props) {
  return <button onClick={() => props.handleClick(props.index)}>Delete</button>;
}

export default MyCustomButton;
