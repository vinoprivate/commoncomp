import React from "react";
import styles from "./RadioGroup.module.scss";

const RadioGroup = ({ label, options, value, onChange }) => {
  return (
    <div className={styles.radioGroup}>
      <p className={styles.label}>{label}</p>
      {options?.map((option) => (
        <label key={option.value} className={styles.radioOption}>
          <input
            type="radio"
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
          />
          <span className={styles.radioCircle}></span>
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
