import React from "react";
export default function (props) {
    const { className, lable } = props;
    // const { value, setValue, className, lable, host, username, password } = props;
    return (React.createElement("div", { className: className },
        React.createElement("div", { className: "text-500-16" }, lable)));
}
//# sourceMappingURL=ckeditor.js.map