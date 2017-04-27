import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search_term: "" };
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
  }

  handleSearchTerm() {
    const search_term = e.target.value;
    this.setState(search_term);
  }

  handleSubmit() {
    this.props.fetchProjects({ fetchType: "search", searchTerm: this.state.search_term });
  }

  render() {
    return (
      <div>
        <input value={this.state.search_term} />
      </div>
    );
  }
}

export default SearchBar;
