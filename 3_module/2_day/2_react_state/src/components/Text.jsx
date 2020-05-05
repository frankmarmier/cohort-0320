import React from "react";

const Text = (props) => {
  console.log("I am the child and being rendered");
  return <p>{props.text}</p>;
};

export default Text;
