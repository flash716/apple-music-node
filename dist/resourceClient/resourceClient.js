"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceClient = void 0;
const appleMusicError_1 = require("../appleMusicError");
const baseResourceClient_1 = require("./baseResourceClient");
class ResourceClient extends baseResourceClient_1.BaseResourceClient {
    getByUrl(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                l: (options === null || options === void 0 ? void 0 : options.languageTag) || this.configuration.defaultLanguageTag
            };
            const httpResponse = yield this.request('GET', url, params);
            if (!httpResponse.data) {
                throw new appleMusicError_1.AppleMusicError(`Request failed with status code ${httpResponse.status}`, httpResponse.status);
            }
            const apiResponse = httpResponse.data;
            // https://developer.apple.com/documentation/applemusicapi/handling_requests_and_responses#3001632
            if (!apiResponse.errors) {
                return apiResponse;
            }
            else {
                const error = apiResponse.errors[0];
                throw new appleMusicError_1.AppleMusicError(error.title, httpResponse.status, apiResponse);
            }
        });
    }
    get(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.urlBuilder.getOneUrl(id, this.getStorefront(options === null || options === void 0 ? void 0 : options.storefront));
            return this.getByUrl(url, options);
        });
    }
    getMany(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.urlBuilder.getManyUrl(this.getStorefront(options === null || options === void 0 ? void 0 : options.storefront));
            return this.getByUrl(url, options);
        });
    }
}
exports.ResourceClient = ResourceClient;
//# sourceMappingURL=resourceClient.js.map