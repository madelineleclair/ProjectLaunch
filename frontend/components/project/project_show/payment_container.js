import { connect } from 'react-redux';
import ContributionPayment from "./contribution_payment";

const mapStateToProps = (state, ownProps) => {

  return {
    basicInfo: state.project.basicInfo
  };
};

const mapDispatchToProps = (state, ownProps) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContributionPayment);
