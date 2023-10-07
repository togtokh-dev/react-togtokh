"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ckeditor5_react_1 = require("@ckeditor/ckeditor5-react");
const ckeditor5_build_classic_1 = __importDefault(require("@ckeditor/ckeditor5-build-classic"));
function default_1(props) {
    const { value, setValue, className, lable, host, username, password } = props;
    const editor = ckeditor5_build_classic_1.default;
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement("div", { className: "text-500-16" }, lable),
        react_1.default.createElement(ckeditor5_react_1.CKEditor, { editor: editor, data: value, onReady: (editor) => {
                console.log("Editor is ready to use!", editor);
            }, onChange: (event, editor) => {
                const data = editor.data;
                setValue(data);
                console.log({ event, editor, data });
            }, onBlur: (event, editor) => {
                console.log("Blur.", editor);
            }, onFocus: (event, editor) => {
                console.log("Focus.", editor);
            }, config: {
                ckfinder: {
                    uploadUrl: host +
                        `/api/v1/upload/ckeditor?token=${window.btoa(username + ":" + password)}`,
                },
            } })));
}
exports.default = default_1;
//# sourceMappingURL=ckeditor.js.map