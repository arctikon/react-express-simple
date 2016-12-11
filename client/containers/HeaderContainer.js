import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header.js';



function mapStateToProps(state) {
  return {
    authenticatedUser: 'authenticated'
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
