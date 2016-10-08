// Data.js
import React from 'react';
import md5 from 'md5';
import { Link } from 'react-router';
import Collection from '../components/Collection';

export default class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [],
      collection_items: []
    }
    this.getCollections = this.getCollections.bind(this);
    this.getCollectionItems = this.getCollectionItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  componentDidMount() {
  	this.getCollections();
  	this.getCollectionItems();
  }

  getCollections() {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 200 && xhr.readyState === 4) {
				this.setState({collections: JSON.parse(xhr.responseText)});
			}			
		}
		xhr.open('GET', 'http://localhost:3000/api/collections');
		xhr.send();
	}

	getCollectionItems() {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 200 && xhr.readyState === 4) {
				// got all items, send them to render
				this.setState({collection_items: JSON.parse(xhr.responseText)});
			}			
		}
		xhr.open('GET', 'http://localhost:3000/api/collection_items');
		xhr.send();
	}

	addItem(e, id) {
		e.preventDefault();
		let form = e.target;

		let formData = gatherData(form);
		// define data object for http request
		let sendData = {};

		sendData.item_properties = [];
		sendData.item_properties.push(formData);
		sendData.collection_id = id;
		// HARD CODED, get real value from cookie
		sendData.user_id = 1;

		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 200 && xhr.readyState === 4) {
				this.getCollectionItems();
			}			
		}
		xhr.open('POST', 'http://localhost:3000/api/collection_item');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(sendData));

		function gatherData(form) {
			let data = {};
			form.childNodes.forEach((input) => {
				if (input !== form.lastChild) data[input.getAttribute('name')] = input.value;
			})
			return data;
		}
	}

	deleteItem(id) {
		let itemId = id;
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 200 && xhr.readyState === 4) {
				// this.getCollectionItems();
				this.setState({
	        collection_items: this.state.collection_items.filter(item => item._id !== id)
	      })
			}			
		}
		xhr.open('DELETE', 'http://localhost:3000/api/collection_item/' + itemId);
		xhr.send();	
	}

  render() {
  	let collections = this.state.collections.map(collection => {
  		let collectionItems = this.state.collection_items.filter(item => {
  			if (item.collection_id === collection._id) return item;
  		});
  		return <Collection key={collection._id} collection={collection} collectionItems={collectionItems} deleteItem={this.deleteItem} addItem={this.addItem} />;
  	})
    return (
    	<div>
	    	<h3>Collections</h3>
	    	<div id="data"></div>
	    	{ collections }
	    	<h5><Link to="/dashboard">dashboard</Link></h5>
    	</div>
    )
  }
}
