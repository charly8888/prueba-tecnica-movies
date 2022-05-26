import { API_HOST } from '../../constants/api.js';
import movieApiMapper from '../mappers/movieApi.mapper.js';

const SEARCH_PATH = '/search/movie';
const TRENDING_MOVIES_PATH = '/trending/movie/day';
export const searchMoviesApi = async (query, page) => {
	const endpoint = query
		? `${API_HOST}${SEARCH_PATH}?api_key=${
				import.meta.env.VITE_API_KEY
		  }&page=${page}&query=${query}`
		: `${API_HOST}${TRENDING_MOVIES_PATH}?api_key=${
				import.meta.env.VITE_API_KEY
		  }&page=${page}`;

	try {
		const response = await fetch(endpoint);

		if (response.ok) {
			const { results: movies, total_pages: totalPages } =
			await response.json();
			// console.log(movies);
			return {
				success: true,
				data: {
					movies: movies.map(movie => movieApiMapper(movie)),
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
