import React from "react";
import PropTypes from 'prop-types'
import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = (props) => {
  const { todos, onDeleted, onToggleDone, createTimeAgo} = props

  const elements = todos.map((item) => {
    const { id, ...itemsProps } = item;
    return (
      <li className="completed" key={id}>
        <Task
          {...itemsProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          classChecked={item.active ? '' : 'checked'}
          createTime={() => createTimeAgo()}
          time={item.time}
        />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

TaskList.propTypes = {
  onListSelected: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TaskList;
