export default abstract class ApiUrlBuilder {
    protected urlName: string;
    constructor(urlName: string);
    abstract getManyUrl(storefront: string): string;
    getOneUrl(id: string, storefront: string): string;
}
//# sourceMappingURL=apiUrlBuilder.d.ts.map