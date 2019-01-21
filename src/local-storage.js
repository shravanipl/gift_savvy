export const loadAuthToken = () => {
	console.log()
	return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
	try {
		localStorage.setItem('authToken', authToken);
	} catch (e) {
		console.log(e);
	}
};

export const clearAuthToken = () => {
	try {
		localStorage.removeItem('authToken');
	} catch (e) {
		console.log(e);
	}
};

// import { AsyncStorage } from 'react-native';

// export const saveAuthToken = async authToken => {
// 	try {
// 		await AsyncStorage.setItem('authToken', authToken);
// 	} catch (error) {
// 		// Error saving data
// 	}
// };
// export const loadAuthToken = async () => {
// 	try {
// 		const value = await AsyncStorage.getItem('authToken');
// 		if (value !== null) {
// 			// We have data!!
// 			return value;
// 		}
// 	} catch (error) {
// 		// Error retrieving data
// 	}
// };
