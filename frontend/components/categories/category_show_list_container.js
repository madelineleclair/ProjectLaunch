import { connect } from 'react-redux';
import CategoryShowList from './category_show_list';
import { fetchProjects } from './../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  const projectsArray = Object.values(state.projects.projects)
  return {
    projects: projectsArray,
    numberProjects: projectsArray.length,
    categoryType: ownProps.params.categoryType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: (fetch) => dispatch(fetchProjects(fetch))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryShowList);
