// signup.js
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
				console.log(data)
			createPost(data);
		} else {
			alert('title and post required');
		}
	}

	function createPost(data) {
		const req = new XMLHttpRequest();
		req.onreadystatechange = () => {
			if (req.status === 200 && req.readyState === 4) {
				console.log(JSON.parse(req.responseText));
				// redirect with user data
			}
		}
		req.open('POST', '/api/post', true);
		req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		req.send(JSON.stringify(data));
	}

})();  
console.log('we loaded')
