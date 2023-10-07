"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToRGB = exports.useParam = exports.useQuery = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function useQuery() {
    const { search } = (0, react_router_dom_1.useLocation)();
    return react_1.default.useMemo(() => new URLSearchParams(search), [search]);
}
exports.useQuery = useQuery;
function useParam() {
    const params = (0, react_router_dom_1.useParams)();
    // const { search } = useLocation();
    return react_1.default.useMemo(() => params, [params]);
}
exports.useParam = useParam;
const clipboard = (value) => {
    try {
        navigator.clipboard.writeText(value);
        return 1;
    }
    catch (error) {
        return 0;
    }
};
const hexToRGB = (h) => {
    let r = 0;
    let g = 0;
    let b = 0;
    if (h.length === 4) {
        r = `0x${h[1]}${h[1]}`;
        g = `0x${h[2]}${h[2]}`;
        b = `0x${h[3]}${h[3]}`;
    }
    else if (h.length === 7) {
        r = `0x${h[1]}${h[2]}`;
        g = `0x${h[3]}${h[4]}`;
        b = `0x${h[5]}${h[6]}`;
    }
    return `${+r},${+g},${+b}`;
};
exports.hexToRGB = hexToRGB;
exports.default = { clipboard, useParam, useQuery, hexToRGB: exports.hexToRGB };
//# sourceMappingURL=support.js.map