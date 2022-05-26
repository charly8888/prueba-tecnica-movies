import MovieCard from './Moviecard';

const MoviesGrid = ({ movies, error, loading, setPreviewMovie }) => {
	if (error) return <p>{error}</p>;
	if (loading) return <h1>Cargando...</h1>;

	return (
		<div className=' flex flex-wrap'>
			{movies?.map(movie => (
				<MovieCard
					key={movie.id}
					onClick={() => setPreviewMovie(movie)}
					title={movie.title}
					image={movie.image}
					year={movie.year}
					rating={movie.rating}
				/>
			))}
		</div>
	);
};

export default MoviesGrid;
