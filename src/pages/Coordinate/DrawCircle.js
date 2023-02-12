import React, { useState } from 'react';

const DrawCircle = () => {
	const [points, setPoints] = useState([]);
	const [popped, setPopped] = useState([]);

	const drawCircle = (e) => {
		console.log(e);
		const { clientX, clientY } = e;
		setPoints([
			...points,
			{
				x: clientX,
				y: clientY
			}
		]);
	};
	const undoPoints = () => {
		const newPoints = [...points];
		const poppedPoint = newPoints.pop();
		if (!poppedPoint) return;
		setPopped([...popped, poppedPoint]);
		setPoints(newPoints);
	};

	const redoPoints = () => {
		console.log('redo', popped, points);
		setPoints([...points, ...popped]);
	};
	return (
		<>
			<div style={{ zIndex: 99, position: 'absolute', top: 0, left: '50%' }}>
				<button disabled={points.length === 0} onClick={undoPoints}>
					Undo
				</button>
				<button disabled={popped.length === 0} onClick={redoPoints}>
					ReDo
				</button>
			</div>
			<div onClick={drawCircle} className='circle-container'>
				{points.map((point, idx) => (
					<div
						className='point'
						key={point.x + point.y + idx}
						style={{ top: point.y - 5 + 'px', left: point.x - 5 + 'px' }}></div>
				))}
			</div>
		</>
	);
};

export default DrawCircle;
