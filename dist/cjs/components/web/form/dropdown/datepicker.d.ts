import React from "react";
interface Props {
    setEndDate: (value: any) => void;
    setStartDate: (value: any) => void;
    label?: string;
    defaultDate?: string;
    className?: string;
    align?: string;
}
declare function Datepicker({ align, setStartDate, setEndDate, defaultDate, className, label, }: Props): React.JSX.Element;
export default Datepicker;
