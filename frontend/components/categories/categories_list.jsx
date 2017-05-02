import React from 'react';
import { Link } from 'react-router';

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state ={ categoryNames: [], categoryInfo: null };
    this.handleViewCategories = this.handleViewCategories.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories().then((action) => {
      const categoryNames = Object.keys(action.categories);
      const categoryInfo = action.categories;
      this.setState({ categoryNames: categoryNames, categoryInfo: categoryInfo});
    });
  }

  handleViewCategories() {
    this.props.setViewCategories(false)
  }

  render() {
    // const categoryInfo = this.state.categoryInfo;

    let categories;
    if (this.state.categoryInfo) {
      categories = this.state.categoryNames.sort().map((name, index) => {
        return(
          <li key = { index }>
            <Link onClick = { this.handleViewCategories } to = { `/categories/${name}` }>{name}</Link>
          </li>
        )
      })
    }

    return (
      <div>{categories}</div>
    )
  }
}

export default CategoriesList
