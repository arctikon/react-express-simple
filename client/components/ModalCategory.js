import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class ModalCategory extends Component {
  componentDidMount() {
    console.log('mounted');
    $(ReactDOM.findDOMNode(this)).modal('show');
    $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal);
  }

  static propTypes = {
    handleHideModal: React.PropTypes.func.isRequired
  }


  render() {

    return (
      <div className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title">Modal title</h4>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label for="exampleInputEmail1">Category Name</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"></input>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}


export default ModalCategory;
