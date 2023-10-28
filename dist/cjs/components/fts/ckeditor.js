"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function default_1(props) {
    const { className, lable } = props;
    // const { value, setValue, className, lable, host, username, password } = props;
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement("div", { className: "text-500-16" }, lable)));
}
exports.default = default_1;
//# sourceMappingURL=ckeditor.js.map