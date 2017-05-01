import { connect } from 'react-redux';
import { fetchCategories, viewCategories } from '../actions/category_actions'
import App from './app';

const mapStateToProps = (state) => {

  return {
    viewCategories: state.categories.viewCategories,
  };
};

const mapPropsToDispatch = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    setViewCategories: (boolean) => dispatch(viewCategories(boolean)),
  };
};

export default connect(
  mapStateToProps,
  mapPropsToDispatch
)(App);
