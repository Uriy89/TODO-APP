import React, {Component} from "react";
import './Task.css'

export default class Task extends Component {

  state = {
    description: false
  }

  onCheckboxClick = () => {
    this.setState((state) => {
      return {
        description: !state.description
      } 
    })
  }

  render() {

    const {lable, onDeleted} = this.props
    const { description } = this.state

    let className = ''

    if (description) {
      className += 'description'
    }


    return(
      <div className="view">
        <input className="toggle" type="checkbox" onClick={this.onCheckboxClick}/>
        <label>
          <span className={className}>{lable}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    )
  }
}
