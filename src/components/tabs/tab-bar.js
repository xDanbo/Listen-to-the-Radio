import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TabBarNav from './tab-bar-nav';

import { connect } from 'react-redux';
import { updateSearchState } from '../../actions';

import './tab-bar.scss';

class TabBar extends PureComponent {

	static propTypes = {
		children: PropTypes.node,
		className: PropTypes.string,
		vertical: PropTypes.bool
	}

	static defaultProps = {
		children: null,
		className: '',
		vertical: false
	};

	state = {
		activeTab: null
	}



	componentDidMount() {
		const { children = [] } = this.props;

		const activeTab = this.getChildrenLabels(children)[0];

		this.setActiveTab(activeTab);
	}

	componentDidUpdate() {
		this.setSearch();
	}

	getChildrenLabels = children => children.map(({ props }) => props.label)

	setActiveTab = activeTab => {
		const { activeTab: currentTab } = this.state;

		if (currentTab !== activeTab) {
			this.setState({
				activeTab,
			});
		}
	}

	renderTabs = () => {
		const { children = [] } = this.props;
		const { activeTab } = this.state;
		return children.map(({ props }) => {
			return (
				<TabBarNav
					key={props.label}
					navLabel={props.label}
					icon={props.icon}
					className={classNames({ 'active-mod': activeTab === props.label }, props.classmod)}
					onChangeActiveTab={this.setActiveTab}
				/>
			)
		});
	}

	setSearch = () => {
		const { isSearching, updateSearchState } = this.props;
		if (isSearching) {
			this.setActiveTab('Search');
			updateSearchState(false);
		}
	}

	render() {
		const { activeTab } = this.state;
		const { searchQuery, searchType } = this.props;
		const {
			children, className, vertical
		} = this.props;

		const classes = classNames(
			'tab-bar',
			className,
			{ vertical },
		);

		return (
			<div className={classes}>
				<div className="tabs-wrapper">
					<ul className="tab-bar-nav-list">
						{this.renderTabs()}
					</ul>
				</div>
				<div className="tab-container">
					{searchQuery !== '' && activeTab === 'Search' &&
						<div className="search-results is-size-4-tablet is-size-5-mobile">
							Search results for "{searchQuery}" in {searchType}
						</div>
					}
					{React.Children.map(children, child => React.cloneElement(child, { activeTab }))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ isSearching, searchQuery, searchType }) => {
	return { isSearching, searchQuery, searchType }
};

const mapDispatchToProps = {
	updateSearchState
};

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);