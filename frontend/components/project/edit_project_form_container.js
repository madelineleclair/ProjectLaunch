import EditProjectForm from './edit_project_form';
import { getProject, launchProject } from '../../actions/project_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    basicInfo: state.project.basicInfo,
    projectId: ownProps.params.projectId,
    rewards: state.rewards,
    story: state.story,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProject: (id) => dispatch(getProject(id)),
    launchProject: (project) => dispatch(launchProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProjectForm);
