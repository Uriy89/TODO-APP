import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import classNames from 'classnames';

import Eddit from '../Eddit';
import './Task.css';
import Timer from '../Timer/Timer';

const Task = (props) => {
  const { label, active, id, onDeleted, onToggleDone, classChecked, time, status, onChangeStatuEdit, onTaskEdit } =
    props;

  console.log(active);
  const distance = formatDistanceToNow(time, { includeSeconds: true });

  const classLabel = classNames({
    description: active === false,
  });

  return (
    <>
      {status ? (
        <Eddit label={label} onTaskEdit={onTaskEdit} id={id} />
      ) : (
        <div className="view">
          <input className="toggle" type="checkbox" defaultChecked={classChecked} onClick={onToggleDone} />
          <label>
            <span className={classLabel}>{label}</span>
            <Timer />
            <span className="created">create {distance} ago</span>
          </label>
          <button className="icon icon-edit" onClick={onChangeStatuEdit}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      )}
    </>
  );
};

Task.defaultProps = {
  active: true,
  status: false,
  onToggleDone: () => {},
  onChangeStatuEdit: () => {},
  onTaskEdit: () => {},
  classChecked: () => {},
  onDeleted: () => {},
  onEddit: () => {},
};

Task.propTypes = {
  id: PropTypes.number,
  editStatus: PropTypes.bool,
  label: PropTypes.node,
  active: PropTypes.bool.isRequired,
  classChecked: PropTypes.string,
  time: PropTypes.instanceOf(Date),
  status: PropTypes.bool,
};

export default Task;
