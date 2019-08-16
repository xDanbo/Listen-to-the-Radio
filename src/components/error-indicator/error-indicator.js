import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './error-indicator.scss';

const ErrorIndicator = () => {
	return (
		<div className="error-msg is-flex is-hcentered">
			<span className="error-icon"><FontAwesomeIcon icon="exclamation-triangle" /></span> Oops, we've got an error!
		</div>
	);
};

export default ErrorIndicator;