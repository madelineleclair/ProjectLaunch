import AlmostFunded from './almost_funded_projects';
import { fetchAlmostFunded } from '../../../actions/project_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    almostFunded: Object.values(state.projects.almostFunded)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlmostFunded: (fetchType) => dispatch(fetchAlmostFunded(fetchType))
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(AlmostFunded);
