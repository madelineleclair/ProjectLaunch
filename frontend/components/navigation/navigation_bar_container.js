import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import { changeSearchBarStatus } from '../../actions/navigation_actions'
import NavigationBar from './navigation_bar';


const mapStateToProps = (state) => {

  return {
    loggedIn: !!state.session.currentUser,
    currentUser: state.session.currentUser,
    search: state.navigationBar.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
    changeSearchBarStatus: (status) => dispatch(changeSearchBarStatus(status))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);
