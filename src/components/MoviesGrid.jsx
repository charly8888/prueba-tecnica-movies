
import MovieCard from './Moviecard';

const MoviesGrid = ({ movies , error , loading}) => {


	if (error) return <p>{error}</p>;
	if (loading) return <h1>Cargando...</h1>;

	return (
		<div className='container container-xl mx-auto flex flex-wrap'>
			{movies?.map(movie => (
				<MovieCard
					key={movie.id}
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
