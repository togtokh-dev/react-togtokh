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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
function default_1(props) {
    const { children, backgroundColor, className = "", type = "button", title, disabled, handleClick, disableHover = false, useStyle = false, ref, } = props;
    const [isFocused, setFocus] = (0, react_1.useState)(false);
    const style = useStyle
        ? {
            background: disableHover
                ? backgroundColor
                : isFocused
                    ? `linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%), ${backgroundColor}`
                    : backgroundColor,
        }
        : {};
    return (react_1.default.createElement(framer_motion_1.motion.button, { className: `react-togtokh-dev dev-btn dev-btn-48 text-500-16 dev-border-8  ${className}`, onMouseEnter: () => setFocus(true), onMouseLeave: () => setFocus(false), style: style, type: type, title: title, onClick: handleClick, disabled: disabled ? true : false, ref: ref }, children));
}
exports.default = default_1;
//# sourceMappingURL=xl.js.map