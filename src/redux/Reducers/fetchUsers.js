import { IS_FETCHING, FETCH_SUCCESS, FETCH_FAILED } from '../Actions/types';

const INITIAL_STATE = {
	users: []
};
export const fetchUsersReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case IS_FETCHING:
			return {
				...state,
				users: action.payload,
				isLoading: true
			};
		case FETCH_SUCCESS:
			return {
				...state,
				users: action.payload,
				isLoading: false
			};
		case FETCH_FAILED:
			return {
				...state,
				users: action.payload,
				isLoading: false,
				error: true
			};

		default:
			return state;
	}
};
