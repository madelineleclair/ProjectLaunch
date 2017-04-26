import BasicInfoForm from './basic_info_form';
import { getProject, updateProject, clearErrors } from '../../actions/project_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    story: state.project.story,
    projectId: ownProps.params.projectId,
    errors: state.project.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProject: (id) => dispatch(getProject(id)),
    updateProject: (project) => dispatch(updateProject(project)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicInfoForm);
