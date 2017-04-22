import React from 'react';

class BasicInfoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { project_image: "", title: "",  description: "", category: "",
      location: "", duration: undefined, goal: 0, save: false };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBlurb = this.handleBlurb.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleDuration = this.handleDuration.bind(this);
    this.handleGoal = this.handleGoal.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
      this.props.getProject(this.props.projectId).then(({ project }) => {
        const project_image = project.project_image || ""
        const title = project.title || ""
        const description = project.description || ""
        const category = project.category || ""
        const location = project.location || ""
        const duration = project.duration || 0
        const goal = project.goal || 0
        const save = false

        this.setState({ project_image, title, description, category, location,
          duration, goal, save});
      });
    }


    handleTitle(e) {
      e.preventDefault();
      const title = e.target.value
      this.setState({ title });
    }

    handleBlurb(e) {
      e.preventDefault();
      const description = e.target.value
      this.setState({ description });
    }

    handleLocation(e) {
      e.preventDefault();
      const location = e.target.value
      this.setState({ location });
    }

    handleDuration(e) {
      e.preventDefault();
      const duration = e.target.value
      this.setState({ duration });
    }

    handleGoal(e) {
      e.preventDefault();
      const goal = e.target.value
      this.setState({ goal });
    }

    handleUpdate(e) {
      const properties = Object.assign({}, this.state, {id:
        this.props.router.params.projectId})
      this.props.updateProject(properties).then(() => this.setState({save: false}))
    }

    handleSave(e) {
      const save = true
      this.setState({save})
    }

  render() {
    //this might take up space, maybe consider chaning if it does if appear when suppose to be empty
    const saveButton = this.state.save ? <button onClick={this.handleUpdate}>Save</button> : <div></div>

    return (
      <div className="basic-info-container">
        <div className="basic-caption">
          <h1>Let's get started!</h1>
          <p>Make your project stand out with a captivating tite and image</p>
        </div>
        <section className="form-and-side-bar">
          <form onChange={this.handleSave} className="basic-info-form">
            <section>
              <label>Product image</label>
              <input className="project-image-selector" type='file'></input>
            </section>
            <section>
              <div className="product-title">
                <label>Prodouct title</label>
                <input onChange={this.handleTitle}type="text" value={this.state.title}></input>
              </div>
              <div className="caption-text">
                <p>We use the keywords in your title to optimize searchs. Descriptive make it easier for people to find your project</p>
              </div>
            </section>
            <section>
              <div className="short-blurb">
                <label>Short blurb</label>
                <textarea onChange={this.handleBlurb} value={this.state.description}/>
              </div>
              <div className="caption-text">
                <p>Peak people's interest by giving them a sense of what your doing</p>
              </div>
            </section>
            <section>
              <button>{this.state.category}</button>
            </section>
            <section className="basic-info-location">
              <div>
                <label>Location</label>
                <input onChange={this.handleLocation} type="text" placeholder="City and state" value={this.state.location}></input>
              </div>
            </section>
            <section>
              <div className="duration">
                <label>Duration</label>
                <input onChange={this.handleDuration} type="number" placeholder="Number of days"value={ this.state.duration }></input>
              </div>
              <div className="caption-text">
                <p>Projects must have a duration that is fewer than 60 days, but projects that are 30 or less tend to perform the best </p>
              </div>
            </section>
            <section>
              <div className="funding-goal">
                <label>Funding goal</label>
                <input onChange={this.handleGoal} type="number" value={this.state.goal}></input>
              </div>
              <div className="caption-text">
                <p>Funding is all or nothing on Project Launch. Make a goal that  is reasonable and that you think you can achieve</p>
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

export default BasicInfoForm;