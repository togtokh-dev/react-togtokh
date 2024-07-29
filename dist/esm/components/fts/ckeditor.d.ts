import React from "react";
interface Props {
    value: any;
    setValue: (value: any) => void;
    label: string;
    className?: string;
    host: string;
    username: string;
    password: string;
}
export default function (props: Props): React.JSX.Element;
export {};
