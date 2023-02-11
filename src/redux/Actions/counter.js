import { INCREAMENT, INCREAMENT_BY, DECREAMENT, RESET } from './types';

const increament = () => ({ type: INCREAMENT });
const decreament = () => ({ type: DECREAMENT });
const increament_by = (value) => ({ type: INCREAMENT_BY, payload: value });
const reset = () => ({ type: RESET });

export { increament, decreament, increament_by, reset };
