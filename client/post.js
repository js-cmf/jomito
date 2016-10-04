// signup.js
(() => {
	'use strict'

	const postData = document.getElementById('post-data');
	
	postData.onsubmit = (e) => {
		e.preventDefault();
		const title = document.getElementById().value;
		const body = document.getElementById().value;
		const status = document.getElementById().value;
		const type = document.getElementById().value;
		const user = document.getElementById().value;
		const imgUrl = document.getElementById().value;
		const videoEmbed = document.getElementById().value;
		const publishDate =

	}

	const request = new XMLHttpRequest();
	request.open('POST', '/my/url', true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	request.send(data);

	const data = {};




})();  
