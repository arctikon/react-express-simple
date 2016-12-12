import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class ModalProduct extends Component {

  constructor(props) {
    super(props);
    this.saveProductChangesHandler = this.saveProductChangesHandler.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.state = {value:  this.props.product.category_id};
  }

  componentWillMount() {
    this.props.fetchCategories();
  }

  componentDidMount() {
    console.log('mounted');
    $(ReactDOM.findDOMNode(this)).modal('show');
    $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideProductModal);
  }

  static propTypes = {
    handleHideProductModal: React.PropTypes.func.isRequired
  }

  handleCategoryChange(event) {
    this.setState({value: event.target.value});
  }

  saveProductChangesHandler(event) {
    let product = this.props.product;
    let productName = $('#product-name').val();
    let productPrice = $('#product-price').val();
    let productPurchPrice = $('#product-purch-price').val();
    let categoryId = $('#product-category').val();
    if(this.props.isProductUpdate){
      this.props.updateProduct({
        _id: product._id,
        name: productName,
        price: productPrice,
        purchasingPrice: productPurchPrice,
        category_id: categoryId
      });
    } else {
      this.props.createProduct({
        name: productName,
        price: productPrice,
        purchasingPrice: productPurchPrice,
        category_id: categoryId
      });
    } 
    $(ReactDOM.findDOMNode(this)).modal('hide');
    this.props.handleHideModal();
  }


  render() {
   let product = this.props.product;
   let categories = this.props.categoriesList.categories;

    return (
      <div className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title">Product</h4>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label for="exampleInputEmail1">Product Name</label>
              <input type="text" className="form-control" id="product-name" placeholder="Name" defaultValue={product.name} />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Product Category</label>
              <select id="product-category" value={this.state.value} className="form-control" onChange={this.handleCategoryChange}>
                <option>Choose category</option>
                {categories.map((category, i) =>
                  <option key={category._id} value={category._id}>{category.name}</option>
                )}
              </select>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Product Price</label>
              <input type="text" className="form-control" id="product-price" placeholder="Product Price" defaultValue={product.price} />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Product Purchase Price</label>
              <input type="text" className="form-control" id="product-purch-price" placeholder="Product Purchase Price" defaultValue={product.purchasingPrice} />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" onClick={this.saveProductChangesHandler} className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}


export default ModalProduct;
