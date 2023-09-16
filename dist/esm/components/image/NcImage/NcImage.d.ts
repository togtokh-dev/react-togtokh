import { FC, ImgHTMLAttributes } from "react";
export interface NcImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    containerClassName?: string;
    placeholderClass?: string;
    imageClass?: string;
    host: string;
    type: "?xs" | "?s" | "?m" | string;
}
declare const NcImage: FC<NcImageProps>;
export default NcImage;
