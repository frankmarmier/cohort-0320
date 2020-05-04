import React, { Component } from "react";
import Greetings from "./Greetings";
import Toto from "./Toto";
import "./App.css";

class App extends Component {
  render() {
    const people = [
      { name: "Bob", age: 24 },
      { name: "Toto", age: 10 },
      { name: "Jenny", age: 29 },
    ];

    return (
      <div className="your-class">
        <Toto name="Johnny">
          Heeey
        </Toto>
        {/* {people.map((person) => (
          <Greetings name={person.name} />
        ))} */}
        {/* <Greetings  />
        <Greetings name="yo" /> */}
        {/* <Greetings />
        <Greetings name="Jehniffer" age={29} /> */}

        {/* <Greetings>
          <p>Ola Diego</p>
        </Greetings>

        <Greetings>
          <p>Ola Santiago </p>
          <p>My name is Jeff</p>
          <p>Jeff likes turtles</p>
        </Greetings> */}
      </div>
    );
  }
}

export default App;
