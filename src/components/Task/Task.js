import React, {Component} from "react";
import './Task.css'

export default class Task extends Component {
  render() {

    const {lable} = this.props

    return(
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{lable}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    )
  }
}
