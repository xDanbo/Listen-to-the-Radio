import React from 'react';
import ItemList from '../item-list';
import { PlayStation } from '../radio-components';
import { withData, withRadioService, compose, withChildFunction } from '../hoc-helpers';

import ReactImageFallback from "react-image-fallback";
import { getCode } from 'country-list';
import ReactCountryFlag from "react-country-flag";
import fallbackImg from '../../i/no-img.svg';

const renderStation = ({ name, id, url, tags, favicon, country, bitrate, language, state }, { searchTerm }, props) => {


	const tagArr = tags.split(',');

	const tagItems = tagArr.map((item, id) => {
		return (
			<li key={id} className="tag-item">
				<div
					className="tag-block"
					onClick={() => searchTerm(item)}
				>
					{item}
				</div>
			</li>
		)
	});

	let tagBlock;

	if (tags === '') {
		tagBlock = <div className="list-b-text">No tags</div>
	} else {
		tagBlock = <ul className="tag-list">
			{tagItems}
		</ul>
	}

	const countryCode = getCode(country);

	return (

		<div className="list-block">
			<div
				className="is-flex"
			>
				<div className="favicon-w list-mod">
					<ReactImageFallback
						src={favicon}
						fallbackImage={fallbackImg}
						className="favicon list-mod"
						alt={name}
					/>
				</div>
				<div>
					<h2
						className="is-size-4-tablet is-size-5-mobile list-title station-mod"
					>{name}
					</h2>

					<div className="station-b-list-info is-flex is-vbottom is-wrap">
						{countryCode &&
							<ReactCountryFlag
								code={countryCode} svg
								styleProps={{
									width: '30px',
									height: '23px',
									marginRight: '5px',
									border: '1px solid #202124'
								}}
							/>
						}

						{bitrate === '0' ? <span>Unknown bitrate{state || language ? `,\xa0` : null}</span> : <span>{bitrate} kbs{state || language ? `,\xa0` : null}</span>}
						{state &&
							<span>{state}{language ? `,\xa0` : null}</span>
						}
						{language &&
							<span>{language}</span>
						}

					</div>
				</div>
			</div>
			{tagBlock}
			<PlayStation
				{...props}
				url={url}
				id={id}
				name={name}
				favicon={favicon}
			/>
		</div>

	)
}

const renderLink = (props, { searchTerm }) => {
	const { name, stationcount } = props;
	return (

		<div className="list-block">
			<span
				className="list-title link-mod"
				onClick={() => searchTerm(name)}
			>
				{name}
			</span>
			<span className="station-count">
				&nbsp;— {stationcount}
			</span>
		</div>

	)
}

const mapStationMethodsToProps = (radioService) => {

	return {
		getData: radioService.getAllStations
	}
}

const mapTopClickMethodsToProps = (radioService) => {

	return {
		getData: radioService.getTopClick
	}
}

const mapTopVoteMethodsToProps = (radioService) => {

	return {
		getData: radioService.getTopVote
	}
}

const mapStationSearchMethodsToProps = radioService => {
	return {
		getData: radioService.getSearch
	}
}

const mapStationSearchByTagMethodsToProps = radioService => {
	return {
		getData: radioService.getSearchByTag
	}
}

const mapStationSearchByCountryMethodsToProps = radioService => {
	return {
		getData: radioService.getSearchByCountry
	}
}

const mapStationSearchByLanguageMethodsToProps = radioService => {
	return {
		getData: radioService.getSearchByLanguage
	}
}

const mapTagsMethodsToProps = radioService => {
	return {
		getData: radioService.getTags
	}
}

const mapCountriesMethodsToProps = radioService => {
	return {
		getData: radioService.getCountries
	}
}

const mapLanguagesMethodsToProps = radioService => {
	return {
		getData: radioService.getLanguages
	}
}

const mapUkraineToProps = radioService => {
	return {
		getData: radioService.getUkraine
	}
}

const StationList =
	compose(
		withRadioService(mapStationMethodsToProps),
		withData,
		withChildFunction(renderStation)
	)(ItemList);

const StationTopClickList =
	compose(
		withRadioService(mapTopClickMethodsToProps),
		withData,
		withChildFunction(renderStation)
	)(ItemList);

const StationTopVoteList =
	compose(
		withRadioService(mapTopVoteMethodsToProps),
		withData,
		withChildFunction(renderStation)
	)(ItemList);

const TagsList =
	compose(
		withRadioService(mapTagsMethodsToProps),
		withData,
		withChildFunction(renderLink)
	)(ItemList);

const CountriesList =
	compose(
		withRadioService(mapCountriesMethodsToProps),
		withData,
		withChildFunction(renderLink)
	)(ItemList);

const LanguagesList =
	compose(
		withRadioService(mapLanguagesMethodsToProps),
		withData,
		withChildFunction(renderLink)
	)(ItemList);

const StationSearch =
	compose(
		withRadioService(mapStationSearchMethodsToProps),
		withData,
		withChildFunction(renderStation)
	)(ItemList);

const StationSearchByTag =
	compose(
		withRadioService(mapStationSearchByTagMethodsToProps),
		withData,
		withChildFunction(renderStation)
	)(ItemList);

const StationSearchByCountry =
	compose(
		withRadioService(mapStationSearchByCountryMethodsToProps),
		withData,
		withChildFunction(renderStation)
	)(ItemList);

const StationSearchByLanguage =
	compose(
		withRadioService(mapStationSearchByLanguageMethodsToProps),
		withData,
		withChildFunction(renderStation)
	)(ItemList);

const StationUkraine =
	compose(
		withRadioService(mapUkraineToProps),
		withData,
		withChildFunction(renderStation)
	)(ItemList);

export {
	StationList,
	StationSearch,
	StationTopClickList,
	StationTopVoteList,
	TagsList,
	CountriesList,
	LanguagesList,
	StationSearchByTag,
	StationSearchByCountry,
	StationSearchByLanguage,
	StationUkraine
}