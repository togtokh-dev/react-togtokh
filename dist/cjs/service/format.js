"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatThousands = exports.formatValue = void 0;
const currencyFormat = (num) => {
    var _a;
    num = parseInt(num) || null;
    return ((_a = num === null || num === void 0 ? void 0 : num.toFixed(0)) === null || _a === void 0 ? void 0 : _a.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$&'")) || 0;
};
const formatValue = (value) => Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 3,
    notation: "compact",
}).format(value);
exports.formatValue = formatValue;
const formatThousands = (value) => Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
    notation: "compact",
}).format(value);
exports.formatThousands = formatThousands;
exports.default = { currencyFormat, formatValue: exports.formatValue, formatThousands: exports.formatThousands };
//# sourceMappingURL=format.js.map