import { RECEIVE_ALMOST_FUNDED, RECEIVE_POPULAR,
  RECEIVE_PROJECTS } from '../actions/project_actions';

const _defaultState = {
  projects: {},
  almostFunded: {},
  popular: {},
};

const ProjectsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case(RECEIVE_ALMOST_FUNDED): {
      return Object.assign( {}, state, { almostFunded: action.projects } );
    }

    case(RECEIVE_POPULAR): {
      return Object.assign( {}, state, { popular: action.projects } );
    }

    case(RECEIVE_PROJECTS): {
      return Object.assign({}, state, { projects: action.projects });
    }
    default: {
      return state;
    }
  }
};

export default ProjectsReducer;
