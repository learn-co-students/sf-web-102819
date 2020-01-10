import React, { Component } from "react";
import Ticker from "./Ticker";

class TickerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, showTicker: true, interval: null };
    console.log(`%cTickerContainer Constructor`, "color: blue");
  };

  componentDidMount() {
    console.log(`%cTickerContainer did mount!`, "color: blue");
  
    this.addTickerInterval();
  };

  updateTicker = () => {
    this.setState({
      value: Math.floor(Math.random() * 100)
    });
  };

  addTickerInterval = () => {
    const interval = setInterval(() => {
      // console.log("Updating Ticker!");
      this.updateTicker();
    }, 1000);

    this.setState({ interval: interval });
  };

  removeInterval = () => {
    clearInterval(this.state.interval);
  };

  toggleTickerShow = () => {
    this.setState({ showTicker: !this.state.showTicker });
    if (!this.state.showTicker) {
      this.addTickerInterval();
    };
  };

  render() {
    console.log(`%cTickerContainer Render`, "color: blue");

    return (
      <div className="box">
        <button onClick={this.removeInterval}>Toggle Ticker</button>
        {this.state.showTicker && (
          <Ticker
            removeInterval={this.removeInterval}
            value={this.state.value}
          />
        )}
      </div>
    );
  }
}

export default TickerContainer;
