/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Timer.css';

export default class Timer extends Component {
  state = {
    pause: false,
    time: 0,
  };

  timerInterval = null;

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  onSetPouse = () => {
    this.setState(({ pause }) => ({
      pause: !pause,
    }));

    if (!this.state.pause) {
      this.startTimer();
    } else {
      this.pauseTimer();
    }
  };

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.timerInterval);
  }

  formatTime() {
    const { time } = this.state;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours}:${minutes}:${seconds}`;
  }

  render() {
    const { pause } = this.state;
    const timerButtonClass = pause ? 'timer__button timer__button-pause' : 'timer__button timer__button-play';

    return (
      <div className="timer">
        <button type="button" className={timerButtonClass} onClick={this.onSetPouse}></button>
        <span className="timer__info">{this.formatTime()}</span>
      </div>
    );
  }
}

Timer.propTypes = {
  pause: PropTypes.bool,
  time: PropTypes.func,
};
