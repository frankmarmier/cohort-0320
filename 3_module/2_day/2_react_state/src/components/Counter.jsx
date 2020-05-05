import React, { Component } from "react";
import Text from "./Text";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       counterValue: 0,
  //     };
  //   }

  state = {
    counterValue: 0,
  };

  handleIncrement = (event) => {
    // console.log(this.state);
    // console.log(event.target);
    // this.state.counterValue += 1;

    const newValue = this.state.counterValue + 1;
    this.setState({ counterValue: newValue });
  };

  handleDecrement = (event) => {
    console.log(event.target);
    const newValue = this.state.counterValue - 1;
    this.setState({ counterValue: newValue });
  };

  sayHelloInConsole = (event) => {
    console.log(event.target);
  };

  render() {
    // console.log(this.state);
    // console.log("I am being rendered...");
    return (
      <div>
        <h3>Counter value :</h3>
        <Text text={this.state.counterValue} />
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
