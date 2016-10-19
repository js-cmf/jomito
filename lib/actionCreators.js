// actionCreators.js

export function getUserData(token) {
	return {
		type: 'GET_USER_DATA',
		token
	}
}