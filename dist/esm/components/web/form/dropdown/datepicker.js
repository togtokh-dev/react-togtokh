import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
function Datepicker({ align, setStartDate, setEndDate, defaultDate, className, lable = "Өдөр сонгох", }) {
    const [value, setValue] = useState(lable);
    const options = {
        mode: "range",
        static: true,
        monthSelectorType: "static",
        dateFormat: "Y-m-d",
        // defaultDate: [new Date().setDate(new Date().get
        defaultDate: defaultDate ? defaultDate : [],
        prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
        nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
        onReady: (selectedDates, dateStr, instance) => {
            instance.element.value = dateStr.replace("to", "-");
            const customClass = align ? align : "";
            instance.calendarContainer.classList.add(`flatpickr-${customClass}`);
        },
        onChange: (selectedDates, dateStr, instance) => {
            if (dateStr) {
                setStartDate(dateStr.split("to")[0] || null);
                setEndDate(dateStr.split("to")[1] || null);
            }
            instance.element.value = dateStr.replace("to", "-");
            setValue(dateStr);
        },
    };
    return (React.createElement("div", { className: "react-toki-app dev-select-main" },
        React.createElement("div", { className: `react-toki-app text-500-14 dev-dropdown-button dev-border-8  ${className}` },
            React.createElement("div", { className: "dev-select" },
                React.createElement(Flatpickr, { className: `bg-transparent w-full text-500-14`, options: options, defaultValue: lable, style: {
                        fontSize: "14px",
                    }, value: value }),
                value != lable ? (React.createElement(React.Fragment, null,
                    React.createElement("svg", { className: "  dev-select-svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "#000", xmlns: "http://www.w3.org/2000/svg", onClick: () => {
                            setValue(lable || "");
                            setStartDate(null);
                            setEndDate(null);
                        } },
                        React.createElement("circle", { cx: "12", cy: "12", r: "9" }),
                        React.createElement("path", { d: "M15 9L9 15", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                        React.createElement("path", { d: "M15 15L9 9", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })))) : (React.createElement(React.Fragment, null,
                    React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "  dev-select-svg" },
                        React.createElement("path", { d: "M8 1V4M16 1V4M17.5 8H6.5M8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5M8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5M8 12.5H7M8 16.5C8 16.7761 7.77614 17 7.5 17C7.22386 17 7 16.7761 7 16.5M8 16.5C8 16.2239 7.77614 16 7.5 16C7.22386 16 7 16.2239 7 16.5M8 16.5H7M12.5 12.5C12.5 12.7761 12.2761 13 12 13C11.7239 13 11.5 12.7761 11.5 12.5M12.5 12.5C12.5 12.2239 12.2761 12 12 12C11.7239 12 11.5 12.2239 11.5 12.5M12.5 12.5H11.5M12.5 16.5C12.5 16.7761 12.2761 17 12 17C11.7239 17 11.5 16.7761 11.5 16.5M12.5 16.5C12.5 16.2239 12.2761 16 12 16C11.7239 16 11.5 16.2239 11.5 16.5M12.5 16.5H11.5M17 12.5C17 12.7761 16.7761 13 16.5 13C16.2239 13 16 12.7761 16 12.5M17 12.5C17 12.2239 16.7761 12 16.5 12C16.2239 12 16 12.2239 16 12.5M17 12.5H16M17 16.5C17 16.7761 16.7761 17 16.5 17C16.2239 17 16 16.7761 16 16.5M17 16.5C17 16.2239 16.7761 16 16.5 16C16.2239 16 16 16.2239 16 16.5M17 16.5H16M11.6 22H12.4C15.7603 22 17.4405 22 18.7239 21.346C19.8529 20.7708 20.7708 19.8529 21.346 18.7239C22 17.4405 22 15.7603 22 12.4V11.6C22 8.23969 22 6.55953 21.346 5.27606C20.7708 4.14708 19.8529 3.2292 18.7239 2.65396C17.4405 2 15.7603 2 12.4 2H11.6C8.23969 2 6.55953 2 5.27606 2.65396C4.14708 3.2292 3.2292 4.14708 2.65396 5.27606C2 6.55953 2 8.23969 2 11.6V12.4C2 15.7603 2 17.4405 2.65396 18.7239C3.2292 19.8529 4.14708 20.7708 5.27606 21.346C6.55953 22 8.23969 22 11.6 22Z", stroke: "#101318", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }))))))));
}
export default Datepicker;
//# sourceMappingURL=datepicker.js.map