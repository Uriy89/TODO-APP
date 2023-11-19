import React from 'react';
import PropTypes from 'prop-types';
import './TasksFilter.css';

const TasksFilter = (props) => {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  const { filter, onChangeFilter } = props;

  const btns = buttons.map(({ name, label }) => {
    const isActiveBtn = filter === name;
    const clss = isActiveBtn ? 'selected' : '';

    return (
      <li key={name}>
        <button type="button" className={clss} onClick={() => onChangeFilter(name)}>
          {label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{btns}</ul>;
};

export default TasksFilter;

TasksFilter.propTypes = {
  filter: PropTypes.string,
};
