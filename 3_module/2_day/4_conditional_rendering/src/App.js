import React from "react";
import GuardOperator from "./components/GuardOperator";
import TernaryOperator from "./components/TernaryOperator";
import "./App.css";

class App extends React.Component {
  state = {
    isActive: false,
    students: [],
  };

  handleClick = (event) => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* These are not rendered in the template */}
          {false}
          {undefined}
          {/* These are */}
          {NaN}
          {"   "}
          {0}
          <GuardOperator value={9} />
          <TernaryOperator text={"I hate ternary operators in JSX"} />
          {!this.state.students.length && <div>There are no students</div>}
          {this.state.students.length &&
            this.state.students.map((student, index) => (
              <p key={index}>{student}</p>
            ))}

          {/* {this.state.isActive ? (
            <button onClick={this.handleClick}>Hide button</button>
          ) : (
            <button onClick={this.handleClick}>Show hide button</button>
          )} */}

          {this.state.isActive && (
            <button onClick={this.handleClick}>Hide button</button>
          )}

          {!this.state.isActive && (
            <button onClick={this.handleClick}>Show hide button</button>
          )}
        </header>
      </div>
    );
  }
}

export default App;
