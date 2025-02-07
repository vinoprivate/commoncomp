"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./TextInput.css");
// Import CSS styles

const TextInput = _ref => {
  let {
    label,
    value = "",
    onChange,
    placeholder = "Enter text...",
    disabled = false,
    required = false
  } = _ref;
  const handleChange = event => {
    if (onChange) {
      onChange(event);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-input-container"
  }, typeof label === "string" && /*#__PURE__*/_react.default.createElement("label", {
    className: "text-input-label"
  }, label), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "text-input-field",
    value: typeof value === "string" ? value : "",
    onChange: handleChange,
    placeholder: placeholder,
    disabled: disabled,
    required: required
  }));
};

// Prop Types Validation
TextInput.propTypes = {
  label: _propTypes.default.string,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool
};
var _default = exports.default = TextInput;