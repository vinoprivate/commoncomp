"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MultiSelectDropdownModule = _interopRequireDefault(require("./MultiSelectDropdown.module.scss"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const MultiSelectDropdown = _ref => {
  let {
    label,
    id,
    disabled = false,
    value = [],
    onChange,
    isMandatoryField = false,
    maxLength = 255,
    placeholder = "Select",
    helperText = "",
    error = false,
    options = []
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const dropdownRef = (0, _react.useRef)(null);
  const toggleOption = option => {
    if (value.includes(option)) {
      onChange(value.filter(item => item !== option));
    } else {
      onChange([...value, option]);
    }
  };

  // Close dropdown when clicking outside
  (0, _react.useEffect)(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _MultiSelectDropdownModule.default.multiSelect,
    ref: dropdownRef
  }, label && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: error ? _MultiSelectDropdownModule.default.errorLabel : ""
  }, label, " ", isMandatoryField && /*#__PURE__*/_react.default.createElement("span", {
    className: _MultiSelectDropdownModule.default.required
  }, "*")), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_MultiSelectDropdownModule.default.dropdownHeader, " ").concat(disabled ? _MultiSelectDropdownModule.default.disabled : "", " ").concat(error ? _MultiSelectDropdownModule.default.errorBorder : ""),
    onClick: () => !disabled && setIsOpen(!isOpen)
  }, value.length > 0 ? value.join(", ") : placeholder, /*#__PURE__*/_react.default.createElement("span", {
    className: _MultiSelectDropdownModule.default.arrow
  }, "\u25BE")), isOpen && /*#__PURE__*/_react.default.createElement("ul", {
    className: _MultiSelectDropdownModule.default.dropdownList
  }, options.map(option => /*#__PURE__*/_react.default.createElement("li", {
    key: option,
    onClick: () => toggleOption(option)
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: value.includes(option),
    readOnly: true
  }), option))), helperText && /*#__PURE__*/_react.default.createElement("p", {
    className: error ? _MultiSelectDropdownModule.default.errorText : _MultiSelectDropdownModule.default.helperText
  }, helperText));
};
var _default = exports.default = MultiSelectDropdown;