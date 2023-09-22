import React from "react";
interface Props {
    setEndDate: (value: any) => void;
    setStartDate: (value: any) => void;
    lable?: string;
    defaultDate?: string;
    className?: string;
    align?: string;
}
declare function Datepicker({ align, setStartDate, setEndDate, defaultDate, className, lable, }: Props): React.JSX.Element;
export default Datepicker;
