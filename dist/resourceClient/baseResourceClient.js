"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseResourceClient = void 0;
const axios_1 = __importDefault(require("axios"));
const calendarDate_1 = require("../calendarDate");
class BaseResourceClient {
    constructor(urlBuilder, configuration) {
        this.urlBuilder = urlBuilder;
        this.configuration = configuration;
        this.axiosInstance = axios_1.default.create({
            baseURL: 'https://api.music.apple.com/v1',
            headers: {
                Authorization: `Bearer ${this.configuration.developerToken}`,
                'media-user-token': this.configuration.mediaUserToken || '',
                origin: 'https://music.apple.com' // TODO: remove (added to test my browser's developer token)
            },
            // https://github.com/axios/axios/blob/v0.20.0-0/lib/defaults.js#L57-L65
            transformResponse: [
                data => {
                    /*eslint no-param-reassign:0*/
                    if (typeof data === 'string') {
                        try {
                            data = parseJSONWithDateHandling(data);
                        }
                        catch (e) {
                            /* Ignore */
                        }
                    }
                    return data;
                }
            ],
            validateStatus: () => true // Handle errors by ourselves
        });
    }
    getStorefront(storefront) {
        const result = storefront || this.configuration.defaultStorefront;
        if (!result) {
            throw new Error(`Specify storefront with function parameter or default one with Client's constructor`);
        }
        return result;
    }
    request(method, apiPath, params) {
        return this.axiosInstance.request({
            method: method,
            url: apiPath,
            params: params
        });
    }
}
exports.BaseResourceClient = BaseResourceClient;
const datePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
function parseJSONWithDateHandling(json) {
    return JSON.parse(json, (_key, value) => {
        if (typeof value !== 'string') {
            return value;
        }
        const calendarDate = calendarDate_1.CalendarDate.parse(value);
        if (calendarDate) {
            return calendarDate;
        }
        if (value.match(datePattern)) {
            return new Date(value);
        }
        return value;
    });
}
//# sourceMappingURL=baseResourceClient.js.map