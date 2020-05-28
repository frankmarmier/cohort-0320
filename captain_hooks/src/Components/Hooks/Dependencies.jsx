import React, { useState, useEffect } from "react";
import Container from "Components/Container";
import Button from "Components/Button";

const Dependencies = (props) => {
  const [value, setValue] = useState(0);
  const [timer, setTimer] = useState(0);

  const increment = (event) => {
    setValue((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("In useEffect !");
    // Called first time after first render, then every time component re-renders
    // no matter if props or state changed.
  }); // No dependency, called every render after first render

  useEffect(() => {
    // "componentDidMount" and "componentWillUnMount"
    console.log(
      "I am called once and then never again because my dependencies array is empty !"
    );

    return () => {
      // componentWillUnMount
      console.log(
        "I am registered once on mount, and whenever the component unmounts, i will be called"
      );
    };
  }, []); // componentDidMount

  useEffect(() => {
    console.log("I am called first then when only props change", props);
  }, [props]);

  useEffect(() => {
    setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
  }, []);

  return (
    <Container>
      <h1>Dependencies</h1>
      <Button handleClick={increment} type="primary">
        {value}
      </Button>
      <h1>Timer value: {timer}</h1>
    </Container>
  );
};

export default Dependencies;
