// Content.js
import React from 'react';
import { Link } from 'react-router';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	posts: []
    }
    this.getAllPost = this.getAllPost.bind(this);
  }

  componentDidMount() {
  	this.getAllPost();
  }

	getAllPost() {
		const postList = document.getElementById('post-list');
		console.log('in get all post', this)
		let that = this;

		var req = new XMLHttpRequest();
		req.open('GET', '/api/posts', true);
		req.onload = function() {
			if (req.status >= 200 && req.status < 400) {
				// Success!
				var data = JSON.parse(req.responseText);
				that.setState({posts: data});
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

	checkToken() {
		let token = localStorage.getItem('token');
		console.log(token)
		if(token) {
			return <h5><Link to="/dashboard/posts">dashboard</Link></h5>
		}
	}

  render() {
  	let token = this.checkToken();
  	let posts = this.state.posts.map(post => {
  		return (
	  		<div key={post._id}>
	  			<h4>{ post.title }</h4>
	  			<p>{ post.body }</p>
	  			<br />
	  		</div>
  		)
  	})

    return (
    	<div>
    		<h1>synthesis</h1>
    		<h5><Link to="/login">login</Link></h5>
    		{token}
    		<br />
				{ posts }
    		<br />
    	</div>
    )
  }
}
