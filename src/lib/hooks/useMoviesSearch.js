import { useEffect, useReducer } from 'react';
import { SearchTrendingMovies } from '../api/SearchTrendingMovies';
import {
	moviesSearchReducer,
	MOVIES_SEARCH_ACTIONS,
	MOVIES_SEARCH_INITIAL_STATE
} from '../reducers/moviesSearch.reducer';

const searchTrending = async (
	page,
	searchSuccess,
	searchError,
	startSearch
) => {
	startSearch();

	const { success, data, statusCode } = await SearchTrendingMovies(page);

	if (success) searchSuccess(data.movies);
	else searchError(`Error: ${statusCode}`);
};

export const useMoviesSearch = () => {
	const [moviesSearch, setMoviesSearch] = useReducer(
		moviesSearchReducer,
		MOVIES_SEARCH_INITIAL_STATE
	);

	const startSearch = () =>
		setMoviesSearch({ type: MOVIES_SEARCH_ACTIONS.START_SEARCH });

	const searchSuccess = movies =>
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SEARCH_SUCCESS,
			movies
		});

	const searchError = error =>
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SEARCH_ERROR,
			error
		});

	const setPage = page =>
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SET_PAGE,
			page
		});

	useEffect(() => {
		searchTrending(moviesSearch.page, searchSuccess, searchError, startSearch);
	}, [moviesSearch.page]);
	return { ...moviesSearch, setPage };
};
