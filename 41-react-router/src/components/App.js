import React, { Component } from "react";
import Navbar from "./Navbar";
import About from "./About";
import PaintingsContainer from "./PaintingsContainer";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar
          color="green"
          title="Painterest"
          description="our app"
          icon="paint brush"
        />
        <div className="ui container grid">
          <div id="content" className="sixteen wide column">
            <Route exact path="/" component={About} />
            <Route path="/signin" component={Login} />
            <Route path="/paintings" component={PaintingsContainer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
