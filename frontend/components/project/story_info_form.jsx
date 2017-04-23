import React from 'react';

class StoryInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {video_url: "", description: "", risks_and_challenges: "", save: false};
    this.handleDescription = this.handleDescription.bind(this);
    this.handleRisksAndChallenges = this.handleRisksAndChallenges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    const story = this.props.story;
    if (story) {
      this.props.fetchStory(story.id).then(({ story }) => this.setState({story}))
    }
  }

  handleDescription(e) {
    const description = e.target.value
    this.setState({description})
  }

  handleRisksAndChallenges() {
    const risks_and_challenges = e.target.value;
    this.setState({risks_and_challenges});
  }

  handleSubmit(e) {
    e.preventDefault();
    const story = Object.assign({}, this.state);
    story.project_id = this.props.projectId;
    let action;
    if (this.props.action === 'create') {
      action = this.props.createStory;
    } else {
      action = this.props.updateStory;
    }
    action(story).then(() => this.setState({save: false}));
  }

  handleSave(e) {
    const save = true
    this.setState({save})
  }

  render() {

    const saveButton = this.state.save ? <button onClick={this.handleUpdate}>Save</button> : <div></div>

    return(
      <div className="story-info-container">
        <div className="story-caption">
          <h1>Let us know about your project</h1>
          <p>Spice up you project with videos and exciting details about your project so people can learn more about it</p>
        </div>
        <section className="form-and-side-bar">
          <form className="basic-info-form">
            <section>
              <label>Project video</label>
              <input type="file"></input>
              <p>Make your project stand out. Projects with videos receive higher amounts of funding.</p>
            </section>
            <section>
              <label>Project description</label>
              <textarea onChange={ this.handleDescription } value={this.state.description}></textarea>
            </section>
            <section>
              <label>Risks and challenges</label>
              <p>Every project comes with a unique set of risks and challenges. Let your backers know how you plan to overcome these them.</p>
              <textarea onChange={ this.handleRisksAndChallenges }value={this.state.risks_and_challenges}></textarea>
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
