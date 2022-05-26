import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';

const Pagination = ({ page, totalPages, setPage }) => {
	if (!totalPages) return null;
	
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
