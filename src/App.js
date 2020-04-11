import React, { useState } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import TodoLists from './components/TodoLists';
import TodoPopupFrom from './components/TodoPopupForm';

library.add(faTrash);

function App() {
	const [isUpdate, setIsUpdate] = useState(false);

	const [items, setItems] = useState([]);
	const initItem = { title: '', description: '' };
	const [currentItem, setCurrentItem] = useState(initItem);

	const handleTodoFormChange = (newTodoValue) => {
		setCurrentItem({ ...currentItem, ...newTodoValue });
	};

	const handleTodoFormCreate = () => {
		setItems([...items, { ...currentItem, _id: Date.now() }]);
	};

	const handleTodoFormClear = () => {
		setCurrentItem(initItem);
		setIsUpdate(false);
	};

	const handleItemAddUpdate = (id) => {
		setCurrentItem(items.find((item) => item._id === id));
		setIsUpdate(true);
		document.querySelector('.btnpopup').click();
	};

	const handleItemUpdate = () => {
		setItems(
			items.map((item) => {
				if (item._id === currentItem._id) {
					item.title = currentItem.title;
					item.description = currentItem.description;
				}
				return item;
			})
		);
		setIsUpdate(false);
	};

	const handleItemDelete = (id) => {
		const filteredItems = items.filter((item) => item._id !== id);
		setItems(filteredItems);
	};

	return (
		<div className="App">
			<TodoLists
				items={items}
				handleItemAddUpdate={handleItemAddUpdate}
				handleItemDelete={handleItemDelete}
			/>
			<TodoPopupFrom
				currentItem={currentItem}
				handleTodoFormChange={handleTodoFormChange}
				handleTodoFormCreate={handleTodoFormCreate}
				handleTodoFormClear={handleTodoFormClear}
				handleItemUpdate={handleItemUpdate}
				trigger={
					<div className="mainbutton">
						<button className="btnpopup">+ Create</button>
					</div>
				}
				isUpdate={isUpdate}
			/>
		</div>
	);
}

export default App;
