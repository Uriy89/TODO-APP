import React, { Component } from "react";
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns';
import "./Task.css";

export default class Task extends Component {


  render() {
    const { lable, active, onDeleted, onToggleDone, classChecked, time } = this.props;
    const distance = formatDistanceToNow(time, { includeSeconds: true });

    let classLabel = "";
    // /created 17 seconds ago

    if (!active) classLabel += "description";

    return (
      <div className="view">
        <input className='toggle' type="checkbox" defaultChecked={classChecked} onClick={onToggleDone} />
        <label>
          <span className={classLabel}>{lable}</span>
          <span className="created">create {distance} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    );
  }
}

Task.propTypes = {
  label: PropTypes.node,
  active: PropTypes.bool.isRequired,
  classChecked: PropTypes.string
}