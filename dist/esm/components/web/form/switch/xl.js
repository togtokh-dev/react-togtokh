import React, { useState } from "react";
export default function ({ isOn, handleToggle, activeColor, className, inactiveColor, }) {
    const [name] = useState(`${Math.floor(Math.random() * 600) + 1}`);
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { checked: isOn, onChange: handleToggle, className: "react-togtokh-dev dev-switch-checkbox-xl absolute", id: `switch+${name}`, type: "checkbox" }),
        React.createElement("label", { style: isOn ? { background: activeColor } : { background: inactiveColor }, className: " dev-switch-label-xl " + className, htmlFor: `switch+${name}` },
            React.createElement("span", { className: ` dev-switch-button-xl ` }))));
}
//# sourceMappingURL=xl.js.map