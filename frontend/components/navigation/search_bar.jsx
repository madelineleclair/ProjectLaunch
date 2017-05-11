import React from 'react';
import { hashHistory } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search_term: "" };
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeSearchStatus = this.changeSearchStatus.bind(this);
  }

  handleSearchTerm(e) {
    const search_term = e.target.value;
    this.setState({ search_term });
  }

  changeSearchStatus(e) {
    this.props.changeSearchBarStatus(false);
  }

  handleSubmit() {
    this.props.fetchProjects({ fetchType: "search",
    searchTerm: this.state.search_term })
    .then((() => {
      hashHistory.push('/projects/search-results');}).bind(this));
      this.props.changeSearchBarStatus(false);
      this.setState({ search_term: "" });
  }

  render() {
    return (
      <div className="search-bar-container nav-bar">
        <img src="https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/magnifying_glass_icon.png" />
        <form className="search-form">
          <input onChange= { this.handleSearchTerm } type="text" placeholder="Search..." value={ this.state.search_term } />
          <input onClick = {this.handleSubmit} type="submit" />
        </form>
        <button onClick= { this.changeSearchStatus }>X</button>
      </div>
    );
  }
}

export default SearchBar;
