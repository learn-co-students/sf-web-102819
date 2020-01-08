import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor() {
    super();
    console.log("%c Parent Constructor", "color: blue");
  }

  componentDidMount() {
    console.log("%c Parent Did Mount", "color: blue");
  }

  render() {
    console.log("%c Parent Render", "color: blue");

    return (
      <div className="box">
        Parent
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