const TRENDING_MOVIES_PATH = '/trending/movie/day';
import { API_HOST } from '../../constants/api.js';
import movieApiMapper from '../mappers/movieApiMapper.js';
export const SearchTrendingMovies = async page => {
	try {
		const response = await fetch(
			`${API_HOST}${TRENDING_MOVIES_PATH}?api_key=${
				import.meta.env.VITE_API_KEY
			}&page=${page}`
		);

		// console.log(response);
		if (response.ok) {
			const { results: movies, total_pages: totalPages } =
				await response.json();
			return {
				success: true,
				data: {
					movies: movies.map(movie =>movieApiMapper(movie)),
					totalPages
				}
			};
		}
		return {
			success: false,
			statusCode: response.status
		};
	} catch (err) {
		// console.log(err);
		return { success: false, code: 500 };
	}
};
