import React from 'react';
import MiniProjectItem from './mini_project_index_item';

class AlmostFunded extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlmostFunded('almostFunded');
  }

  render() {
    return (
      <div className="mini-project-container">
        {
          this.props.almostFunded.map((project) => {
            return <MiniProjectItem project={project} />;
          })
        }
      </div>
    );
  }
}

export default AlmostFunded;
