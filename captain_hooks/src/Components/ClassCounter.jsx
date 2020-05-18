import React, { Component } from "react";
import Button from "Components/Button";

class ClassCounter extends Component {
  state = {
    counter: 0,
  };

  handleIncrement = (e) => this.setState({ counter: this.state.counter + 1 });
  handleDecrement = (e) => this.setState({ counter: this.state.counter - 1 });

  render() {
    return (
      <aside className="card--dark">
        <h1 className="card__title">Class Counter</h1>
        <hr />
        <div className="card__controls">
          <Button
            handleClick={this.handleIncrement}
            sign="plus"
            isSuccess
            isFontAwesome
          />
          <Button
            handleClick={this.handleDecrement}
            sign="minus"
            isFontAwesome
          />
        </div>
        <h3 className="card__description">Counter value:</h3>
        <p className="card__macro">
          <b>{this.state.counter}</b>
        </p>
      </aside>
    );
  }
}

export default ClassCounter;
