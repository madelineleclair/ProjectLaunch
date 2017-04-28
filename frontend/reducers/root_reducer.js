import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer';
import ProjectsReducer from './projects_reducer';
import NavigationBarReducer from './navigation_bar_reducer'
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  project: ProjectReducer,
  projects: ProjectsReducer,
  navigationBar: NavigationBarReducer
});

export default RootReducer;
