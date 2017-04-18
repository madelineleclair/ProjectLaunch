import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _default = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _default, action) => {
  Object.freeze(state);
  switch(action.type) {
    case (RECEIVE_CURRENT_USER): {
      const newState = Object.assign({}, state);
      newState.currentUser = action.user;
      return newState;
    }
    default: {
      return _default;
    }
  }
};

export default SessionReducer;
