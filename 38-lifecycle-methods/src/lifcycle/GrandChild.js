import React, { Component } from "react";

class GrandChild extends Component {
  constructor() {
    super();
    console.log("%c GrandChild Constructor", "color: green");
  }

  componentDidMount() {
    console.log("%c GrandChild Did Mount", "color: green");
  }

  render() {
    console.log("%c GrandChild Render", "color: green");

    return <div className="box">GrandChild</div>;
  }
}

export default GrandChild;
