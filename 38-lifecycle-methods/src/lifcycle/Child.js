import React, { Component } from "react";
import GrandChild from "./GrandChild";

class Child extends Component {
  constructor() {
    super();
    console.log("%c Child Constructor", "color: red");
    this.state = {
      buttonText: "Child"
    };
  }

  componentDidMount() {
    console.log("%c Child Did Mount", "color: red");
  }

  componentDidUpdate() {
    console.log("%c Child Did Update", "color: red");
  };

  handleClick = () => {
    this.setState(previousState => {
      return {buttonText: previousState.buttonText + "?"}
    })
  };

  render() {
    console.log("%c Child Render", "color: red");

    return (
      <div className="box">
        <button onClick={this.handleClick}>{this.state.buttonText}</button>
        <GrandChild />
      </div>
    );
  }
}

export default Child;
