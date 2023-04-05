"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiUrlBuilder_1 = __importDefault(require("./apiUrlBuilder"));
class LibraryUrl extends apiUrlBuilder_1.default {
    getManyUrl() {
        return `me/library/${this.urlName}`;
    }
}
exports.default = LibraryUrl;
//# sourceMappingURL=libraryUrl.js.map