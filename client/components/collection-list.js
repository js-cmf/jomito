// collection-list.js
(() => {
	'use strict'

	const collectionsContainer = document.getElementById('collection-list-container');

	function getCollections() {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 200 && xhr.readyState === 4) {
				renderCollectionData(JSON.parse(xhr.responseText));
			}			
		}
		xhr.open('GET', '/api/collections');
		xhr.send();
	}

	function renderCollectionData(data) {
		console.log(data)
		data.forEach((collection) => {

		let collectionTemplate = '<div class="collection-container" data-collection-id=' + collection._id + '><h3 class="collection-title">' + collection.title + '<button onclick="deleteCollection(this)">delete collection</button></h3><div id="collection' + collection._id + '"class="collection"><div class="collection-header"></div><div class="collection-data-row"></div></div><button onclick="addCollectionData(this)">Add Data</button></div>';

		collectionsContainer.innerHTML += collectionTemplate;

			let fields = collection.collection_properties[0];
			for(let field in fields) {
				let collectionHeaderCol = '<div class="collection-header-col">' + field + '</div>'
				document.getElementById('collection' + collection._id).getElementsByClassName('collection-header')[0].innerHTML += collectionHeaderCol;
			}		
		});
	}

	getCollections()
})();

function addCollectionData(e) {
	let collectionId = e.parentNode.getAttribute('data-collection-id');
	console.log(collectionId)
}

function deleteCollection(e) {
	let collectionId = e.parentNode.parentNode.getAttribute('data-collection-id');

	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if(xhr.status === 200 && xhr.readyState === 4) {
			console.log(xhr.responseText);
		}			
	}
	xhr.open('DELETE', '/api/collection/' + collectionId);
	xhr.send();
}



