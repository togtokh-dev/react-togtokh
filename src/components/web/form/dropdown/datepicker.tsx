import React from "react";
import Flatpickr from "react-flatpickr";
// import "flatpickr/dist/themes/dark.css";
function Datepicker({ align, setStartDate, setEndDate, defaultDate }: any) {
  const options: any = {
    mode: "range",
    static: true,
    monthSelectorType: "static",
    dateFormat: "Y-m-d",
    // defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
    defaultDate: defaultDate ? defaultDate : [],
    prevArrow:
      '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
    nextArrow:
      '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    onReady: (selectedDates: any, dateStr: any, instance: any) => {
      instance.element.value = dateStr.replace("to", "-");
      const customClass = align ? align : "";
      instance.calendarContainer.classList.add(`flatpickr-${customClass}`);
    },
    onChange: (selectedDates: any, dateStr: any, instance: any) => {
      if (dateStr) {
        setStartDate(dateStr.split("to")[0] || null);
        setEndDate(dateStr.split("to")[1] || null);
      }

      instance.element.value = dateStr.replace("to", "-");
    },
  };

  return (
    <div className="w-auto h-full bg-white flex items-center justify-between dev-border-8 h-[48px]">
      <Flatpickr
        className=" dev-btn dev-btn-48 text-500-16 dev-border-8  w-full  text-[#1E2335] "
        options={options}
      />
    </div>
  );
}

export default Datepicker;