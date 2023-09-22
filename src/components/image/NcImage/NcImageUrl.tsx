import React, {
  FC,
  ImgHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import checkInViewIntersectionObserver from "./isInViewPortIntersectionObserver";
import PlaceIcon from "./PlaceIcon";

export interface NcImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  placeholderClass?: string;
  imageClass?: string;
}

const NcImage: FC<NcImageProps> = ({
  containerClassName = "",
  alt = "nc-imgs",
  src = "",
  className = "",
  imageClass = "",
  placeholderClass = "",
  ...args
}) => {
  let isMounted = false;
  const _containerRef = useRef(null);
  let _imageEl: HTMLImageElement | null = null;
  // const darkmodeState = useAppSelector(selectDarkmodeState);

  const [__src, set__src] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const _initActions = async () => {
    // set__src(placeholderImage);
    _checkInViewPort();
  };

  const _checkInViewPort = () => {
    if (!_containerRef.current) return;
    checkInViewIntersectionObserver({
      target: _containerRef.current,
      options: {
        root: null,
        rootMargin: "0%",
        threshold: 0,
      },
      freezeOnceVisible: true,
      callback: _imageOnViewPort,
    });
  };

  const _imageOnViewPort = () => {
    if (!src) {
      _handleImageLoaded();
      return true;
    }
    _imageEl = new Image();
    if (_imageEl) {
      _imageEl.src = src;
      _imageEl.addEventListener("load", _handleImageLoaded);
    }
    return true;
  };

  const _handleImageLoaded = () => {
    if (!isMounted) return;
    setImageLoaded(true);
    set__src(src);
  };

  useEffect(() => {
    isMounted = true;
    _initActions();
    return () => {
      isMounted = false;
    };
  }, [src]);

  const renderLoadingPlaceholder = () => {
    return (
      <div className={`${className} ${placeholderClass}`}>
        <div
          className="h-2/4 max-w-[50%]"
          style={{
            width: "50%",
          }}
        >
          <PlaceIcon />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`${className} ${containerClassName}`}
      data-nc-id="NcImage"
      ref={_containerRef}
    >
      {__src && imageLoaded ? (
        <img
          src={`${__src}`}
          className={`${className} ${imageClass}`}
          alt={alt}
          {...args}
        />
      ) : (
        renderLoadingPlaceholder()
      )}
    </div>
  );
};

export default NcImage;
