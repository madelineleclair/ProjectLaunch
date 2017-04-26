import { RECEIVE_PROJECT, RECEIVE_STORY, RECEIVE_REWARDS, REMOVE_REWARD, RECEIVE_ALMOST_FUNDED, RECEIVE_CONTRIBUTIONS, RECEIVE_ERRORS } from '../actions/project_actions';
import merge from 'lodash/merge';

const _defaultState = {
  basicInfo: {},
  rewards: [],
  story: null,
  errors: [],
  contributions: null,
};

// const _defaultState = {
//   currentProject: {},
//   errors: []
// };

//might want to return the state, not the default state.
const ProjectReducer = (state = _defaultState, action) => {

  Object.freeze(state);
  switch(action.type) {
    case(RECEIVE_PROJECT): {
      return merge({}, state, { basicInfo: action.project });
    }

    case(RECEIVE_STORY): {
      return merge({}, state, { story: action.story });
    }

    case(RECEIVE_REWARDS): {
      const newState = Object.assign({}, state, action.rewards);
      return newState;
    }

    case(REMOVE_REWARD) {

    }

    case(RECEIVE_CONTRIBUTIONS): {
      return merge({}, state, { contributions: action.contributions });
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

export default ProjectReducer;
