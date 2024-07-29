import React from "react";
export default function (props) {
    const { className, label } = props;
    // const { value, setValue, className, label, host, username, password } = props;
    return (React.createElement("div", { className: className },
        React.createElement("div", { className: "text-500-16" }, label)));
}
//# sourceMappingURL=ckeditor.js.map