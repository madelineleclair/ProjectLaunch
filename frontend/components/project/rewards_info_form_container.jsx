import RewardsInfoForm from './rewards_info_form';
import { fetchRewards, createReward, updateReward, clearErrors, deleteReward } from './../../actions/project_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    rewards: state.project.rewards,
    projectId: ownProps.params.projectId,
    errors: state.project.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRewards: (project_id) => dispatch(fetchRewards(project_id)),
    createReward: (reward) => dispatch(createReward(reward)),
    updateReward: (reward_id) => dispatch(updateReward(reward_id)),
    clearErrors: () => dispatch(clearErrors()),
    deleteReward: (id) => dispatch(deleteReward(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardsInfoForm);
