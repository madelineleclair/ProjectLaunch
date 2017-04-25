import { RECEIVE_ALMOST_FUNDED } from '../actions/project_actions';
import merge from 'lodash/merge';

const _defaultState = {
  almostFunded: []
};

const ProjectsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case(RECEIVE_ALMOST_FUNDED): {
      // return merge({}, state, { almostFunded: action.projects });

      return Object.assign( {}, state, {almostFunded: action.projects} );
    }
    default: {
      return state;
    }
  }
};

export default ProjectsReducer;
