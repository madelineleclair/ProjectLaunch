import React from "react";

class NewProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={title: "", category: null, selected: false }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
  }

  handleTitle(e) {
    const title = e.target.value;
    this.setState({ title });
  }

  handleSelected() {
    let selected;
    if (this.state.selected) {
      selected = false;
    } else {
      selected = true;
    }
      this.setState({ selected });
  }

  selectCategory(e) {
    e.preventDefault()
    const category = e.target.innerText;
    this.setState({ category });
  }
  //handle submit needs to either redirect or not if not logged in
  //the return value of the create method needs to be the same as the update return, but I don't know what to do about the multiple titles in tables problem.
  handleSubmit(e) {
    e.preventDefault();
    const project = { title: this.state.title, category: this.state.category }
    if(this.props.loggedIn) {
      this.props.createProject(project).then(({ project }) => {
        this.props.router.push(`/projects/edit/${project.id}`)})
    }
  }

  render(){

    let dropDown;

    if (this.state.selected) {
      dropDown = (
        <ul onClick={ this.selectCategory }>
          <li>Food</li>
          <li>Technology</li>
          <li>Games</li>
        </ul>
      )
    } else {
      dropDown = <div></div>
    }

    const category = this.state.category ? this.state.category : "Select a category"

    if (category !== "Select a category") {
      const $dbutton = $(".create-project-drop-down-button").addClass("selected");
    }

    return(
      <div className="create-project-container">
        <div className="create-project-form-container">
          <h1>Get started</h1>
          <form className="create-project-form">
            <ol>
              <li className="drop-down">
                <p>Choose a category:</p>
                <button className="create-project-drop-down-button" onClick={ this.handleSelected }>{ category }
                  {dropDown}
                </button>
              </li>
              <li>
                <p>Give your project a title:</p>
                <input onChange={ this.handleTitle }type="text" placeholder="title..." value={this.state.title}/>
              </li>
            </ol>
            <button onClick={ this.handleSubmit }>Save and continue</button>
          </form>
        </div>

      </div>
    )
  }
}

export default NewProjectForm;
