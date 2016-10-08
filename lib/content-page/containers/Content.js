// Content.js
import React from 'react';
import md5 from 'md5';
import { Link } from 'react-router';

export default class Content extends React.Component {
  render() {
    return (
    	<div>
    		<h1>synthesis</h1>
    		<h5><Link to="/dashboard">dashboard</Link></h5>
    	</div>
    )
  }
}
