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
import Library from "../../";
export default function (props) {
    const { value, setValue, className, lable, host, public_host, username, password, backgroundColor, } = props;
    const [name] = useState(`${Math.floor(Math.random() * 600) + 1}`);
    const [loading, setLoading] = useState(false);
    const onFileChange = (event) => {
        onFileUpload(event.target.files);
    };
    const onFileUpload = (files) => __awaiter(this, void 0, void 0, function* () {
        setLoading(true);
        const formData = new FormData();
        Array.from(Array(files.length).keys()).map((x) => {
            formData.append("file", files[x], files[x].name);
        });
        formData.append("data", JSON.stringify({
            mark: false,
            quality: "80",
        }));
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
            var _a, _b, _c;
            if (res.data.success) {
                const rawdata = value;
                if ((_a = res.data.data) === null || _a === void 0 ? void 0 : _a.id) {
                    rawdata.push(res.data.data.id);
                }
                else {
                    for (let index = 0; index < ((_c = (_b = res.data) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.length); index++) {
                        const element = res.data.data[index];
                        rawdata.push(element.id);
                    }
                }
                setValue(rawdata);
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
    const style = {
        background: loading
            ? `linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%), ${backgroundColor}`
            : backgroundColor,
    };
    function arrayRemove(arr, value) {
        return arr.filter(function (geeks) {
            return geeks != value;
        });
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `react-togtokh-dev dev-images-upload border-dashed border-2 dev-border-8 ${className}` },
            React.createElement(motion.label, { htmlFor: `upload-${name}`, className: "w-full " },
                React.createElement("div", { className: "dev-btn dev-btn-48 text-500-16 dev-border-8   w-full text-center flex justify-center", style: style }, loading ? (React.createElement(React.Fragment, null,
                    " ",
                    React.createElement("div", { style: { width: "24px", height: "24px" } },
                        React.createElement(NcAnimations.LoadingRiv, null)))) : (React.createElement(React.Fragment, null, lable))),
                React.createElement("input", { type: "file", className: "hidden", id: `upload-${name}`, onChange: onFileChange, multiple: true })),
            React.createElement("div", { className: "dev-gallery h-full w-full" }, value.map((el, index) => (React.createElement("div", { className: "relative dev-border-8" },
                React.createElement(Library.Image.NcImage.PathImage, { src: `${public_host}/file/image/${el}`, className: "h-full w-full dev-border-8 ", imageClass: "", containerClassName: "", placeholderClass: "h-full w-auto flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500" }),
                React.createElement("svg", { className: "dev-edit", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", onClick: () => __awaiter(this, void 0, void 0, function* () {
                        const newValue = yield arrayRemove(value, el);
                        setValue(newValue);
                    }) },
                    React.createElement("circle", { cx: "12", cy: "12", r: "9", fill: "#D1D8DD" }),
                    React.createElement("path", { d: "M15 9L9 15", stroke: "white", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                    React.createElement("path", { d: "M15 15L9 9", stroke: "white", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })))))))));
}
//# sourceMappingURL=images.js.map