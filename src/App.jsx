import MoviesGrid from './components/MoviesGrid';
import Pagination from './components/Pagination';
import { useMoviesSearch } from './lib/hooks/useMoviesSearch';

const App = () => {
	const {
		movies,
		searchTerm,
		page,
		error,
		loading,
		setPage,
		setSearchTerm,
		total_pages
	} = useMoviesSearch();

	return (
		<div className='container container-xl mx-auto '>
			<div className='flex justify-between items-center w-full p-4'>
				<input
				className='py-2 px-4 bg-transparent border border-white'
					type='text'
					value={searchTerm}
					onChange={ev => setSearchTerm(ev.target.value)}
					placeholder='Buscar...'
				/>
				<Pagination page={page} totalPages={total_pages} setPage={setPage} />
			</div>
			<MoviesGrid movies={movies} loading={loading} error={error} />
		</div>
	);
};

export default App;
