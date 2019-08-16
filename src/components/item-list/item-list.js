import React from 'react';

import './item-list.scss';

const ItemList = (props) => {

	const { data, children: renderLabel, mode } = props;

	const items = data.map((item, i) => {

		const { name, id } = item;

		const label = renderLabel(item, props);

		return (

			<li className="list-group-item station-item"
				key={mode === 'links' ? name : id}>
				{label}
			</li>

		)
	})

	return (
		<ul className="list-group station-list">
			{items}
		</ul>
	);
}

export default ItemList;
