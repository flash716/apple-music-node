export default abstract class ApiUrlBuilder {
    constructor(protected urlName: String) {}

    abstract getManyUrl(storefront: String): string;

    getOneUrl(id: String, storefront: String): string {
        return this.getManyUrl(storefront) + `/${id}`;
    }
}
