import { useMoviesSearch } from './lib/hooks/useMoviesSearch';

const App = () => {
	const { movies, page, error, loading, setPage } = useMoviesSearch();
	if (loading) return <h1>Cargando...</h1>;
	if (error) return <p>{error}</p>;
	return (
		<div>
			<button onClick={() => setPage(page + 1)}>Página: {page}</button>
			{movies && movies.map(movie => <div key={movie.id}>{movie.title}</div>)}
		</div>
	);
};

export default App;
