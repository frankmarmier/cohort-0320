import React, { useState, useEffect } from "react";
import Button from "Components/Button";

const HookCounter = (props) => {
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  const handleIncrement = (e) => setCounter(counter + 1);
  const handleDecrement = (e) => setCounter(counter - 1);

  return (
    <aside className="card">
      <h1 className="card__title">Time {time}</h1>
      <hr />
      <div className="card__controls">
        <Button
          handleClick={handleIncrement}
          sign="plus"
          isSuccess
          isFontAwesome
        />
        <Button handleClick={handleDecrement} sign="minus" isFontAwesome />
      </div>
      <h3 className="card__description">Counter value:</h3>
      <p className="card__macro">
        <b>{counter}</b>
      </p>
    </aside>
  );
};

export default HookCounter;
