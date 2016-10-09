,// post.js
(() => {
	'use strict'

	const postData = document.getElementById('post-data');
	
	postData.onsubmit = (e) => {
		e.preventDefault();
		const title = document.getElementById('post-title').value;
		const body = document.getElementById('post-body').value;
		const status = document.getElementById('post-status-display').textContent;
		const type = document.getElementById('post_type').value;
		const user = 'Mario';

		const imgUrl = [];
		const videoEmbed = [];
		// const publishDate = document.getElementById().value;
		console.log('we executed')
		if (title !== '' && body !== '') {
			let data = {};
			data.title = title;
			data.body = body;
			data.status = status;
			data.post_type = type;
			data.user_id = user; 
			data.uri = createUri(title);
				console.log(data)
			createPost(data);
		} else {
			alert('title and post required');
		}
	}
	
	function createUri(str) {
		return str.replace(/ /g,"-");
	}

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

	

	const posts = document.getElementById('post-list');
	// console.log(posts)
	function getAllPost() {
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
	const a = document.getElementById('get-post');
	a.onclick = getSinglePost;
	function getSinglePost(id) {
		console.log('in get single post')
		var req = new XMLHttpRequest();
		req.open('GET', '/api/post/' + id, true);
		req.onload = function() {
			if (req.status >= 200 && req.status < 400) {
				// Success!
				var data = JSON.parse(req.responseText);
				console.log(data);
				
				const title_container = document.getElementById('title');
				let title = document.createElement("h2");
				title.textContent = data.title;
				title_container.appendChild(title);

				const body_container = document.getElementById('body');
				let body = document.createElement("p");
				body.textContent = data.body;
				body_container.appendChild(body);

				const type_container = document.getElementById('post-type');
				let type = document.createElement("li");
				type.textContent = data.post_type[0];
				type_container.appendChild(type);

				const status_container = document.getElementById('post-status');
				let status = document.createElement("li");
				status.textContent = data.status;
				status_container.appendChild(status);
				
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
	
	

})();
console.log('we loaded')

