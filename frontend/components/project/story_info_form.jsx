import React from 'react';

class StoryInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {video_url: "", description: "", risks_and_challenges: ""};
    this.handleDescription = this.handleDescription.bind(this);
    this.handleRisksAndChallenges = this.handleRisksAndChallenges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    if (this.props.action === 'create') {
      this.props.createStory(this.state);
    } else {
      this.props.updateStory(this.state);
    }
  }

  render() {
    return(
      <div>
        <form>
          <section>Project Video
            <input type="file"></input>
            <p>Make your project stand out. Projects with videos receive higher amounts of funding.</p>
          </section>
          <section>Project Description
            <textarea>{this.state.description}</textarea>
          </section>
          <section>Risks and challenges
            <p>Every project comes with a unique set of risks and challenges. Let your backers know how you plan to overcome these them.</p>
            <textarea>{this.state.risks_and_challenges}</textarea>
          </section>
        </form>
      </div>
    );
  }
}

export default StoryInfoForm;
