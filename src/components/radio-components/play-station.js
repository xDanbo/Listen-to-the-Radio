import React from 'react';
import Button from '../button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { setUrl, setId, setName, setFavicon } from '../../actions';

const PlayStation = (props) => {

	const { url, id, favicon, urlActive, setUrl, setId, setName, isBuffering, idActive, name, setFavicon } = props;

	const setState = (src, id, name, favicon) => {
		setUrl(src);
		setName(name);
		setFavicon(favicon);
		idActive === id ? setId(null) : setId(id);
	}

	let btnClass;

	if (isBuffering && idActive === id) {
		btnClass = 'btn-play buffering-mod';
	} else if (!isBuffering && idActive === id) {
		btnClass = 'btn-play playing-mod';
	} else {
		btnClass = 'btn-play';
	}

	const src = urlActive === url ? '' : url;
	return (

		<Button
			onClick={() => setState(src, id, name, favicon)}
			className={btnClass}
		>
			{(!isBuffering || idActive !== id) &&
				<FontAwesomeIcon icon={idActive === id ? 'stop' : 'play'} />
			}
		</Button>

	);
}

const mapStateToProps = ({ urlActive, isBuffering, idActive, nameActive }) => {
	return { urlActive, isBuffering, idActive, nameActive }
};

const mapDispatchToProps = {
	setUrl, setId, setName, setFavicon
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayStation);