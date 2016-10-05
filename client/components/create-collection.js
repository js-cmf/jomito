// create-collection.js
(() => {
	'use strict'

	const createCollectForm = document.getElementById('create-collection-form');
	const addPropertyBtn = document.getElementById('collection-add-property-btn');
	const createCollectFormSubmit = document.getElementById('create-collection-form-submit');

	function addCollectionProperty(e) {
		e.preventDefault();
		let newProp = document.createElement('input');
		createCollectForm.insertBefore(newProp, addPropertyBtn);
	}

	function submitCollection(e) {
		e.preventDefault();
		console.log('submitting collection')
	}

	(function createEventListeners() {
		createCollectFormSubmit.addEventListener('click', submitCollection);
		addPropertyBtn.addEventListener('click', addCollectionProperty);
	})();
})();