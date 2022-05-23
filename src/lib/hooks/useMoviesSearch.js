import { useEffect, useReducer, useRef } from 'react';
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

	if (success) searchSuccess(data.movies, data.totalPages);
	else searchError(`Error: ${statusCode}`);
};

export const useMoviesSearch = () => {
	const [moviesSearch, setMoviesSearch] = useReducer(
		moviesSearchReducer,
		MOVIES_SEARCH_INITIAL_STATE
	);
	const isInitialized = useRef(false);
	const startSearch = () =>
		setMoviesSearch({ type: MOVIES_SEARCH_ACTIONS.START_SEARCH });

	const searchSuccess = (movies, total_pages) =>
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SEARCH_SUCCESS,
			movies,
			total_pages
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
		const searchTimeOut = () =>
			searchMovies(
				moviesSearch.searchTerm,
				moviesSearch.page,
				searchSuccess,
				searchError,
				startSearch
			);
		if (!isInitialized.current) {
			searchTimeOut();
			isInitialized.current = true;
		} else {
			const timeoutId = setTimeout(searchTimeOut, 200);
			return () => clearTimeout(timeoutId);
		}
	}, [moviesSearch.page, moviesSearch.searchTerm]);
	return { ...moviesSearch, setPage, setSearchTerm };
};
