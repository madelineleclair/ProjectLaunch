import StoryInfoForm from './story_info_form';
import { fetchStory, updateStory, createStory, clearErrors } from '../../actions/project_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    let action;

    if (state.project.story.id) {
      action = 'update';
    } else {
      action = "create";
    }

  return {
    story: state.project.story,
    action,
    projectId: ownProps.params.projectId,
    errors: state.project.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStory: (project_id) => dispatch(fetchStory(project_id)),
    createStory: (story) => dispatch(createStory(story)),
    updateStory: (story) => dispatch(updateStory(story)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryInfoForm);
