import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  title?: string;
  disabled?: Boolean;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disableHover?: Boolean;
  ref?: any;
  useStyle?: Boolean;
}

export default function (props: Props) {
  const {
    children,
    backgroundColor,
    className = "",
    type = "button",
    title,
    disabled,
    handleClick,
    disableHover = false,
    useStyle = false,
    ref,
  } = props;
  const [isFocused, setFocus] = useState(false);
  const style = useStyle
    ? {
        background: disableHover
          ? backgroundColor
          : isFocused
          ? `linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%), ${backgroundColor}`
          : backgroundColor,
      }
    : {};

  return (
    <motion.button
      className={`react-togtokh-dev dev-btn dev-btn-40 text-500-14 dev-border-8  ${className}`}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      style={style}
      type={type}
      title={title}
      onClick={handleClick}
      disabled={disabled ? true : false}
      ref={ref}
    >
      {children}
    </motion.button>
  );
}
