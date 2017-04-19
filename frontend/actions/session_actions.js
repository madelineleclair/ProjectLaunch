import * as SessionUtil from '../util/user_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_SESSION = "REMOVE_SESSION";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const signUp = (user) => (dispatch) => {
  return SessionUtil.signUp(user).then((user) => {
    dispatch(receiveCurrentUser(user));
  }, (errors) => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};

export const logIn = (user) => (dispatch) => {
  return SessionUtil.logIn(user).then((user) => {
    dispatch(receiveCurrentUser(user));
  }), ((errors) => {
    dispatch(receiveErrors(errors.responseJSON));
  });
};

export const logOut = () => (dispatch) => {
  return SessionUtil.logOut().then(() => {
    dispatch(receiveCurrentUser(null));
  });
};
