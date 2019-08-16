import React from 'react';
import { RadioServiceConsumer } from '../radio-service-context';

const withRadioService = (mapMethodsToProps) => (Wrapped) => {

	return (props) => {
		return (
			<RadioServiceConsumer>
				{
					(radioService) => {
						const serviceProps = mapMethodsToProps(radioService);
						return (
							<Wrapped {...props} {...serviceProps} />
						)
					}
				}
			</RadioServiceConsumer>
		)
	}
}

export default withRadioService;