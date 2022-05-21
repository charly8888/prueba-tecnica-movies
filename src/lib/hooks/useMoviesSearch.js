import { useEffect, useReducer } from 'react';
import { searchMoviesApi } from '../api/searchMoviesApi';
import {
	moviesSearchReducer,
	MOVIES_SEARCH_ACTIONS,
	MOVIES_SEARCH_INITIAL_STATE
} from '../reducers/moviesSearch.reducer';

const searchMovies = async (
	search,
	page,
	searchSuccess,
	searchError,
	startSearch
) => {
	startSearch();

	const { success, data, statusCode } = await searchMoviesApi(search, page);

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
	const setSearchTerm = searchTerm =>
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SET_SEARCH_TERM,
			searchTerm
		});

	useEffect(() => {
	const timeoutId = 	setTimeout(
			() =>
				searchMovies(
					moviesSearch.searchTerm,
					moviesSearch.page,
					searchSuccess,
					searchError,
					startSearch
				),
			200
		);
		return ()=> clearTimeout(timeoutId)
	}, [moviesSearch.page, moviesSearch.searchTerm]);
	return { ...moviesSearch, setPage, setSearchTerm };
};
