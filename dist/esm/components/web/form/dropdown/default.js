import React, { useState, useRef, useEffect } from "react";
import ReactTogtokh from "../../../../index";
function Select(props) {
    var _a;
    const { options, value, setValue, className, backgroundColor, listClass, itemColor, lable, } = props;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [loading, setloading] = useState(true);
    const [selected, setSelected] = useState(null);
    const trigger = useRef(null);
    const dropdown = useRef(null);
    useEffect(() => {
        var _a;
        const result = options.filter((data) => (data === null || data === void 0 ? void 0 : data.id) == value);
        setSelected((_a = result[0]) === null || _a === void 0 ? void 0 : _a.id);
        setloading(false);
    }, [value]);
    // close on click outside
    useEffect(() => {
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
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!dropdownOpen || keyCode !== 27)
                return;
            setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });
    return (React.createElement("div", { className: "react-togtokh-dev dev-select-main" },
        loading ? (React.createElement(React.Fragment, null)) : (React.createElement(ReactTogtokh.MiniWeb.Button.XL, { className: `  dev-border-8  ${className}`, backgroundColor: backgroundColor, handleClick: () => setDropdownOpen(!dropdownOpen), disableHover: true, type: "button" },
            React.createElement("div", { className: "dev-select" },
                React.createElement("span", null, (_a = options.filter((data) => (data === null || data === void 0 ? void 0 : data.id) == selected)[0]) === null || _a === void 0 ? void 0 : _a.period),
                !dropdownOpen ? (React.createElement(React.Fragment, null,
                    React.createElement("svg", { className: " dev-select-svg", width: "14", height: "8", viewBox: "0 0 14 8", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("path", { d: "M7 7L1 0.999999", stroke: "#909BC0", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        React.createElement("path", { d: "M13 1L7 7", stroke: "#909BC0", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })))) : (React.createElement(React.Fragment, null,
                    React.createElement("svg", { className: "  dev-select-svg", width: "14", height: "8", viewBox: "0 0 14 8", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("path", { d: "M7 1L13 7", stroke: "#909BC0", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        React.createElement("path", { d: "M1 7L7 1", stroke: "#909BC0", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))))))),
        loading ? (React.createElement(React.Fragment, null)) : (React.createElement(ReactTogtokh.utils.Transition, { show: dropdownOpen, tag: "div", className: `dev-select-list ${listClass}`, enter: "transition ease-out duration-100 transform", enterStart: "opacity-0 -translate-y-2", enterEnd: "opacity-100 translate-y-0", leave: "transition ease-out duration-100", leaveStart: "opacity-100", leaveEnd: "opacity-0" },
            React.createElement("div", { ref: dropdown, className: "", onFocus: () => setDropdownOpen(true), onBlur: () => setDropdownOpen(false) }, options.map((option) => {
                return (React.createElement("button", { key: option === null || option === void 0 ? void 0 : option.id, tabIndex: 0, className: `item text-500-16 `, style: {
                        color: (option === null || option === void 0 ? void 0 : option.id) === selected
                            ? itemColor.selected
                            : itemColor.defualt,
                    }, onClick: () => {
                        setSelected(option.id);
                        setValue(option.id);
                        setDropdownOpen(false);
                    }, type: "button" },
                    React.createElement("svg", { className: `item-svg `, style: {
                            fill: option.id === selected
                                ? itemColor.selected
                                : itemColor.defualt,
                            visibility: (option === null || option === void 0 ? void 0 : option.id) !== selected ? "hidden" : "visible",
                        }, width: "12", height: "9", viewBox: "0 0 12 9" },
                        React.createElement("path", { d: "M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" })),
                    React.createElement("span", null, (option === null || option === void 0 ? void 0 : option.period) || lable)));
            }))))));
}
export default Select;
//# sourceMappingURL=default.js.map