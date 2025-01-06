import type { ApiRoutingContext } from '../types/ApiRoutingContext.js';
import { makeApiRoutingContext } from '../types/ApiRoutingContext.js';

const globalDefaultApiRoutingContext = makeApiRoutingContext();

/** Gets the default API routing context */
export const getDefaultApiRoutingContext = () => globalDefaultApiRoutingContext;

/** Removes the URL base configuration for the specified route type, which will cause the default URL base to be used unless a subsequent
 * reconfiguration is made for the specified route type */
export const clearUrlBaseForRouteType = (
  routeType: string,
  { context = globalDefaultApiRoutingContext }: { context?: ApiRoutingContext } = {}
) => {
  delete context.urlBasesByRouteType[routeType];
};

/** Gets the default URL base that will be used in cases where no URL base has been specifically configured for a given route type */
export const getDefaultUrlBase = ({ context = globalDefaultApiRoutingContext }: { context?: ApiRoutingContext } = {}) =>
  context.defaultUrlBase;

/**
 * Gets the URL base for the specified route type.
 *
 * If a URL base wasn't configured for the specified route type, the default URL base will be returned.
 */
export const getUrlBaseForRouteType = (
  routeType: string,
  { context = globalDefaultApiRoutingContext }: { context?: ApiRoutingContext } = {}
) => context.urlBasesByRouteType[routeType] ?? context.defaultUrlBase;

/** Sets the default URL base that will be used in cases where no URL base has been specifically configured for a given route type */
export const setDefaultUrlBase = (urlBase: string, { context = globalDefaultApiRoutingContext }: { context?: ApiRoutingContext } = {}) => {
  context.defaultUrlBase = urlBase;
};

/** Configures the URL base for the specified route type. */
export const setUrlBaseForRouteType = (
  routeType: string,
  urlBase: string,
  { context = globalDefaultApiRoutingContext }: { context?: ApiRoutingContext } = {}
) => {
  context.urlBasesByRouteType[routeType] = urlBase;
};
