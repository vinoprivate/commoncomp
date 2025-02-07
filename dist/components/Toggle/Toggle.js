"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
require("./Toggle.scss");
var _react = _interopRequireDefault(require("react"));
const Toggle = _ref => {
  let {
    checked = false,
    disabled = false,
    onChange
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("label", {
    className: (0, _classnames.default)('toggle', {
      'toggle--disabled': disabled
    })
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    className: "toggle__input"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "toggle__control"
  }));
};
var _default = exports.default = Toggle;