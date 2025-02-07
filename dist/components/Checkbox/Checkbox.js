"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
require("./Checkbox.scss");
var _react = _interopRequireDefault(require("react"));
const Checkbox = _ref => {
  let {
    checked = false,
    disabled = false,
    label = '',
    onChange
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("label", {
    className: (0, _classnames.default)('checkbox', {
      'checkbox--disabled': disabled
    })
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    className: "checkbox__input"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "checkbox__control"
  }), label && /*#__PURE__*/_react.default.createElement("span", {
    className: "checkbox__label"
  }, label));
};
var _default = exports.default = Checkbox;