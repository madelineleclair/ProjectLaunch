import React from 'react';
import { Link } from 'react-router';
import UserInfo from '../user/user_info';


class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayInfo: false};
    this.handleUserInfoToggle = this.handleUserInfoToggle.bind(this);
    this.setState = this.setState.bind(this);
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
      let info;
      if (this.state.displayInfo) {
        info = <UserInfo userInfo={ this.props } setState={this.setState}/>;
      }


    if (this.props.loggedIn) {
      return(
        <div className="navigation-bar">
          <div className="explore-and-start">
            <Link to="/projects/new">
              <div>Start a project</div>
            </Link>
          </div>
          <Link className="logo" to="/">
            <section className="project-logo">PROJECT</section>
            <section className="launch-logo">LAUNCH</section>
          </Link>
            <div className="user-image">
              <img onClick={this.handleUserInfoToggle} src={this.props.currentUser.image_url} />
            </div>
            { info }
        </div>
      );
    } else {
      return (
        <div className="navigation-bar">
          <div className="explore-and-start">
            <Link to="/projects/new">
              <div>Start a project</div>
            </Link>
          </div>
        <Link className="logo" to="/">
          <section className="project-logo">PROJECT</section>
          <section className="launch-logo">LAUNCH</section>
        </Link>
          <div className="login-logout-container">
            <Link to="/login">
              <div>Log in</div>
            </Link>
            <Link to='/signup'>
              <div>Sign up</div>
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default NavigationBar;
