import {
	API_IMAGE_LANDSCAPE_HOST,
	API_IMAGE_PORTRAIT_HOST
} from '../../constants/api';
import { GENRES_MOVIE } from '../../constants/genres';

const movieApiMapper = ({
	id,
	title,
	poster_path,
	release_date,
	overview,
	vote_average,
	backdrop_path,
	genre_ids
}) => {
	return {
		id,
		title,
		description: overview,
		image: `${API_IMAGE_PORTRAIT_HOST}${poster_path}`,
		landscapeImage: `${API_IMAGE_LANDSCAPE_HOST}${backdrop_path}`,
		year: new Date(release_date).getFullYear(),
		rating: vote_average,
		genres: genre_ids.map(genreId => GENRES_MOVIE[genreId])
	};
};

export default movieApiMapper;
