import React from "react";
interface options {
    id: string;
    period: string;
}
interface Props {
    value: any;
    setValue: (value: any) => void;
    label?: string;
    options: options[];
    className?: string;
    backgroundColor: string;
    listClass: string;
    itemColor: {
        defualt: string;
        selected: string;
    };
}
declare function Select(props: Props): React.JSX.Element;
export default Select;
