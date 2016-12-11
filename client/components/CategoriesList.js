import React, { Component } from 'react';
import { Link } from 'react-router';

class CategoriesList extends Component {

  constructor(props) {
    super(props);
    this.getProductsByCategory = this.getProductsByCategory.bind(this);
    this.updateCategoryHandler = this.updateCategoryHandler.bind(this);
    this.deleteCategoryHandler = this.deleteCategoryHandler.bind(this);
  }

  getProductsByCategory(event) {
    let categoryId = event.currentTarget.id;
    this.props.fetchProductsByCategory(categoryId);
  }

  updateCategoryHandler(event) {
    let categoryId = event.currentTarget.id;
    let categoryName = event.currentTarget.name;
    this.props.onUpdateCategory({_id: categoryId, name: categoryName});
  }

  deleteCategoryHandler(event) {
    let categoryId = event.target.getAttribute('data-id');
    this.props.onDeleteCategory({_id: categoryId});
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
            <li onClick={this.getProductsByCategory} id={category._id} key={category._id}>
              {category.name} 
              <button type="button" id={category._id} name={category.name} onClick={this.updateCategoryHandler} className="btn btn-primary">Edit</button>
              <button type="button" data-id={category._id} onClick={this.deleteCategoryHandler} className="btn btn-primary">Delete</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}


export default CategoriesList;
