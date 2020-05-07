import React from "react";
import ComponentX from "./ComponentX";

function ComponentD(props) {
  return (
    <div>
      <ComponentX people={props.people} />
    </div>
  );
}

export default ComponentD;
