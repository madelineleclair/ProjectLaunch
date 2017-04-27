import AlmostFunded from './almost_funded_projects';
import { fetchAlmostFunded } from '../../../actions/project_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

  // Object.keys(state.projects.almostFunded).map(id => projects[id])
    return {
      almostFunded: Object.values(state.projects.almostFunded)
    };
    // if (state.projects.almostFunded.projects) {
    //   return {
    //     almostFunded: state.projects.almostFunded.projects
    //   };
    // } else {
    //   return {
    //     almostFunded: []
    //   };
    // }
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
