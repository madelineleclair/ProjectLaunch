import SearchBar from './search_bar';
import { fetchProjects } from './../../actions/project_actions';
import { changeSearchBarStatus } from '../../actions/navigation_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    projects: Object.values(state.projects),
    search: state.navigationBar.search,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    fetchProjects: (fetch) => dispatch(fetchProjects(fetch)),
    changeSearchBarStatus: (status) => dispatch(changeSearchBarStatus(status)),
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(SearchBar);
