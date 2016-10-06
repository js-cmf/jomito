// post.js
(() => {
	'use strict'

	// const postData = document.getElementById('post-data');
	
	// postData.onsubmit = (e) => {
	// 	e.preventDefault();
	// 	const title = document.getElementById('post-title').value;
	// 	const body = document.getElementById('post-body').value;
	// 	const status = document.getElementById('post-status-display').textContent;
	// 	const type = document.getElementById('post_type').value;
	// 	const user = 'Mario';
	// 	const imgUrl = [];
	// 	const videoEmbed = [];
	// 	// const publishDate = document.getElementById().value;
	// 	console.log('we executed')
	// 	if (title !== '' && body !== '') {
	// 		let data = {};
	// 		data.title = title;
	// 		data.body = body;
	// 		data.status = status;
	// 		data.post_type = type;
	// 		data.user_id = user; 
	// 			console.log(data)
	// 		createPost(data);
	// 	} else {
	// 		alert('title and post required');
	// 	}
	// }

	function createPost(data) {
		const req = new XMLHttpRequest();
		req.onreadystatechange = () => {
			if (req.status === 200 && req.readyState === 4) {
				console.log(req.responseText);
				// redirect with user data
			}
		}
		req.open('POST', '/api/post', true);
		req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		req.send(JSON.stringify(data));
	}
	// const a = document.getElementById('test-btn');
	// a.onclick = getAllPost;
	const posts = document.getElementById('post-list');
	// console.log(posts)
	function getAllPost() {
		console.log('in get post')
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
					posts.appendChild(list);
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
	getAllPost();
	// function 	
	

	

})();
console.log('we loaded')

