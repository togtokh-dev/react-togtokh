var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useEffect, useRef, useState, } from "react";
import checkInViewIntersectionObserver from "./isInViewPortIntersectionObserver";
import PlaceIcon from "./PlaceIcon";
const NcImage = (_a) => {
    var { containerClassName = "", alt = "nc-imgs", src = "", className = "", imageClass = "", placeholderClass = "" } = _a, args = __rest(_a, ["containerClassName", "alt", "src", "className", "imageClass", "placeholderClass"]);
    let isMounted = false;
    const _containerRef = useRef(null);
    let _imageEl = null;
    // const darkmodeState = useAppSelector(selectDarkmodeState);
    const [__src, set__src] = useState("");
    const [imageLoaded, setImageLoaded] = useState(false);
    const _initActions = () => __awaiter(void 0, void 0, void 0, function* () {
        // set__src(placeholderImage);
        _checkInViewPort();
    });
    const _checkInViewPort = () => {
        if (!_containerRef.current)
            return;
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
        if (!isMounted)
            return;
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
        return (React.createElement("div", { className: `${className} ${placeholderClass}` },
            React.createElement("div", { className: "h-2/4 max-w-[50%]", style: {
                    width: "50%",
                } },
                React.createElement(PlaceIcon, null))));
    };
    return (React.createElement("div", { className: `react-togtokh-dev ${className} ${containerClassName}`, "data-nc-id": "NcImage", ref: _containerRef }, __src && imageLoaded ? (React.createElement("img", Object.assign({ src: `${__src}`, className: `${className} ${imageClass}`, alt: alt }, args))) : (renderLoadingPlaceholder())));
};
export default NcImage;
//# sourceMappingURL=NcImageUrl.js.map