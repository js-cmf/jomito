// create-collection.js
(() => {
	'use strict'

	const createCollectForm = document.getElementById('create-collection-form');
	const addPropertyBtn = document.getElementById('collection-add-property-btn');
	const createCollectFormSubmit = document.getElementById('create-collection-form-submit');

	function addCollectionProperty(e) {
		e.preventDefault();
		let newPropElem = document.createElement('fieldset');
		newPropElem.innerHTML = '<input type="text" name="collection-property" placeholder="Collection property" /><select class="collection-property-type"><option value="string">text</option><option value="number">number</option><option value="boolean">boolean</option></select>';
		createCollectForm.insertBefore(newPropElem, addPropertyBtn);
	}

	function gatherCollectionData() {
		let collectionData = {};
		const propertiesArr = createCollectForm.getElementsByTagName('fieldset');
		const collectionTitle = document.getElementById('collection-title').value;
		let collectionProperties = {};

		for (let i = 0; i < propertiesArr.length; i++) {
			let propertyName = propertiesArr[i].getElementsByTagName('input')[0].value;
			let propertyType = propertiesArr[i].getElementsByTagName('select')[0].value;
			collectionProperties[propertyName] = propertyType;
		}
		// mock user
		collectionData.user_id = 1;
		// end mock user
		collectionData.title = collectionTitle;
		collectionData.properties = [];
		collectionData.properties.push(collectionProperties);
		return collectionData;
	}

	function submitCollection(e) {
		e.preventDefault();
		let collectionData = gatherCollectionData();
		console.log(collectionData)

		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 200 && xhr.readyState === 4) {
				console.log(xhr.responseText);
			}			
		}
		xhr.open('POST', '/api/collection');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(collectionData));
	}

	(function createEventListeners() {
		createCollectFormSubmit.addEventListener('click', submitCollection);
		addPropertyBtn.addEventListener('click', addCollectionProperty);
	})();
})();