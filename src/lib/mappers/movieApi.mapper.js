import { API_IMAGE_HOST } from '../../constants/api';

const movieApiMapper = ({
	id,
	title,
	poster_path,
	release_date,
	overview,
	vote_average,
	backdrop_path
}) => ({
	id,
	title,
	description: overview,
	image: `${API_IMAGE_HOST}${poster_path}`,
	landscapeImage: `${API_IMAGE_HOST}${backdrop_path}`,
	year: new Date(release_date).getFullYear(),
	rating: vote_average
});

export default movieApiMapper;
