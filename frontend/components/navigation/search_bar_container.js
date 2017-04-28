import SearchBar from './search_bar';
import { fetchProjects } from './../../actions/project_actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

  return {
    projects: Object.values(state.projects)
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    fetchProjects: (fetch) => dispatch(fetchProjects(fetch))
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(SearchBar);
