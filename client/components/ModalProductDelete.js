import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ModalProductDelete extends Component {

  constructor(props) {
    super(props);
    this.deleteProductHandler = this.deleteProductHandler.bind(this);
  }

  componentDidMount() {
    console.log('mounted delete');
    $(ReactDOM.findDOMNode(this)).modal('show');
    $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideProductDeleteModal);
  }

  static propTypes = {
    handleHideProductDeleteModal: React.PropTypes.func.isRequired
  }

  deleteProductHandler(event) {
    let product = this.props.product;
    this.props.deleteProduct(product._id);
    $(ReactDOM.findDOMNode(this)).modal('hide');
    this.props.handleHideProductDeleteModal();
  }


  render() {
    return (
      <div className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title">Delete Product</h4>
          </div>
          <div className="modal-body">
            Do you really want to delete this product?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" onClick={this.deleteProductHandler} className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default ModalProductDelete;
