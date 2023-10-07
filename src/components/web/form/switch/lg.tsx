import React from "react";

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
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-togtokh-dev dev-switch-checkbox-lg absolute"
        id={`switch`}
        type="checkbox"
      />
      <label
        style={
          isOn ? { background: activeColor } : { background: inactiveColor }
        }
        className={" dev-switch-label-lg " + className}
        htmlFor={`switch`}
      >
        <span className={` dev-switch-button-lg`} />
      </label>
    </>
  );
}
