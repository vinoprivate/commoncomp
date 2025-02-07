import React,{useState} from 'react';
import classNames from 'classnames';
import './Radio.scss';

const Radio = ({ checked = false, disabled = false, label = '', onChange }) => {
  return (
    <label className={classNames('radio', { 'radio--disabled': disabled })}>
      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="radio__input"
      />
      <span className="radio__control"></span>
      {label && <span className="radio__label">{label}</span>}
    </label>
  );
};

export default Radio;