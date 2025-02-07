import classNames from 'classnames';
import './Toggle.scss';
import React from 'react';

const Toggle = ({ checked = false, disabled = false, onChange }) => {
  return (
    <label className={classNames('toggle', { 'toggle--disabled': disabled })}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="toggle__input"
      />
      <span className="toggle__control"></span>
    </label>
  );
};

export default Toggle;