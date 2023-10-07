import React from "react";
interface InStatusList {
    isOn: boolean;
    handleToggle: (Event: any) => any;
    activeColor: string;
    inactiveColor: string;
    className: string;
}
export default function ({ isOn, handleToggle, activeColor, className, inactiveColor, }: InStatusList): React.JSX.Element;
export {};
