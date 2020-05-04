import React from "react";
import Toto from "./Toto";

import "./greetings.css";

function Greetings(props) {
  console.log(props);
  return (
    <div className="box">
      Hello {props.name}
      {/* <Toto /> */}
    </div>
  );
}

export default Greetings;
