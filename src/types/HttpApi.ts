import type { AnyBody } from './AnyBody';
import type { AnyHeaders } from './AnyHeaders';
import type { AnyParams } from './AnyParams';
import type { AnyQuery } from './AnyQuery';
import type { AnyStatus } from './AnyStatus';
import type { Api } from './Api';
import type { CachePolicy } from './CachePolicy';
import type { HttpApiCredentialsSetting } from './HttpApiCredentialsSetting';
import type { HttpApiSchemas } from './HttpApiSchemas';
import type { HttpMethod } from './HttpMethod';
import type { HttpRequestType } from './HttpRequestType';
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
> extends Api {
  isYaschemaHttpApi: true;

  schemas: HttpApiSchemas<
    ReqHeadersT,
    ReqParamsT,
    ReqQueryT,
    ReqBodyT,
    ResStatusT,
    ResHeadersT,
    ResBodyT,
    ErrResStatusT,
    ErrResHeadersT,
    ErrResBodyT
  >;

  method: HttpMethod;
  /** The URL for accessing this API, which may be relative to a URL base configuring for the `routeType`.  Use `{…}` syntax to mark
   * parameters, as you might with Express. */
  url: string;

  /**
   * The type of request to make.
   *
   * ### form-data
   *
   * The responsibility for encoding requests is handled by separate packages, such as
   * [yaschema-api-fetcher](https://www.npmjs.com/package/yaschema-api-fetcher), but generally, for `"form-data"`, body fields will be
   * encoded similarly to how query fields are sent.  That is, one should generally use `setAllowedSerializationForms` on numbers and
   * booleans, since primitives are encoded as strings and arrays will be sent using the `[]` suffixed field names.  Unlike queries
   * however, form data supports Files.  [express-yaschema-api-handler](https://www.npmjs.com/package/express-yaschema-api-handler)
   * and [yaschema-api-fetcher](https://www.npmjs.com/package/yaschema-api-fetcher) also support JSON-encoded form data fields, which are
   * automatically prefixed with `yaschema/json:` (for encoding objects and nested arrays, for example).
   *
   * @defaultValue `"json"`
   */
  requestType?: HttpRequestType;
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

  /**
   * The statically known cache policy.  Use `"dynamic"` if the policy is determine dynamically.
   *
   * @defaultValue `{ canCache: false }`
   */
  cachePolicy?: CachePolicy | 'dynamic';
  /**
   * If `true`, it's safe to retry this API any time.
   *
   * @defaultValue `false`
   */
  isSafeToRetry?: boolean;
}
