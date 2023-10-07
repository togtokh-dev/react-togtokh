import React from "react";
const Switch = ({ isOn, handleToggle, activeColor, className, inactiveColor, }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { checked: isOn, onChange: handleToggle, className: "react-togtokh-dev dev-switch-checkbox-xl absolute", id: `switch`, type: "checkbox" }),
        React.createElement("label", { style: isOn ? { background: activeColor } : { background: inactiveColor }, className: " dev-switch-label-xl " + className, htmlFor: `switch` },
            React.createElement("span", { className: ` dev-switch-button-xl ` }))));
};
export default Switch;
//# sourceMappingURL=xl.js.map