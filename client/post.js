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

	}

	const request = new XMLHttpRequest();
	request.open('POST', '/my/url', true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	request.send(data);

	const data = {};




})();  
