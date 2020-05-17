import React, { useState } from "react";
import ClassCounter from "../Components/ClassCounter";
import HookCounter from "../Components/HookCounter";
import Container from "../Components/Container";
import Button from "../Components/Button";

const Intro = (props) => {
  const [toggleClass, setToggleClass] = useState(false);
  const [toggleHook, setToggleHook] = useState(false);

  function handleClassToggle() {
    setToggleClass(!toggleClass);
  }

  function handleHookToggle() {
    setToggleHook(!toggleHook);
  }

  return (
    <Container>
      <h1 className="title">Intro Page</h1>
      <div className="text-align-center"></div>
      <Button type="danger" onClick={handleClassToggle}>
        Display class
      </Button>
      <Button type="success" onClick={handleHookToggle}>Display hook</Button>
      <div className="counters">
        {toggleClass && <ClassCounter />}
        {toggleHook && <HookCounter />}
      </div>
    </Container>
  );
};

export default Intro;
