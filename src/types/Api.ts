/** A generic API description.  See `HttpApi` */
export interface Api {
  isYaschemaApi: true;

  /** The type of route, which will be used to select a URL base and is configurable using `setUrlBaseForRouteType` */
  routeType: string;

  /** A name that can be used to describe this API, when logging for example */
  name: string;
}
