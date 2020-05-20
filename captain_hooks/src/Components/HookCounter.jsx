import React, { useState } from "react";
import Button from "Components/Button";
import Card, { Title } from "Components/Card";

const HookCounter = (props) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = (event) => {
    setCounter(counter + 1);
  };

  const handleDecrement = (event) => {
    setCounter(counter - 1);
  };

  /* Hooks also have another syntax to update the value. A function.
    You receive as paremeter the previous value, the value returned from that
    function will be the new value
  */

  // function handleIncrement (event) => {
  //   setCounter((oldValue) => oldValue + 1);
  // };

  // const handleDecrement = (event) => {
  //   setCounter((oldValue) => oldValue - 1);
  // };

  return (
    <Card className="text-align-center m-2" theme="dark">
      <Title className="h3">Hook Counter</Title>

      <hr />

      <div>
        <Button type="danger" className="m-2" handleClick={handleDecrement}>
          Decrement
        </Button>

        <Button type="primary" className="m-2" handleClick={handleIncrement}>
          Increment
        </Button>
      </div>

      <h3>Counter value:</h3>

      <p className="hero">{counter}</p>
    </Card>
  );
};

export default HookCounter;
