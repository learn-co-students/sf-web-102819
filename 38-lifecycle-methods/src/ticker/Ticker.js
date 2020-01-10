import React, { Component } from "react";

class Ticker extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "black" };

    console.log(`%cTicker Constructor`, "color: green");
  };

  componentDidMount() {
    console.log(`%cTicker did mount!`, "color: green");
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(`%cTicker did update!`, "color: green");

    if (this.props.value > prevProps.value) {
      this.setState({ color: "red" })
    } else if (this.props.value < prevProps.value) {
      this.setState({ color: "green" })
    }
  };

  componentWillUnmount() {
    console.log(`%cTicker will unmount!`, "color: green");
    this.props.removeInterval();
  };

  render() {
    console.log(`%cTicker Render`, "color: green");

    return (
      <div className="box" style={{ color: this.state.color }}>
        {this.props.value}
      </div>
    );
  }
}

export default Ticker;
