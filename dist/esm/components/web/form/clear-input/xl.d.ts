import React from "react";
interface InStatusList {
    bgColor: string;
    textColor: string;
    placeholderColor: string;
    svgFill: string;
    caretColor: string;
    borderColor: string;
    status: string;
}
export interface svgProps {
    handleClick?: (event: React.MouseEvent<HTMLOrSVGElement>) => void;
    styleConfig?: InStatusList;
}
interface Props {
    value: any;
    setValue: (value: any) => void;
    label?: string;
    placeholder?: string;
    type: string;
    pattern?: string;
    statusList: InStatusList[];
    status: string;
    onBlur: any;
    onChange: any;
    onFocus: any;
    loading: Boolean;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    svgClassName?: string;
    maxLength?: number;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    addSvg: any;
    children?: React.ReactNode;
    disabled?: boolean | undefined;
    clearButton?: boolean | undefined;
}
export default function (props: Props): React.JSX.Element;
export {};
