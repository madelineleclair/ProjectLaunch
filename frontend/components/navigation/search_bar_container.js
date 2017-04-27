import SearchBar form './search_bar';

const mapStateToProps = (state) => {
  debugger
  return {
    projects: state.projects
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    fetchProjects: (fetch) => dispatch(fetch(projects(fetch)))
  }
}
