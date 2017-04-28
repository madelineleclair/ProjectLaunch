import React from 'react';
import { Link } from 'react-router';
import UserInfo from '../user/user_info';
import SearchBarContainer from './search_bar_container';


class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayInfo: false, search: this.props.search };
    this.handleUserInfoToggle = this.handleUserInfoToggle.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ search: nextProps.search });
  };

  handleUserInfoToggle () {
    var displayInfo;
    if (this.state.displayInfo === false) {
      displayInfo = true;
    } else {
      displayInfo = false;
    }
    this.setState({displayInfo});
  }

  handleSearch() {
    this.props.changeSearchBarStatus(true)
  }

  render() {


      let info;
      if (this.state.displayInfo) {
        info = <UserInfo userInfo={ this.props } setState={this.setState}/>;
      }



      if (this.props.loggedIn && !this.state.search) {
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
            <div>
              <img className="search-bar-logo" onClick={this.handleSearch} src="https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/magnifying_glass_icon.png"/>
            </div>
              <div className="user-image">
                <img onClick={this.handleUserInfoToggle} src={this.props.currentUser.image_url} />
              </div>
              { info }
          </div>
        );
      } else if(!this.props.loggedIn && !this.state.search) {
        return (
          <div className="navigation-bar">
            <div className="explore-and-start">
            </div>
          <Link className="logo" to="/">
            <section className="project-logo">PROJECT</section>
            <section className="launch-logo">LAUNCH</section>
          </Link>
          <img className="search-bar-logo" onClick={this.handleSearch} src="https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/magnifying_glass_icon.png"/>
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
      } else {
      return <SearchBarContainer />;
    }
  }
}

// <Link to="/projects/new">
//   <div>Start a project</div>
// </Link>
export default NavigationBar;
