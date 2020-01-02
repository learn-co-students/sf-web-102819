import React, { Component } from "react";
import GrandChild from "./GrandChild";

class Child extends Component {
  constructor() {
    super();
    console.log("%c Child Constructor", "color: red");
  }

  componentDidMount() {
    console.log("%c Child Did Mount", "color: red");
  }

  render() {
    console.log("%c Child Render", "color: red");

    return (
      <div className="box">
        Child
        <GrandChild />
      </div>
    );
  }
}

export default Child;
