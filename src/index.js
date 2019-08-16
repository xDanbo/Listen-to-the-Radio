import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import RadioService from './services/radio-service';
import { RadioServiceProvider } from './components/radio-service-context';

import store from './store';

const radioService = new RadioService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<RadioServiceProvider value={radioService}>
				<Router>
					<App />
				</Router>
			</RadioServiceProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root'));