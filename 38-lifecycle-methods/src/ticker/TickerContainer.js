import React, { Component } from "react";
import Ticker from "./Ticker";

class TickerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, showTicker: true, interval: null };
  };

  updateTicker = () => {
    this.setState({
      value: Math.floor(Math.random() * 100)
    });
  };

  componentDidMount() {
    const interval = setInterval(() => {
      console.log("Updating ticker!");
      this.updateTicker();
    }, 1000);

    this.setState({ interval });
  };

  removeInterval = () => {
    clearInterval(this.state.interval);
  };

  toggleTickerShow = () => {
    this.setState({ showTicker: !this.state.showTicker });
  };

  render() {
    return (
      <div className="box">
        <button onClick={this.toggleTickerShow}>Toggle Ticker</button>
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
