import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './tab-bar-nav.scss';

const TabBarNav = ({
	navLabel, icon, className, onChangeActiveTab
}) => {

	const classes = classNames(
		'tab-bar-nav-item-block',
		className
	);

	return (
		<li className="tab-bar-nav-item">
			<div
				className={classes}
				onClick={() => { onChangeActiveTab(navLabel) }}
			>
				<span className="tab-icon"><FontAwesomeIcon icon={icon} /></span>
				{navLabel}
			</div>
		</li>
	);
};

TabBarNav.propTypes = {
	navLabel: PropTypes.string,
	className: PropTypes.string,
	onChangeActiveTab: PropTypes.func

};

TabBarNav.defaultProps = {
	navLabel: 'Tab',
	className: '',
	onChangeActiveTab: () => { }
};

export default TabBarNav;