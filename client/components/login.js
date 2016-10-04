// login.js
(() => {
	'use strict'

	const loginForm = document.getElementById('login-form');
	
	loginForm.onsubmit = (e) => {
		e.preventDefault();
		const email = document.getElementById('login-email').value;
		const password = document.getElementById('login-password').value;		
		verifyUser(email, password);
	}

	function verifyUser(email, password) {
		// ajax request to api
	}
})();