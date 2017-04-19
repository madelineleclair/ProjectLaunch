import React from 'react';
import { hashHistory } from 'react-router';

const logOut = (props) => (e) => {
  props.userInfo.logOut().then(() => {hashHistory.push('/');});
};

const UserInfo = (props) => {

  return (
    <div className="user-info-box">You are logged in as {props.userInfo.currentUser.name}
      <button onClick={logOut(props)}>Log out</button>
    </div>
  );
};

export default UserInfo;
