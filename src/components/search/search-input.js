import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { updateSearchQuery, updateSearchState, setSearchType } from '../../actions';

import './search.scss';

class SearchInput extends PureComponent {

	state = {
		searchQueryLocal: ''
	}

	handleInputChange = ({ target: { value } }) => {
		this.setState({
			searchQueryLocal: value
		})
	}

	getSearch = ({ key }) => {

		if (key === 'Enter') {
			const { searchQueryLocal } = this.state;
			const { updateSearchQuery, updateSearchState, setSearchType } = this.props;
			setSearchType('stations');
			updateSearchQuery(searchQueryLocal);
			updateSearchState(true);
			this.setState({
				searchQueryLocal: ''
			})
		};

	}

	render() {

		return (
			<dl className="form-cell form-cell-v1-mod search-mod">
				<dt className="form-cell-title form-v1-mod hline-hide-mod">
					<label htmlFor="search-input">Search</label>
				</dt>
				<dd className="form-field-wrap form-v1-mod search-mod">
					<input
						id="search-input"
						type="search"
						placeholder="Search stations..."
						className="form-field search-mod"
						onKeyPress={this.getSearch}
						onChange={this.handleInputChange}
						value={this.state.searchQueryLocal}
					/>
				</dd>
			</dl>
		);
	}
}

const mapDispatchToProps = {
	updateSearchQuery,
	updateSearchState,
	setSearchType
};


export default connect(null, mapDispatchToProps)(SearchInput);