import React, { useState } from 'react';
import CustomModal from '../../components/Modal';

const Modal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpeningStatus = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<button onClick={toggleOpeningStatus}>{isOpen ? 'Close ' : 'Open '}Modal</button>
			{isOpen && (
				<CustomModal showHide={toggleOpeningStatus}>
					<div> This is custom modal build with portal</div>
				</CustomModal>
			)}
		</>
	);
};

export default Modal;
