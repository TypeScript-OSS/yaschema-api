import type { SingleOrArray } from 'yaschema';

import type { AnyStringSerializableType } from './AnyStringSerializableType';
import type { Api } from './Api';
import type { HttpApiCredentialsSetting } from './HttpApiCredentialsSetting';
import type { HttpMethod } from './HttpMethod';
import type { HttpResponseType } from './HttpResponseType';

/** An HTTP API description */
export interface HttpApi<
  ReqHeadersT extends Record<string, AnyStringSerializableType>,
  ReqParamsT extends Record<string, AnyStringSerializableType>,
  ReqQueryT extends Record<string, SingleOrArray<AnyStringSerializableType>>,
  ReqBodyT,
  ResStatusT extends number,
  ResHeadersT extends Record<string, AnyStringSerializableType>,
  ResBodyT,
  ErrResStatusT extends number,
  ErrResHeadersT extends Record<string, AnyStringSerializableType>,
  ErrResBodyT
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
