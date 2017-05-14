import React from 'react';
import MiniProjectItem from './mini_project_index_item';

class Popular  extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPopular({fetchType: 'popular'});
  }

  render() {
    const projects =  this.props.popular.map((project) => {
        return <MiniProjectItem key={project.project_id} project={project} />;
      });

    return (
      <div className="popular-projects-container">
        <h3>Most popular projects</h3>
        <ul>
          {projects}
        </ul>
      </div>
    );
  }
}

export default Popular;
