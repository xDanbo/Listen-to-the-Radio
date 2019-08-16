const setUrl = (url) => {
	return {
		type: 'URL_LOADED',
		payload: url
	};
};

const setId = (id) => {
	return {
		type: 'ID_SET',
		payload: id
	};
};

const setName = (name) => {
	return {
		type: 'NAME_SET',
		payload: name
	};
};

const setFavicon = (favicon) => {
	return {
		type: 'FAVICON_SET',
		payload: favicon
	};
};

const setSearchType = (type) => {
	return {
		type: 'TYPE_SET',
		payload: type
	};
};

const updateSearchQuery = (query) => {
	return {
		type: 'SEARCH_QUERY_UPDATED',
		payload: query
	};
};

const updateSearchState = (state) => {
	return {
		type: 'SEARCH_STATE',
		payload: state
	};
};

const setBufferingState = (state) => {
	return {
		type: 'BUFFERING_STATE',
		payload: state
	};
};

const setNightMode = (state) => {
	return {
		type: 'NIGHTMODE_STATE',
		payload: state
	};
};

export {
	setUrl,
	setId,
	setName,
	setFavicon,
	updateSearchQuery,
	updateSearchState,
	setBufferingState,
	setSearchType,
	setNightMode
};