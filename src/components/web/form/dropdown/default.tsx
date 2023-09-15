import React, { useState, useRef, useEffect } from "react";
import ReactTogtokh from "../../../../index";
function Select(props: any) {
  const { options, value, setValue } = props;

  const [dropdownOpen, setDropdownOpen] = useState<any>(false);
  const [loading, setloading] = useState<any>(true);
  const [selected, setSelected] = useState<any>(null);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);
  useEffect(() => {
    const result = options.filter((data: any) => data.id == value);
    setSelected(result[0].id);
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
    <div className="relative mr-[5px]  flex items-center">
      {loading ? (
        <></>
      ) : (
        <ReactTogtokh.MiniWeb.Button.XL
          className="  dev-border-8 w-full  text-[#1E2335] min-w-44 flex items-center justify-between h-full"
          backgroundColor="#FFFFFF"
          handleClick={() => setDropdownOpen(!dropdownOpen)}
          disableHover={true}
        >
          <div className="w-full flex justify-between items-center">
            <span className="flex items-center">
              <span>
                {options.filter((data: any) => data.id == selected)[0]?.period}
              </span>
            </span>
            {!dropdownOpen ? (
              <>
                <svg
                  className="transition-all ml-2"
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
                  className="transition-all  ml-2"
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
          className="z-10 absolute top-full right-0 w-full bg-white border border-slate-200 py-3.5 dev-border-8 dev-shadow-8 overflow-hidden mt-1"
          enter="transition ease-out duration-100 transform"
          enterStart="opacity-0 -translate-y-2"
          enterEnd="opacity-100 translate-y-0"
          leave="transition ease-out duration-100"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
        >
          <div
            ref={dropdown}
            className="font-medium text-sm text-[#818e9a]"
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
          >
            {options.map((option: any) => {
              return (
                <button
                  key={option.id}
                  tabIndex={0}
                  className={`flex items-center w-full hover:bg-slate-50 py-1 px-3 text-500-16 cursor-pointer ${
                    option.id === selected && "text-[#101318]"
                  }`}
                  onClick={() => {
                    setSelected(option.id);
                    setValue(option.id);
                    setDropdownOpen(false);
                  }}
                >
                  <svg
                    className={`shrink-0 mr-2 fill-current text-[#818e9a] ${
                      option.id !== selected && "invisible"
                    }`}
                    width="12"
                    height="9"
                    viewBox="0 0 12 9"
                  >
                    <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                  </svg>
                  <span>{option.period}</span>
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
