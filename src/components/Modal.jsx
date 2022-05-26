import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import CrossIcon from './icons/CrossIcon';

const Modal = ({ children, closeModal }) => {
	useEffect(() => {
		document.body.classList.toggle('overflow-y-hidden');

		return () => {
			document.body.classList.toggle('overflow-y-hidden');
		};
	}, []);

	return createPortal(
		<div className=' flex justify-center items-center fixed inset-0 bg-overlay'>
			<div className='bg-bg p-4 relative max-w-4xl '>
				<button
					onClick={closeModal}
					className='bg-primary p-2 absolute top-0 left-0'
				>
					<CrossIcon className='w-8'/>
				</button>
				{children}
			</div>
		</div>,
		document.getElementById('modal-container')
	);
};

export default Modal;
