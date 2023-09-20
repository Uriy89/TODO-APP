import React from "react";
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

export default Footer;
