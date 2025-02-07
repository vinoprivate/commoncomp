"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _RadioGroupModule = _interopRequireDefault(require("./RadioGroup.module.scss"));
const RadioGroup = _ref => {
  let {
    label,
    options,
    value,
    onChange
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _RadioGroupModule.default.radioGroup
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: _RadioGroupModule.default.label
  }, label), options === null || options === void 0 ? void 0 : options.map(option => /*#__PURE__*/_react.default.createElement("label", {
    key: option.value,
    className: _RadioGroupModule.default.radioOption
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    value: option.value,
    checked: value === option.value,
    onChange: () => onChange(option.value)
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _RadioGroupModule.default.radioCircle
  }), option.label)));
};
var _default = exports.default = RadioGroup;