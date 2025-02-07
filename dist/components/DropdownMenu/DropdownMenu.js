"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _DropdownMenuModule = _interopRequireDefault(require("./DropdownMenu.module.scss"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DropdownMenu = _ref => {
  let {
    label,
    id,
    disabled = false,
    value = "",
    onChange,
    isMandatoryField = false,
    placeholder = "Select",
    helperText = "",
    error = false,
    options = []
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const dropdownRef = (0, _react.useRef)(null);

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
    className: _DropdownMenuModule.default.dropdown,
    ref: dropdownRef
  }, label && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: error ? _DropdownMenuModule.default.errorLabel : ""
  }, label, " ", isMandatoryField && /*#__PURE__*/_react.default.createElement("span", {
    className: _DropdownMenuModule.default.required
  }, "*")), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_DropdownMenuModule.default.dropdownHeader, " ").concat(disabled ? _DropdownMenuModule.default.disabled : "", " ").concat(error ? _DropdownMenuModule.default.errorBorder : ""),
    onClick: () => !disabled && setIsOpen(!isOpen)
  }, value || placeholder, /*#__PURE__*/_react.default.createElement("span", {
    className: _DropdownMenuModule.default.arrow
  }, "\u25BE")), isOpen && /*#__PURE__*/_react.default.createElement("ul", {
    className: _DropdownMenuModule.default.dropdownList
  }, options === null || options === void 0 ? void 0 : options.map(option => /*#__PURE__*/_react.default.createElement("li", {
    key: option,
    onClick: () => onChange(option)
  }, option))), helperText && /*#__PURE__*/_react.default.createElement("p", {
    className: error ? _DropdownMenuModule.default.errorText : _DropdownMenuModule.default.helperText
  }, helperText));
};
var _default = exports.default = DropdownMenu;