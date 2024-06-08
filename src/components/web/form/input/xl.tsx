import React, {
  useState,
  useEffect,
  useRef,
  FocusEvent,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import NcAnimations from "../../../NcAnimations";
import { motion, AnimatePresence } from "framer-motion";
interface InStatusList {
  bgColor: string;
  textColor: string;
  placeholderColor: string;
  svgFill: string;
  caretColor: string;
  borderColor: string;
  status: string;
}
export interface svgProps {
  handleClick?: (event: React.MouseEvent<HTMLOrSVGElement>) => void;
  styleConfig?: InStatusList;
}

interface Props {
  value: any;
  setValue: (value: any) => void;
  lable?: string;
  placeholder?: string;
  type: string;
  pattern?: string;
  statusList: InStatusList[];
  status: string;
  onBlur?: (value: FocusEvent<HTMLInputElement>) => void;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (value: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (value: KeyboardEvent<HTMLInputElement> | undefined) => void;
  loading?: Boolean;
  className?: string;
  inputClassName?: string;
  lableClassName?: string;
  svgClassName?: string;
  maxLength?: number;
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  addSvg?: any;
  children?: React.ReactNode;
  disabled?: boolean | undefined;
  clearButton?: boolean | undefined;
}
const showSvg = ({ handleClick, styleConfig }: svgProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <path
        d="M17.32 6.93C15.73 5.68 13.9 5 12 5C8.19 5 4.71 7.72 2.75 12.25C3.73 14.51 5.09 16.32 6.68 17.57M9.88 14.37C9.34 13.83 9 13.08 9 12.25C9 10.59 10.35 9.25 12 9.25C12.83 9.25 13.58 9.59 14.12 10.13M19.5 4.75L4.5 19.75"
        stroke={styleConfig?.svgFill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9501 12.7803C14.7301 13.9903 13.7901 14.9403 12.6001 15.1903"
        stroke={styleConfig?.svgFill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.47021 19.0899C10.2902 19.3599 11.1302 19.4999 12.0002 19.4999C15.8102 19.4999 19.2902 16.7799 21.2502 12.2499C20.7502 11.0799 20.1402 10.0399 19.4502 9.12988"
        stroke={styleConfig?.svgFill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const hideSvg = ({ handleClick, styleConfig }: svgProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <path
        d="M12 19.25C15.81 19.25 19.29 16.5288 21.25 12C19.29 7.47123 15.81 4.75 12 4.75C8.19 4.75 4.71 7.47123 2.75 12C4.71 16.5288 8.19 19.25 12 19.25V19.25Z"
        stroke={styleConfig?.svgFill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12C15 13.6614 13.6519 15 12 15C10.3481 15 9 13.6519 9 12C9 10.3386 10.3481 9 12 9C13.6614 9 15 10.3481 15 12Z"
        stroke={styleConfig?.svgFill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const removeSvg = ({ handleClick, styleConfig }: svgProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={styleConfig?.svgFill}
      xmlns="http://www.w3.org/2000/svg"
      className={` dev-svg `}
      onClick={handleClick}
    >
      <circle cx="12" cy="12" r="9" />
      <path
        d="M15 9L9 15"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 15L9 9"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const loadingSvg = ({ handleClick, styleConfig }: svgProps) => {
  return (
    <>
      <NcAnimations.LoadingRiv />
    </>
  );
};
export default function (props: Props) {
  const {
    value,
    setValue,
    placeholder,
    type,
    disabled,
    className,
    maxLength,
    inputMode,
    pattern,
    lable,
    children,
    loading = false,
    statusList,
    status,
    addSvg = null,
    clearButton = true,
    inputClassName,
    lableClassName,
    svgClassName,
    onBlur = (event) => {},
    onChange = (event) => {},
    onFocus = (event) => {},
    onClick = (event) => {},
    onKeyDown = (event) => {},
  } = props;
  const [name] = useState(`${Math.floor(Math.random() * 600) + 1}`);
  const textInput = useRef<HTMLInputElement>(null);
  const [focusType, setfocusType] = useState(false);
  const [show, setShow] = useState(false);
  const [svgWidth, setSvgWidth] = useState("24px");
  const [styleConfig, setStyleConfig] = useState<InStatusList>({
    bgColor: "#FFFFFF",
    textColor: "#101318",
    placeholderColor: "#818E9A",
    svgFill: "#FFC800",
    caretColor: "#FFC800",
    borderColor: "#FFC800",
    status: "success",
  });
  useEffect(() => {
    const a = statusList.filter((el) => el.status == status);
    setStyleConfig(a[0]);
  }, [status]);
  useEffect(() => {
    let count = 0;
    if (addSvg) {
      count++;
    }
    if (loading) {
      count++;
      if (type == "password") {
        count++;
      }
    } else {
      if (type == "password") {
        count++;
      } else if (clearButton) {
        if (focusType) {
          count++;
        }
      }
    }
    setSvgWidth(
      `${count * 24 + count * 8 - 8 > 0 ? count * 24 + count * 8 - 8 : 0}px`
    );
  }, [addSvg, loading, type, clearButton, focusType]);
  return (
    <>
      {children ? (
        <div
          className={"react-togtokh-dev dev-input-box-web w-full " + className}
          style={{
            backgroundColor: styleConfig?.bgColor,
            color: styleConfig?.textColor,
          }}
        >
          <div className="dev-input-children">{children}</div>
          <div className=" w-full h-full ">
            {" "}
            {lable && (
              <label
                htmlFor={name}
                className={`dev-input-lable-children-icon ${
                  value
                    ? "text-400-14 dev-input-lable-deactivate"
                    : `${
                        focusType
                          ? "text-400-14 dev-input-lable-deactivate"
                          : "text-400-14 dev-input-lable-active"
                      } ${lableClassName}`
                }`}
                style={{
                  color: styleConfig?.placeholderColor,
                }}
              >
                {lable}
              </label>
            )}
            <div
              className={"dev-svg-box " + svgClassName}
              style={{
                width: svgWidth,
              }}
            >
              {addSvg ? (
                <>
                  {addSvg({
                    handleClick: () => {},
                  })}
                </>
              ) : (
                <></>
              )}
              {loading ? (
                <>
                  {loadingSvg({
                    handleClick: () => {},
                    styleConfig: styleConfig,
                  })}
                </>
              ) : (
                <>
                  {" "}
                  {type == "password" ? (
                    <div>
                      {!show
                        ? hideSvg({
                            handleClick: () => {
                              setShow(true);
                            },
                            styleConfig: styleConfig,
                          })
                        : showSvg({
                            handleClick: () => {
                              setShow(false);
                            },
                            styleConfig: styleConfig,
                          })}
                    </div>
                  ) : (
                    <>
                      {clearButton ? (
                        <AnimatePresence>
                          {focusType && (
                            <motion.div
                              onClick={(event) => {
                                event.preventDefault();
                                setValue("");
                                textInput.current?.focus({
                                  preventScroll: true,
                                });
                              }}
                              id="minus"
                              animate={{
                                opacity: 1,
                                transition: {
                                  opacity: { duration: 0.4 },
                                },
                              }}
                              exit={{ opacity: 0 }}
                              className=""
                            >
                              {removeSvg({
                                handleClick: (event) => {
                                  event.preventDefault();
                                  setValue("");
                                  textInput.current?.focus({
                                    preventScroll: true,
                                  });
                                },
                                styleConfig: styleConfig,
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
            <input
              id={name}
              ref={textInput}
              type={show ? "text" : type}
              className={
                "dev-input-children-icon  text-400-14 " + inputClassName
              }
              defaultValue={value}
              inputMode={inputMode}
              pattern={pattern}
              value={value}
              placeholder={focusType ? placeholder : ""}
              onBlur={(e) => {
                onBlur(e);
                setfocusType(false);
              }}
              onFocus={(e) => {
                onFocus(e);
                setfocusType(true);
              }}
              onClick={onClick}
              onKeyDown={onKeyDown}
              onChange={(e) => {
                onChange(e);
                if (maxLength) {
                  if (e.target.value.length <= maxLength) {
                    setValue(e.target.value);
                    if (e.target.value.length == maxLength) {
                      textInput.current?.blur();
                    }
                  }
                } else {
                  setValue(e.target.value);
                }
              }}
              disabled={disabled}
              style={{
                caretColor: styleConfig?.caretColor,
                borderColor: styleConfig?.borderColor,
              }}
            />
          </div>
        </div>
      ) : (
        <div
          className={"react-togtokh-dev dev-input-box-web w-full " + className}
          style={{
            backgroundColor: styleConfig?.bgColor,
            color: styleConfig?.textColor,
          }}
        >
          {lable && (
            <label
              htmlFor={name}
              className={`dev-input-lable ${
                value
                  ? "text-400-14 dev-input-lable-deactivate"
                  : `${
                      focusType
                        ? "text-400-14 dev-input-lable-deactivate"
                        : "text-400-14 dev-input-lable-active"
                    } ${lableClassName}`
              }`}
              style={{
                color: styleConfig?.placeholderColor,
              }}
            >
              {lable}
            </label>
          )}

          <div
            className={"dev-svg-box " + svgClassName}
            style={{
              width: svgWidth,
            }}
          >
            {addSvg ? (
              <>
                {addSvg({
                  handleClick: () => {},
                })}
              </>
            ) : (
              <></>
            )}
            {loading ? (
              <>
                {loadingSvg({
                  handleClick: () => {},
                  styleConfig: styleConfig,
                })}
              </>
            ) : (
              <>
                {" "}
                {type == "password" ? (
                  <div>
                    {!show
                      ? hideSvg({
                          handleClick: () => {
                            setShow(true);
                          },
                          styleConfig: styleConfig,
                        })
                      : showSvg({
                          handleClick: () => {
                            setShow(false);
                          },
                          styleConfig: styleConfig,
                        })}
                  </div>
                ) : (
                  <>
                    {clearButton ? (
                      <AnimatePresence>
                        {focusType && (
                          <motion.div
                            onClick={(event) => {
                              event.preventDefault();
                              setValue("");
                              textInput.current?.focus({
                                preventScroll: true,
                              });
                            }}
                            id="minus"
                            animate={{
                              opacity: 1,
                              transition: {
                                opacity: { duration: 0.4 },
                              },
                            }}
                            exit={{ opacity: 0 }}
                            className=""
                          >
                            {removeSvg({
                              handleClick: (event) => {
                                event.preventDefault();
                                setValue("");
                                textInput.current?.focus({
                                  preventScroll: true,
                                });
                              },
                              styleConfig: styleConfig,
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </>
            )}
          </div>
          <input
            id={name}
            ref={textInput}
            type={show ? "text" : type}
            className={"dev-input  text-400-14 " + inputClassName}
            defaultValue={value}
            inputMode={inputMode}
            pattern={pattern}
            value={value}
            placeholder={focusType ? placeholder : ""}
            onBlur={(e) => {
              onBlur(e);
              setfocusType(false);
            }}
            onFocus={(e) => {
              onFocus(e);
              setfocusType(true);
            }}
            onClick={onClick}
            onKeyDown={onKeyDown}
            onChange={(e) => {
              onChange(e);
              if (maxLength) {
                if (e.target.value.length <= maxLength) {
                  setValue(e.target.value);
                  if (e.target.value.length == maxLength) {
                    textInput.current?.blur();
                  }
                }
              } else {
                setValue(e.target.value);
              }
            }}
            disabled={disabled}
            style={{
              caretColor: styleConfig?.caretColor,
              borderColor: styleConfig?.borderColor,
            }}
          />
        </div>
      )}
    </>
  );
}
