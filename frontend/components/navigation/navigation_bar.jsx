import React from 'react';
import { Link } from 'react-router'

const logOut = (props) => (e) => {
  props.logOut().then(() => {props.router.push('/');});
};

const handleUserToggle = () => {

};

const NavigationBar = (props) => {
  if (props.loggedIn) {
    return(
      <div className="navigation-bar">
        <img src={window.user_image}></img>
        <div className="user-info-box">You are logged in as {props.currentUser.name}
          <button onClick={logOut(props)}>Log out</button>
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
