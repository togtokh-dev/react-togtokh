import React from "react";
interface Props {
    value: any;
    setValue: (value: any) => void;
    lable: string;
    className?: string;
    host: string;
    public_host: string;
    username: string;
    password: string;
    backgroundColor: string;
}
export default function (props: Props): React.JSX.Element;
export {};
