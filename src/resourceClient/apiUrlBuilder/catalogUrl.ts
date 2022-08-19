import ApiUrlBuilder from "./apiUrlBuilder";

export default class CatalogUrl extends ApiUrlBuilder 
{
    getManyUrl(storefront: String) {
        return `/catalog/${storefront}/${this.urlName}`;
    }   
}
