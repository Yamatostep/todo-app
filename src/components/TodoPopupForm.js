import React from 'react';
import './TodoPopupForm.css';
import Popup from 'reactjs-popup';

export default function TodoPopupForm({
  currentItem,
  handleTodoFormChange,
  handleTodoFormCreate,
  handleTodoFormClear,
  handleItemUpdate,
  trigger,
  isUpdate
}) {
  return (
    <Popup trigger={trigger} modal>
      {close => (
        <div className="modal">
          <a
            className="close"
            onClick={() => {
              handleTodoFormClear();
              close();
            }}
          >
            &times;
          </a>
          <div className="header">TITLE</div>
          <div className="content">
            <input
              type="text"
              name="title"
              className="title"
              value={currentItem.title}
              onChange={e => handleTodoFormChange({ title: e.target.value })}
            />
          </div>
          <div className="header">DESCRIPTION</div>
          <div className="content">
            <input
              type="text"
              name="description"
              className="description"
              value={currentItem.description}
              onChange={e =>
                handleTodoFormChange({ description: e.target.value })
              }
            />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                handleTodoFormClear();
                close();
              }}
            >
              Cancel
            </button>
            &emsp;
            <button
              className="button"
              onClick={() => {
                if (isUpdate) {
                  handleItemUpdate();
                } else {
                  handleTodoFormCreate();
                }
                handleTodoFormClear();
                close();
              }}
            >
              {isUpdate ? 'Edit' : 'Create'}
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
