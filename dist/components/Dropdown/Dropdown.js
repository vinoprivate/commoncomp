"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
require("./Dropdown.scss");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Dropdown = _ref => {
  let {
    placeholder = 'Input placeholder',
    options = [],
    disabled = false,
    multiSelect = false,
    defaultSelected = [],
    className
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const [selected, setSelected] = (0, _react.useState)(defaultSelected);
  const dropdownRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const toggleOption = option => {
    if (multiSelect) {
      setSelected(selected.includes(option) ? selected.filter(item => item !== option) : [...selected, option]);
    } else {
      setSelected([option]);
      setIsOpen(false);
    }
  };
  const displayValue = () => {
    if (selected.length === 0) return placeholder;
    return multiSelect ? "".concat(selected.length, " selected") : selected[0];
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: dropdownRef,
    className: (0, _classnames.default)('dropdown', className, {
      'dropdown--disabled': disabled,
      'dropdown--open': isOpen
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown__header",
    onClick: () => !disabled && setIsOpen(!isOpen)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "dropdown__placeholder"
  }, displayValue()), /*#__PURE__*/_react.default.createElement("span", {
    className: "dropdown__arrow"
  })), isOpen && !disabled && /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown__options"
  }, options.map(option => /*#__PURE__*/_react.default.createElement("div", {
    key: option,
    className: (0, _classnames.default)('dropdown__option', {
      'dropdown__option--selected': selected.includes(option)
    }),
    onClick: () => toggleOption(option)
  }, multiSelect && /*#__PURE__*/_react.default.createElement("span", {
    className: "dropdown__checkbox"
  }, selected.includes(option) && '✓'), option))));
};
var _default = exports.default = Dropdown;