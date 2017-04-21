import BasicInfoForm from './basic_info_form';
import { getProject, updateProject } from '../../actions/project_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    story: state.project.story,
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
)(BasicInfoForm);
