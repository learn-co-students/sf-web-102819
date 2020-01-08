import React, { Component } from "react";

class Ticker extends Component {
  state = { color: "black" };

  componentDidUpdate(prevProps, prevState) {
    // if (this.props.value !== prevProps.value) {
    //   if (this.state.color === "black") {
    //     this.setState({
    //       color: "red"
    //     });
    //   } else if (this.state.color === "red") {
    //     this.setState({
    //       color: "black"
    //     });
    //   }
    // }

    if (this.props.value > prevProps.value) {
      this.setState({
        color: "red"
      });
    } else if (this.props.value < prevProps.value) {
      this.setState({
        color: "green"
      });
    }
  }

  componentWillUnmount() {
    console.log("ticker unmounted!");
    this.props.removeInterval()
  }

  render() {
    return (
      <div className="box" style={{ color: this.state.color }}>
        {this.props.value}
      </div>
    );
  }
}

export default Ticker;
