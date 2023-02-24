const globalUrlBasesByRouteType: Record<string, string> = {};
let globalDefaultUrlBase = '';

/** Removes the URL base configuration for the specified route type, which will cause the default URL base to be used unless a subsequent
 * reconfiguration is made for the specified route type */
export const clearUrlBaseForRouteType = (routeType: string) => {
  delete globalUrlBasesByRouteType[routeType];
};

/** Gets the default URL base that will be used in cases where no URL base has been specifically configured for a given route type */
export const getDefaultUrlBase = () => globalDefaultUrlBase;

/**
 * Gets the URL base for the specified route type.
 *
 * If a URL base wasn't configured for the specified route type, the default URL base will be returned.
 */
export const getUrlBaseForRouteType = (routeType: string) => globalUrlBasesByRouteType[routeType] ?? globalDefaultUrlBase;

/** Sets the default URL base that will be used in cases where no URL base has been specifically configured for a given route type */
export const setDefaultUrlBase = (urlBase: string) => {
  globalDefaultUrlBase = urlBase;
};

/** Configures the URL base for the specified route type. */
export const setUrlBaseForRouteType = (routeType: string, urlBase: string) => {
  globalUrlBasesByRouteType[routeType] = urlBase;
};
