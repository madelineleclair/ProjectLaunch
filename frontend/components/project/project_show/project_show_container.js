import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { getProject, fetchStory, fetchRewards, fetchContributions, createContribution } from '../../../actions/project_actions';

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
    fetchStory: (projectId) => dispatch(fetchStory(projectId)),
    fetchRewards: (projectId) => dispatch(fetchRewards(projectId)),
    fetchContributions: (projectId) => dispatch(fetchContributions(projectId)),
    createContribution: (contribution) => dispatch(createContribution(contribution)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectShow);
