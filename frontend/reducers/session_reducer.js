import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _default = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _default, action) => {
  Object.freeze(state);
  switch(action.type) {
    case(RECEIVE_CURRENT_USER): {
      const currentUser = { currentUser: action.user };
        return merge({}, _default, currentUser);
    }
    case(RECEIVE_ERRORS): {
      const newState = Object.assign({}, state);
      newState.errors = action.errors;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default SessionReducer;
