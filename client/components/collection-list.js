// collection-list.js
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

		let collectionTemplate = '<div id="collection' + collection._id + '" class="collection-container" data-collection-id=' + collection._id + '><h3 class="collection-title">' + collection.title + '<button onclick="deleteCollection(this)">delete collection</button></h3><div class="collection"><div class="collection-header"></div><div class="collection-data-row"></div></div><form class="addDataForm"></form><button onclick="addCollectionData(this)">Add Data</button></div>';
		let fields = collection.collection_properties[0];
		collectionsContainer.innerHTML += collectionTemplate;

		let collectionDiv = document.getElementById('collection' + collection._id)
		for(let field in fields) {
			let collectionHeaderCol = '<div class="collection-header-col">' + field + '</div>'
			let addDataInput = '<input name="' + field + '" placeholder="' + field + '" />'

			collectionDiv.getElementsByClassName('collection-header')[0].innerHTML += collectionHeaderCol;
			collectionDiv.getElementsByClassName('addDataForm')[0].innerHTML += addDataInput;
		}		
	});
}

function addCollectionData(e) {
	let collectionContainer = e.parentNode;
	let addDataForm = collectionContainer.getElementsByClassName('addDataForm')[0];
	let collectionId = collectionContainer.getAttribute('data-collection-id');

	let formData = gatherData(addDataForm);

	let sendData = {};

	sendData.item_properties = [];
	sendData.item_properties.push(formData);
	sendData.collection_id = collectionId;
	sendData.user_id = 1;

	
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if(xhr.status === 200 && xhr.readyState === 4) {
			console.log(xhr.responseText);
		}			
	}
	xhr.open('POST', '/api/collection_item');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(sendData));
}

function gatherData(form) {
	let data = {};
	form.childNodes.forEach((input) => {
		data[input.getAttribute('name')] = input.value;
	})
	return data;
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

getCollections();


