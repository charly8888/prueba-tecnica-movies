import { createPortal } from 'react-dom';

const Modal = ({ children, closeModal }) =>
	createPortal(
		<div className=' flex justify-center items-center fixed inset-0 bg-overlay'>
			<div className='bg-bg p-4 relative'>
				{children}
				<button
					onClick={closeModal}
					className='bg-primary p-1 absolute -top-2 -left-2'
				>
					X
				</button>
			</div>
		</div>,
		document.getElementById('modal-container')
	);

export default Modal;
