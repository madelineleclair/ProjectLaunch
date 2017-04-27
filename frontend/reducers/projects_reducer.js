import { RECEIVE_ALMOST_FUNDED, RECEIVE_PROJECTS } from '../actions/project_actions';
import merge from 'lodash/merge';

const _defaultState = {
  projects: {},
  almostFunded: {}
};

const ProjectsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case(RECEIVE_ALMOST_FUNDED): {
      // return merge({}, state, { almostFunded: action.projects });

      return Object.assign( {}, state, { almostFunded: action.projects } );
    }

    case(RECEIVE_PROJECTS): {
      return Object.assign({}, state, { projects: action.projects })
    }
    default: {
      return state;
    }
  }
};

export default ProjectsReducer;
