import { RECEIVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

const _defaultState = {
  currentProject: {},
}

const ProjectReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case(RECEIVE_PROJECT): {
      return merge({}, _defaultState, { currentProject: action.project })
    }
    default: {
      return state;
    }
  }
}

export default ProjectReducer
