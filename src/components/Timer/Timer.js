import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Timer.css';

const Timer = () => {
  const [pause, setPause] = useState(false);
  const [time, setTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);

  const onSetPause = () => {
    setPause((pause) => !pause);
    if (!pause) {
      startTimer();
    } else {
      pauseTimer();
    }
  };

  const startTimer = () => {
    clearInterval(timerInterval);
    setTimerInterval(setInterval(() => setTime((prevTime) => prevTime + 1), 1000));
  };

  const pauseTimer = () => {
    setTimerInterval(clearInterval(timerInterval));
  };

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes}:${seconds}`;
  };
  const timerButtonClass = pause ? 'timer__button timer__button-pause' : 'timer__button timer__button-play';

  return (
    <div className="timer">
      <button type="button" className={timerButtonClass} onClick={onSetPause}></button>
      <span className="timer__info">{formatTime()}</span>
    </div>
  );
};

Timer.propTypes = {
  pause: PropTypes.bool,
  time: PropTypes.number,
};

export default Timer;
