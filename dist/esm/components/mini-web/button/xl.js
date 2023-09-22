import React, { useState } from "react";
import { motion } from "framer-motion";
export default function (props) {
    const { children, backgroundColor, className = "", type = "button", title, disabled, handleClick, disableHover = false, } = props;
    const [isFocused, setFocus] = useState(false);
    const style = {
        background: disableHover
            ? backgroundColor
            : isFocused
                ? `linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%), ${backgroundColor}`
                : backgroundColor,
    };
    return (React.createElement(motion.button, { className: `dev-btn dev-btn-48 text-500-16 dev-border-8  ${className}`, onMouseEnter: () => setFocus(true), onMouseLeave: () => setFocus(false), style: style, type: type, title: title, onClick: handleClick, disabled: disabled ? true : false }, children));
}
//# sourceMappingURL=xl.js.map