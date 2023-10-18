import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default function (props) {
    const { value, setValue, className, lable, host, username, password } = props;
    const editor = ClassicEditor;
    return (React.createElement("div", { className: className },
        React.createElement("div", { className: "text-500-16" }, lable),
        React.createElement(CKEditor, { editor: editor, data: value, onReady: (editor) => {
                console.log("Editor is ready to use!", editor);
            }, onChange: (event, editor) => {
                const data = editor.getData();
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
//# sourceMappingURL=ckeditor.js.map