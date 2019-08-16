import React from 'react';

import './popup.scss';

const Popup = (props) => {
	return (
		<div className={props.show ? 'popup active-mod' : 'popup'}>
			This station can't be played in your browser.
		</div>
	);
};

export default Popup;