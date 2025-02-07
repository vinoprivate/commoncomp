import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import './Dropdown.scss';

const Dropdown = ({
  placeholder = 'Input placeholder',
  options = [],
  disabled = false,
  multiSelect = false,
  defaultSelected = [],
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultSelected);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (option) => {
    if (multiSelect) {
      setSelected(
        selected.includes(option)
          ? selected.filter((item) => item !== option)
          : [...selected, option]
      );
    } else {
      setSelected([option]);
      setIsOpen(false);
    }
  };

  const displayValue = () => {
    if (selected.length === 0) return placeholder;
    return multiSelect
      ? `${selected.length} selected`
      : selected[0];
  };

  return (
    <div
      ref={dropdownRef}
      className={classNames('dropdown', className, {
        'dropdown--disabled': disabled,
        'dropdown--open': isOpen,
      })}
    >
      <div
        className="dropdown__header"
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className="dropdown__placeholder">{displayValue()}</span>
        <span className="dropdown__arrow" />
      </div>
      
      {isOpen && !disabled && (
        <div className="dropdown__options">
          {options.map((option) => (
            <div
              key={option}
              className={classNames('dropdown__option', {
                'dropdown__option--selected': selected.includes(option),
              })}
              onClick={() => toggleOption(option)}
            >
              {multiSelect && (
                <span className="dropdown__checkbox">
                  {selected.includes(option) && '✓'}
                </span>
              )}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;