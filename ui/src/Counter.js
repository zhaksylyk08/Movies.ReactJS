import React, { Component, createElement } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0,
    };
  }

  increment = () => {
    this.setState({ inputValue: this.state.inputValue + 1 });
  };

  decrement = () => {
    this.setState({ inputValue: this.state.inputValue - 1 });
  };

  render() {
    return createElement(
      "div",
      {},
      createElement("button", { onClick: this.decrement }, "-"),
      createElement("input", { type: "number", value: this.state.inputValue }),
      createElement("button", { onClick: this.increment }, "+")
    );
  }
}

export default Counter;
