// actionCreators.js
export function getUserData(token) {
	return {
		type: 'GET_USER_DATA',
		token
	}
}

export function getComponents() {
	console.log('getting components')
	return {
		type: 'GET_COMPONENTS'
	}
}

export function addComponent(componentName) {
	return {
		type: 'ADD_COMPONENT',
		component: componentName
	}
}