var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState } from "react";
import NcAnimations from "../NcAnimations";
import { motion } from "framer-motion";
import axios from "axios";
import ReactTogtokh from "../../";
const removeSvg = ({ handleClick, svgColor }) => {
    return (React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: svgColor, xmlns: "http://www.w3.org/2000/svg", className: ` dev-svg `, onClick: handleClick },
        React.createElement("circle", { cx: "12", cy: "12", r: "9" }),
        React.createElement("path", { d: "M15 9L9 15", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M15 15L9 9", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
};
export default function (props) {
    const { value, setValue, className, label, host, username, password, backgroundColor, svgColor, restype = "id", icon = "", } = props;
    const [name] = useState(`${Math.floor(Math.random() * 600) + 1}`);
    const [loading, setLoading] = useState(false);
    const style = {
        background: loading
            ? `linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%), ${backgroundColor}`
            : backgroundColor,
    };
    const onFileChange = (event) => {
        onFileUpload(event.target.files[0]);
    };
    const onFileUpload = (file) => __awaiter(this, void 0, void 0, function* () {
        setLoading(true);
        const formData = new FormData();
        formData.append("file", file, file.name);
        formData.append("data", JSON.stringify({
            mark: false,
            quality: 80,
        }));
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
                setValue(res.data.data[restype]);
            }
            else {
                console.log(res.data);
            }
            setLoading(false);
        })
            .catch((err) => {
            setLoading(false);
            console.log(err);
        });
    });
    return (React.createElement("div", { className: "react-togtokh-dev dev-input-box w-full  dev-border-12 " + className, style: style },
        React.createElement("div", { className: "dev-input-children" },
            React.createElement(motion.label, { htmlFor: `upload-${name}` },
                React.createElement("div", { className: "upload-icon", style: { backgroundColor: svgColor } },
                    React.createElement(ReactTogtokh.Image.NcImage.PathImage, { src: icon, className: "dev-border-8", imageClass: "h-full w-auto", containerClassName: "h-full w-full", placeholderClass: "h-full w-auto flex items-center justify-center text-neutral-100 " })),
                React.createElement("input", { type: "file", className: "hidden", id: `upload-${name}`, onChange: onFileChange }))),
        React.createElement("div", { className: " w-full h-full " },
            React.createElement("div", { className: "dev-svg-box " },
                value &&
                    removeSvg({
                        handleClick: () => {
                            setValue("");
                        },
                        svgColor: svgColor,
                    }),
                loading && React.createElement(NcAnimations.LoadingRiv, null)),
            React.createElement("div", { className: "dev-input-children-icon dev-border-12 text-400-16" }, value),
            label && (React.createElement("label", { className: `dev-input-label-children-icon ${value
                    ? "text-400-12 dev-input-label-deactivate"
                    : `text-400-16 dev-input-label-active `}` }, label)))));
}
//# sourceMappingURL=file.js.map