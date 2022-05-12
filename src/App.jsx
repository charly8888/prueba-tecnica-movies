import MovieCard from './components/Moviecard';
import { useMoviesSearch } from './lib/hooks/useMoviesSearch';

const App = () => {
	const { movies, page, error, loading, setPage } = useMoviesSearch();
	if (loading) return <h1>Cargando...</h1>;
	if (error) return <p>{error}</p>;
	return (
		<div>
			<button onClick={() => setPage(page + 1)}>Página: {page}</button>
			<div className='container container-xl mx-auto flex flex-wrap'>
				{movies &&
					movies.map(movie => (
						<MovieCard
							key={movie.id}
							title={movie.title}
							image={movie.image}
							year={movie.year}
							rating={movie.rating}
						/>
					))}
			</div>
		</div>
	);
};

export default App;
