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

	deleteItem(id) {
		let that = this;
		let itemId = id;
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 200 && xhr.readyState === 4) {
				that.getCollectionItems();
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
  		return <Collection key={collection._id} collection={collection} collectionItems={collectionItems} deleteItem={this.deleteItem} />;
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
