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
              rawdata.push(element.id);
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
            <div className="relative dev-border-8">
              <Library.Image.NcImage.PathImage
                src={`${public_host}/file/image/${el}`}
                className="h-full w-full dev-border-8 "
                imageClass=""
                containerClassName=""
                placeholderClass="h-full w-auto flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500"
              />
              <svg
                className="dev-edit"
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 15L9 9"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {/* <svg
                className="edit"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={async () => {
                  const newValue = await arrayRemove(value, el);
                  setValue(newValue);
                }}
              >
                <path
                  d="M11.1104 1.34014C12.0694 1.2802 13.0151 1.61319 13.7277 2.26585C14.3803 2.97845 14.7133 3.92414 14.66 4.8898V11.11C14.72 12.0757 14.3803 13.0214 13.7343 13.734C13.0217 14.3866 12.0694 14.7196 11.1104 14.6597H4.89008C3.9244 14.7196 2.9787 14.3866 2.2661 13.734C1.61344 13.0214 1.28045 12.0757 1.34039 11.11V4.8898C1.28045 3.92414 1.61344 2.97845 2.2661 2.26585C2.9787 1.61319 3.9244 1.2802 4.89008 1.34014H11.1104ZM10.9372 4.38366C10.5243 3.97075 9.85831 3.97075 9.4454 4.38366L8.99919 4.83652C8.93259 4.90312 8.93259 5.01634 8.99919 5.08294C8.99919 5.08294 9.01226 5.09593 9.03553 5.11906L9.19934 5.28198C9.2941 5.37625 9.41238 5.49399 9.53114 5.61239L9.93387 6.01492C10.0179 6.09933 10.0736 6.1559 10.0781 6.16182C10.1513 6.24174 10.198 6.34829 10.198 6.46817C10.198 6.70792 10.0048 6.90772 9.75841 6.90772C9.64519 6.90772 9.53864 6.8611 9.46538 6.78784L8.35319 5.68232C8.29991 5.62904 8.20667 5.62904 8.15339 5.68232L4.97665 8.85903C4.75688 9.0788 4.63034 9.37183 4.62368 9.68484L4.58372 11.2632C4.58372 11.3498 4.61036 11.4297 4.6703 11.4896C4.73024 11.5496 4.81016 11.5829 4.89674 11.5829H6.4618C6.78147 11.5829 7.08782 11.4563 7.32091 11.2299L11.803 6.73456C12.2092 6.32165 12.2092 5.65568 11.803 5.24943L10.9372 4.38366Z"
                  fill="white"
                />
              </svg> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
