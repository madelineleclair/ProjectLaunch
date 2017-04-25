import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { getProject } from '../../actions/project_actions';

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProject: (id) => dispatch(getProject(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectShow)
