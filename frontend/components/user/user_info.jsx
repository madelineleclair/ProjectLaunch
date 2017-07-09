import React from 'react';
import { hashHistory } from 'react-router';


class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut(e) {
    this.props.userInfo.logOut().then(() => {
      this.props.setState({displayInfo: false});
    });
  }

  render() {
    return (
      <div className="user-info-box">You are logged in as
        <div>
          {this.props.userInfo.currentUser.name}
        </div>
        <button onClick={this.logOut}>Log out</button>
      </div>
    );
  }
}

export default UserInfo;
