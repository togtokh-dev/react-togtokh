import React from "react";
const Switch = ({ isOn, handleToggle, activeColor, className, inactiveColor, }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { checked: isOn, onChange: handleToggle, className: "react-togtokh-dev dev-switch-checkbox-lg absolute", id: `switch`, type: "checkbox" }),
        React.createElement("label", { style: isOn ? { background: activeColor } : { background: inactiveColor }, className: " dev-switch-label-lg " + className, htmlFor: `switch` },
            React.createElement("span", { className: ` dev-switch-button-lg` }))));
};
export default Switch;
//# sourceMappingURL=lg.js.map