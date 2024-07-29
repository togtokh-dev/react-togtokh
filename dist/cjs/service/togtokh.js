"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = message;
function message(value) {
    if (window.CallTogtokhDev) {
        window.CallTogtokhDev.postMessage(value);
    }
}
exports.default = {
    message,
};
//# sourceMappingURL=togtokh.js.map