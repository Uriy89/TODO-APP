import React, { useState } from 'react';
import './NewTaskForm.css';

const NewTaskForm = ({ onItemAdded }) => {
  const [label, setLabel] = useState('');

  const onLabelChange = (event) => {
    setLabel(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onItemAdded(label);
    setLabel('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={onLabelChange}
        value={label}
      ></input>
    </form>
  );
};

export default NewTaskForm;
