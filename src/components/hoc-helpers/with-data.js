import React, { PureComponent } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
	return class extends PureComponent {

		state = {
			data: null,
			loading: true,
			error: false
		}

		componentDidMount() {
			this.update();
		}


		componentDidUpdate(prevProps) {

			if (this.props.searchQuery !== prevProps.searchQuery) {
				this.update();
			}

		}

		update() {
			this.setState({
				loading: true,
				error: false
			});

			const { searchQuery } = this.props;

			this.props.getData(searchQuery ? searchQuery : null)
				.then(data => {

					this.setState({
						data,
						loading: false
					})
				})
				.catch(() => {
					this.setState({
						error: true,
						loading: false
					})
				})
		}

		render() {
			const { data, loading, error } = this.state;

			if (loading) {
				return <Spinner />
			}

			if (error) {
				return <ErrorIndicator />
			}

			return <View {...this.props} data={data} />
		}
	};
}

export default withData;