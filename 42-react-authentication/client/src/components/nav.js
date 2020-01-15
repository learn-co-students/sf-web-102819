import React, { Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Nav = ({ location: { pathname } }) => {
  let logged_in = false;
  let logout = () => console.log("this should log us out...");
  return (
    <Menu pointing secondary>
      {logged_in ? (
        <Fragment>
          <Menu.Item
            as={NavLink}
            to="/profile"
            name="Profile"
            active={pathname === "/profile"}
          />
          <Menu.Menu position="right">
            <Menu.Item to="/logout" name="Logout" onClick={logout} />
          </Menu.Menu>
        </Fragment>
      ) : (
        <Menu.Item
          as={NavLink}
          to="/login"
          name="Login"
          active={pathname === "/login"}
        />
      )}
    </Menu>
  );
};

export default withRouter(Nav);
