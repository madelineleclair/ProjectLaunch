import { RECEIVE_PROJECT, RECEIVE_STORY, RECEIVE_REWARDS, RECEIVE_REWARD,
  REMOVE_REWARD, RECEIVE_ALMOST_FUNDED, RECEIVE_CONTRIBUTIONS,
  RECEIVE_ERRORS, RECEIVE_CONTRIBUTION, CLEAR_REWARDS } from '../actions/project_actions';
import merge from 'lodash/merge';

const _defaultState = {
  basicInfo: {},
  // rewards: [],
  rewards: {},
  story: {},
  errors: [],
  contributions: {},
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
      // const newState = Object.assign({}, state, {rewards: action.rewards});
      return merge({}, state, { rewards: action.rewards });
    }

    case(RECEIVE_REWARD): {
      const newState = Object.assign({}, state);
      newState.rewards[action.reward.id] = action.reward;
      return newState;
    }

    case(REMOVE_REWARD): {
      const newState = Object.assign({}, state);
      delete newState.rewards[action.reward];
      return newState;
    }

    case(CLEAR_REWARDS): {
      const newState = Object.assign({}, state);
      newState.rewards = {};
      return newState;
    }

    case(RECEIVE_CONTRIBUTIONS): {
      return merge({}, state, { contributions: action.contributions });
    }

    case(RECEIVE_CONTRIBUTION): {
      const newState = Object.assign({}, state);
      newState.contributions.amount += action.contribution;
      newState.contributions.backers ++;
      return newState;
    };

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
