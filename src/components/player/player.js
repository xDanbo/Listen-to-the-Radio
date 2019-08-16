import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Button from '../button';
import Popup from '../popup';
import Spinner from '../spinner';
import Slider from 'react-rangeslider';
import ReactTimeout from 'react-timeout'
import ReactImageFallback from 'react-image-fallback';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { setBufferingState, setUrl, setId, setName, setFavicon } from '../../actions';
import fallbackImg from '../../i/no-img.svg';

import './player.scss';

class Player extends Component {

	state = {
		onPlay: false,
		volume: 1,
		volumeCache: null,
		idLocal: null,
		urlLocal: '',
		showPopup: false
	}

	onVolumeHandler = () => {
		const { volume, volumeCache } = this.state;
		if (volume > 0) {
			this.setState({
				volumeCache: volume,
				volume: 0
			})
		} else {
			this.setState({
				volume: volumeCache,
				volumeCache: null
			})
		}

	}

	onError = () => {
		const { setUrl, setId, setName, setFavicon, urlActive } = this.props;

		if (!this.state.onPlay && urlActive !== '') {
			setUrl('');
			setId(null);
			setName('');
			setFavicon('');
			this.showMsg();
		}
	}

	showMsg = () => {

		this.setState({
			showPopup: true
		});

		this.props.setTimeout(() => {
			this.setState({
				showPopup: false
			});
		}, 6000)
	}

	onCanPlayThrough = () => {
		const { idActive, urlActive } = this.props;

		this.setState({
			onPlay: true,
			idLocal: idActive,
			urlLocal: urlActive
		})
	}

	onAbort = () => {
		this.setState({ onPlay: false })
	}

	btnHandler = () => {
		const { onPlay, idLocal, urlLocal } = this.state;
		const { setUrl, setId, urlActive, idActive } = this.props;

		if (!onPlay && idLocal !== null && urlLocal !== '') {
			setUrl(urlLocal);
			setId(idLocal);
		}

		if (onPlay && idLocal === idActive && urlLocal === urlActive) {
			setUrl('');
			setId(null);
		}
	}

	onVolumeChanged = () => {
		this.setState({ volume: this.rap.audioEl.volume })
	}

	render() {

		const { setBufferingState, urlActive, faviconActive, nameActive } = this.props;
		const { onPlay, volume, showPopup } = this.state;

		let volumeLvl;

		if (volume < .6 && volume > 0) {
			volumeLvl = 'volume-down'
		} else if (volume === 0) {
			volumeLvl = 'volume-mute'
		} else if (volume >= .6) {
			volumeLvl = 'volume-up'
		}

		let isPlaying = null;

		if (!onPlay && (urlActive !== '')) {
			isPlaying = <Spinner />;
			setBufferingState(true);
		} else if (onPlay && (urlActive !== '')) {
			isPlaying = null;
			setBufferingState(false);
		}

		const stationName = nameActive === '' ? 'Select a station from the list' : nameActive.length < 42 ? nameActive : nameActive.substring(0, 39) + '...';

		return (
			<div className="player">
				<div className="player-inner container is-flex">
					<ReactAudioPlayer
						src={urlActive}
						autoPlay
						ref={(element) => { this.rap = element; }}
						volume={volume}
						onError={this.onError}
						onCanPlayThrough={this.onCanPlayThrough}
						onAbort={this.onAbort}
						onVolumeChanged={this.onVolumeChanged}
					/>
					<div className="is-flex is-vcentered">
						<div className="favicon-w player-mod">
							<ReactImageFallback
								src={faviconActive}
								fallbackImage={fallbackImg}
								className="favicon player-mod"
								alt={nameActive}
							/>
						</div>
						<span className="player-station-name">
							{isPlaying !== null ? isPlaying : stationName}
						</span>
					</div>
					<div className="player-volume-wrapper is-flex is-vcentered">
						<div className="btn-volume-wrapper">
							<Button
								onClick={() => this.onVolumeHandler()}
								className="btn-player volume-mod"
							>
								<FontAwesomeIcon icon={volumeLvl} />
							</Button>
							<div className="player-volume-slider">
								<Slider
									min={0}
									max={100}
									tooltip={false}
									value={volume * 100}
									onChange={value => this.setState({ volume: value / 100 })}
								/>
							</div>
						</div>
						<Button
							onClick={() => this.btnHandler()}
							className="btn-player"
						>
							<FontAwesomeIcon icon={onPlay ? 'stop' : 'play'} />
						</Button>
					</div>
				</div>
				<Popup show={showPopup} />
			</div>
		);
	}
};

const mapStateToProps = ({ urlActive, isBuffering, idActive, nameActive, faviconActive }) => {
	return { urlActive, isBuffering, idActive, nameActive, faviconActive }
}

const mapDispatchToProps = {
	setBufferingState, setUrl, setId, setName, setFavicon
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactTimeout(Player));