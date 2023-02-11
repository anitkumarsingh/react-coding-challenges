import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increament,decreament,increament_by,reset} from '../../redux/Actions/counter'

const Counter = () => {
  const dispatch = useDispatch();
	const { count } = useSelector((s) => s.counterReducer);
	return (
		<>
			<div>Counter:{count}</div>
      <button onClick={()=>{dispatch(increament())}}>INCREAMENT</button>
      <button onClick={()=>{dispatch(increament_by(10))}}>INCREAMENT_BY</button>
      <button onClick={()=>{dispatch(decreament())}}>DECREAMENT</button>
      <button onClick={()=>{dispatch(reset())}}>RESET</button>
		</>
	);
};

export default Counter;
