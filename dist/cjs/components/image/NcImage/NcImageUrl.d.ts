import { FC, ImgHTMLAttributes } from "react";
export interface NcImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    containerClassName?: string;
    placeholderClass?: string;
    imageClass?: string;
}
declare const NcImage: FC<NcImageProps>;
export default NcImage;
