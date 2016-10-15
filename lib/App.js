// App.js
import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

	checkToken() {
		let token = localStorage.getItem('token');
		console.log(token)
		if(token) {
			return <h5><Link to="/dashboard/posts">dashboard</Link></h5>
		}
	}

  render() {
  	let token = this.checkToken();

    return (
    	<div>
    		<nav className="main-nav">
    			<div className="main-nav-logo">
    				<h1>synthesis</h1>
    			</div>
    			<div className="main-nav-links">
    				<h5><Link to="/login">login</Link></h5>
    				<h5><Link to="/content">home</Link></h5>
    				{token}
    			</div>
    		</nav>
    		<div className="main-container">
					{this.props.children}
				</div>
    	</div>
    )
  }
}
