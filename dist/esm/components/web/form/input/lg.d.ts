import React, { FocusEvent, ChangeEvent, KeyboardEvent } from "react";
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
    lable?: string;
    placeholder?: string;
    type: string;
    pattern?: string;
    statusList: InStatusList[];
    status: string;
    onBlur?: (value: FocusEvent<HTMLInputElement>) => void;
    onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (value: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (value: KeyboardEvent<HTMLInputElement> | undefined) => void;
    loading?: Boolean;
    className?: string;
    inputClassName?: string;
    lableClassName?: string;
    svgClassName?: string;
    maxLength?: number;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    addSvg?: any;
    children?: React.ReactNode;
    disabled?: boolean | undefined;
    clearButton?: boolean | undefined;
}
export default function (props: Props): React.JSX.Element;
export {};
