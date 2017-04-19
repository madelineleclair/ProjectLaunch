import React from 'react';
import { Link } from 'react-router'

const logOut = (logOut) => (e) => {
  logOut();
};

const handleUserToggle = () => {

};

const NavigationBar = (props) => {
  if (props.loggedIn) {
    return(
      <div>
        <img src="wp-content/uploads/flamingo.jpg"></img>
        <div>You are logged in as {props.currentUser.name}</div>
        <button onClick={logOut(props.logOut)}>Log out</button>
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
