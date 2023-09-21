import React from "react";
import PropTypes from 'prop-types'
import TasksFilter from "../TasksFilter";
import "./Footer.css";

const Footer = ({ active, onChangeFilter, filter, onDeletedAll }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{active} items left</span>
      <TasksFilter
        filter={filter}
        onChangeFilter={onChangeFilter}
      />
      <button className="clear-completed" onClick={() => onDeletedAll()}>Clear completed</button>
    </footer>
  );
};

Footer.propTypes = {
  active: PropTypes.number.isRequired,
}

export default Footer;
