import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer';
import ProjectsReducer from './projects_reducer';
import NavigationBarReducer from './navigation_bar_reducer';
import PendingTransactionsReducer from './pending_transactions_reducer';
import CategoryReducer from './category_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  project: ProjectReducer,
  categories: CategoryReducer,
  projects: ProjectsReducer,
  navigationBar: NavigationBarReducer,
  pendingTransactions: PendingTransactionsReducer,
});

export default RootReducer;
