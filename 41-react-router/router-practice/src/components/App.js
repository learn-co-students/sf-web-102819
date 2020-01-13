import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Characters from "./Characters";
import Letters from "./Letters";
import Numbers from "./Numbers";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          <Switch>
            <Redirect from='/letters' to='/characters/roman' />
            <Route path="/characters/roman" component={Letters} />
            <Route path="/characters" component={Characters} />
            <Route path="/numbers" component={Numbers} />
            <Route exact path="/" component={About} />
          </Switch>
        </div>
      </div>
    );
  };
};

export default App;
