/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, NavLink } from "reactstrap";

//other
import { Cookies } from "react-cookie";

function UserLogin() {
  const users = [{ id: 1, username: 'Fadi' }, { id: 2, username: 'Sami' }, { id: 3, username: 'Radi' }, { id: 4, username: 'Hadi' }, { id: 5, username: 'Shadi' }]
  const cookies = new Cookies();
  let userId = cookies.get('user_id');
  // eslint-disable-next-line
  let loggedInUser = users.find(user => user.id == userId);

  const [user, setUser] = React.useState(loggedInUser);
  const Logout = () => {
    setUser({});
    cookies.remove('user_id');
  };

  return (user && user.id ?
    <Button
      className="btn-round ui-lib-logout"
      color="danger"
      onClick={Logout}
    >
      Logout {user.username}
    </Button> :
    <NavLink to="/login" tag={Link}
    >
      <i className="nc-icon nc-user" /> Login
    </NavLink>
  );
}

export default UserLogin;
