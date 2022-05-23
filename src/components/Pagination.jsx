import ArrowLeft from './icons/arrowLeft';
import ArrowRight from './icons/arrowRight';

const Pagination = ({ page, totalPages, setPage }) => {
	const isBackDisable = page === 1;
	const isNextDisable = page === totalPages;
	return (
		<div className='flex items-center gap-4'>
			<button
				className='bg-primary disabled:bg-gray p-1 rounded-full'
				disabled={isBackDisable}
				onClick={() => setPage(page - 1)}
			>
				<ArrowLeft className='h-5' />
			</button>
			<span>
				Pagina {page} de {totalPages}
			</span>
			<button
				className='bg-primary disabled:bg-gray p-1 rounded-full'
				disabled={isNextDisable}
				onClick={() => setPage(page + 1)}
			>
				<ArrowRight className='h-5' />
			</button>
		</div>
	);
};

export default Pagination;
