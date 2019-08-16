export default class RadioService {

	_apiBase = 'http://www.radio-browser.info/webservice/json/';
	_searchPath = 'stations/search';
	_searchByTag = 'stations/bytag/';
	_searchByLanguage = 'stations/bylanguage/';
	_searchByCountry = 'stations/bycountry/';
	_searchParamTag = 'tag=';
	_searchParamName = 'name=';
	_searchParamLang = 'language=';
	_topClick = 'stations/topclick/20';
	_topVote = 'stations/topvote/20';
	_tags = 'tags';
	_countries = 'countries';
	_languages = 'languages';

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}

		return await res.json();
	}

	getAllStations = async () => {
		const res = await this.getResource(`stations?limit=20`);
		return res;
	}

	getTopClick = async () => {
		const res = await this.getResource(`${this._topClick}`);
		return res;
	}

	getTopVote = async () => {
		const res = await this.getResource(`${this._topVote}`);
		return res;
	}

	getTags = async () => {
		const res = await this.getResource(`${this._tags}`);
		return res;
	}

	getCountries = async () => {
		const res = await this.getResource(`${this._countries}`);
		return res;
	}

	getLanguages = async () => {
		const res = await this.getResource(`${this._languages}`);
		return res;
	}

	getStation = async (id) => {
		const station = await this.getResource(`url/${id}`);
		return station;
	}

	getSearch = async (search) => {
		let searchRes = await this.getResource(`${this._searchPath}?${this._searchParamName}${search}`);

		return searchRes;
	}

	getSearchByTag = async (search) => {
		const searchRes = await this.getResource(`${this._searchByTag}${search}`);

		return searchRes;
	}

	getSearchByLanguage = async (search) => {
		const searchRes = await this.getResource(`${this._searchByLanguage}${search}`);

		return searchRes;
	}

	getSearchByCountry = async (search) => {
		const searchRes = await this.getResource(`${this._searchByCountry}${search}`);

		return searchRes;
	}

	getUkraine = async () => {
		const searchRes = await this.getResource(`${this._searchByCountry}Ukraine`);

		return searchRes;
	}

}