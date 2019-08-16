import React, { PureComponent } from 'react';

import ErrorIndicator from '../error-indicator';

class ErrorBoundry extends PureComponent {

	state = {
		hasError: false
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}

		return this.props.children;
	}
}

export default ErrorBoundry;