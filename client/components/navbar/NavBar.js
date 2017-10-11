import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
	render() {
		return(
			<div className="top-bar">
			  <div className="top-bar-left">
			    <ul className=" menu">
			      <li className="menu-text"><Link to="/">My Real React App</Link></li>
			      
			    </ul>
			  </div>
			  <div className="top-bar-right">
				<Link to="/signin">Signin</Link>
			  </div>
			 
			</div>
		);
	}
}

export default NavBar;