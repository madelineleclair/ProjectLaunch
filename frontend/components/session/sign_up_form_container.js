import { connect } from 'react-redux';
import SignUpForm from './sign_up_form';
import { signUp, clearErrors, logIn } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser,
    errors: state.session.errors,
    formType: "signUp"
  };
};

const mapPropsToDispatch = (dispatch, ownProps) => {
  return {
    signUp: (user) => dispatch(signUp(user)),
    logIn: (user) => dispatch(logIn(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapPropsToDispatch
)(SignUpForm);
