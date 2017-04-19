import { connect } from 'react-redux';
import SignUpForm from './sign_up_form';
import { signUp, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    user: state.session.currentUser,
    errors: state.session.errors
  };
};

const mapPropsToDispatch = (dispatch, ownProps) => {
  return {
    signUp: (user) => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapPropsToDispatch
)(SignUpForm);
