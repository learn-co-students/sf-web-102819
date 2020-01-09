import React, { Component } from "react";

class GrandChild extends Component {
  constructor() {
    super();
    console.log("%c GrandChild Constructor", "color: green");
    this.state = {
      buttonText: "Grandchild"
    };
  }

  componentDidMount() {
    console.log("%c GrandChild Did Mount", "color: green");
  }

  componentDidUpdate() {
    console.log("%c GrandChild Did Update", "color: green");
  };

  handleClick = () => {
    this.setState(previousState => {
      return {buttonText: previousState.buttonText + "!"}
    })
  };

  render() {
    console.log("%c GrandChild Render", "color: green");

    return (
      <div className="box">
        <button onClick={this.handleClick}>{this.state.buttonText}</button>
      </div>
    );
  }
}

export default GrandChild;
