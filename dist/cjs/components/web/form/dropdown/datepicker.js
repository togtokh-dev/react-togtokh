"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_flatpickr_1 = __importDefault(require("react-flatpickr"));
function Datepicker({ align, setStartDate, setEndDate, defaultDate, className, lable, }) {
    const options = {
        mode: "range",
        static: true,
        monthSelectorType: "static",
        dateFormat: "Y-m-d",
        // defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
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
        },
    };
    return (react_1.default.createElement(react_flatpickr_1.default, { className: `react-togtokh-dev dev-btn dev-btn-48 text-500-16 dev-border-8  ${className}`, options: options, defaultValue: lable }));
}
exports.default = Datepicker;
//# sourceMappingURL=datepicker.js.map