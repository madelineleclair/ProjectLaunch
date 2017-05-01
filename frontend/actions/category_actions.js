export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const VIEW_CATEGORIES = "VIEW_CATEGORIES";
import * as CategorytUtil from '../util/category_util';

const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
};

export const viewCategories = (boolean) => {
  return {
    type: VIEW_CATEGORIES,
    boolean
  };
};

export const fetchCategories = () => (dispatch) => {
  return CategorytUtil.fetchCategories().then((categories) => {
    return dispatch(receiveCategories(categories));
  });
};
