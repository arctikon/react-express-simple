import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class ModalCategory extends Component {

  constructor(props) {
    super(props);
    this.saveCategoryChangesHandler = this.saveCategoryChangesHandler.bind(this);
    this.state = {
      error: false,
      errorText: ''
    };
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).modal('show');
    $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideCategoryModal);
  }

  static propTypes = {
    handleHideCategoryModal: React.PropTypes.func.isRequired
  }

  saveCategoryChangesHandler(event) {
    let category = this.props.category;
    let categoryName = $('#category-name').val();
    if(categoryName.trim().length == 0){
      this.state = {
        error: true,
        errorText: 'Fill out name of category'
      };
      this.forceUpdate();
      return;
    }
    if(this.props.isCategoryUpdate){
      this.props.updateCategory({
        _id: category._id,
        name: categoryName
      });
    } else {
      this.props.createCategory({name: categoryName});
    } 
    $(ReactDOM.findDOMNode(this)).modal('hide');
    this.props.handleHideModal();
  }


  render() {
   let category = this.props.category;
    return (
      <div className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title">Category</h4>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label for="exampleInputEmail1">Category Name</label>
              <input type="text" className="form-control" id="category-name" placeholder="Name" defaultValue={category.name} />
            </div>

            {this.state.error ? 
              <div className="alert alert-danger">
                <strong>Error!</strong> {this.state.errorText}
              </div> 
            :
             false}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" onClick={this.saveCategoryChangesHandler} className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}


export default ModalCategory;
