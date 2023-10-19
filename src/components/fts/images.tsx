import React, { useState } from "react";
import NcAnimations from "../NcAnimations";
import { motion } from "framer-motion";
import axios from "axios";
import Library from "../../";
interface Props {
  value: any;
  setValue: (value: any) => void;
  lable: string;
  className?: string;
  host: string;
  public_host: string;
  username: string;
  password: string;
  backgroundColor: string;
  restype?: string;
}
export default function (props: Props) {
  const {
    value,
    setValue,
    className,
    lable,
    host,
    public_host,
    username,
    password,
    backgroundColor,
    restype = "id",
  } = props;
  const [name] = useState(`${Math.floor(Math.random() * 600) + 1}`);
  const [loading, setLoading] = useState(false);

  const onFileChange = (event: any) => {
    onFileUpload(event.target.files);
  };
  const onFileUpload = async (files: any) => {
    setLoading(true);

    const formData = new FormData();

    Array.from(Array(files.length).keys()).map((x) => {
      formData.append("file", files[x], files[x].name);
    });
    formData.append(
      "data",
      JSON.stringify({
        mark: false,
        quality: "80",
      })
    );
    const config = {
      method: "post",
      url: host + "/api/v1/upload/image",
      headers: {
        Authorization: `Basic ${window.btoa(username + ":" + password)}`,
      },
      data: formData,
    };
    axios(config)
      .then((res) => {
        if (res.data.success) {
          const rawdata = value;
          if (res.data.data?.id) {
            rawdata.push(res.data.data.id);
          } else {
            for (let index = 0; index < res.data?.data?.length; index++) {
              const element = res.data.data[index];
              rawdata.push(element[restype]);
            }
          }
          setValue(rawdata);
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
  const style = {
    background: loading
      ? `linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%), ${backgroundColor}`
      : backgroundColor,
  };
  function arrayRemove(arr: any, value: any) {
    return arr.filter(function (geeks: any) {
      return geeks != value;
    });
  }
  return (
    <>
      <div
        className={`react-togtokh-dev dev-images-upload border-dashed border-2 dev-border-8 ${className}`}
      >
        <motion.label htmlFor={`upload-${name}`} className="w-full ">
          <div
            className="dev-btn dev-btn-48 text-500-16 dev-border-8   w-full text-center flex justify-center"
            style={style}
          >
            {loading ? (
              <>
                {" "}
                <div style={{ width: "24px", height: "24px" }}>
                  <NcAnimations.LoadingRiv />
                </div>
              </>
            ) : (
              <>{lable}</>
            )}
          </div>

          <input
            type="file"
            className="hidden"
            id={`upload-${name}`}
            onChange={onFileChange}
            multiple
          />
        </motion.label>
        <div className="dev-gallery h-full w-full">
          {value.map((el: string, index: number) => (
            <div className="relative dev-border-8" key={`bfkdsfm-${index}`}>
              <Library.Image.NcImage.PathImage
                src={`${public_host}/file/image/${el}`}
                className="h-full w-full dev-border-8 "
                imageClass=""
                containerClassName=""
                placeholderClass="h-full w-auto flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500"
              />
              <i className="dev-upload-image-content">
                <i className="dev-edit">
                  <svg
                    className=""
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={async () => {
                      const newValue = await arrayRemove(value, el);
                      setValue(newValue);
                    }}
                  >
                    <circle cx="12" cy="12" r="9" fill="#D1D8DD" />
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
                </i>
              </i>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
