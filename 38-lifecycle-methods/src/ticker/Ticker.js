import React, { Component } from "react";

class Ticker extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "black" };
  };

  componentDidMount() {
    console.log(`${this.constructor.name} did mount.`)
  }

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
    console.log(`${this.constructor.name} did update.`);

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
    console.log(`${this.constructor.name} will mount.`);
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
