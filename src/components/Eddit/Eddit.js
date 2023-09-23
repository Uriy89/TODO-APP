 /* eslint-disable */
import React, { Component } from "react";
import "./Eddit.css";

export default class Eddit extends Component {
  state = {
    label: this.props.label,
    id: this.props.id,
  };

  onTaskChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onTaskEdit(this.state.id, this.state.label);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="edit"
          type="text"
          value={this.state.label}
          onChange={this.onTaskChange}
          autoFocus
        />
      </form>
    );
  }
}
