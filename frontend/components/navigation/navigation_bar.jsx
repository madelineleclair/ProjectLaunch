import React from 'react';
import { Link } from 'react-router';
import UserInfo from '../user/user_info';


class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayInfo: false};
    this.handleUserInfoToggle = this.handleUserInfoToggle.bind(this);
  }

  handleUserInfoToggle () {
    var displayInfo;
    if (this.state.displayInfo === false) {
      displayInfo = true;
    } else {
      displayInfo = false;
    }
    this.setState({displayInfo});
  }

  render() {

  const info = this.state.displayInfo ? <UserInfo userInfo={ this.props } /> : <div />

    if (this.props.loggedIn) {
      return(
        <div className="navigation-bar">
          <div className="user-image">
            <img onClick={this.handleUserInfoToggle} src={window.user_image} />
          </div>
          { info }
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
      );
    }
  }
}

export default NavigationBar;
