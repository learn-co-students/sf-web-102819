import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import About from './About';
import Login from './Login';
import PaintingContainer from './PaintingContainer';
import PaintingList from './PaintingList';
import api from '../services/api';


class App extends React.Component {
  state = { currentUser: {} };

  componentDidMount() {
    console.log('CDM in APP');
    const token = localStorage.getItem('token');
    if (token) {
      api.auth.getCurrentUser().then(user => {
        const currentUser = user ;

        this.setState({ currentUser });
      });
    };
  };

  handleLogin = json => {
    const currentUser = json;
    localStorage.setItem('token', currentUser.jwt );

    this.setState({ currentUser });
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ currentUser: {} });
    console.log("Redirecting...");
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
                return <Login {...routerProps} handleLogin={this.handleLogin} />;
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
