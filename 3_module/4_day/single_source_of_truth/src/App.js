import React from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import data from "./data.json";
import "./App.css";

class App extends React.Component {
  state = {
    people: data,
  };

  handleDelete = (index) => {
    const copy = [...this.state.people];
    copy.splice(index, 1);
    this.setState({ people: copy });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>One single source of truth</h1>

          <hr style={{ width: "60%" }} />

          <ComponentA people={this.state.people} />

          <hr style={{ width: "60%" }} />

          <ComponentB people={this.state.people} clbk={this.handleDelete} />
        </header>
      </div>
    );
  }
}

export default App;
