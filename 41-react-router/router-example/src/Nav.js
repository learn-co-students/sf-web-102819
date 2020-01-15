import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
  return (
    <div>
      ___
      <Link to="/">about</Link>
      ___
      <Link to="/characters/latin">letters</Link>
      ___
      <Link to="/numbers">numbers</Link>
      ___
      <Link to="/characters">characters</Link>
      ___
      <Link to="/characters/korean">hangeul</Link>
      ___
      <br/>
      <br/>
    </div>
  )
};

export default Nav;