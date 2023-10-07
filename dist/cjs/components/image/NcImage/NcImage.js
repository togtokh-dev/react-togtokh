"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const isInViewPortIntersectionObserver_1 = __importDefault(require("./isInViewPortIntersectionObserver"));
const PlaceIcon_1 = __importDefault(require("./PlaceIcon"));
const NcImage = (_a) => {
    var { containerClassName = "", alt = "nc-imgs", src = "", className = "", imageClass = "", placeholderClass = "", host, type = "?xs" } = _a, args = __rest(_a, ["containerClassName", "alt", "src", "className", "imageClass", "placeholderClass", "host", "type"]);
    if (!src.includes("http")) {
        src = host + src + type;
    }
    let isMounted = false;
    const _containerRef = (0, react_1.useRef)(null);
    let _imageEl = null;
    // const darkmodeState = useAppSelector(selectDarkmodeState);
    const [__src, set__src] = (0, react_1.useState)("");
    const [imageLoaded, setImageLoaded] = (0, react_1.useState)(false);
    const _initActions = () => __awaiter(void 0, void 0, void 0, function* () {
        // set__src(placeholderImage);
        _checkInViewPort();
    });
    const _checkInViewPort = () => {
        if (!_containerRef.current)
            return;
        (0, isInViewPortIntersectionObserver_1.default)({
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
    (0, react_1.useEffect)(() => {
        isMounted = true;
        _initActions();
        return () => {
            isMounted = false;
        };
    }, [src]);
    const renderLoadingPlaceholder = () => {
        return (react_1.default.createElement("div", { className: `${className} ${placeholderClass}` },
            react_1.default.createElement("div", { className: "h-2/4 max-w-[50%]", style: {
                    width: "50%",
                } },
                react_1.default.createElement(PlaceIcon_1.default, null))));
    };
    return (react_1.default.createElement("div", { className: `react-togtokh-dev ${className} ${containerClassName}`, "data-nc-id": "NcImage", ref: _containerRef }, __src && imageLoaded ? (react_1.default.createElement("img", Object.assign({ src: `${__src}`, className: `${className} ${imageClass}`, alt: alt }, args))) : (renderLoadingPlaceholder())));
};
exports.default = NcImage;
//# sourceMappingURL=NcImage.js.map