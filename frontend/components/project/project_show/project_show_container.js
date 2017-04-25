import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { getProject, fetchStory, fetchRewards, fetchContributions } from '../../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {


  return {
    basicInfo: state.project.basicInfo,
    story: state.project.story,
    rewards: state.project.rewards,
    projectId: ownProps.params.projectId,
    contributionsInfo: state.project.contributions,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProject: (id, pageType) => dispatch(getProject(id, pageType)),
    fetchStory: (project_id) => dispatch(fetchStory(project_id)),
    fetchRewards: (project_id) => dispatch(fetchRewards(project_id)),
    fetchContributions: (project_id) => dispatch(fetchContributions(project_id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectShow)
