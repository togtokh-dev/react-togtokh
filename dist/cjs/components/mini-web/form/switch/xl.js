"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function default_1({ isOn, handleToggle, activeColor, className, inactiveColor, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("input", { checked: isOn, onChange: handleToggle, className: "react-togtokh-dev dev-switch-checkbox-xl absolute", id: `switch`, type: "checkbox" }),
        react_1.default.createElement("label", { style: isOn ? { background: activeColor } : { background: inactiveColor }, className: " dev-switch-label-xl " + className, htmlFor: `switch` },
            react_1.default.createElement("span", { className: ` dev-switch-button-xl ` }))));
}
exports.default = default_1;
//# sourceMappingURL=xl.js.map