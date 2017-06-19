import React from 'react';
import { hashHistory } from 'react-router';


class UserInfo extends React.Component {
  constructor(props) {
    debugger
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

// const logOut = (props) => (e) => {
//   props.userInfo.logOut().then(() => {
//     props.setState({displayInfo: false});
//     hashHistory.push('/');
//   });
// };

// const UserInfo = (props) => {
//
//   return (
//     <div className="user-info-box">You are logged in as
//       <div>
//         {props.userInfo.currentUser.name}
//       </div>
//       <button onClick={logOut(props)}>Log out</button>
//     </div>
//   );
// };

export default UserInfo;
