import React, { Component } from 'react';
import { Link } from 'react-router';

class ProductsList extends Component {

  constructor(props) {
    super(props);
    this.updateProductHandler = this.updateProductHandler.bind(this);
    this.deleteProductHandler = this.deleteProductHandler.bind(this);
  }

  componentWillMount() {
    this.props.fetchProducts();
  }

  updateProductHandler(event) {
    this.props.onUpdateProduct({
      _id: event.target.getAttribute('data-id'), 
      name: event.target.getAttribute('data-name'),
      price: event.target.getAttribute('data-price'),
      category_id: event.target.getAttribute('data-category'),
      purchasingPrice: event.target.getAttribute('data-purch-price')
    });
  }

  deleteProductHandler(event) {
    let categoryId = event.target.getAttribute('data-id');
    this.props.onDeleteProduct({_id: categoryId});
  }



  renderProducts(products) {
    return products.map((product) => {
      return (
      <tr key={product._id}> 
        <td>{product.productId}</td> 
        <td>{product.name}</td> 
        <td>{product.price}</td> 
        <td>{product.purchasingPrice}</td>
        <td>
          <button type="button" data-id={product._id} data-name={product.name} data-category={product._category} data-purch-price={product.purchasingPrice} data-price={product.price} onClick={this.updateProductHandler} className="btn btn-primary">Edit</button>
          <button type="button" data-id={product._id} onClick={this.deleteProductHandler} className="btn btn-primary">Delete</button>
        </td>
      </tr>
      );
    });
  }


  render() {
    const { products, loading, error } = this.props.productsList;

    if(loading) {
      return <div className="container"><h1>Products</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div className="col-md-9">
        <h1>Products</h1>
        <div className="table-responsive">
          <table className="table">
            <thead> 
              <tr> 
                <th>ID</th> 
                <th>Name</th> 
                <th>Price</th> 
                <th>Purchasing price</th>
                <th></th>
              </tr>
            </thead>
            <tbody> 
              {this.renderProducts(products)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


export default ProductsList;
