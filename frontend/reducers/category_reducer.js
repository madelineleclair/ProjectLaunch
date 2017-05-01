import { RECEIVE_CATEGORIES, VIEW_CATEGORIES } from '../actions/navigation_actions';
// import merge from 'lodash/merge';

const _defaultState = {
  categories: {},
  viewCategories: false
};


const CategoryReducer = ( state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case("VIEW_CATEGORIES"): {
      return Object.assign( {}, state, { viewCategories: action.boolean } );
    }

    case("RECEIVE_CATEGORIES"): {
      return Object.assign({}, state, { categories: action.categories });
    }
    default: {
      return state;
    }
  }
};

export default CategoryReducer;




// switch(action.type) {
//   case(RECEIVE_CATEGORIES): {
//     const newState = Object.assign({}, state);
//     newState.categories = action.categories;
//     return newState;
//   }
//   case(VIEW_CATEGORIES): {

//     return merge({}, state, { viewCategories: action.boolean });
//   }
//   default: {

//     return state;
//   }
// }
