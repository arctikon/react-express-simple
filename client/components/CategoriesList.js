import React, { Component } from 'react';
import { Link } from 'react-router';

class CategoriesList extends Component {
  componentWillMount() {
    //this.props.fetchPosts();
  }


  /*renderPosts(posts) {
    return posts.map((post) => {
      return (
        <li className="list-group-item" key={post._id}>
          <Link style={{color:'black'}} to={"posts/" + post._id}>
            <h3 className="list-group-item-heading">{post.name}</h3>
          </Link>
        </li>
      );
    });
  } */

  render() {
    /*const { posts, loading, error } = this.props.postsList;

    if(loading) {
      return <div className="container"><h1>Categories</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    } */

    return (
      <div className="col-md-3">
        <h1>Categories</h1>
        <ul className="list-group">
          <li>Category 2</li>
        </ul>
      </div>
    );
  }
}


export default CategoriesList;
