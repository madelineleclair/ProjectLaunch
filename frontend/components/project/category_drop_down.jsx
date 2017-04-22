import React from "react";

class CategoryDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelected = this.handleSelected.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.setState = this.props.setState;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.category !== "" && this.props.category !== nextProps.category) {
      this.setState({ save: true });
    }
  }

  handleSelected() {
    let selected;
    if (this.props.selected) {
      selected = false;
    } else {
      selected = true;
    }
      this.setState({ selected });
  }

  selectCategory(e) {
    e.preventDefault();
    const category = e.target.innerText;
    this.setState({ category });
  }

  render() {

    let dropDown;

    if (this.props.selected) {
      dropDown = (
        <ul onClick={ this.selectCategory }>
          <li>Food</li>
          <li>Technology</li>
          <li>Games</li>
        </ul>
      );
    } else {
      dropDown = (<div></div>);
    }

    const category = this.props.category ? this.props.category : "Select a category"

    if (category !== "Select a category") {
      const $dbutton = $(".create-project-drop-down-button").addClass("selected");
    }

    return (
        <button className="category-drop-down-button" onClick={ this.handleSelected }>{ category }
          {dropDown}
        </button>
    );
  }
}

export default CategoryDropDown;
