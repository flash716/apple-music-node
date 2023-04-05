"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const resourceClient_1 = require("./resourceClient/resourceClient");
const catalogUrl_1 = __importDefault(require("./resourceClient/apiUrlBuilder/catalogUrl"));
const libraryUrl_1 = __importDefault(require("./resourceClient/apiUrlBuilder/libraryUrl"));
class Client {
    constructor(configuration) {
        this.configuration = configuration;
        this.albums = new resourceClient_1.ResourceClient(new catalogUrl_1.default('albums'), this.configuration);
        this.artists = new resourceClient_1.ResourceClient(new catalogUrl_1.default('artists'), this.configuration);
        this.musicVideos = new resourceClient_1.ResourceClient(new catalogUrl_1.default('music-videos'), this.configuration);
        this.playlists = new resourceClient_1.ResourceClient(new catalogUrl_1.default('playlists'), this.configuration);
        this.songs = new resourceClient_1.ResourceClient(new catalogUrl_1.default('songs'), this.configuration);
        this.stations = new resourceClient_1.ResourceClient(new catalogUrl_1.default('stations'), this.configuration);
        this.library = {
            songs: new resourceClient_1.ResourceClient(new libraryUrl_1.default('songs'), this.configuration),
            playlists: new resourceClient_1.ResourceClient(new libraryUrl_1.default('playlists'), this.configuration)
        };
    }
}
exports.Client = Client;
//# sourceMappingURL=client.js.map