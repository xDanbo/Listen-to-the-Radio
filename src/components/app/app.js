import React from 'react';

import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faSearch,
	faMapMarkerAlt,
	faHandPointer,
	faComments,
	faTags,
	faFlag,
	faLanguage,
	faPlay,
	faStop,
	faVolumeUp,
	faVolumeDown,
	faVolumeMute,
	faMoon,
	faSun,
	faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons'

import Header from '../header';

import Player from '../player';

import Tabs from '../tabs';

import '../../styles/main.scss';
import './app.scss';

import { Route, Switch, Redirect } from 'react-router-dom';

library.add(
	faSearch,
	faMapMarkerAlt,
	faHandPointer,
	faComments,
	faTags,
	faFlag,
	faLanguage,
	faPlay,
	faStop,
	faVolumeUp,
	faVolumeDown,
	faVolumeMute,
	faMoon,
	faSun,
	faExclamationTriangle
);

const App = (props) => {

	return (
		<div className={props.nightMode ? 'wrapper night-mod' : 'wrapper'}>
			<div className="container">
				<Header />

				<Switch>
					<Route path="/" exact component={Tabs} />

					<Redirect to="/" />
				</Switch>

				<Player />
			</div>
		</div>
	);

}

const mapStateToProps = ({ nightMode }) => {
	return { nightMode }
}

export default connect(mapStateToProps, null)(App);