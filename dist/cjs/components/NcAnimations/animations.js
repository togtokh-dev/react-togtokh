"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingRiv = void 0;
const react_1 = __importDefault(require("react"));
const react_canvas_1 = require("@rive-app/react-canvas");
const LoadingRiv = () => {
    const { RiveComponent } = (0, react_canvas_1.useRive)({
        src: "https://upload-web.toki.mn/uploads/media/application/octet-stream/64cca5c90c0c249b27045e66.riv",
        stateMachines: "State Machine",
        autoplay: true,
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(RiveComponent, { className: " w-full h-full mx-auto" })));
};
exports.LoadingRiv = LoadingRiv;
//# sourceMappingURL=animations.js.map