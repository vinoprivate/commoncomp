import React from "react";
import styles from "./MultiSelect.module.scss";

const MultiSelect = ({ label, options = [], selectedValues = [], onChange, error }) => {
  const handleSelectionChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    onChange(selectedOptions);
  };

  return (
    <div className={styles.multiSelectContainer}>
      <label className={styles.label}>{label}</label>
      <select multiple className={`${styles.multiSelect} ${error ? styles.error : ""}`} value={selectedValues} onChange={handleSelectionChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default MultiSelect;
