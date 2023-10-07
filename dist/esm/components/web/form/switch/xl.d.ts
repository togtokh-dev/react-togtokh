import React from "react";
interface InStatusList {
    isOn: boolean;
    handleToggle: (Event: any) => any;
    activeColor: string;
    inactiveColor: string;
    className: string;
}
declare const Switch: ({ isOn, handleToggle, activeColor, className, inactiveColor, }: InStatusList) => React.JSX.Element;
export default Switch;
