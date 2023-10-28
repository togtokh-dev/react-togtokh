import React from "react";
interface Props {
  value: any;
  setValue: (value: any) => void;
  lable: string;
  className?: string;
  host: string;
  username: string;
  password: string;
}

export default function (props: Props) {
  const { className, lable } = props;
  // const { value, setValue, className, lable, host, username, password } = props;
  return (
    <div className={className}>
      <div className="text-500-16">{lable}</div>
    </div>
  );
}
