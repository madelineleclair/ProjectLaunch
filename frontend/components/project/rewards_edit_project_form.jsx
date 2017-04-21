import RewardsInfoForm from './rewards_info_form';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    rewards: state.project.rewards,
    project_id: ownProps.params.projectId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRewards: (project_id) => dispatch(fetchRewards(project_id)),
    createReward: (reward) => dispatch(createReward(reward)),
    updateReward: (reward_id) => dispatch(updateReward(reward_id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardsInfoForm);
