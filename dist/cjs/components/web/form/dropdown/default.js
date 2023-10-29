"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const index_1 = __importDefault(require("../../../../index"));
function Select(props) {
    var _a;
    const { options, value, setValue, className, backgroundColor, listClass, itemColor, lable, } = props;
    const [dropdownOpen, setDropdownOpen] = (0, react_1.useState)(false);
    const [loading, setloading] = (0, react_1.useState)(true);
    const [selected, setSelected] = (0, react_1.useState)(null);
    const [isFocused, setFocus] = (0, react_1.useState)(false);
    const dropdown = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        var _a;
        const result = options.filter((data) => (data === null || data === void 0 ? void 0 : data.id) == value);
        setSelected((_a = result[0]) === null || _a === void 0 ? void 0 : _a.id);
        setloading(false);
    }, [value]);
    // close on click outside
    (0, react_1.useEffect)(() => {
        const clickHandler = ({ target }) => {
            if (!dropdown.current)
                return;
            if (dropdownOpen && !dropdown.current.contains(target)) {
                setDropdownOpen(false);
            }
            return;
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });
    // close if the esc key is pressed
    (0, react_1.useEffect)(() => {
        const keyHandler = ({ keyCode }) => {
            if (!dropdownOpen || keyCode !== 27)
                return;
            setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });
    const style = {
        background: isFocused
            ? `linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%), ${backgroundColor}`
            : backgroundColor,
    };
    return (react_1.default.createElement("div", { className: "react-toki-app dev-select-main ", ref: dropdown },
        loading ? (react_1.default.createElement(react_1.default.Fragment, null)) : (react_1.default.createElement("button", { className: `react-toki-app dev-dropdown-button text-500-14 dev-border-8  ${className}`, onMouseEnter: () => setFocus(true), onMouseLeave: () => setFocus(false), style: style, type: "button", onClick: () => setDropdownOpen(!dropdownOpen) },
            react_1.default.createElement("div", { className: "dev-select" },
                react_1.default.createElement("span", null, ((_a = options.filter((data) => (data === null || data === void 0 ? void 0 : data.id) == selected)[0]) === null || _a === void 0 ? void 0 : _a.period) ||
                    lable),
                !dropdownOpen ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("svg", { className: "  dev-select-svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("path", { d: "M6 9L12 15L18 9", stroke: "#101318", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })))) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("svg", { className: "  dev-select-svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("path", { d: "M6 15L12 9L18 15", stroke: "#101318", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }))))))),
        loading ? (react_1.default.createElement(react_1.default.Fragment, null)) : (react_1.default.createElement(index_1.default.utils.Transition, { show: dropdownOpen, tag: "div", className: `dev-select-list ${listClass}`, enter: "transition ease-out duration-100 transform", enterStart: "opacity-0 -translate-y-2", enterEnd: "opacity-100 translate-y-0", leave: "transition ease-out duration-100", leaveStart: "opacity-100", leaveEnd: "opacity-0" },
            react_1.default.createElement("div", { className: "", onFocus: () => setDropdownOpen(true), onBlur: () => setDropdownOpen(false) }, options.map((option) => {
                return (react_1.default.createElement("button", { key: option === null || option === void 0 ? void 0 : option.id, tabIndex: 0, className: `item text-500-14 dev-dropdown-button `, style: {
                        color: (option === null || option === void 0 ? void 0 : option.id) === selected
                            ? itemColor.selected
                            : itemColor.defualt,
                    }, onClick: () => {
                        setSelected(option.id);
                        setValue(option.id);
                        setDropdownOpen(false);
                    }, type: "button" },
                    react_1.default.createElement("svg", { className: `item-svg `, style: {
                            fill: option.id === selected
                                ? itemColor.selected
                                : itemColor.defualt,
                            visibility: (option === null || option === void 0 ? void 0 : option.id) !== selected ? "hidden" : "visible",
                        }, width: "12", height: "9", viewBox: "0 0 12 9" },
                        react_1.default.createElement("path", { d: "M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" })),
                    react_1.default.createElement("span", null, option === null || option === void 0 ? void 0 : option.period)));
            }))))));
}
exports.default = Select;
//# sourceMappingURL=default.js.map