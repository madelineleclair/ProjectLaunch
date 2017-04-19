import { connect } from 'react-redux';
import LogInForm from './log_in_form';
import { logIn } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser,
    errors: state.session.errors
  };
};

const mapPropsToDispatch = (dispatch, ownProps) => {
  return {
    logIn: (user) => dispatch(signUp(user)),
  };
};

export default connect(
  mapStateToProps,
  mapPropsToDispatch
)(LogInForm);
