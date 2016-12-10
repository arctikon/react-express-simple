import React, { Component } from 'react';
import { Link } from 'react-router';

class CategoriesList extends Component {

  constructor(props) {
    super(props);
    this.getProductsByCategory = this.getProductsByCategory.bind(this);
  }

  getProductsByCategory(event) {
    let categoryId = event.currentTarget.id;
    this.props.fetchProductsByCategory(categoryId);
  }

  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    //console.log('categoriesList', this.props);
    const { categories, loading, error } = this.props.categoriesList;

    if(loading) {
      return <div className="container"><h1>Categories</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    } 

    return (
      <div className="col-md-3">
        <h1>Categories</h1>
        <ul className="list-group">
          {categories.map((category, i) =>
            <li onClick={this.getProductsByCategory} id={category._id} key={category._id}>{category.name}</li>
          )}
        </ul>
      </div>
    );
  }
}


export default CategoriesList;
