import React, { useState, useEffect } from 'react';

const ColorGuess = () => {
	const [currentColor, setCurrentColor] = useState('');
	const [optionOne, setOptionOne] = useState(null);
	const [optionTwo, setOptionTwo] = useState(null);
	const [msg, setMsg] = useState('');

	const digits = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'A',
		'B',
		'C',
		'D',
		'E',
		'F'
	];
	const generateRandomColor = () => {
		const color = new Array(6)
			.fill(1)
			.map((i) => digits[Math.floor(Math.random(digits) * digits.length + 1)])
			.join('');
		return `#${color}`;
	};

	useEffect(() => {
		setCurrentColor(generateRandomColor());
		setOptionOne(generateRandomColor());
		setOptionTwo(generateRandomColor());
	}, [msg]);

	const checkForAnwser = (opt) => {
		if (currentColor === opt) {
			setMsg('Correct Answer');
		} else setMsg('Wrong Answer');
	};
	console.log('asdasasdasa', msg);
	return (
		<>
			<div className='color-guess' style={{ backgroundColor: currentColor }}></div>
			<br />
			<button onClick={() => checkForAnwser(`${currentColor}`)}>{currentColor}</button>
			<button onClick={() => checkForAnwser(`${optionTwo}`)}>{optionTwo}</button>
			<button onClick={() => checkForAnwser(`${optionOne}`)}>{optionOne}</button>
			{msg === 'Correct Answer' ? <p style={{ color: 'green' }}>Correct Answer</p> : null}
			{msg === 'Wrong Answer' ? <p style={{ color: 'red' }}>Wrong Answer</p> : null}
		</>
	);
};

export default ColorGuess;
