/** A generic API description.  See `HttpApi` */
export interface Api {
  isYaschemaApi: true;

  /** The type of route, which will be used to select a URL base and is configurable using `setUrlBaseForRouteType` */
  routeType: string;

  /** A name that can be used to describe this API, when logging for example */
  name: string;

  /** If `true` or a `string`, use of this Api is deprecated and usage should be discontinued as soon as possible.  A string value may be
   * used to document why the deprecation occurred and/or preferred upgrade strategies and APIs. */
  deprecated?: boolean | string;

  /** A description, which can be used by code generation tools to generate documentation */
  description?: string;

  /** An example, which can be used by code generation tools to generate documentation */
  example?: string;
}
