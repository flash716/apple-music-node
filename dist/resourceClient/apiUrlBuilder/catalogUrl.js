"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiUrlBuilder_1 = __importDefault(require("./apiUrlBuilder"));
class CatalogUrl extends apiUrlBuilder_1.default {
    getManyUrl(storefront) {
        return `/catalog/${storefront}/${this.urlName}`;
    }
}
exports.default = CatalogUrl;
//# sourceMappingURL=catalogUrl.js.map