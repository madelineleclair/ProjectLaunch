import React from 'react';
import { Link } from 'react-router'

const logOut = (logOut) => (e) => {
  logOut()
}

const NavigationBar = (props) => {
  if (props.loggedIn) {
    return(
      <div>
        <button onClick={logOut(props.logOut)}>Log out</button>
        <div>You are logged in as {props.currentUser.name}</div>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/login">Log in</Link>
        <Link to='/signup'>Sign up</Link>
      </div>
    )
  }
};

export default NavigationBar;
