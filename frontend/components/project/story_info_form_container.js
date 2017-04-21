import StoryInfoForm from './story_info_form';
import { fetchStory, updateStory } from '../../actions/project_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    let action;

    if (state.project.story) {
      action = 'update';
    } else {
      action = "create";
    }

  return {
    story: state.project.story,
    action,
    projectId: ownProps.params.projectId,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStory: (project_id) => dispatch(fetchStory(project_id)),
    createStory: (story) => dispatch(createStory(story)),
    updateStory: (story) => dispatch(updateStory(story)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryInfoForm);
