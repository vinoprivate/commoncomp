import React, { useState, useEffect, useRef } from "react";
import styles from "./DropdownMenu.module.scss";

const DropdownMenu = ({
  label,
  id,
  disabled = false,
  value = "",
  onChange,
  isMandatoryField = false,
  placeholder = "Select",
  helperText = "",
  error = false,
  options = []
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    <div className={styles.dropdown} ref={dropdownRef}>
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
        {value || placeholder}
        <span className={styles.arrow}>&#9662;</span>
      </div>

      {isOpen && (
        <ul className={styles.dropdownList}>
          {options?.map((option) => (
            <li key={option} onClick={() => onChange(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
      {helperText && <p className={error ? styles.errorText : styles.helperText}>{helperText}</p>}
    </div>
  );
};

export default DropdownMenu;
