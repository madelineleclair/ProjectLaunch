import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer'
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  project: ProjectReducer,
});

export default RootReducer;
