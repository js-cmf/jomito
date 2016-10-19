// actionCreators.js
export function getUserData(token) {
	return {
		type: 'GET_USER_DATA',
		token
	}
}

export function getComponents(componentsNames) {
	return {
		type: 'GET_COMPONENTS',
		components: componentsNames
	}
}

export function addComponent(componentName) {
	return {
		type: 'ADD_COMPONENT',
		component: componentName
	}
}