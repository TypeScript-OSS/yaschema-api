/** A generic API description.  See `HttpApi` */
export interface Api {
  isYaschemaApi: true;

  /** The type of route, which will be used to select a URL base and is configurable using `setUrlBaseForRouteType` */
  routeType: string;

  /** A name that can be used to describe this API, when logging for example */
  name: string;

  /** A description, which can be used by code generation tools to generate documentation */
  description?: string;

  /** An example, which can be used by code generation tools to generate documentation */
  example?: string;
}
