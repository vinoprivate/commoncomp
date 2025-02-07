import React from "react";
import PropTypes from "prop-types";
import "./TextInput.css"; // Import CSS styles

const TextInput = ({ 
  label, 
  value = "", 
  onChange, 
  placeholder = "Enter text...", 
  disabled = false, 
  required = false 
}) => {
  
  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className="text-input-container">
      {typeof label === "string" && <label className="text-input-label">{label}</label>}
      <input
        type="text"
        className="text-input-field"
        value={typeof value === "string" ? value : ""}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
    </div>
  );
};

// Prop Types Validation
TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool
};

export default TextInput;
