import React from 'react';
import './TodoLists.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

export default function TodoLists({
	items,
	handleItemAddUpdate,
	handleItemDelete,
}) {
	const itemLists = items.map((item) => {
		const date = new Date(item._id);
		return (
			<div className="todolist" key={item._id}>
				<div onClick={() => handleItemAddUpdate(item._id)}>
					<div id="title">{item.title}</div>
					<div>{item.description}</div>
					<div id="date">
						{date.getDate()}-{date.getMonth()}-{date.getFullYear()}
					</div>
				</div>
				<span>
					<FontAwesomeIcon
						className="faicons"
						icon="trash"
						onClick={() => handleItemDelete(item._id)}
					/>
				</span>
			</div>
		);
	});

	const empty = (
		<div id="empty">
			Empty press 'Create'
			<br />
			for add new todo
		</div>
	);

	return (
		<div className="todoContrainer">
			<FlipMove duration={300} easing="ease-in-out">
				{items.length === 0 ? empty : itemLists}
			</FlipMove>
		</div>
	);
}
