import React, { useState, useRef, useEffect } from "react";
import ReactTokiApp from "../../../../index";
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
    label,
  } = props;

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(true);
  const [selected, setSelected] = useState<string | null>(null);
  const [isFocused, setFocus] = useState(false);
  const dropdown = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const result = options.filter((data) => data?.id == value);
    setSelected(result[0]?.id);
    setloading(false);
  }, [value]);
  // close on click outside
  useEffect(() => {
    const clickHandler = (event: React.MouseEvent | MouseEvent) => {
      if (!dropdown.current || !(event.target instanceof Node)) return;

      if (dropdownOpen && !dropdown.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: React.KeyboardEvent | KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  const style = {
    background: isFocused
      ? `linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%), ${backgroundColor}`
      : backgroundColor,
  };
  return (
    <div className="react-toki-app dev-select-main " ref={dropdown}>
      {loading ? (
        <></>
      ) : (
        <button
          className={`react-toki-app dev-dropdown-button text-500-14 dev-border-8  ${className}`}
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
          style={style}
          type={"button"}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="dev-select">
            <span>
              {options.filter((data) => data?.id == selected)[0]?.period ||
                label}
            </span>
            {!dropdownOpen ? (
              <>
                <svg
                  className="  dev-select-svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#101318"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  className="  dev-select-svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 15L12 9L18 15"
                    stroke="#101318"
                    stroke-width="1.5"
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
        </button>
      )}

      {loading ? (
        <></>
      ) : (
        <ReactTokiApp.utils.Transition
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
            className=""
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
          >
            {options.map((option) => {
              return (
                <button
                  key={option?.id}
                  tabIndex={0}
                  className={`item text-500-14 dev-dropdown-button `}
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
        </ReactTokiApp.utils.Transition>
      )}
    </div>
  );
}

export default Select;
