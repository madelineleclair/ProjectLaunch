import React from 'react';
import MiniProjectItem from '../project/home_page/mini_project_index_item'

const SearchResults = (props) => {
  const projects = props.projects.map((project) => {
    debugger
    return <MiniProjectItem key={project.id} project = {project} />;
  });

  return (
    <div>
      <section className="search-results-container">
        <div className="search-length">
          <h1>Explore</h1>
          <h1>{ projects.length } projects</h1>
        </div>
        <ul className="search-results">
        { projects }
        </ul>
      </section>
    </div>
  );
};

export default SearchResults;
