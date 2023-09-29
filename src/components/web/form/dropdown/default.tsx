import React, { useState, useRef, useEffect } from "react";
import ReactTogtokh from "../../../../index";
interface options {
  id: string;
  period: string;
}
interface Props {
  value: any;
  setValue: (value: any) => void;
  lable?: string;
  options: options[];
  className?: string;
  backgroundColor: string;
  listClass: string;
  itemColor: { defualt: string; selected: string };
}
function Select(props: Props) {
  const {
    options,
    value,
    setValue,
    className,
    backgroundColor,
    listClass,
    itemColor,
  } = props;

  const [dropdownOpen, setDropdownOpen] = useState<any>(false);
  const [loading, setloading] = useState<any>(true);
  const [selected, setSelected] = useState<any>(null);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);
  useEffect(() => {
    const result = options.filter((data: any) => data?.id == value);
    setSelected(result[0]?.id);
    setloading(false);
  }, []);
  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="react-togtokh-dev dev-select-main">
      {loading ? (
        <></>
      ) : (
        <ReactTogtokh.MiniWeb.Button.XL
          className={`  dev-border-8  ${className}`}
          backgroundColor={backgroundColor}
          handleClick={() => setDropdownOpen(!dropdownOpen)}
          disableHover={true}
          type="button"
        >
          <div className="dev-select">
            <span>
              {options.filter((data: any) => data?.id == selected)[0]?.period}
            </span>
            {!dropdownOpen ? (
              <>
                <svg
                  className=" dev-select-svg"
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 7L1 0.999999"
                    stroke="#909BC0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 1L7 7"
                    stroke="#909BC0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  className="  dev-select-svg"
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L13 7"
                    stroke="#909BC0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 7L7 1"
                    stroke="#909BC0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </>
            )}

            {/* <svg
              className="shrink-0 ml-1 fill-current text-slate-400"
              width="11"
              height="7"
              viewBox="0 0 11 7"
            >
              <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
            </svg> */}
          </div>
        </ReactTogtokh.MiniWeb.Button.XL>
      )}

      {loading ? (
        <></>
      ) : (
        <ReactTogtokh.utils.Transition
          show={dropdownOpen}
          tag="div"
          className={`dev-select-list ${listClass}`}
          enter="transition ease-out duration-100 transform"
          enterStart="opacity-0 -translate-y-2"
          enterEnd="opacity-100 translate-y-0"
          leave="transition ease-out duration-100"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
        >
          <div
            ref={dropdown}
            className=""
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
          >
            {options.map((option: any) => {
              return (
                <button
                  key={option?.id}
                  tabIndex={0}
                  className={`item text-500-16 `}
                  style={{
                    color:
                      option?.id === selected
                        ? itemColor.selected
                        : itemColor.defualt,
                  }}
                  onClick={() => {
                    setSelected(option.id);
                    setValue(option.id);
                    setDropdownOpen(false);
                  }}
                  type="button"
                >
                  <svg
                    className={`item-svg `}
                    style={{
                      fill:
                        option.id === selected
                          ? itemColor.selected
                          : itemColor.defualt,

                      visibility:
                        option?.id !== selected ? "hidden" : "visible",
                    }}
                    width="12"
                    height="9"
                    viewBox="0 0 12 9"
                  >
                    <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                  </svg>
                  <span>{option?.period}</span>
                </button>
              );
            })}
          </div>
        </ReactTogtokh.utils.Transition>
      )}
    </div>
  );
}

export default Select;
