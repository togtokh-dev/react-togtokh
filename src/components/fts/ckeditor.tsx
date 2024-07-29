import React from "react";
interface Props {
  value: any;
  setValue: (value: any) => void;
  label: string;
  className?: string;
  host: string;
  username: string;
  password: string;
}

export default function (props: Props) {
  const { className, label } = props;
  // const { value, setValue, className, label, host, username, password } = props;
  return (
    <div className={className}>
      <div className="text-500-16">{label}</div>
    </div>
  );
}
