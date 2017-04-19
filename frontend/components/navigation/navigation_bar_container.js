import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import NavigationBar from './navigation_bar';


const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.session.currentUser,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);
