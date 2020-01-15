import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black'
];

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ color: newColor });
  }

  render() {
    const loggedIn = !!this.props.currentUser.id;

    return (
      <div className={`ui top fixed inverted ${this.state.color} menu`}>
        <Link to="/" className="item">
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`} />
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.description}</div>
          </h2>
        </Link>
        <div className="right menu">
          <Link to="/paintings" className="item">
            index
          </Link>
          <Link to="/paintings/new" className="item">
            new
          </Link>
          { loggedIn ? (
            <div className="item">
              {`Welcome, ${this.props.currentUser.username}!`}
            </div>
          ) : null }
          { loggedIn ? (
            <a
              onClick={() => {
                this.props.history.push('/login');
                this.props.handleLogout();
              }}
              className="item"
            >
              <div className="ui primary button">Log Out</div>
            </a>
          ) : (
            <Link to="/login" className="item">
              <div className="ui primary button">Log In</div>
            </Link>
          )}
          <div className="item">
            <div onClick={this.handleClick} className="ui button">
              Change Color
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default withRouter(Navbar);
