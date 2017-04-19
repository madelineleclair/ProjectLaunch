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
      <div className="navigation-bar">
        <img src="wp-content/uploads/flamingo.jpg"></img>
        <div className="user-info-box">You are logged in as {props.currentUser.name}
          <button onClick={logOut(props.logOut)}>Log out</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navigation-bar">
          <Link to="/login">
            <div>Log in</div>
          </Link>
          <Link to='/signup'>
            <div>Sign up</div>
          </Link>
      </div>
    )
  }
};

export default NavigationBar;
