import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div className={`ui top fixed inverted ${props.color} menu`}>
      <Link to="/paintings">
        <a className="item">
          <h2 className="ui header">
            <i className={`${props.icon} icon`} />
            <div className="content">{props.title}</div>
            <div className="sub header">{props.description}</div>
          </h2>
        </a>
      </Link>
      <div className="right menu">
        <Link to="/paintings" className="item">index</Link>
        <Link to="/paintings/new" className="item">new</Link>
        <Link to="/signin" className="item">
          <div className="ui primary button">Sign In</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
