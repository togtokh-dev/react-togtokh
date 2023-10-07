import React, { useState } from "react";

interface InStatusList {
  isOn: boolean;
  handleToggle: (Event: any) => any;
  activeColor: string;
  inactiveColor: string;
  className: string;
}
export default function ({
  isOn,
  handleToggle,
  activeColor,
  className,
  inactiveColor,
}: InStatusList) {
  const [name] = useState(`${Math.floor(Math.random() * 600) + 1}`);
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-togtokh-dev dev-switch-checkbox-xl absolute"
        id={`switch+${name}`}
        type="checkbox"
      />
      <label
        style={
          isOn ? { background: activeColor } : { background: inactiveColor }
        }
        className={" dev-switch-label-xl " + className}
        htmlFor={`switch+${name}`}
      >
        <span className={` dev-switch-button-xl `} />
      </label>
    </>
  );
}
