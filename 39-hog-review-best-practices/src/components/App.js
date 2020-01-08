import React, { Component } from "react";

import "../App.css";
import Nav from "./Nav";
import HogList from "./Hogs/HogList";
import Filter from "./Filter";
import BanishedHogs from "./BanishedHogs/BanishedHogList";
import hogs from "../porkers_data";
import { sortBy } from "../utils/utilities";

class App extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     greased: false,
  //     sortBy: "",
  //     banished: [],
  //     showBanished: false
  //   };
  // this.myMethodName = this.myMethodName.bind(this)
  // }

  state = {
    greased: false,
    sortBy: "",
    banished: [],
    showBanished: false
  };

  showHiddenHogs = () => {
    this.setState({ showBanished: !this.state.showBanished });
  };

  handleBanishHog = hog => {
    // const banished = this.state.banished.concat(hog);
    const banished = [...this.state.banished, hog];
    // const banished = "banished"
    // const outObj = {banished}
    this.setState({ banished });
  };

  handleToggleGreased = () => {
    this.setState({ greased: !this.state.greased });
  };

  handleSelectChange = e => {
    this.setState({ sortBy: e.target.value });
  };

  filterBanished = () => {
    if (this.state.banished.length > 0) {
      return hogs.filter(hog => {
        return this.state.banished.indexOf(hog) === -1;
      });
    } else {
      return hogs;
    }
  };

  filterGreased = () => {
    let unbanishedHogs = this.filterBanished();
    if (this.state.greased) {
      return unbanishedHogs.filter(hog => hog.greased);
    } else {
      return unbanishedHogs;
    }
  };

  sortHogs = () => {
    let previouslyFiltered = this.filterGreased();
    switch (this.state.sortBy) {
      case "weight":
        return previouslyFiltered.sort((a, b) => {
          return a.weight - b.weight;
        });
      case "name":
        return previouslyFiltered.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      default:
        return previouslyFiltered;
    }
  };

  render() {
    return (
      <div className="ui grid container App">
        <div className="sixteen wide column centered">
          <Nav />
        </div>
        <div className="sixteen wide column centered">
          <Filter
            handleToggleGreased={this.handleToggleGreased}
            handleSelectChange={this.handleSelectChange}
            showBanished={
              this.state.banished.length === 0 ? null : this.showHiddenHogs
            }
          />
        </div>
        <div className="fourteen wide column centered">
          {this.state.showBanished && (
            <BanishedHogs fetchGIF={this.fetchGIF} hogs={this.state.banished} />
          )}
        </div>
        <br />
        <div className="sixteen wide column centered">
          <HogList
            handleBanishedClick={this.handleBanishHog}
            hogs={this.sortHogs()}
          />
        </div>
      </div>
    );
  }
}

export default App;
