import React, { Component } from 'react';
import { Link } from 'react-router';

class ProductsList extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }


  renderProducts(products) {
    return products.map((product) => {
      return (
        <li className="list-group-item" key={product._id}>
            <h3 className="list-group-item-heading">{product.name}</h3>
        </li>
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
        <ul className="list-group">
          {this.renderProducts(products)}
        </ul>
      </div>
    );
  }
}


export default ProductsList;
