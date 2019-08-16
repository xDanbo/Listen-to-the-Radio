import React from 'react';
import SearchInput from '../search';
import Button from '../button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setNightMode } from '../../actions';
import './header.scss';

const Header = ({ nightMode, setNightMode }) => {

	const themeHandler = () => {
		setNightMode(!nightMode);
	}

	return (
		<header className="header is-flex is-vcentered">
			<Link to="/" className="sitename">LTTR</Link>
			<SearchInput />
			<Button
				onClick={() => themeHandler()}
				className={!nightMode ? 'btn btn-theme-switcher day-mod' : 'btn btn-theme-switcher night-mod'}
			>
				<FontAwesomeIcon icon={!nightMode ? 'sun' : 'moon'} />
			</Button>
		</header>
	);
};

const mapStateToProps = ({ nightMode }) => {
	return { nightMode }
}

const mapDispatchToProps = {
	setNightMode
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);