import { createPortal } from 'react-dom';

const Modal = ({ children, closeModal }) => {
	const asda_asasdad_ada = 123;

	return createPortal(
		<div className=' flex justify-center items-center fixed inset-0 bg-overlay'>
			<div className='bg-bg p-4 relative max-w-4xl '>
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
};

export default Modal;
