// collection-list.js
'use strict'

// get main collection list container
const collectionsContainer = document.getElementById('collection-list-container');

// http request to get all collections
function getCollections() {
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if(xhr.status === 200 && xhr.readyState === 4) {
			// collections have return, pass them to render function
			renderCollectionList(JSON.parse(xhr.responseText));
		}			
	}
	xhr.open('GET', '/api/collections');
	xhr.send();
}

// renders list of collection
// along with header row each collections properties
function renderCollectionList(data) {
	// for each collection
	data.forEach((collection) => {
		// define the template for each collection group
		let collectionTemplate = '<div id="collection' + collection._id + '" class="collection-container" data-collection-id=' + collection._id + '><h3 class="collection-title">' + collection.title + '<button onclick="deleteCollection(this)">delete collection</button></h3><div class="collection"><div class="collection-header"></div><div class="collection-data"></div><form class="addDataForm"></form><button onclick="addCollectionData(this)">Add Data</button></div>';
		// get data object containing this collection properties
		let fields = collection.collection_properties[0];
		// add the collection template to the main collections list
		collectionsContainer.innerHTML += collectionTemplate;

		// newly rendered collection group
		let collectionDiv = document.getElementById('collection' + collection._id)

		// loop through the properties in this collection
		// for each property create a header field for the table,
		// along with an input field for the form to add data to this collection
		for(let field in fields) {
			let collectionHeaderCol = '<div class="collection-header-col">' + field + '</div>'
			let addDataInput = '<input name="' + field + '" placeholder="' + field + '" />'

			collectionDiv.getElementsByClassName('collection-header')[0].innerHTML += collectionHeaderCol;
			collectionDiv.getElementsByClassName('addDataForm')[0].innerHTML += addDataInput;
		}
	});

	// go get the data from all collections
	getCollectionData();
}

// http request to get data from all collections
function getCollectionData() {
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if(xhr.status === 200 && xhr.readyState === 4) {
			// got all items, send them to render
			renderCollectionData(JSON.parse(xhr.responseText));
		}			
	}
	xhr.open('GET', '/api/collection_items');
	xhr.send();
}

// render data items inside its collection
function renderCollectionData(data){
	// for each data item
	data.forEach((item) => {
		// get the collection that this item belongs to 
		let collectionDiv = document.getElementById('collection' + item.collection_id);
		// create a new data row
		let itemRow = document.createElement('div');
		// get properties/values object for this item
		let itemProps = item.item_properties[0]

		// for each property create a new cell and append to the data row
		for (let property in itemProps) {
			let collectionCol = '<div class="collection-header-col">' + itemProps[property] + '</div>'
			itemRow.innerHTML += collectionCol;
		}
		// append row to the collection
		collectionDiv.getElementsByClassName('collection-data')[0].appendChild(itemRow);
	});
}

// when user clicks add item, this retreives values from the form
// and sends to server
function addCollectionData(e) {
	// get the affected collection
	let collectionContainer = e.parentNode.parentNode;
	// get the form 
	let addDataForm = collectionContainer.getElementsByClassName('addDataForm')[0];
	let collectionId = collectionContainer.getAttribute('data-collection-id');

	// pass for to function that gathers data into object
	let formData = gatherData(addDataForm);
	// define data object for http request
	let sendData = {};

	sendData.item_properties = [];
	sendData.item_properties.push(formData);
	sendData.collection_id = collectionId;
	// HARD CODED, get real value from cookie
	sendData.user_id = 1;

	
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if(xhr.status === 200 && xhr.readyState === 4) {
			console.log('data saved successfully');
		}			
	}
	xhr.open('POST', '/api/collection_item');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(sendData));
}

// take in a form, 
// loop through the inputs and bundle their data into an output object
function gatherData(form) {
	let data = {};
	form.childNodes.forEach((input) => {
		data[input.getAttribute('name')] = input.value;
	})
	return data;
}


// delete a collection from database
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

// start it off, go get the collections
getCollections();


