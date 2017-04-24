import React from 'react';
import { hashHistory } from 'react-router';

const logOut = (props) => (e) => {
  props.userInfo.logOut().then(() => {
    props.setState({displayInfo: false});
    hashHistory.push('/');
  });
};

const UserInfo = (props) => {

  return (
    <div className="user-info-box">You are logged in as
      <div>
        {props.userInfo.currentUser.name}
      </div>
      <button onClick={logOut(props)}>Log out</button>
    </div>
  );
};

export default UserInfo;
