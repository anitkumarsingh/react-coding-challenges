import { INCREAMENT, INCREAMENT_BY, DECREAMENT, RESET } from '../Actions/types';

const INITIAL_STATE = {
	count: 0
};

export const counterReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case INCREAMENT:
			return {
				...state,
				count: state.count + 1
			};

		case INCREAMENT_BY:
			return {
				...state,
				count: state.count + action.payload
			};
		case DECREAMENT:
			return {
				...state,
				count: state.count - 1
			};
		case RESET:
			return { count: 0 };
		default:
			return state;
	}
};
