import SessionReducer from './session_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  sesssion: SessionReducer
});

export default RootReducer;
