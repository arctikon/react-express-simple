import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import ProductsList from '../containers/ProductsListContainer.js';
import CategoriesList from '../containers/CategoriesListContainer.js';
import ModalCategory from '../containers/ModalCategoryContainer.js';
import ModalCategoryDelete from '../containers/ModalCategoryDeleteContainer.js';
import ModalProduct from '../containers/ModalProductContainer.js';
import ModalProductDelete from '../containers/ModalProductDeleteContainer.js';


class PostsIndex extends Component {


	constructor(props, context) {
	    super(props, context);

	    this.state = {
		    showCategoryModal: false,
		    isCategoryUpdate: false,
		    showCategoryDeleteModal: false,
		    showProductModal: false,
    		isProductUpdate: false,
    		showProductDeleteModal: false,
	    	product: {},
	    	category: {},
	    	removedCategory: {},
	    	removedProduct: {}
	    };
	    this.handleShowCategoryModal = this.handleShowCategoryModal.bind(this);
	    this.handleHideCategoryModal = this.handleHideCategoryModal.bind(this);
	    this.handleCategoryUpdate = this.handleCategoryUpdate.bind(this);
	    this.handleShowCategoryDeleteModal = this.handleShowCategoryDeleteModal.bind(this);
	    this.handleHideCategoryDeleteModal = this.handleHideCategoryDeleteModal.bind(this);
	    this.handleCategoryDelete = this.handleCategoryDelete.bind(this);
	    this.handleShowProductModal = this.handleShowProductModal.bind(this);
	    this.handleHideProductModal = this.handleHideProductModal.bind(this);
	    this.handleProductUpdate = this.handleProductUpdate.bind(this);

	    this.handleShowProductDeleteModal = this.handleShowProductDeleteModal.bind(this);
	    this.handleHideProductDeleteModal = this.handleHideProductDeleteModal.bind(this);
	    this.handleProductDelete = this.handleProductDelete.bind(this);
	}

    handleHideCategoryModal(){
    	this.setState({
    		showCategoryModal: false,
    		isCategoryUpdate: false,
	    	category: {}
    	})
    }

    handleShowCategoryModal(){
    	this.setState({
    		showCategoryModal: true,
    		isCategoryUpdate: false,
	    	category: {}
    	});
    }

    handleHideProductModal(){
    	this.setState({
    		showProductModal: false,
    		isProductUpdate: false,
	    	product: {}
    	})
    }

    handleShowProductModal(){
    	this.setState({
    		showProductModal: true,
    		isProductUpdate: false,
	    	product: {}
    	});
    }


    handleHideProductDeleteModal(){
    	this.setState({
    		showProductDeleteModal: false,
    	})
    }

    handleShowProductDeleteModal(){
    	this.setState({
    		showProductDeleteModal: true,
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
    		showCategoryModal: true
    	});
    }

    handleCategoryDelete(category){
    	this.setState({
    		showCategoryDeleteModal: true,
    		removedCategory: category
    	});
    }

    handleProductDelete(product){
    	this.setState({
    		showProductDeleteModal: true,
    		removedProduct: product
    	});
    }

    handleProductUpdate(product){
    	this.setState({
    		isProductUpdate: true,
    		product: product,
    		showProductModal: true
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
		        <button className="btn btn-default" onClick={this.handleShowProductModal}>Add Product</button>

		        <div className="row">
		          <CategoriesList onUpdateCategory={this.handleCategoryUpdate} onDeleteCategory={this.handleCategoryDelete}/>
		          <ProductsList onUpdateProduct={this.handleProductUpdate} onDeleteProduct={this.handleProductDelete} />
		        </div> 
	        </div>
	        {this.state.showCategoryModal ? <ModalCategory isCategoryUpdate={isCategoryUpdate} category={category} handleHideCategoryModal={this.handleHideCategoryModal}/> : null}
	        {this.state.showCategoryDeleteModal ? <ModalCategoryDelete category={removedCategory}  handleHideCategoryDeleteModal={this.handleHideCategoryDeleteModal}/> : null}
	        {this.state.showProductModal ? <ModalProduct isProductUpdate={this.state.isProductUpdate} product={this.state.product} handleHideProductModal={this.handleHideProductModal}/> : null}
	        {this.state.showProductDeleteModal ? <ModalProductDelete product={this.state.removedProduct}  handleHideProductDeleteModal={this.handleHideProductDeleteModal}/> : null}
	      </div>
	    );
	  }
	}


export default PostsIndex;
