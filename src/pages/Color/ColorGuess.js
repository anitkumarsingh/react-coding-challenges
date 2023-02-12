import React, { useState, useEffect } from 'react';

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
		.fill('')
		.map(() => digits[Math.floor(Math.random() * digits.length)])
		.join('');
	return `#${color}`;
};

const ColorGuess = () => {
	const [currentColor, setCurrentColor] = useState('');
	const [answers, setAnswers] = useState([]);
	const [msg, setMsg] = useState('');

	useEffect(() => {
		const actualAns = generateRandomColor();
		setCurrentColor(actualAns);
		let options = [generateRandomColor(), generateRandomColor(), actualAns].sort((a, b) =>
			a > b ? 1 : -1
		);
		setAnswers(options);
	}, []);

	const checkForAnwser = (opt) => {
		console.log('curr', currentColor, opt);
		if (currentColor === opt) {
			setMsg('Correct Answer');
			setCurrentColor(generateRandomColor());
		} else setMsg('Wrong Answer');
	};

	return (
		<>
			<div className='color-guess' style={{ backgroundColor: currentColor }}></div>
			<br />
			{answers.map((ans) => (
				<button key={ans} onClick={() => checkForAnwser(`${ans}`)}>
					{ans}
				</button>
			))}

			{msg === 'Correct Answer' ? <p style={{ color: 'green' }}>Correct Answer</p> : null}
			{msg === 'Wrong Answer' ? <p style={{ color: 'red' }}>Wrong Answer</p> : null}
		</>
	);
};

export default ColorGuess;
