import React from 'react';

const MiniProjectItem = (props) => {
  const project = props.project;
  return (
    <div className="mini-project-container">
      <img src={project.image_url} />
      <h4>{project.title}</h4>
      <p>{project.owner}</p>

    </div>
  );
};

export default MiniProjectItem;
