import { CHANGE_SEARCH_BAR_STATUS } from '../actions/navigation_actions';

const _defaultState = {
  search: false
};

const NavigationBarReducer = ( state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case(CHANGE_SEARCH_BAR_STATUS): {
      return {search: action.search };
    }
    default: {
      return state;
    }
  }
};

export default NavigationBarReducer;
