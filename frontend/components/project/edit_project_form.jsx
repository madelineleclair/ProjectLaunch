import React from 'react';
import { Link } from 'react-router';

class EditProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.launchProject = this.launchProject.bind(this);
  }

  componentDidMount() {
    this.props.getProject(this.props.projectId);
  }

  launchProject(e) {
    e.preventDefault()
    this.props.launchProject({ id: this.props.projectId, launch: true }).then(() => {
      this.props.router.push(`/projects/${this.props.projectId}`)
    })
  }

//check the links
  render() {
    return (
      <div className="edit-project-container">
        <section className="edit-project-page-buttons">
          <Link to={ `/projects/edit/${this.props.projectId}/basicInfo` }>
            <div>Basics</div>
          </Link>
          <Link to={ `/projects/edit/${this.props.projectId}/rewardsInfo` }>
            <div>Rewards</div>
          </Link>
          <Link to={`/projects/edit/${this.props.projectId}/storyInfo`}>
            <div>Story</div>
          </Link>
          <button onClick={this.launchProject} className="launch-project-button">
            <div>Launch project</div>
          </button>
        </section>
        { this.props.children }
      </div>
    );
  }
}

export default EditProjectForm;
