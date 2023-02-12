import React, { useState } from 'react';

const ImageSlider = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const sliderImage = [
		'https://cdn.pixabay.com/photo/2017/04/05/01/13/light-2203687_960_720.jpg',
		'https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_960_720.jpg',
		'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_960_720.jpg'
	];

	const changeImageIndex = (moveDirection) => {
		if (currentImageIndex === sliderImage.length - 1 && moveDirection === 'next') {
			setCurrentImageIndex(0);
		} else if (moveDirection === 'next') {
			setCurrentImageIndex(currentImageIndex + 1);
		} else if (moveDirection === 'prevoius') {
			setCurrentImageIndex(currentImageIndex - 1);
		}
	};
	console.log(currentImageIndex);
	return (
		<>
			<div>
				<img
					src={`${sliderImage[currentImageIndex]}`}
					alt='slider'
					style={{ width: '600px' }}
				/>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: '12px'
					}}>
					<div>
						<button onClick={() => changeImageIndex('prevoius')}>Previous Slide</button>
					</div>
					<div>
						<button onClick={() => changeImageIndex('next')}>Next Slide</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageSlider;
