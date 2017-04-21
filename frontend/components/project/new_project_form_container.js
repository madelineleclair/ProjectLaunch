import NewProjectForm from './new_project_form';
import { getProject, createProject } from '../../actions/project_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    // currentProject: state.project.basicInfo,
    loggedIn: !!state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProject: (id) => dispatch(getProject(id)),
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProjectForm);
