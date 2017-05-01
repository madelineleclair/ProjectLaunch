import React from 'react';
import NavigationBarContainer from './navigation/navigation_bar_container';
import CategoriesList from './categories/categories_list';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.viewCategories) {
      return (
        <div className="categories-list-container">
          <h1>Categories</h1>
          <ul>
            <CategoriesList fetchCategories={ this.props.fetchCategories }
              setViewCategories={ this.props.setViewCategories } />
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
