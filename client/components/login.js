// login.js
(() => {
	'use strict'

	const loginForm = document.getElementById('login-form');
	
	loginForm.onsubmit = (e) => {
		e.preventDefault();
		const email = document.getElementById('login-email').value;
		const password = document.getElementById('login-password').value;
		
		let userData = {};
		userData.email = email;
		userData.password = password;

		verifyUser(userData);
	}

	function verifyUser(userData) {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 200 && xhr.readyState === 4) {
				console.log(JSON.parse(xhr.responseText));
				// redirect with user data
			}			
		}
		xhr.open('POST', '/login');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(userData));
	}
})();