import React, { useState, useEffect, useRef } from "react";
import NcAnimations from "../../../NcAnimations";
interface InStatusList {
  isOn: boolean;
  handleToggle: (Event: any) => any;
  activeColor: string;
  inactiveColor: string;
  className: string;
}
const Switch = ({
  isOn,
  handleToggle,
  activeColor,
  className,
  inactiveColor,
}: InStatusList) => {
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
};

export default Switch;
