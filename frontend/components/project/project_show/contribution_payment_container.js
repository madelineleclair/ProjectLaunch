import { connect } from 'react-redux';
import { createContribution, clearErrors } from '../../../actions/project_actions';
import { clearPendingTransactions } from '../../../actions/pending_transaction_actions';
import ContributionPayment from "./contribution_payment";

const mapStateToProps = (state, ownProps) => {

  return {
    basicInfo: state.project.basicInfo,
    amount: state.pendingTransactions.amount,
    reward: state.pendingTransactions.reward,
    rewardInfo: state.project.rewards[state.pendingTransactions.reward],
    errors: state.project.errors,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    createContribution: (contribution) => dispatch(createContribution(contribution)),
    clearPendingTransactions: () => dispatch(clearPendingTransactions()),
    clearErrors: () => dispatch(clearErrors()),
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContributionPayment);
