"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = require("react");
require("./App.scss");
var _Dropdown = _interopRequireDefault(require("./components/Dropdown/Dropdown"));
var _Radio = _interopRequireDefault(require("./components/Radio/Radio"));
var _Toggle = _interopRequireDefault(require("./components/Toggle/Toggle"));
var _Checkbox = _interopRequireDefault(require("./components/Checkbox/Checkbox"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const options = ['Example 1', 'Example 2', 'Example 3', 'Example 4'];
function App() {
  const [radioValue, setRadioValue] = (0, _react.useState)('checked');
  const [toggleStates, setToggleStates] = (0, _react.useState)({
    on: true,
    off: false,
    disabled: false
  });
  const [checkboxValue, setCheckboxValue] = (0, _react.useState)('checked');
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h2", null, "States Input"), /*#__PURE__*/React.createElement("div", {
    className: "dropdowns-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-item"
  }, /*#__PURE__*/React.createElement("h3", null, "Default Dropdown"), /*#__PURE__*/React.createElement(_Dropdown.default, {
    options: options
  })), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-item"
  }, /*#__PURE__*/React.createElement("h3", null, "Hover Dropdown"), /*#__PURE__*/React.createElement(_Dropdown.default, {
    options: options,
    className: "hover-dropdown"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-item"
  }, /*#__PURE__*/React.createElement("h3", null, "Disable Dropdown"), /*#__PURE__*/React.createElement(_Dropdown.default, {
    options: options,
    disabled: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-item"
  }, /*#__PURE__*/React.createElement("h3", null, "Select"), /*#__PURE__*/React.createElement(_Dropdown.default, {
    options: options,
    placeholder: "Select"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-item"
  }, /*#__PURE__*/React.createElement("h3", null, "Multiselect"), /*#__PURE__*/React.createElement(_Dropdown.default, {
    options: options,
    placeholder: "Select",
    multiSelect: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-item"
  }, /*#__PURE__*/React.createElement("h3", null, "Selected"), /*#__PURE__*/React.createElement(_Dropdown.default, {
    options: options,
    placeholder: "Select",
    multiSelect: true,
    defaultSelected: ['Example 3']
  })))), /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "controls-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "control-group"
  }, /*#__PURE__*/React.createElement("h2", null, "Radio"), /*#__PURE__*/React.createElement("div", {
    className: "control-items"
  }, /*#__PURE__*/React.createElement(_Radio.default, {
    label: "Unchecked",
    checked: radioValue === 'unchecked',
    onChange: () => setRadioValue('unchecked')
  }), /*#__PURE__*/React.createElement(_Radio.default, {
    label: "Hover",
    checked: radioValue === 'hover',
    onChange: () => setRadioValue('hover')
  }), /*#__PURE__*/React.createElement(_Radio.default, {
    label: "Checked",
    checked: radioValue === 'checked',
    onChange: () => setRadioValue('checked')
  }), /*#__PURE__*/React.createElement(_Radio.default, {
    label: "Disable",
    checked: radioValue === 'disabled',
    onChange: () => setRadioValue('disabled'),
    disabled: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "control-group"
  }, /*#__PURE__*/React.createElement("h2", null, "Toggle"), /*#__PURE__*/React.createElement("div", {
    className: "control-items"
  }, /*#__PURE__*/React.createElement("div", {
    className: "toggle-item"
  }, /*#__PURE__*/React.createElement(_Toggle.default, {
    checked: toggleStates.on,
    onChange: () => setToggleStates(prev => _objectSpread(_objectSpread({}, prev), {}, {
      on: !prev.on
    }))
  }), /*#__PURE__*/React.createElement("span", null, "ON")), /*#__PURE__*/React.createElement("div", {
    className: "toggle-item"
  }, /*#__PURE__*/React.createElement(_Toggle.default, {
    checked: toggleStates.off,
    onChange: () => setToggleStates(prev => _objectSpread(_objectSpread({}, prev), {}, {
      off: !prev.off
    }))
  }), /*#__PURE__*/React.createElement("span", null, "OFF")), /*#__PURE__*/React.createElement("div", {
    className: "toggle-item"
  }, /*#__PURE__*/React.createElement(_Toggle.default, {
    disabled: true
  }), /*#__PURE__*/React.createElement("span", null, "Disable")))), /*#__PURE__*/React.createElement("div", {
    className: "control-group"
  }, /*#__PURE__*/React.createElement("h2", null, "Checkbox"), /*#__PURE__*/React.createElement("div", {
    className: "control-items"
  }, /*#__PURE__*/React.createElement(_Checkbox.default, {
    label: "Unchecked",
    checked: checkboxValue === 'unchecked',
    onChange: () => setCheckboxValue('unchecked')
  }), /*#__PURE__*/React.createElement(_Checkbox.default, {
    label: "Hover",
    checked: checkboxValue === 'hover',
    onChange: () => setCheckboxValue('hover')
  }), /*#__PURE__*/React.createElement(_Checkbox.default, {
    label: "Checked",
    checked: checkboxValue === 'checked',
    onChange: () => setCheckboxValue('checked')
  }), /*#__PURE__*/React.createElement(_Checkbox.default, {
    label: "Disable",
    checked: checkboxValue === 'disabled',
    onChange: () => setCheckboxValue('disabled'),
    disabled: true
  }))))));
}
var _default = exports.default = App;