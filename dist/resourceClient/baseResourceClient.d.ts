import { AxiosInstance, AxiosPromise, Method } from 'axios';
import { ClientConfiguration } from '../clientConfiguration';
import ApiUrlBuilder from './apiUrlBuilder/apiUrlBuilder';
export declare class BaseResourceClient {
    urlBuilder: ApiUrlBuilder;
    configuration: ClientConfiguration;
    protected axiosInstance: AxiosInstance;
    constructor(urlBuilder: ApiUrlBuilder, configuration: ClientConfiguration);
    protected getStorefront(storefront?: string): string;
    protected request(method: Method, apiPath: string, params?: any): AxiosPromise;
}
//# sourceMappingURL=baseResourceClient.d.ts.map