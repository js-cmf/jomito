// Content.js
import React from 'react';
import { Link } from 'react-router';
// import components
import PostFeed from './post/containers/PostFeed';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	posts: []
    }
    // this.getAllPost = this.getAllPost.bind(this);
  }

 //  componentDidMount() {
 //  	this.getAllPost();
 //  }

	// getAllPost() {
	// 	const postList = document.getElementById('post-list');
	// 	let that = this;

	// 	var req = new XMLHttpRequest();
	// 	req.open('GET', '/api/posts', true);
	// 	req.onload = function() {
	// 		if (req.status >= 200 && req.status < 400) {
	// 			// Success!
	// 			var data = JSON.parse(req.responseText);
	// 			that.setState({posts: data});
	// 		} else {
	// 			// We reached our target server, but it returned an error
	// 			console.log('error dawg')
	// 		}
	// 	};

	// 	req.onerror = function() {
	// 		// There was a connection error of some sort
	// 	};
	// 	req.send();
	// };

  render() {
  	// let posts = this.state.posts.map(post => {
  	// 	return (
	  // 		<div className="content-page-post" key={post._id}>
	  // 			<h4>{ post.title }</h4>
	  // 			<p>{ post.body }</p>
	  // 			<br />
	  // 		</div>
  	// 	)
  	// })

    return (
    	<PostFeed />
    )
  }
}
