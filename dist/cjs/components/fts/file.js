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
const removeSvg = ({ handleClick, svgColor }) => {
    return (react_1.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: svgColor, xmlns: "http://www.w3.org/2000/svg", className: ` dev-svg `, onClick: handleClick },
        react_1.default.createElement("circle", { cx: "12", cy: "12", r: "9" }),
        react_1.default.createElement("path", { d: "M15 9L9 15", stroke: "white", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        react_1.default.createElement("path", { d: "M15 15L9 9", stroke: "white", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
function default_1(props) {
    const { value, setValue, className, lable, host, username, password, backgroundColor, svgColor, } = props;
    const [name] = (0, react_1.useState)(`${Math.floor(Math.random() * 600) + 1}`);
    const [loading, setLoading] = (0, react_1.useState)(false);
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
        (0, axios_1.default)(config)
            .then((res) => {
            var _a;
            if (res.data.success) {
                setValue((_a = res.data.data) === null || _a === void 0 ? void 0 : _a.id);
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
    return (react_1.default.createElement("div", { className: "react-togtokh-dev dev-input-box w-full  dev-border-12 " + className, style: style },
        react_1.default.createElement("div", { className: "dev-input-children" },
            react_1.default.createElement(framer_motion_1.motion.label, { htmlFor: `upload-${name}` },
                react_1.default.createElement("div", { className: "upload-icon" }),
                react_1.default.createElement("input", { type: "file", className: "hidden", id: `upload-${name}`, onChange: onFileChange }))),
        react_1.default.createElement("div", { className: " w-full h-full " },
            react_1.default.createElement("div", { className: "dev-svg-box " },
                value &&
                    removeSvg({
                        handleClick: () => {
                            setValue("");
                        },
                        svgColor: svgColor,
                    }),
                loading && react_1.default.createElement(NcAnimations_1.default.LoadingRiv, null)),
            react_1.default.createElement("div", { className: "dev-input-children-icon dev-border-12 text-400-16" }, value),
            lable && (react_1.default.createElement("label", { className: `dev-input-lable-children-icon ${value
                    ? "text-400-12 dev-input-lable-deactivate"
                    : `text-400-16 dev-input-lable-active `}` }, lable)))));
}
exports.default = default_1;
//# sourceMappingURL=file.js.map