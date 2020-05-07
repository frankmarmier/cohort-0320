import React from "react";
import MyCustomButton from "./MyCustomButton";
function ComponentB(props) {
  return (
    <div>
      <h2>In component B</h2>
      {props.people.map((person, index) => (
        <p key={index}>
          {person.name}{" "}
          <MyCustomButton index={index} handleClick={props.clbk} />
        </p>
      ))}
    </div>
  );
}

export default ComponentB;
