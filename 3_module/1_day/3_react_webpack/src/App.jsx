import React, { Component } from "react";
import isGreen from "./isGreen";
import "./App.css";

class App extends Component {
  render() {
    const name = "Toto";

    function foo(name) {
      return "Hello my name is " + name;
    }

    const myElement = <h1>Element</h1>;

    function myFunction(name) {
      return <h1>{name}</h1>;
    }

    // let students = [];
    // for (let i = 0; i < 10; i++) {
    //   students.push(
    //     <div>
    //       <p>Student {i}</p>
    //       <p>this is a student</p>
    //     </div>
    //   );
    // }

    const students = ["FOo", "Bar", "Baz"];

    return (
      <div className="your-class">
        <h1> Hello Ironhackers! {name} </h1>
        <h1> Math {1 + 2} </h1>
        <h1> {foo("John")}</h1>
        <h1> {true ? "I m true" : "I am false"} </h1>
        {myElement}
        {students}
        {/* {students.map((student) => {
          return <div>{student}</div>;
        })} */}

        {students.map((student) => myFunction(student))}
        {/* <input type="text" />
        <img src="" alt="" /> */}

        {isGreen("red") ? "This is green" : "This is not green"}
      </div>
    );
  }
}

export default App;
