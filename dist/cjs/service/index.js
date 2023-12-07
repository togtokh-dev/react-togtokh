"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toki_1 = __importDefault(require("./toki"));
const hipay_1 = __importDefault(require("./hipay"));
const cookie_1 = __importDefault(require("./cookie"));
const format_1 = __importDefault(require("./format"));
const support_1 = __importDefault(require("./support"));
const togtokh_1 = __importDefault(require("./togtokh"));
exports.default = { TOKI: toki_1.default, cookie: cookie_1.default, format: format_1.default, support: support_1.default, HIPAY: hipay_1.default, TOGTOKH: togtokh_1.default };
//# sourceMappingURL=index.js.map