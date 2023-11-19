import React, { useState } from 'react';
import './Eddit.css';

const Eddit = (props) => {
  const [label, setLabel] = useState(props.label);

  const onTaskChange = (event) => {
    setLabel(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onTaskEdit(props.id, label);
  };

  return (
    <form onSubmit={onSubmit}>
      <input className="edit" type="text" value={label} onChange={onTaskChange} autoFocus />
    </form>
  );
};

export default Eddit;
