import React from "react";
interface Props {
    children: React.ReactNode;
    backgroundColor?: string;
    className?: string;
    type?: "button" | "submit" | "reset";
    title?: string;
    disabled?: Boolean;
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
declare function Button(props: Props): React.JSX.Element;
export default Button;
