// Content.js
import React from 'react';
import md5 from 'md5';
import { Link } from 'react-router';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.getAllPost = this.getAllPost.bind(this);
  }

  componentDidMount() {
  	this.getAllPost();
  }

	getAllPost() {
		const postList = document.getElementById('post-list');
		console.log('in get all post')

		var req = new XMLHttpRequest();
		req.open('GET', '/api/posts', true);
		req.onload = function() {
			if (req.status >= 200 && req.status < 400) {
				// Success!
				var data = JSON.parse(req.responseText);
				console.log(data);
				data.forEach(function (item) {
					let list = document.createElement("li");
					list.textContent = item.title;
					postList.appendChild(list);
					console.log(list);
				});
			} else {
				// We reached our target server, but it returned an error
				console.log('error dawg')
			}
		};

		req.onerror = function() {
			// There was a connection error of some sort
		};

		req.send();
	};

  render() {
    return (
    	<div>
    		<h1>synthesis</h1>
    		<br />
				<ul id="post-list"></ul>
    		<br />
    		<h5><Link to="/dashboard">dashboard</Link></h5>
    	</div>
    )
  }
}
