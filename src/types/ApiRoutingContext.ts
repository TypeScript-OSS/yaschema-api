export interface ApiRoutingContext {
  urlBasesByRouteType: Record<string, string>;
  defaultUrlBase: string;
}

export const makeApiRoutingContext = (clone?: ApiRoutingContext): ApiRoutingContext => ({
  urlBasesByRouteType: { ...clone?.urlBasesByRouteType },
  defaultUrlBase: clone?.defaultUrlBase ?? ''
});
