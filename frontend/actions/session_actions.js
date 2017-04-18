import * as SessionUtil from '../util/user_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_SESSION = "REMOVE_SESSION";

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

// const removeSession = (user) => {
//   return {
//     type: REMOVE_SESSION,
//     user
//   };
// };

export const signUp = (user) => (dispatch) => {
  return SessionUtil.signUp(user).then((user) => {
    dispatch(receiveCurrentUser(user));
  });
};

export const logIn = (user) => (dispatch) => {
  return SessionUtil.logIn(user).then((user) => {
    dispatch(receiveCurrentUser(user));
  });
};

export const logOut = () => (dispatch) => {
  return SessionUtil.logOut().then(() => {
    dispatch(receiveCurrentUser(null));
  });
};
