import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import ProductsList from '../containers/ProductsListContainer.js';
import CategoriesList from '../containers/CategoriesListContainer.js';
import ModalCategory from '../containers/ModalCategoryContainer.js';
import ModalCategoryDelete from '../containers/ModalCategoryDeleteContainer.js';

class PostsIndex extends Component {


	constructor(props, context) {
	    super(props, context);

	    this.state = {
		    view: {showCategoryModal: false},
		    isCategoryUpdate: false,
		    showCategoryDeleteModal: false,
	    	category: {},
	    	removedCategory: {}
	    };
	    this.handleShowCategoryModal = this.handleShowCategoryModal.bind(this);
	    this.handleHideCategoryModal = this.handleHideCategoryModal.bind(this);
	    this.handleCategoryUpdate = this.handleCategoryUpdate.bind(this);
	    this.handleShowCategoryDeleteModal = this.handleShowCategoryDeleteModal.bind(this);
	    this.handleHideCategoryDeleteModal = this.handleHideCategoryDeleteModal.bind(this);
	    this.handleCategoryDelete = this.handleCategoryDelete.bind(this);
	}

    handleHideCategoryModal(){
    	this.setState({
    		view: {showCategoryModal: false},
    		isCategoryUpdate: false,
	    	category: {}
    	})
    }

    handleShowCategoryModal(){
    	this.setState({
    		view: {showCategoryModal: true},
    		isCategoryUpdate: false,
	    	category: {}
    	});
    }

    handleHideCategoryDeleteModal(){
    	this.setState({
    		showCategoryDeleteModal: false,
    	})
    }

    handleShowCategoryDeleteModal(){
    	this.setState({
    		showCategoryDeleteModal: true,
    	});
    }

    handleCategoryUpdate(category){
    	this.setState({
    		isCategoryUpdate: true,
    		category: category,
    		view: {showCategoryModal: true}
    	});
    }

    handleCategoryDelete(category){
    	this.setState({
    		showCategoryDeleteModal: true,
    		removedCategory: category
    	});
    }
 
	render() {
		let category = this.state.category;
		let removedCategory = this.state.removedCategory;
		let isCategoryUpdate = this.state.isCategoryUpdate;
	    return (
	      <div>
	        <HeaderContainer type="posts_index"/>
	        <div className="container">
	            <button className="btn btn-default" onClick={this.handleShowCategoryModal}>Add Category</button>
		        <button className="btn btn-default">Add Product</button>
               <button className="btn btn-default" onClick={this.handleShowCategoryDeleteModal}>Delete Category</button>

		        <div className="row">
		          <CategoriesList onUpdateCategory={this.handleCategoryUpdate} onDeleteCategory={this.handleCategoryDelete}/>
		          <ProductsList />
		        </div> 
	        </div>
	        {this.state.view.showCategoryModal ? <ModalCategory isCategoryUpdate={isCategoryUpdate} category={category} handleHideCategoryModal={this.handleHideCategoryModal}/> : null}
	        {this.state.showCategoryDeleteModal ? <ModalCategoryDelete category={removedCategory}  handleHideCategoryDeleteModal={this.handleHideCategoryDeleteModal}/> : null}
	      </div>
	    );
	  }
	}


export default PostsIndex;
