import StoryInfoForm from './story_info_form';
import { getProject, updateProject } from '../../actions/project_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    basicInfo: state.project.basicInfo,
    projectId: ownProps.params.projectId,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProject: (id) => dispatch(getProject(id)),
    updateProject: (project) => dispatch(updateProject(project)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryInfoForm);
