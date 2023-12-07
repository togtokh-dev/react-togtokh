"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
function message(value) {
    if (window.CallTogtokhDev) {
        window.CallTogtokhDev.postMessage(value);
    }
}
exports.message = message;
exports.default = {
    message,
};
//# sourceMappingURL=togtokh.js.map