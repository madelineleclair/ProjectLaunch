import React from 'react';
import { Link } from 'react-router';

class EditProjectForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProject(this.props.projectId);
  }

//check the links
  render() {
    return (
      <div className="edit-project-container">
        <section className="edit-project-page-buttons">
          <Link to={`/projects/edit/${this.props.projectId}/basicInfo`}>
            <div>Basics</div>
          </Link>
          <Link>
            <div>Rewards</div>
          </Link>
          <Link to={`/projects/edit/${this.props.projectId}/storyInfo`}>
            <div>Story</div>
          </Link>
          <button className="launch-project-button">
            <div>Launch project</div>
          </button>
        </section>
        { this.props.children }
      </div>
    )
  }
}

export default EditProjectForm;
