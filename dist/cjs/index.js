"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("./components");
const service_1 = __importDefault(require("./service"));
const utils_1 = __importDefault(require("./utils"));
exports.default = { MiniWeb: components_1.MiniWeb, ResWeb: components_1.ResWeb, service: service_1.default, utils: utils_1.default, Image: components_1.Image };
//# sourceMappingURL=index.js.map