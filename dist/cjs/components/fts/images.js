"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const NcAnimations_1 = __importDefault(require("../NcAnimations"));
const framer_motion_1 = require("framer-motion");
const axios_1 = __importDefault(require("axios"));
const __1 = __importDefault(require("../../"));
function default_1(props) {
    const { value, setValue, className, lable, host, public_host, username, password, backgroundColor, } = props;
    const [name] = (0, react_1.useState)(`${Math.floor(Math.random() * 600) + 1}`);
    const [loading, setLoading] = (0, react_1.useState)(false);
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
        (0, axios_1.default)(config)
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `react-togtokh-dev dev-images-upload border-dashed border-2 dev-border-8 ${className}` },
            react_1.default.createElement(framer_motion_1.motion.label, { htmlFor: `upload-${name}`, className: "w-full " },
                react_1.default.createElement("div", { className: "dev-btn dev-btn-48 text-500-16 dev-border-8   w-full text-center flex justify-center", style: style }, loading ? (react_1.default.createElement(react_1.default.Fragment, null,
                    " ",
                    react_1.default.createElement("div", { style: { width: "24px", height: "24px" } },
                        react_1.default.createElement(NcAnimations_1.default.LoadingRiv, null)))) : (react_1.default.createElement(react_1.default.Fragment, null, lable))),
                react_1.default.createElement("input", { type: "file", className: "hidden", id: `upload-${name}`, onChange: onFileChange, multiple: true })),
            react_1.default.createElement("div", { className: "dev-gallery h-full w-full" }, value.map((el, index) => (react_1.default.createElement("div", { className: "relative dev-border-8", key: `bfkdsfm-${index}` },
                react_1.default.createElement(__1.default.Image.NcImage.PathImage, { src: `${public_host}/file/image/${el}`, className: "h-full w-full dev-border-8 ", imageClass: "", containerClassName: "", placeholderClass: "h-full w-auto flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500" }),
                react_1.default.createElement("i", { className: "dev-upload-image-content" },
                    react_1.default.createElement("i", { className: "dev-edit" },
                        react_1.default.createElement("svg", { className: "", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", onClick: () => __awaiter(this, void 0, void 0, function* () {
                                const newValue = yield arrayRemove(value, el);
                                setValue(newValue);
                            }) },
                            react_1.default.createElement("circle", { cx: "12", cy: "12", r: "9", fill: "#D1D8DD" }),
                            react_1.default.createElement("path", { d: "M15 9L9 15", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                            react_1.default.createElement("path", { d: "M15 15L9 9", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })))))))))));
}
exports.default = default_1;
//# sourceMappingURL=images.js.map