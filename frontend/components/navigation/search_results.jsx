import React from 'react';
import MiniProjectItem from '../project/home_page/mini_project_index_item'

const SearchResults = (props) => {
  const projects = props.projects.map((project) => {

    return <MiniProjectItem key={project.id} project = {project} />;
  });

  let text;
  if (projects.length === 0) {
    text = (
      <div className="search-length">
        <h2>
          Opps, looks like we couldn't find any results. Why not try broadening
          your search?
        </h2>
      </div>
    );
  } else {
    text = (
      <div className="search-length">
        <h1>Explore</h1>
        <h1>{ projects.length } projects</h1>
      </div>
    );
  }

  return (
    <div>
      <section className="search-results-container">
          { text }
        <ul className="search-results">
          { projects }
        </ul>
      </section>
    </div>
  );
};

export default SearchResults;
