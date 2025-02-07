"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _MultiSelectModule = _interopRequireDefault(require("./MultiSelect.module.scss"));
const MultiSelect = _ref => {
  let {
    label,
    options = [],
    selectedValues = [],
    onChange,
    error
  } = _ref;
  const handleSelectionChange = event => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    onChange(selectedOptions);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _MultiSelectModule.default.multiSelectContainer
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: _MultiSelectModule.default.label
  }, label), /*#__PURE__*/_react.default.createElement("select", {
    multiple: true,
    className: "".concat(_MultiSelectModule.default.multiSelect, " ").concat(error ? _MultiSelectModule.default.error : ""),
    value: selectedValues,
    onChange: handleSelectionChange
  }, options.map(option => /*#__PURE__*/_react.default.createElement("option", {
    key: option.value,
    value: option.value
  }, option.label))), error && /*#__PURE__*/_react.default.createElement("p", {
    className: _MultiSelectModule.default.errorMessage
  }, error));
};
var _default = exports.default = MultiSelect;