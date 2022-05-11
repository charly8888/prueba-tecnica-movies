import { useEffect, useState } from 'react';
import { SearchTrendingMovies } from './lib/api/SearchTrendingMovies';

const App = () => {
	const { movies, page, error, loading, setPage } = useMovies();
	if (loading) return <h1>Cargando...</h1>;
	if (error) return <p>{error}</p>;
	return (
		<div>
			<button onClick={() => setPage(page + 1)}>Página: {page}</button>
			{movies && movies.map(movie => <div key={movie.id}>{movie.title}</div>)}
		</div>
	);
};

const searchTrending = async (page, setMovies, setError, setLoading) => {
	setLoading(true);
	const { success, data, statusCode } = await SearchTrendingMovies(page);
	if (success) setMovies(data.movies);
	else {
		setMovies();
		setError(`Error: ${statusCode}`);
	}
	setLoading(false);
};

const useMovies = () => {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		searchTrending(page, setMovies, setError, setLoading);
	}, [page]);
	return { movies, page, error, loading, setPage };
};

export default App;
