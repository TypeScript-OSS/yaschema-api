import type { AnyBody } from './AnyBody';
import type { AnyHeaders } from './AnyHeaders';
import type { AnyParams } from './AnyParams';
import type { AnyQuery } from './AnyQuery';
import type { AnyStatus } from './AnyStatus';
import type { Api } from './Api';
import type { HttpApiCredentialsSetting } from './HttpApiCredentialsSetting';
import type { HttpMethod } from './HttpMethod';
import type { HttpResponseType } from './HttpResponseType';

/** An HTTP API description */
export interface HttpApi<
  ReqHeadersT extends AnyHeaders,
  ReqParamsT extends AnyParams,
  ReqQueryT extends AnyQuery,
  ReqBodyT extends AnyBody,
  ResStatusT extends AnyStatus,
  ResHeadersT extends AnyHeaders,
  ResBodyT extends AnyBody,
  ErrResStatusT extends AnyStatus,
  ErrResHeadersT extends AnyHeaders,
  ErrResBodyT extends AnyBody
> extends Api<ReqHeadersT, ReqParamsT, ReqQueryT, ReqBodyT, ResStatusT, ResHeadersT, ResBodyT, ErrResStatusT, ErrResHeadersT, ErrResBodyT> {
  method: HttpMethod;
  /** The URL for accessing this API, which may be relative to a URL base configuring for the `routeType`.  Use `{…}` syntax to mark
   * parameters, as you might with Express. */
  url: string;

  /**
   * The type of response that will be generated.  Use `"dynamic"` if the response type will be determined dynamically.
   *
   * @defaultValue `"json"`
   */
  responseType?: HttpResponseType | 'dynamic';
  /**
   * Controls how browsers deal with credentials.
   *
   * @defaultValue `"omit"`
   */
  credentials?: HttpApiCredentialsSetting;
}
