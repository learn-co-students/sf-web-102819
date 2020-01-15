import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import About from './About';
import Login from './Login';
import PaintingContainer from './PaintingContainer';
import PaintingList from './PaintingList';

class App extends React.Component {
  state = { currentUser: {} };

  handleLogin = userJson => {
    const currentUser = userJson;
    localStorage.setItem('token', currentUser.jwt);
    this.setState({ currentUser: currentUser });
  };

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ currentUser: {} })
  };

  render() {
    
    return (
      <div className="App">
        <Navbar
          icon="paint brush"
          title="Painterest"
          description="a sf-web-102819 app"
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <div id="content" className="ui container">
          <Switch>
            <Route
              path="/login"
              render={routerProps => {
                return (
                  <Login {...routerProps} handleLogin={this.handleLogin} />
                );
              }}
            />
            <Route path="/paintings" component={PaintingContainer} />
            <Route path="/" component={About} />
          </Switch>
        </div>
      </div>
    );
  };
};

export default App;
