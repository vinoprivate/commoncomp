import classNames from 'classnames';
import './Checkbox.scss';
import React from 'react';

 const Checkbox = ({ checked = false, disabled = false, label = '', onChange }) => {
  return (
    <label className={classNames('checkbox', { 'checkbox--disabled': disabled })}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="checkbox__input"
      />
      <span className="checkbox__control"></span>
      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
};

export default Checkbox;