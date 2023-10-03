import React, { useState } from "react";
import NcAnimations from "../NcAnimations";
import { motion } from "framer-motion";
import axios from "axios";
export interface svgProps {
  handleClick?: (event: React.MouseEvent<HTMLOrSVGElement>) => void;
  svgColor: any;
}

interface Props {
  value: any;
  setValue: (value: any) => void;
  lable: string;
  className?: string;
  host: string;
  username: string;
  password: string;
  backgroundColor: string;
  svgColor: string;
}
const removeSvg = ({ handleClick, svgColor }: svgProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={svgColor}
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

export default function (props: Props) {
  const {
    value,
    setValue,
    className,
    lable,
    host,
    username,
    password,
    backgroundColor,
    svgColor,
  } = props;
  const [name] = useState(`${Math.floor(Math.random() * 600) + 1}`);
  const [loading, setLoading] = useState(false);
  const style = {
    background: loading
      ? `linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%), ${backgroundColor}`
      : backgroundColor,
  };
  const onFileChange = (event: any) => {
    onFileUpload(event.target.files[0]);
  };
  const onFileUpload = async (file: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append(
      "data",
      JSON.stringify({
        mark: false,
        quality: 80,
      })
    );
    const config = {
      method: "post",
      url: host + "/api/v1/upload/file",
      headers: {
        Authorization: `Basic ${window.btoa(username + ":" + password)}`,
      },
      data: formData,
    };
    axios(config)
      .then((res) => {
        if (res.data.success) {
          setValue(res.data.data?.id);
        } else {
          console.log(res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <div
      className={
        "react-togtokh-dev dev-input-box w-full  dev-border-12 " + className
      }
      style={style}
    >
      <div className="dev-input-children">
        <motion.label htmlFor={`upload-${name}`}>
          <div className="upload-icon"></div>
          <input
            type="file"
            className="hidden"
            id={`upload-${name}`}
            onChange={onFileChange}
          />
        </motion.label>
      </div>
      <div className=" w-full h-full ">
        <div className="dev-svg-box ">
          {value &&
            removeSvg({
              handleClick: () => {
                setValue("");
              },
              svgColor: svgColor,
            })}
          {loading && <NcAnimations.LoadingRiv />}
        </div>
        <div className="dev-input-children-icon dev-border-12 text-400-16">
          {value}
        </div>
        {lable && (
          <label
            className={`dev-input-lable-children-icon ${
              value
                ? "text-400-12 dev-input-lable-deactivate"
                : `text-400-16 dev-input-lable-active `
            }`}
          >
            {lable}
          </label>
        )}
      </div>
    </div>
  );
}
