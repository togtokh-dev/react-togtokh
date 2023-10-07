"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function default_1({ isOn, handleToggle, activeColor, className, inactiveColor, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("input", { checked: isOn, onChange: handleToggle, className: "react-togtokh-dev dev-switch-checkbox-lg absolute", id: `switch`, type: "checkbox" }),
        react_1.default.createElement("label", { style: isOn ? { background: activeColor } : { background: inactiveColor }, className: " dev-switch-label-lg " + className, htmlFor: `switch` },
            react_1.default.createElement("span", { className: ` dev-switch-button-lg` }))));
}
exports.default = default_1;
//# sourceMappingURL=lg.js.map