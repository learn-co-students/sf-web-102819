import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor() {
    super();
    console.log("%c Parent Constructor", "color: blue");
    this.state = {
      buttonText: "Parent"
    };
  }

  componentDidMount() {
    console.log("%c Parent Did Mount", "color: blue");
  }

  componentDidUpdate() {
    console.log("%c Parent Did Update", "color: blue");
  };

  handleClick = () => {
    this.setState(previousState => {
      return {buttonText: previousState.buttonText + "."}
    });
  };

  render() {
    console.log("%c Parent Render", "color: blue");

    return (
      <div className="box">
        <button onClick={this.handleClick}>{this.state.buttonText}</ button>
        <Child />
      </div>
    );
  }
}

export default Parent;

// Parent Constructor
// Parent Render
// Child Constructor
// Child Render
// GrandChild Constructor
// GrandChild Render