import React, { Component } from "react";

export default class SimpleCounterComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      toggle: true,
    };
  }

  render() {
    console.warn("This is a simple Component");
    return (
      <div>
        <h2>SIMPLE COMPONENT</h2>
        <h3>{this.state.count}</h3>
        <button
          style={{
            backgroundColor: `${this.state.toggle ? "violet" : "orange"}`,
            color: "white",
          }}
          onClick={() => {
            this.setState({ toggle: !this.state.toggle });
          }}
        >
          TOGGLE
        </button>

        <button
          onClick={() => {
            if (this.state.toggle) {
              this.setState({ count: this.state.count + 1 });
            } 
            else {
              this.setState({ count: this.state.count });
            }
          }}
        >
          COUNTER
        </button>
        
      </div>
    );
  }
}