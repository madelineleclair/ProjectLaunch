import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUp, clearErrors, logIn } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  const formType = ownProps.location.pathname === "/signup" ? "signUp" : 'logIn';
  return {
    user: state.session.currentUser,
    errors: state.session.errors,
    formType
  };
};

const mapPropsToDispatch = (dispatch, ownProps) => {
  const action = ownProps.location.pathname === "/signup" ? signUp : logIn;
  return {
    action: (user) => dispatch(action(user)),
    logIn: (user) => dispatch(logIn(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapPropsToDispatch
)(SessionForm);
