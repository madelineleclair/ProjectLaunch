import EditProjectForm from './edit_project_form';
import { getProject } from '../../actions/project_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentProject: state.currentProject,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProject: (id) => dispatch(getProject(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProjectForm);
