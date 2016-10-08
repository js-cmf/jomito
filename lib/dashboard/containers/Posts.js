// Posts.js
import React from 'react';
import md5 from 'md5';
import { Link } from 'react-router';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  render() {
    return (
    	<div>
	    	<h1>posts</h1>
	    	<h5><Link to="/dashboard">dashboard</Link></h5>
    	</div>
    )
  }
}