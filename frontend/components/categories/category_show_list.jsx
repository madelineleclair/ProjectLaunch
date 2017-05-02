import React from 'react';
import MiniProjectItem from '../project/home_page/mini_project_index_item';

class CategoryShowList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {projects: []};

  }

  componentDidMount() {
    this.props.fetchProjects({categoryType: this.props.categoryType, fetchType: 'category' })
    .then((action) => {
      const projects = Object.values(action.projects);
      this.setState({projects});
    });
  }

  render() {
    const projects = this.state.projects.map((project) => {

      return <MiniProjectItem key = { project.project_id } project = {project} />
    })

    const text = projects.length === 1 ? "project" : "projects"

    return (
      <div className="search-results-container">
        <div className="search-results-caption">
          <h1>Explore </h1>
          <h1 className="search-results-number">{ this.props.numberProjects }</h1>
          <h1>{ this.props.categoryType } {text}</h1>
        </div>
        <ul className="search-results">{projects}</ul>
      </div>
    )
  }
}

export default CategoryShowList;
