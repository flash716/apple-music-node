"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiUrlBuilder {
    constructor(urlName) {
        this.urlName = urlName;
    }
    getOneUrl(id, storefront) {
        return this.getManyUrl(storefront) + `/${id}`;
    }
}
exports.default = ApiUrlBuilder;
//# sourceMappingURL=apiUrlBuilder.js.map