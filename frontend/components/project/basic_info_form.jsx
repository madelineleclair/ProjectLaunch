import React from 'react';

class BasicInfoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { project_image: "", title: "",  description: "", category: "",
      location: "", duration: "", goal: 0 };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBlurb = this.handleBlurb.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleDuration = this.handleDuration.bind(this);
    this.handleGoal = this.handleGoal.bind(this);
    }

    componentDidMount() {
      this.props.getProject(this.props.projectId).then(({ project }) => {
        const project_image = project.project_image || ""
        const title = project.title || ""
        const description = project.description || ""
        const category = project.category || ""
        const location = project.location || ""
        const duration = project.duration || ""
        const goal = project.goal || 0

        this.setState({ project_image, title, description, category, location,
          duration, goal});
      });
    }

    handleTitle(e) {
      const title = e.target.value
      this.setState({ title });
    }

    handleBlurb(e) {
      const description = e.target.value
      this.setState({ description });
    }

    handleLocation(e) {
      const location = e.target.value
      this.setState({ location });
    }

    handleDuration(e) {
      const duration = e.target.value
      this.setState({ duration });
    }

    handleGoal(e) {
      const goal = e.target.value
      this.setState({ goal });
    }

    handleUpdate(e) {
      this.updateProject(this.state)
    }

  render() {
    return (
      <div>
        <div className="basic-caption">
          <h1>Let's get started!</h1>
          <p>Make your project stand out with a captivating tite and image</p>
        </div>
        <form>
          <section>Image
            <input className="project-image-selector" type='file'></input>
          </section>
          <section>Product Title
            <input type="text" value={this.state.title}></input>
          </section>
          <section>Short blurb
            <textarea value={this.state.description}/>
          </section>
          <section>
            <button>{this.state.category}</button>
          </section>
          <section>Location
            <input type="text" value={this.state.location}></input>
          </section>
          <section>Number of days
            <input type="text" value={ this.state.duration }></input>
          </section>
          <section>Funding goal
            <input type="text" value={this.state.goal}></input>
          </section>
        </form>
      </div>
    );
  }
}

export default BasicInfoForm;
