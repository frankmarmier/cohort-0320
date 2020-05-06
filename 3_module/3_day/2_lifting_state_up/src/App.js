import React from "react";
import Teams from "./components/Teams";
import allMembers from "./data.json";
import "./App.css";

class App extends React.Component {
  state = {
    allMembers: [""],
  };

  addMember = (member) => {
    console.log("I am called from grand child");
  };

  render() {
    return (
      <div className="App">
        <Teams addMember={this.addMember} members={allMembers} />
      </div>
    );
  }
}

export default App;
