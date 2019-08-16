import React, { PureComponent } from 'react';

import './item-details.scss';

const Record = ({ item, field, label }) => {
	return (
		<div className="name">{label}: {item[field]}</div>
	)
}

export {
	Record
}

class ItemDetails extends PureComponent {

	state = {
		item: null
	}

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.updateItem();
		}
	}

	updateItem() {
		const { itemId, getData } = this.props;
		if (!itemId) {
			return;
		}

		getData(itemId)
			.then(item => {
				this.setState({
					item: item[0]
				})
			})
	}

	render() {
		const { item } = this.state;

		if (!item) {
			return <span>Select an item from the list</span>
		}
		console.log(item);
		const { url } = item;

		return (
			<div className="station-details-wrapper content-block">
				{
					React.Children.map(this.props.children, (child) => {
						return React.cloneElement(child, { item, url });
					})
				}
			</div>
		);
	}
}

export default ItemDetails;