import React, { useState, useEffect, useRef } from "react";
import styles from "./MultiSelectDropdown.module.scss";

const MultiSelectDropdown = ({
  label,
  id,
  disabled = false,
  value = [],
  onChange,
  isMandatoryField = false,
  maxLength = 255,
  placeholder = "Select",
  helperText = "",
  error = false,
  options = []
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleOption = (option) => {
    if (value.includes(option)) {
      onChange(value.filter((item) => item !== option));
    } else {
      onChange([...value, option]);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.multiSelect} ref={dropdownRef}>
      {label && (
        <label htmlFor={id} className={error ? styles.errorLabel : ""}>
          {label} {isMandatoryField && <span className={styles.required}>*</span>}
        </label>
      )}
      <div
        className={`${styles.dropdownHeader} ${disabled ? styles.disabled : ""} ${
          error ? styles.errorBorder : ""
        }`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        {value.length > 0 ? value.join(", ") : placeholder}
        <span className={styles.arrow}>&#9662;</span>
      </div>

      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map((option) => (
            <li key={option} onClick={() => toggleOption(option)}>
              <input type="checkbox" checked={value.includes(option)} readOnly />
              {option}
            </li>
          ))}
        </ul>
      )}
      {helperText && <p className={error ? styles.errorText : styles.helperText}>{helperText}</p>}
    </div>
  );
};

export default MultiSelectDropdown;
