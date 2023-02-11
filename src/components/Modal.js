import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ children, showHide, title }) => {
	return ReactDOM.createPortal(
		<div className='modalContainer'>
			<div className='modal' onClick={(e) => e.stopPropagation()}>
				<header className='modal_header'>
					<h2>{title || 'Custom Modal'}</h2>
					<div className='close' onClick={showHide}>
						&times;
					</div>
				</header>
				<main className='modal_content'>{children}</main>
				<footer className='modal_footer'>
					<button className='submit'>Submit</button>
					<button className='close' onClick={showHide}>
						Cancel
					</button>
				</footer>
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
