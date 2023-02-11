import { IS_FETCHING, FETCH_SUCCESS, FETCH_FAILED } from './types';
import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
	try {
		dispatch({ type: IS_FETCHING, payload: [] });
		const request = await axios.get('https://jsonplaceholder.typicode.com/users');
		const result = await request.data;
		dispatch({ type: FETCH_SUCCESS, payload: result });
	} catch (error) {
		dispatch({ type: FETCH_FAILED, payload: [] });
	}
};

export const register = (name, email, password) => async (dispatch) => {
	try {
		dispatch({ type: IS_FETCHING });
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const { data } = await axios.post('someUrl', { name, email, password }, config);
		localStorage.setItem('user', JSON.stringify(data));
		dispatch({ type: FETCH_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: FETCH_FAILED });
	}
};

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: 'LOGIN_REQUEST' });

		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		const { data } = await axios.post('someUrl', { email, password }, config);
		dispatch({ type: 'LOGIN_SUCCESS', payload: data });
	} catch (error) {
		dispatch({
			type: 'LOGIN_FAILED',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};
