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
    const { options, value, setValue } = props;
    const [dropdownOpen, setDropdownOpen] = (0, react_1.useState)(false);
    const [loading, setloading] = (0, react_1.useState)(true);
    const [selected, setSelected] = (0, react_1.useState)(null);
    const trigger = (0, react_1.useRef)(null);
    const dropdown = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const result = options.filter((data) => data.id == value);
        setSelected(result[0].id);
        setloading(false);
    }, []);
    // close on click outside
    (0, react_1.useEffect)(() => {
        const clickHandler = ({ target }) => {
            if (!dropdown.current)
                return;
            if (!dropdownOpen ||
                dropdown.current.contains(target) ||
                trigger.current.contains(target))
                return;
            setDropdownOpen(false);
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
    return (react_1.default.createElement("div", { className: "relative mr-[5px]  flex items-center" },
        loading ? (react_1.default.createElement(react_1.default.Fragment, null)) : (react_1.default.createElement(index_1.default.MiniWeb.Button.XL, { className: "  dev-border-8 w-full  text-[#1E2335] min-w-44 flex items-center justify-between h-full", backgroundColor: "#FFFFFF", handleClick: () => setDropdownOpen(!dropdownOpen), disableHover: true },
            react_1.default.createElement("div", { className: "w-full flex justify-between items-center" },
                react_1.default.createElement("span", { className: "flex items-center" },
                    react_1.default.createElement("span", null, (_a = options.filter((data) => data.id == selected)[0]) === null || _a === void 0 ? void 0 : _a.period)),
                !dropdownOpen ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("svg", { className: "transition-all ml-2", width: "14", height: "8", viewBox: "0 0 14 8", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("path", { d: "M7 7L1 0.999999", stroke: "#909BC0", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        react_1.default.createElement("path", { d: "M13 1L7 7", stroke: "#909BC0", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })))) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("svg", { className: "transition-all  ml-2", width: "14", height: "8", viewBox: "0 0 14 8", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("path", { d: "M7 1L13 7", stroke: "#909BC0", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        react_1.default.createElement("path", { d: "M1 7L7 1", stroke: "#909BC0", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))))))),
        loading ? (react_1.default.createElement(react_1.default.Fragment, null)) : (react_1.default.createElement(index_1.default.utils.Transition, { show: dropdownOpen, tag: "div", className: "z-10 absolute top-full right-0 w-full bg-white border border-slate-200 py-3.5 dev-border-8 dev-shadow-8 overflow-hidden mt-1", enter: "transition ease-out duration-100 transform", enterStart: "opacity-0 -translate-y-2", enterEnd: "opacity-100 translate-y-0", leave: "transition ease-out duration-100", leaveStart: "opacity-100", leaveEnd: "opacity-0" },
            react_1.default.createElement("div", { ref: dropdown, className: "font-medium text-sm text-[#818e9a]", onFocus: () => setDropdownOpen(true), onBlur: () => setDropdownOpen(false) }, options.map((option) => {
                return (react_1.default.createElement("button", { key: option.id, tabIndex: 0, className: `flex items-center w-full hover:bg-slate-50 py-1 px-3 text-500-16 cursor-pointer ${option.id === selected && "text-[#101318]"}`, onClick: () => {
                        setSelected(option.id);
                        setValue(option.id);
                        setDropdownOpen(false);
                    } },
                    react_1.default.createElement("svg", { className: `shrink-0 mr-2 fill-current text-[#818e9a] ${option.id !== selected && "invisible"}`, width: "12", height: "9", viewBox: "0 0 12 9" },
                        react_1.default.createElement("path", { d: "M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" })),
                    react_1.default.createElement("span", null, option.period)));
            }))))));
}
exports.default = Select;
//# sourceMappingURL=default.js.map