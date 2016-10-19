// actionCreators.js
export function getUserData(token) {
	return {
		type: 'GET_USER_DATA',
		token
	}
}

export function addComponent(componentName) {
	return {
		type: 'ADD_COMPONENT',
		component: componentName
	}
}