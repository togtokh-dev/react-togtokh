import React from "react";
export interface svgProps {
    handleClick?: (event: React.MouseEvent<HTMLOrSVGElement>) => void;
    svgColor: any;
}
interface Props {
    value: any;
    setValue: (value: any) => void;
    lable: string;
    className?: string;
    host: string;
    username: string;
    password: string;
    backgroundColor: string;
    svgColor: string;
    restype?: string;
    icon?: string;
}
export default function (props: Props): React.JSX.Element;
export {};
