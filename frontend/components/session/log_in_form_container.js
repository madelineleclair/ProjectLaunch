import { connect } from 'react-redux';
import LogInForm from './log_in_form';
import { logIn, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  debugger
  return {
    user: state.session.currentUser,
    errors: state.session.errors,
    formType: "logIn"
  };
};

const mapPropsToDispatch = (dispatch, ownProps) => {
  return {
    logIn: (user) => dispatch(logIn(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapPropsToDispatch
)(LogInForm);
