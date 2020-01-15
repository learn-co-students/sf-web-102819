import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Letters from './Letters';
import Numbers from './Numbers';
import Characters from './Characters';
import Hangeul from './Hangeul';
import Nav from './Nav';
import About from './About';

function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <Switch>
        <Route path="/characters/latin" component={Letters} />
        <Route path="/numbers" component={Numbers} />
        <Route path="/characters/korean" component={Hangeul} />
        <Route path="/characters" component={Characters} />
        <Route path="/" component={About} />
      </ Switch>
    </div>
  );
}

export default App;
