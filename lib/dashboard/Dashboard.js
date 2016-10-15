// Dashboard.js
import React from 'react';
import md5 from 'md5';
import { Link } from 'react-router';

export default class Dashboard extends React.Component {
  render() {
    return (
    	<div>
	    	<h1>synthesis dashboard</h1>
	    	<h5><Link to="/dashboard/data">data</Link></h5>
	    	<h5><Link to="/dashboard/posts">posts</Link></h5>
	    	{this.props.children}
    	</div>
    )
  }
}