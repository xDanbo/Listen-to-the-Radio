import React from 'react';

import TabBar from './tab-bar';
import TabBarItem from './tab-bar-item';

import { connect } from 'react-redux';
import { updateSearchQuery, updateSearchState, setSearchType } from '../../actions';


import {
	StationTopClickList,
	StationTopVoteList,
	StationSearch,
	StationSearchByTag,
	TagsList,
	CountriesList,
	LanguagesList,
	StationSearchByLanguage,
	StationSearchByCountry,
	StationUkraine
}
	from '../radio-components';

const Tabs = ({ searchType, searchQuery, updateSearchQuery, updateSearchState, setSearchType }) => {

	const searchTerm = (term, type) => {
		setSearchType(type);
		updateSearchQuery(term);
		updateSearchState(true);
	}

	return (
		<TabBar className="content-block">
			<TabBarItem
				label="Ukraine"
				icon="map-marker-alt"
				classmod="local-mod"
			>
				<StationUkraine
					searchTerm={(item) => searchTerm(item, 'tags')}
				/>
			</TabBarItem>
			<TabBarItem
				label="Top Click"
				icon="hand-pointer"
				classmod="click-mod"
			>
				<StationTopClickList
					searchTerm={(item) => searchTerm(item, 'tags')}
				/>
			</TabBarItem>
			<TabBarItem
				label="Top Vote"
				icon="comments"
				classmod="vote-mod"
			>
				<StationTopVoteList
					searchTerm={(item) => searchTerm(item, 'tags')}
				/>
			</TabBarItem>
			<TabBarItem
				label="Tags"
				icon="tags"
				classmod="tags-mod"
			>
				<TagsList
					mode="links"
					searchTerm={(item) => searchTerm(item, 'tags')}
				/>
			</TabBarItem>
			<TabBarItem
				label="Countries"
				icon="flag"
				classmod="flag-mod"
			>
				<CountriesList
					mode="links"
					searchTerm={(item) => searchTerm(item, 'countries')}
				/>
			</TabBarItem>
			<TabBarItem
				label="Languages"
				icon="language"
				classmod="lang-mod"
			>
				<LanguagesList
					mode="links"
					searchTerm={(item) => searchTerm(item, 'languages')}
				/>
			</TabBarItem>
			<TabBarItem
				label="Search"
				icon="search"
				classmod="search-mod"
			>
				{searchQuery !== '' && searchType === 'tags' &&
					<StationSearchByTag
						searchQuery={searchQuery}
						searchTerm={(item) => searchTerm(item, 'tags')}
					/>
				}
				{searchQuery !== '' && searchType === 'countries' &&
					<StationSearchByCountry
						searchQuery={searchQuery}
						searchTerm={(item) => searchTerm(item, 'tags')}
					/>
				}
				{searchQuery !== '' && searchType === 'languages' &&
					<StationSearchByLanguage
						searchQuery={searchQuery}
						searchTerm={(item) => searchTerm(item, 'tags')}
					/>
				}
				{searchQuery !== '' && searchType === 'stations' &&
					<StationSearch
						searchQuery={searchQuery}
						searchTerm={(item) => searchTerm(item, 'tags')}
					/>
				}
			</TabBarItem>
		</TabBar>
	);
};

const mapStateToProps = ({ searchQuery, searchType }) => {
	return { searchQuery, searchType }
};

const mapDispatchToProps = {
	updateSearchQuery,
	updateSearchState,
	setSearchType
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);