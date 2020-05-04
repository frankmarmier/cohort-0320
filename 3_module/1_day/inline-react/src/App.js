import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const styles = {
    height: "100px",
    backgroundColor: "dodgerblue",
    color: "white",
  };

  return (
    <div className="App">
      <h1>Inline styling</h1>
      <div style={styles}>Toto</div>
      <img src="/images/logo512.png" />
    </div>
  );
}

export default App;
