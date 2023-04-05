import { ResponseRoot } from '../serverTypes/responseRoot';
import { BaseResourceClient } from './baseResourceClient';
interface Options {
    storefront?: string;
    languageTag?: string;
}
export declare class ResourceClient<T extends ResponseRoot> extends BaseResourceClient {
    getByUrl(url: string, options?: Options): Promise<T>;
    get(id: string, options?: Options): Promise<T>;
    getMany(options?: Options): Promise<T>;
}
export {};
//# sourceMappingURL=resourceClient.d.ts.map