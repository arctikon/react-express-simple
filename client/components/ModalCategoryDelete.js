import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ModalCategoryDelete extends Component {

  constructor(props) {
    super(props);
    this.deleteCategoryHandler = this.deleteCategoryHandler.bind(this);
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).modal('show');
    $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideCategoryDeleteModal);
  }

  static propTypes = {
    handleHideCategoryDeleteModal: React.PropTypes.func.isRequired
  }

  deleteCategoryHandler(event) {
    let category = this.props.category;
    this.props.deleteCategory(category._id);
    $(ReactDOM.findDOMNode(this)).modal('hide');
    this.props.handleHideCategoryDeleteModal();
  }


  render() {
    return (
      <div className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title">Delete Category</h4>
          </div>
          <div className="modal-body">
            Do you really want to delete this category?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" onClick={this.deleteCategoryHandler} className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default ModalCategoryDelete;
