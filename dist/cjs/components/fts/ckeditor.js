"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const react_1 = __importDefault(require("react"));
function default_1(props) {
    const { className, label } = props;
    // const { value, setValue, className, label, host, username, password } = props;
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement("div", { className: "text-500-16" }, label)));
}
//# sourceMappingURL=ckeditor.js.map