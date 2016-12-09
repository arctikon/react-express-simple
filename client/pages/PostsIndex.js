import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import ProductsList from '../containers/ProductsListContainer.js';
import CategoriesList from '../components/CategoriesList.js';
import ModalCategory from '../components/ModalCategory.js';

class PostsIndex extends Component {


	constructor(props, context) {
	    super(props, context);

	    this.state = {
	      view: {showModal: false}
	    };
	    this.handleShowModal = this.handleShowModal.bind(this);
	    this.handleHideModal = this.handleHideModal.bind(this);
	}

    handleHideModal(){
    	this.setState({view: {showModal: false}})
    }

    handleShowModal(){
    	this.setState({view: {showModal: true}})
    }
 
	render() {
	    return (
	      <div>
	        <HeaderContainer type="posts_index"/>
	        <div className="container">
	            <button className="btn btn-default" onClick={this.handleShowModal}>Add Category</button>
		        <button className="btn btn-default" onClick={this.handleShowModal}>Add Product</button>

		        <div className="row">
		          <CategoriesList />
		          <ProductsList />
		        </div> 
	        </div>
	        {this.state.view.showModal ? <ModalCategory handleHideModal={this.handleHideModal}/> : null}
	      </div>
	    );
	  }
	}


export default PostsIndex;
