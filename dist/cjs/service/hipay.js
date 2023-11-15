"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buy = void 0;
function buy(checkoutId) {
    window === null || window === void 0 ? void 0 : window.hpsPayment(checkoutId);
}
exports.buy = buy;
exports.default = {
    buy,
};
//# sourceMappingURL=hipay.js.map