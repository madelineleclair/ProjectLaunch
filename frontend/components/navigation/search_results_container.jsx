import { fetchProjects } from './../../actions/project_actions';
import { connect } from 'react-redux';
import SearchResults from './search_results';


const mapStateToProps = (state) => {
  debugger
  return {
    projects: Object.values(state.projects.projects)
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
)(SearchResults);
