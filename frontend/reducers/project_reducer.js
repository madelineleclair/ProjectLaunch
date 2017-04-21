import { RECEIVE_PROJECT, RECEIVE_STORY } from '../actions/project_actions';
import merge from 'lodash/merge';

const _defaultState = {
  basicInfo: {},
  rewards: {},
  story: null,
  errors: [],
};

// const _defaultState = {
//   currentProject: {},
//   errors: []
// };

const ProjectReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case(RECEIVE_PROJECT): {
      return merge({}, _defaultState, { basicInfo: action.project });
    }
    case(RECEIVE_STORY): {
      return merge({}, _defaultState, { story: action.story });
    }
    default: {
      return state;
    }
  }
};

export default ProjectReducer;
