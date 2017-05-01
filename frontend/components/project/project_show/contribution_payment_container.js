import { connect } from 'react-redux';
import { createContribution } from '../../../actions/project_actions';
import { clearPendingTransactions } from '../../../actions/pending_transaction_actions';
import ContributionPayment from "./contribution_payment";

const mapStateToProps = (state, ownProps) => {

  return {
    basicInfo: state.project.basicInfo,
    amount: state.pendingTransactions.amount,
    reward: state.pendingTransactions.reward,
    rewardInfo: state.project.rewards[state.pendingTransactions.reward],
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    createContribution: (contribution) => dispatch(createContribution(contribution)),
    clearPendingTransactions: () => dispatch(clearPendingTransactions()),
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContributionPayment);
