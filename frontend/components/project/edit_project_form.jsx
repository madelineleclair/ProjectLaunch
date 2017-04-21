import React from 'react';
import { Link } from 'react-router'

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
          <Link>
            <div>Basics</div>
          </Link>
          <Link>
            <div>Rewards</div>
          </Link>
          <Link>
            <div>Story</div>
          </Link>
          <button className="launch-project-button">
            <div>Launch project</div>
          </button>
        </section>
        <div className="basic-caption">
          <h1>Let's get started!</h1>
          <p>Make your project stand out with a captivating tite and image</p>
        </div>
        <form>
          <section>
            <input type="text"></input>
          </section>
          <section>
            <textarea />
          </section>
          <section>
            <button>Category</button>
          </section>
          <section>
            <input type="text"></input>
          </section>
          <section>Number of days
            <input type="text"></input>
          </section>
          <section>Funding goal
            <input type="text"></input>
          </section>
        </form>
      </div>
    )
  }
}

export default EditProjectForm;
