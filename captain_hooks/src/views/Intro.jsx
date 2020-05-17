import React, { useState } from "react";
import ClassCounter from "../Components/ClassCounter";
import HookCounter from "../Components/HookCounter";
// import Button from "../Components/Button";

const Intro = props => {
  const [toggleClass, setToggleClass] = useState(false);
  const [toggleHook, setToggleHook] = useState(false);

  function handleClassToggle() {
    setToggleClass(!toggleClass);
  }

  function handleHookToggle() {
    setToggleHook(!toggleHook);
  }

  return (
    <section className="container">
      <h1 className="title">Intro Page</h1>
      <div className="text-align-center"></div>
      <button onClick={handleClassToggle}>Display class</button>
      <button onClick={handleHookToggle}>Display hook</button>
      <div className="counters">
        {toggleClass && <ClassCounter />}
        {toggleHook && <HookCounter />}
      </div>
    </section>
  );
};

export default Intro;
