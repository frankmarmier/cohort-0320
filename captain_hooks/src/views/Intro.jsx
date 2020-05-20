import React, { useState } from "react";
import ClassCounter from "Components/ClassCounter";
import HookCounter from "Components/HookCounter";
import Container from "Components/Container";
import Button from "Components/Button";

const Intro = (props) => {
  const [toggleClass, setToggleClass] = useState(true);
  const [toggleHook, setToggleHook] = useState(true);

  function handleClassToggle() {
    setToggleClass(!toggleClass);
  }

  function handleHookToggle() {
    setToggleHook(!toggleHook);
  }

  return (
    <Container className="text-align-center">
      <h1 className="title m-2">Intro Page</h1>
      <div className="m-2">
        <Button
          type={toggleClass ? "danger" : "success"}
          className="m-2"
          handleClick={handleClassToggle}
        >
          Display class
        </Button>
        <Button
          type={toggleHook ? "danger" : "success"}
          className="m-2"
          handleClick={handleHookToggle}
        >
          Display hook
        </Button>
      </div>

      <div className="d-flex">
        {toggleClass && <ClassCounter />}
        {toggleHook && <HookCounter />}
      </div>
    </Container>
  );
};

export default Intro;
