import MoviesGrid from './components/MoviesGrid';
import { useMoviesSearch } from './lib/hooks/useMoviesSearch';

const App = () => {
	const { movies, searchTerm, page, error, loading, setPage, setSearchTerm } =
		useMoviesSearch();

	return (
		<div>
			<input
				type='text'
				value={searchTerm}
				onChange={ev => setSearchTerm(ev.target.value)}
				placeholder='Buscar...'
			/>
			{}
			<MoviesGrid movies={movies} loading={loading} error={error} />
			<button onClick={() => setPage(page + 1)}>Página: {page}</button>
		</div>
	);
};

export default App;
