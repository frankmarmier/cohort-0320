import React, { useState } from "react";
import Container from "Components/Container";
import Button from "Components/Button";

const Dependencies = (props) => {
  const [value, setValue] = useState(0);

  const increment = (event) => {
    setValue((prev) => prev + 1);
  };

  return (
    <Container>
      <h1>Dependencies</h1>
      <Button handleClick={increment} type="primary">
        {value}
      </Button>
      <h1>Interval value: {value}</h1>
    </Container>
  );
};

export default Dependencies;
