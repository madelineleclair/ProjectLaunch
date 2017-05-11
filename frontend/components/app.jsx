import React from 'react';
import NavigationBarContainer from './navigation/navigation_bar_container';
import CategoriesList from './categories/categories_list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.resetCategoryView = this.resetCategoryView.bind(this);
  }

  resetCategoryView() {
    this.props.setViewCategories(false);
  }

  render() {

    if (this.props.viewCategories) {
      return (
        <div className="categories-list-container">
          <div className = "categories-and-remove-button">
            <h1>Categories</h1>
            <button onClick = { this.resetCategoryView }>X</button>
          </div>
          <ul>
            <CategoriesList fetchCategories = { this.props.fetchCategories }
              setViewCategories = { this.props.setViewCategories } />
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <NavigationBarContainer />
          { this.props.children }
        </div>
      )
    }
  }
};

export default App;
