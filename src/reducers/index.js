const initialState = {
	urlActive: '',
	urlPrev: '',
	idActive: null,
	nameActive: '',
	isSearching: false,
	searchQuery: '',
	isBuffering: false,
	searchType: '',
	faviconActive: '',
	nightMode: false
};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case 'URL_LOADED':
			return {
				...state,
				urlActive: action.payload
			};

		case 'ID_SET':
			return {
				...state,
				idActive: action.payload
			};

		case 'NAME_SET':
			return {
				...state,
				nameActive: action.payload
			};

		case 'FAVICON_SET':
			return {
				...state,
				faviconActive: action.payload
			};


		case 'TYPE_SET':
			return {
				...state,
				searchType: action.payload
			};

		case 'SEARCH_QUERY_UPDATED':
			return {
				...state,
				searchQuery: action.payload
			};

		case 'SEARCH_STATE':
			return {
				...state,
				isSearching: action.payload
			};

		case 'BUFFERING_STATE':
			return {
				...state,
				isBuffering: action.payload
			};

		case 'NIGHTMODE_STATE':
			return {
				...state,
				nightMode: action.payload
			};

		default:
			return state;
	}

};

export default reducer;