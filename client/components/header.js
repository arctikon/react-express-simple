import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


class Header extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  
	renderLinks() {
		const { type, authenticatedUser } = this.props;
       return (
        <div className="container">
          <ul className="nav  nav-pills navbar-left">
      			<li style={{paddingRight: '10px'}} role="presentation">      
      				<Link style={{color:'#337ab7',  fontSize: '17px'}} to="/">
      				My app
    					</Link>
            </li>
    			</ul>
        </div>
  		 );

	};

	render() {
			return (
			 <nav className="navbar navbar-default navbar-static-top">
			      <div id="navbar" className="navbar-collapse collapse">
			      {this.renderLinks()}
	      		</div>     
			 </nav>				
			);
	}
}

export default Header