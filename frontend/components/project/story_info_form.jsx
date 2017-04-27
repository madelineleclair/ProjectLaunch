import React from 'react';
import DisplayErrors from './display_errors';

class StoryInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "", risks_and_challenges: "", save: false, project_id: this.props.projectId, imageFile: "", imageUrl: null};
    this.handleDescription = this.handleDescription.bind(this);
    this.handleRisksAndChallenges = this.handleRisksAndChallenges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    const story = this.props.story;
    if (story) {
      this.props.fetchStory(story.id).then(({ story }) => this.setState({story}))
    }
  }

  componentWillUnmount() {

    this.props.clearErrors();
  }

  handleDescription(e) {
    const description = e.target.value
    this.setState({description})
  }

  handleRisksAndChallenges(e) {
    const risks_and_challenges = e.target.value;
    this.setState({risks_and_challenges});
  }

  updateFile(e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    debugger
    fileReader.onloadend = function () {
      debugger
      this.setState({ imageFile: file, imageUrl: fileReader.result })
    }.bind(this)
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  handleSubmit(e) {
    debugger
    e.preventDefault();
    // const story = Object.assign({}, this.state);
    // story.project_id = this.props.projectId;
    let action;

    if (this.props.action === 'create') {
      action = this.props.createStory;
    } else {
      action = this.props.updateStory;
    }
    var formData = new FormData();
    formData.append("project[image]", this.state.imageFile)
    formData.append("story[description]", this.state.description)
    formData.append("story[risks_and_challenges]", this.state.risks_and_challenges)
    formData.append("story[project_id]", this.state.project_id)

    action(formData).then(() => this.setState({save: false}));
  }

  handleSave(e) {
    const save = true
    this.setState({save})
  }

  render() {

    const saveButton = this.state.save ? <button onClick={this.handleSubmit}>Save</button> : <div></div>

    return(
      <div className="story-info-container">
        <div className="story-caption">
          <h1>Let us know about your project</h1>
          <p>Spice up you project with videos and exciting details about your project so people can learn more about it</p>
        </div>
        <section className="form-and-side-bar">
          <form onChange={this.handleSave} className="basic-info-form">
            <DisplayErrors errors={this.props.errors} />
            <section className="project-video">
              <div className="project-video-label-and-input">
                <label>Project video</label>
                <input onChange={ this.updateFile } className="project-video-selector" type="file" />
              </div>
              <div className="caption-text">
                <p>This picture will be displayed on the main portion of your funding page. Make your project
                stand out and give users and idea of what you're doing</p>
              </div>
            </section>
            <section>
              <div className="story-description">
                <label>Project description</label>
                <textarea onChange={ this.handleDescription } value={this.state.description}></textarea>
              </div>
            </section>
            <section>
              <div className="risks-and-challenges">
                <label>Risks and challenges</label>
                <textarea onChange={ this.handleRisksAndChallenges }value={this.state.risks_and_challenges}></textarea>
              </div>
              <div className="caption-text">
                <p>Every project comes with a unique set of risks and challenges. Let your backers know how you plan to overcome these them.</p>
              </div>
            </section>
          </form>
        </section>
        <section className="save-button">
          <div>
            {saveButton}
          </div>
        </section>
      </div>
    );
  }
}

export default StoryInfoForm;
