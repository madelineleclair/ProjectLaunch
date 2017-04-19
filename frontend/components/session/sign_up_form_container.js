import { connect } from 'react-redux';
import SignUpForm from './sign_up_form';
import { signUp } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser,
    errors: state.session.errors
  };
};

const mapPropsToDispatch = (dispatch, ownProps) => {
  return {
    signUp: (user) => dispatch(signUp(user)),
  };
};

export default connect(
  mapStateToProps,
  mapPropsToDispatch
)(SignUpForm);
