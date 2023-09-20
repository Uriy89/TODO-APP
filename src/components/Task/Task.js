import React, { Component } from "react";
import "./Task.css";

export default class Task extends Component {

  render() {
    const { lable, active, onDeleted, onToggleDone, classChecked } = this.props;

    let classLabel = "";

    if (!active) classLabel += "description";

    return (
      <div className="view">
        <input className='toggle' type="checkbox" defaultChecked={classChecked} onClick={onToggleDone} />
        <label>
          <span className={classLabel}>{lable}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    );
  }
}
