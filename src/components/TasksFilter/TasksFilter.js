 /* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TasksFilter.css";

export default class TasksFilter extends Component {
  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'completed', label: 'Completed'}
  ]

  render() {
    const { filter, onChangeFilter } = this.props 

    const btns = this.buttons.map(({ name, label }) => {
      const isActiveBtn = filter === name
      const clss = isActiveBtn ? 'selected' : ''

      return (
        <li key={name}>
          <button 
            type="button" 
            className={clss}
            onClick={() => onChangeFilter(name)}
          >
            {label}
          </button>
        </li>
      )
    });

    return <ul className="filters">{btns}</ul>;
  }
}


TasksFilter.propTypes = {
  filter: PropTypes.string
};