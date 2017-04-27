import React from 'react';
import MiniProjectItem from './mini_project_index_item';

class AlmostFunded extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlmostFunded({fetchType: 'almostFunded'});
  }

  render() {
    const projects =  this.props.almostFunded.map((project) => {
        return <MiniProjectItem key={project.id} project={project} />;
      });

    return (
      <div className="almost-funded-container">
        <h3>Nearly funded</h3>
        <ul>
          {projects}
        </ul>
      </div>
    );
  }
}

export default AlmostFunded;
