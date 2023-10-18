import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
interface Props {
  value: any;
  setValue: (value: any) => void;
  lable: string;
  className?: string;
  host: string;
  username: string;
  password: string;
}

export default function (props: Props) {
  const { value, setValue, className, lable, host, username, password } = props;
  const editor: { create(...args: any): Promise<any> } = ClassicEditor;
  return (
    <div className={className}>
      <div className="text-500-16">{lable}</div>
      <CKEditor
        editor={editor}
        data={value}
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setValue(data);
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
        config={{
          ckfinder: {
            uploadUrl:
              host +
              `/api/v1/upload/ckeditor?token=${window.btoa(
                username + ":" + password
              )}`,
          },
        }}
      />
    </div>
  );
}
