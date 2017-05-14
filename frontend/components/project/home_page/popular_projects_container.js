import Popular from './popular_projects';
import { fetchPopular } from '../../../actions/project_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      popular: Object.values(state.projects.popular)
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPopular: (fetchType) => dispatch(fetchPopular(fetchType))
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Popular);
