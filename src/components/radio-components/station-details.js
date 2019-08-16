import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { PlayStation } from '../radio-components';
import { withRadioService } from '../hoc-helpers';

const StationDetails = (props) => {
	console.log(props);
	return (
		<ItemDetails {...props}>

			<Record field="name" label="Name" />
			<Record field="url" label="URL" />
			<PlayStation {...props} />
		</ItemDetails >
	)
};


const mapMethodsToProps = radioService => {
	return {
		getData: radioService.getStation
	}
}

export default withRadioService(mapMethodsToProps)(StationDetails);